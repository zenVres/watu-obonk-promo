import {
  Composition,
  AbsoluteFill,
  useCurrentFrame,
  useVideoConfig,
  spring,
} from "remotion";

const FPS = 30;
const DURATION_IN_FRAMES = 90;
const WIDTH = 1280;
const HEIGHT = 720;

const CREAM = "#f5ede0";
const SAND = "#efe4d2";
const MOSS = "#b7a48c";
const TERRA = "#b7a48c";

const fadeIn = (from = 0, to = 1, delay = 0, config = {}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  return spring({
    frame,
    fps,
    from,
    to,
    delay,
    config: { damping: 170, stiffness: 200, ...config },
  });
};

/**
 * Variasi 1 — WatuObonkIntro
 * Logo/brand card: bersih, sentral, fokus pada identitas.
 */
export const WatuObonkIntro = () => {
  return (
    <Composition
      id="WatuObonkIntro"
      component={WatuObonkFrame}
      durationInFrames={DURATION_IN_FRAMES}
      fps={FPS}
      width={WIDTH}
      height={HEIGHT}
    />
  );
};

const WatuObonkFrame = () => {
  const o = fadeIn(0, 1, 6, { stiffness: 210 });
  const s = fadeIn(0, 1, 24, { stiffness: 210 });
  const l = fadeIn(0, 1, 44, { stiffness: 210 });

  return (
    <AbsoluteFill
      style={{
        background: "radial-gradient(circle at 50% 42%, #4a321f, #1a0f07 62%, #0c0704)",
      }}
    >
      {/* warm base layer */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "#2a1a0a",
        }}
      />
      {/* subtle highlight */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: o,
          background:
            "radial-gradient(circle at 50% 42%, rgba(245, 237, 224, 0.10), transparent 70%)",
        }}
      />

      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
        }}
      >
        <div
          style={{
            color: CREAM,
            fontSize: 76,
            fontFamily: "Helvetica, Arial, sans-serif",
            lineHeight: 1.15,
            marginBottom: 18,
          }}
        >
          Watu Obonk
        </div>
        <div style={{ color: SAND, fontSize: 36, opacity: s }}>Coffee &amp; View</div>
        <div style={{ color: MOSS, fontSize: 28, marginTop: 28, opacity: l }}>
          Kudus / Muria, Jawa Tengah
        </div>
      </div>
    </AbsoluteFill>
  );
};

/**
 * Variasi 2 — WatuObonkScene
 * Scene-style (broadcast): judul lebih tegap, bar pendukung.
 */
export const WatuObonkScene = () => {
  return (
    <Composition
      id="WatuObonkScene"
      component={WatuObonkSceneFrame}
      durationInFrames={DURATION_IN_FRAMES}
      fps={FPS}
      width={WIDTH}
      height={HEIGHT}
    />
  );
};

const WatuObonkSceneFrame = () => {
  const o = fadeIn(0, 1, 8, { stiffness: 220 });
  const t = fadeIn(0, 1, 28, { stiffness: 220 });
  const s = fadeIn(0, 1, 44, { stiffness: 220 });
  const d = fadeIn(0, 1, 56, { stiffness: 220 });
  const b = fadeIn(0, 1, 68, { stiffness: 220 });

  return (
    <AbsoluteFill
      style={{
        background: "radial-gradient(circle at 50% 44%, #352414, #0f0a06 70%, #0a0603)",
      }}
    >
      {/* top accent bar */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 8,
          backgroundColor: MOSS,
          opacity: o,
        }}
      />
      {/* content */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
        }}
      >
        <div style={{ color: MOSS, fontSize: 64, fontFamily: "Helvetica, Arial, sans-serif", letterSpacing: 3, opacity: t }}>
          Watu Obonk
        </div>
        <div style={{ color: CREAM, fontSize: 72, opacity: s }}>Coffee</div>
        <div style={{ color: CREAM, fontSize: 72, opacity: b }}>&amp; View</div>
        <div style={{ height: 8, width: 460, margin: "24px auto", backgroundColor: TERRA, borderRadius: 4, opacity: d }} />
        <div style={{ color: SAND, fontSize: 26, marginTop: 24 }}>
          Kudus / Muria, Jawa Tengah
        </div>
      </div>
    </AbsoluteFill>
  );
};
