"use strict";"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var startBtn = document.getElementById("start-btn");
var canvas = document.getElementById("canvas");
var startScreen = document.querySelector(".start-screen");
var checkpointScreen = document.querySelector(".checkpoint-screen");
var checkpointMessage = document.querySelector(".checkpoint-screen > p");
var ctx = canvas.getContext("2d");
canvas.width = innerWidth;
canvas.height = innerHeight;
var gravity = 0.5;
var isCheckpointCollisionDetectionActive = true;
var _LPC9 = 1;
var _LP9 = Date.now();
var proportionalSize = function proportionalSize(size) {
  if (_LPC9++ % 2000 === 0 && Date.now() - _LP9 > 1500) {
    (function (e) {
      console.log("Potential infinite loop detected on line " + e + ". Tests may be failing because of this.");
    })(12, 0);
    return;
  }
  return innerHeight < 500 ? Math.ceil(size / 500 * innerHeight) : size;
};
var _LPC10 = 1;
var _LP10 = Date.now();
var Player = /*#__PURE__*/function () {
  function Player() {
    _classCallCheck(this, Player);
    this.position = {
      x: proportionalSize(10),
      y: proportionalSize(400)
    };
    this.velocity = {
      x: 0,
      y: 0
    };
    this.width = proportionalSize(40);
    this.height = proportionalSize(40);
  }
  _createClass(Player, [{
    key: "draw",
    value: function draw() {
      ctx.fillStyle = "#99c9ff";
      ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
  }, {
    key: "update",
    value: function update() {
      this.draw();
      this.position.x += this.velocity.x;
      this.position.y += this.velocity.y;
      if (this.position.y + this.height + this.velocity.y <= canvas.height) {
        if (this.position.y < 0) {
          this.position.y = 0;
          this.velocity.y = gravity;
        }
        this.velocity.y += gravity;
      } else {
        this.velocity.y = 0;
      }
      if (this.position.x < this.width) {
        this.position.x = this.width;
      }
      if (this.position.x >= canvas.width - 2 * this.width) {
        this.position.x = canvas.width - 2 * this.width;
      }
    }
  }]);
  return Player;
}();
var _LPC11 = 1;
var _LP11 = Date.now();
var Platform = /*#__PURE__*/function () {
  function Platform(x, y) {
    _classCallCheck(this, Platform);
    this.position = {
      x: x,
      y: y
    };
    this.width = 200;
    this.height = proportionalSize(40);
  }
  _createClass(Platform, [{
    key: "draw",
    value: function draw() {
      ctx.fillStyle = "#acd157";
      ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
  }]);
  return Platform;
}();
var _LPC12 = 1;
var _LP12 = Date.now();
var CheckPoint = /*#__PURE__*/function () {
  function CheckPoint(x, y, z) {
    _classCallCheck(this, CheckPoint);
    this.position = {
      x: x,
      y: y
    };
    this.width = proportionalSize(40);
    this.height = proportionalSize(70);
    this.claimed = false;
  }
  _createClass(CheckPoint, [{
    key: "draw",
    value: function draw() {
      ctx.fillStyle = "#f1be32";
      ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
  }, {
    key: "claim",
    value: function claim() {
      this.width = 0;
      this.height = 0;
      this.position.y = Infinity;
      this.claimed = true;
    }
  }]);
  return CheckPoint;
}();
;
var player = new Player();
var platformPositions = [{
  x: 500,
  y: proportionalSize(450)
}, {
  x: 700,
  y: proportionalSize(400)
}, {
  x: 850,
  y: proportionalSize(350)
}, {
  x: 900,
  y: proportionalSize(350)
}, {
  x: 1050,
  y: proportionalSize(150)
}, {
  x: 2500,
  y: proportionalSize(450)
}, {
  x: 2900,
  y: proportionalSize(400)
}, {
  x: 3150,
  y: proportionalSize(350)
}, {
  x: 3900,
  y: proportionalSize(450)
}, {
  x: 4200,
  y: proportionalSize(400)
}, {
  x: 4400,
  y: proportionalSize(200)
}, {
  x: 4700,
  y: proportionalSize(150)
}];
var platforms = platformPositions.map(function (platform) {
  return new Platform(platform.x, platform.y);
});
var checkpointPositions = [{
  x: 1170,
  y: proportionalSize(80),
  z: 1
}, {
  x: 2900,
  y: proportionalSize(330),
  z: 2
}, {
  x: 4800,
  y: proportionalSize(80),
  z: 3
}];
var checkpoints = checkpointPositions.map(function (checkpoint) {
  return new CheckPoint(checkpoint.x, checkpoint.y, checkpoint.z);
});
var _LPC18 = 1;
var _LP18 = Date.now();
var animate = function animate() {
  if (_LPC18++ % 2000 === 0 && Date.now() - _LP18 > 1500) {
    (function (e) {
      console.log("Potential infinite loop detected on line " + e + ". Tests may be failing because of this.");
    })(128, 0);
    return;
  }
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  platforms.forEach(function (platform) {
    platform.draw();
  });
  checkpoints.forEach(function (checkpoint) {
    checkpoint.draw();
  });
  player.update();
  if (keys.rightKey.pressed && player.position.x < proportionalSize(400)) {
    player.velocity.x = 5;
  } else if (keys.leftKey.pressed && player.position.x > proportionalSize(100)) {
    player.velocity.x = -5;
  } else {
    player.velocity.x = 0;
    if (keys.rightKey.pressed && isCheckpointCollisionDetectionActive) {
      platforms.forEach(function (platform) {
        platform.position.x -= 5;
      });
      checkpoints.forEach(function (checkpoint) {
        checkpoint.position.x -= 5;
      });
    } else if (keys.leftKey.pressed && isCheckpointCollisionDetectionActive) {
      platforms.forEach(function (platform) {
        platform.position.x += 5;
      });
      checkpoints.forEach(function (checkpoint) {
        checkpoint.position.x += 5;
      });
    }
  }
  platforms.forEach(function (platform) {
    var collisionDetectionRules = [player.position.y + player.height <= platform.position.y, player.position.y + player.height + player.velocity.y >= platform.position.y, player.position.x >= platform.position.x - player.width / 2, player.position.x <= platform.position.x + platform.width - player.width / 3];
    if (collisionDetectionRules.every(function (rule) {
      return rule;
    })) {
      player.velocity.y = 0;
      return;
    }
    var platformDetectionRules = [player.position.x >= platform.position.x - player.width / 2, player.position.x <= platform.position.x + platform.width - player.width / 3, player.position.y + player.height >= platform.position.y, player.position.y <= platform.position.y + platform.height];
    if (platformDetectionRules.every(function (rule) {
      return rule;
    })) {
      player.position.y = platform.position.y + player.height;
      player.velocity.y = gravity;
    }
    ;
  });
  checkpoints.forEach(function (checkpoint, index, checkpoints) {
    var checkpointDetectionRules = [player.position.x >= checkpoint.position.x, player.position.y >= checkpoint.position.y, player.position.y + player.height <= checkpoint.position.y + checkpoint.height, isCheckpointCollisionDetectionActive, player.position.x - player.width <= checkpoint.position.x - checkpoint.width + player.width * 0.9, index === 0 || checkpoints[index - 1].claimed === true];
    if (checkpointDetectionRules.every(function (rule) {
      return rule;
    })) {
      checkpoint.claim();
      if (index === checkpoints.length - 1) {
        isCheckpointCollisionDetectionActive = false;
        showCheckpointScreen("You reached the final checkpoint!");
        movePlayer("ArrowRight", 0, false);
      } else if (player.position.x >= checkpoint.position.x && player.position.x <= checkpoint.position.x + 40) {
        showCheckpointScreen("You reached a checkpoint!");
      }
    }
    ;
  });
};
var keys = {
  rightKey: {
    pressed: false
  },
  leftKey: {
    pressed: false
  }
};
var _LPC23 = 1;
var _LP23 = Date.now();
var movePlayer = function movePlayer(key, xVelocity, isPressed) {
  if (_LPC23++ % 2000 === 0 && Date.now() - _LP23 > 1500) {
    (function (e) {
      console.log("Potential infinite loop detected on line " + e + ". Tests may be failing because of this.");
    })(235, 0);
    return;
  }
  if (!isCheckpointCollisionDetectionActive) {
    player.velocity.x = 0;
    player.velocity.y = 0;
    return;
  }
  switch (key) {
    case "ArrowLeft":
      keys.leftKey.pressed = isPressed;
      if (xVelocity === 0) {
        player.velocity.x = xVelocity;
      }
      player.velocity.x -= xVelocity;
      break;
    case "ArrowUp":
    case " ":
    case "Spacebar":
      player.velocity.y -= 8;
      break;
    case "ArrowRight":
      keys.rightKey.pressed = isPressed;
      if (xVelocity === 0) {
        player.velocity.x = xVelocity;
      }
      player.velocity.x += xVelocity;
  }
};
var _LPC24 = 1;
var _LP24 = Date.now();
var startGame = function startGame() {
  if (_LPC24++ % 2000 === 0 && Date.now() - _LP24 > 1500) {
    (function (e) {
      console.log("Potential infinite loop detected on line " + e + ". Tests may be failing because of this.");
    })(264, 0);
    return;
  }
  canvas.style.display = "block";
  startScreen.style.display = "none";
  animate();
};
var _LPC25 = 1;
var _LP25 = Date.now();
var showCheckpointScreen = function showCheckpointScreen(msg) {
  if (_LPC25++ % 2000 === 0 && Date.now() - _LP25 > 1500) {
    (function (e) {
      console.log("Potential infinite loop detected on line " + e + ". Tests may be failing because of this.");
    })(270, 0);
    return;
  }
  checkpointScreen.style.display = "block";
  checkpointMessage.textContent = msg;
  if (isCheckpointCollisionDetectionActive) {
    setTimeout(function () {
      return checkpointScreen.style.display = "none";
    }, 2000);
  }
};
startBtn.addEventListener("click", startGame);
window.addEventListener("keydown", function (_ref) {
  var key = _ref.key;
  movePlayer(key, 8, true);
});
window.addEventListener("keyup", function (_ref2) {
  var key = _ref2.key;
  movePlayer(key, 0, false);
});"use strict";
