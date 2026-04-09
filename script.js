* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: #0d0d0d;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  font-family: Arial, sans-serif;
}

.scene {
  position: relative;
  width: min(92vw, 430px);
  aspect-ratio: 9 / 16;
  border-radius: 28px;
  overflow: hidden;
  background: #000;
  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.45);
  transform-origin: center center;
}

.map-base,
.durres-final,
.hand-pin,
.car {
  position: absolute;
  user-select: none;
  -webkit-user-drag: none;
}

.map-base {
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
}

.emerge-mask {
  position: absolute;
  inset: 0;
  z-index: 2;
  overflow: hidden;
  clip-path: circle(0% at 50% 64%);
}

.durres-final {
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(1.08) translateY(70px);
}

.tear-ring {
  position: absolute;
  left: 50%;
  top: 64%;
  width: 305px;
  height: 235px;
  transform: translate(-50%, -50%) scale(0);
  z-index: 3;
  pointer-events: none;
  opacity: 0;
}

.tear-ring::before {
  content: "";
  position: absolute;
  inset: 0;
  background: #f7f5ef;
  clip-path: polygon(
    3% 17%, 10% 10%, 17% 13%, 26% 6%, 37% 10%, 49% 3%, 58% 9%, 69% 5%, 79% 12%, 90% 9%,
    96% 20%, 93% 31%, 98% 43%, 92% 57%, 97% 69%, 90% 80%, 82% 91%, 70% 87%, 59% 96%, 47% 90%,
    35% 96%, 23% 89%, 12% 93%, 6% 83%, 2% 69%, 7% 56%, 2% 43%, 8% 31%
  );
  box-shadow: 0 12px 22px rgba(0, 0, 0, 0.16);
}

.tear-ring::after {
  content: "";
  position: absolute;
  inset: 18px;
  background: transparent;
  border-radius: 50%;
  box-shadow: inset 0 0 0 999px transparent;
}

.hand-pin {
  width: 245px;
  right: -18px;
  top: -10px;
  z-index: 5;
  transform: translate(80px, -60px) rotate(0deg);
  filter: drop-shadow(0 14px 18px rgba(0, 0, 0, 0.22));
}

.car {
  z-index: 4;
  object-fit: contain;
  filter: drop-shadow(0 8px 12px rgba(0, 0, 0, 0.22));
  opacity: 0;
}

.car-1 {
  width: 92px;
  left: -10px;
  top: 472px;
  transform: rotate(-10deg);
}

.car-2 {
  width: 102px;
  right: -8px;
  top: 120px;
  transform: rotate(150deg);
}

.car-3 {
  width: 130px;
  left: 220px;
  top: 650px;
  transform: rotate(-15deg);
}
