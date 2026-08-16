import "./index.css";
import { Composition } from "remotion";
import {
  BrollTemplate,
  brollTemplateSchema,
  defaultBrollTemplateProps,
} from "./BrollTemplate";
import {
  BrollLogoSubject,
  brollLogoSubjectSchema,
  defaultBrollLogoSubjectProps,
} from "./BrollLogoSubject";
import {
  BrollBenchmarkBars,
  brollBenchmarkBarsSchema,
  defaultBrollBenchmarkBarsProps,
} from "./BrollBenchmarkBars";
import {
  BrollPaperArrowDemo,
  brollPaperArrowDemoSchema,
  defaultBrollPaperArrowDemoProps,
} from "./BrollPaperArrowDemo";
import {
  BrollKidneyCost,
  brollKidneyCostSchema,
  defaultBrollKidneyCostProps,
} from "./BrollKidneyCost";
import {
  BrollHeadToHeadTasks,
  brollHeadToHeadTasksSchema,
  defaultBrollHeadToHeadTasksProps,
} from "./BrollHeadToHeadTasks";
import {
  BrollGpt55ImprovementCurve,
  brollGpt55ImprovementCurveSchema,
  defaultBrollGpt55ImprovementCurveProps,
} from "./BrollGpt55ImprovementCurve";
import {
  BrollMinecraftBrowserClone,
  brollMinecraftBrowserCloneSchema,
  defaultBrollMinecraftBrowserCloneProps,
} from "./BrollMinecraftBrowserClone";
import {
  BrollFableVsGpt55Robots,
  brollFableVsGpt55RobotsSchema,
  defaultBrollFableVsGpt55RobotsProps,
} from "./BrollFableVsGpt55Robots";
import {
  BrollJobLossModelWave,
  brollJobLossModelWaveSchema,
  defaultBrollJobLossModelWaveProps,
} from "./BrollJobLossModelWave";
import {
  BrollUsageLimitWarning,
  brollUsageLimitWarningSchema,
  defaultBrollUsageLimitWarningProps,
} from "./BrollUsageLimitWarning";
import {
  BROLL_OCEAN_TANKER_DURATION,
  BrollOceanTankerScene,
  brollOceanTankerSceneSchema,
} from "./BrollOceanTankerScene";
import {
  BROLL_PEACE_DEAL_SCENE_DURATION,
  BrollPeaceDealScene,
  brollPeaceDealSceneSchema,
} from "./BrollPeaceDealScene";
import {
  BROLL_INFLATION_DEBT_SCENE_DURATION,
  BrollInflationDebtScene,
  brollInflationDebtSceneSchema,
} from "./BrollInflationDebtScene";
import {
  BROLL_DEBT_TRANSITION_NEXT_SCENE_DURATION,
  BrollDebtTransitionNextScene,
  brollDebtTransitionNextSceneSchema,
} from "./BrollDebtTransitionNextScene";
import {
  BrollV2GreenPaperScene,
  brollV2GreenPaperSceneSchema,
} from "./BrollV2GreenPaperScene";
import {
  BrollV2JobLossScene,
  brollV2JobLossSceneSchema,
} from "./BrollV2JobLossScene";
import {
  BrollV2SchoolProjectScene,
  brollV2SchoolProjectSceneSchema,
} from "./BrollV2SchoolProjectScene";
import {
  defaultThumbnailClaude5Props,
  ThumbnailClaude5,
  thumbnailClaude5Schema,
} from "./ThumbnailClaude5";
import {
  BROLL_DOWNFALL_BEGIN_SCENE_DURATION,
  BrollDownfallBeginScene,
  brollDownfallBeginSceneSchema,
} from "./BrollDownfallBeginScene";
import {
  BROLL_DEBT_VS_ECONOMY_SCENE_DURATION,
  BrollDebtVsEconomyScene,
  brollDebtVsEconomySceneSchema,
} from "./BrollDebtVsEconomyScene";
import {
  BROLL_DOLLAR_DECLINE_SCENE_DURATION,
  BrollDollarDeclineScene,
  brollDollarDeclineSceneSchema,
} from "./BrollDollarDeclineScene";
import {
  BROLL_EMPIRE_BILL_SCENE_DURATION,
  BrollEmpireBillScene,
  brollEmpireBillSceneSchema,
} from "./BrollEmpireBillScene";
import {
  EMPIRE_DOWNFALL_SEQUENCE_DURATION,
  EmpireDownfallSequence,
  empireDownfallSequenceSchema,
} from "./EmpireDownfallSequence";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="BrollTemplate"
        component={BrollTemplate}
        durationInFrames={150}
        fps={30}
        width={1920}
        height={1080}
        schema={brollTemplateSchema}
        defaultProps={defaultBrollTemplateProps}
      />
      <Composition
        id="BrollLogoSubject"
        component={BrollLogoSubject}
        durationInFrames={150}
        fps={30}
        width={1920}
        height={1080}
        schema={brollLogoSubjectSchema}
        defaultProps={defaultBrollLogoSubjectProps}
      />
      <Composition
        id="BrollBenchmarkBars"
        component={BrollBenchmarkBars}
        durationInFrames={210}
        fps={30}
        width={1920}
        height={1080}
        schema={brollBenchmarkBarsSchema}
        defaultProps={defaultBrollBenchmarkBarsProps}
      />
      <Composition
        id="BrollPaperArrowDemo"
        component={BrollPaperArrowDemo}
        durationInFrames={150}
        fps={30}
        width={1920}
        height={1080}
        schema={brollPaperArrowDemoSchema}
        defaultProps={defaultBrollPaperArrowDemoProps}
      />
      <Composition
        id="BrollKidneyCost"
        component={BrollKidneyCost}
        durationInFrames={180}
        fps={30}
        width={1920}
        height={1080}
        schema={brollKidneyCostSchema}
        defaultProps={defaultBrollKidneyCostProps}
      />
      <Composition
        id="BrollHeadToHeadTasks"
        component={BrollHeadToHeadTasks}
        durationInFrames={180}
        fps={30}
        width={1920}
        height={1080}
        schema={brollHeadToHeadTasksSchema}
        defaultProps={defaultBrollHeadToHeadTasksProps}
      />
      <Composition
        id="BrollGpt55ImprovementCurve"
        component={BrollGpt55ImprovementCurve}
        durationInFrames={165}
        fps={30}
        width={1920}
        height={1080}
        schema={brollGpt55ImprovementCurveSchema}
        defaultProps={defaultBrollGpt55ImprovementCurveProps}
      />
      <Composition
        id="BrollMinecraftBrowserClone"
        component={BrollMinecraftBrowserClone}
        durationInFrames={240}
        fps={30}
        width={1920}
        height={1080}
        schema={brollMinecraftBrowserCloneSchema}
        defaultProps={defaultBrollMinecraftBrowserCloneProps}
      />
      <Composition
        id="BrollFableVsGpt55Robots"
        component={BrollFableVsGpt55Robots}
        durationInFrames={180}
        fps={30}
        width={1920}
        height={1080}
        schema={brollFableVsGpt55RobotsSchema}
        defaultProps={defaultBrollFableVsGpt55RobotsProps}
      />
      <Composition
        id="BrollJobLossModelWave"
        component={BrollJobLossModelWave}
        durationInFrames={180}
        fps={30}
        width={1920}
        height={1080}
        schema={brollJobLossModelWaveSchema}
        defaultProps={defaultBrollJobLossModelWaveProps}
      />
      <Composition
        id="BrollUsageLimitWarning"
        component={BrollUsageLimitWarning}
        durationInFrames={120}
        fps={30}
        width={1920}
        height={1080}
        schema={brollUsageLimitWarningSchema}
        defaultProps={defaultBrollUsageLimitWarningProps}
      />
      <Composition
        id="BrollOceanTankerScene"
        component={BrollOceanTankerScene}
        durationInFrames={BROLL_OCEAN_TANKER_DURATION}
        fps={30}
        width={1920}
        height={1080}
        schema={brollOceanTankerSceneSchema}
        defaultProps={{
          backgroundAsset: "broll-ocean-tanker/mo-photoshop-background.png",
          shipAsset: "broll-ocean-tanker/tanker-ship.png",
          oceanAsset: "broll-ocean-tanker/keyed-ocean.webm",
          shipX: 0,
          shipY: -181,
          shipScale: 1,
          shipWidth: 1420,
          shipTravelStartX: -240,
          shipTravelEndX: 85,
          shipAcceleration: 1,
          shipDrift: 32,
          shipBob: 10,
          shipOpacity: 0.96,
          shipSaturation: 0.2,
          shipContrast: 1.04,
          oceanX: 0,
          oceanY: 325,
          oceanScale: 1.18,
          oceanOpacity: 0.96,
          oceanSaturation: 0.62,
          drift: 1,
          bob: 1,
          foregroundOcclusionHeight: 210,
          counterStartFrame: 150,
          counterEndValue: 116,
          counterDurationFrames: 60,
          counterX: 1479,
          counterY: 322,
          counterScale: 1,
          showBarrel: true,
          barrelAsset: "broll-ocean-tanker/oil-barrel.png",
          barrelHeight: 140,
          barrelGap: 28,
          barrelOffsetY: 0,
          outroStartFrame: 240,
          outroEndFrame: 270,
          counterRetractX: 2290,
          shipOutroY: 820,
          oceanOutroY: 850,
        }}
      />
      <Composition
        id="BrollPeaceDealScene"
        component={BrollPeaceDealScene}
        durationInFrames={BROLL_PEACE_DEAL_SCENE_DURATION}
        fps={30}
        width={1920}
        height={1080}
        schema={brollPeaceDealSceneSchema}
        defaultProps={{
          backgroundAsset: "broll-ocean-tanker/mo-photoshop-background.png",
          trumpAsset: "broll-peace-deal/trump-halftone.png",
          khameneiAsset: "broll-peace-deal/iran-halftone.png",
          whiteHouseAsset: "broll-peace-deal/white-house-foreground.png",
          whiteHouseX: 0,
          whiteHouseY: -469,
          whiteHouseScale: 2,
          whiteHouseStartFrame: 15,
          whiteHouseEndFrame: 55,
          trumpX: -430,
          trumpY: 30,
          trumpScale: 1,
          trumpStartFrame: 45,
          trumpEndFrame: 85,
          khameneiX: 430,
          khameneiY: 30,
          khameneiScale: 1,
          khameneiStartFrame: 80,
          khameneiEndFrame: 120,
          portraitStrokeColor: "#E04329",
          portraitStrokeOpacity: 0.95,
          trumpStrokeX: -28,
          trumpStrokeY: 10,
          khameneiStrokeX: 28,
          khameneiStrokeY: 10,
        }}
      />
      <Composition
        id="BrollInflationDebtScene"
        component={BrollInflationDebtScene}
        durationInFrames={BROLL_INFLATION_DEBT_SCENE_DURATION}
        fps={30}
        width={1920}
        height={1080}
        schema={brollInflationDebtSceneSchema}
        defaultProps={{
          backgroundAsset: "broll-ocean-tanker/mo-photoshop-background.png",
          mapAsset: "broll-inflation-debt/us-map.png",
          graphX: 0,
          graphY: -14,
          graphScale: 1,
          graphFinalX: -438,
          graphFinalY: -12,
          graphFinalScale: 0.74,
          mapX: 478,
          mapY: 63,
          mapScale: 1,
          debtAmountText: "$39 TRILLION",
          debtTextX: 503,
          debtTextY: -170,
          debtTextScale: 1,
          closerStartFrame: 270,
          closerEndFrame: 300,
          chartExitX: -1550,
          chartExitY: -12,
          chartExitScale: 0.74,
          mapCloserX: 0,
          mapCloserY: -151,
          mapCloserScale: 1.04,
          debtTextCloserX: 25,
          debtTextCloserY: -380,
          debtTextCloserScale: 1.08,
          blueLineColor: "#E8741E ",
          greyLineColor: "#888C91",
          darkTextColor: "#1A1A1A",
          orangeAccentColor: "#E85D24",
          graphStartFrame: 0,
          graphRiseEndFrame: 30,
          graphDrawEndFrame: 150,
          graphMoveStartFrame: 150,
          graphMoveEndFrame: 185,
          mapStartFrame: 165,
          mapEndFrame: 210,
          debtStartFrame: 190,
          debtEndFrame: 240,
        }}
      />
      <Composition
        id="BrollDebtTransitionNextScene"
        component={BrollDebtTransitionNextScene}
        durationInFrames={BROLL_DEBT_TRANSITION_NEXT_SCENE_DURATION}
        fps={30}
        width={1920}
        height={1080}
        schema={brollDebtTransitionNextSceneSchema}
        defaultProps={{
          backgroundAsset: "broll-ocean-tanker/mo-photoshop-background.png",
          mapAsset: "broll-inflation-debt/us-map.png",
          debtAmountText: "$39 TRILLION",
          interestLabelText: "Interest: $1 trillion",
          workGearAsset: "broll-debt-transition-next/work-gear.png",
          usWorkerAsset: "broll-debt-transition-next/us-worker.png",
          tankAsset: "broll-debt-transition-next/tank.png",
          usSoldierAsset: "broll-debt-transition-next/us-soldier-2.png",
          mapX: 0,
          mapY: -151,
          mapScale: 1.04,
          mapWidth: 780,
          mapHeight: 520,
          debtTextX: 25,
          debtTextY: -392,
          debtTextScale: 1.08,
          interestLabelX: 25,
          interestLabelY: 54,
          interestLabelScale: 1.4,
          interestLabelStartFrame: 82,
          interestLabelEndFrame: 106,
          interestLabelFontSize: 38,
          leftGroupX: -455,
          rightGroupX: 455,
          workGearX: -52,
          workGearY: 653,
          workGearScale: 1.3,
          workerX: -75,
          workerY: 344,
          workerScale: 1.3,
          tankX: 42,
          tankY: 694,
          tankScale: 1,
          soldierX: 188,
          soldierY: 445,
          soldierScale: 1.7,
          workGearStartFrame: 45,
          workGearEndFrame: 85,
          workerStartFrame: 68,
          workerEndFrame: 108,
          tankStartFrame: 160,
          tankEndFrame: 200,
          soldierStartFrame: 188,
          soldierEndFrame: 228,
          darkTextColor: "#1A1A1A",
          mapShadowColor: "rgba(71, 50, 28, 0.26)",
          cutoutShadowColor: "rgba(71, 50, 28, 0.3)",
          strokeColor: "#E04329",
          strokeOpacity: 0.86,
          workerStrokeX: -24,
          workerStrokeY: 10,
          soldierStrokeX: 24,
          soldierStrokeY: 10,
        }}
      />
      <Composition
        id="BrollV2GreenPaperScene"
        component={BrollV2GreenPaperScene}
        durationInFrames={165}
        fps={30}
        width={1920}
        height={1080}
        schema={brollV2GreenPaperSceneSchema}
        defaultProps={{
          backgroundAsset: "broll-v2-green-paper/background-green-checker.png",
          characterAsset:
            "broll-v2-green-paper/midground-halftone-character.png",
          foregroundAsset:
            "broll-v2-green-paper/foreground-building-structures.png",
          circleX: 990,
          circleY: 455,
          circleSize: 790,
          circleColor: "#F5C518",
          characterX: 0,
          characterY: 16,
          characterScale: 0.5,
          foregroundX: 0,
          foregroundY: -345,
          foregroundScale: 0.8,
        }}
      />
      <Composition
        id="BrollV2JobLossScene"
        component={BrollV2JobLossScene}
        durationInFrames={165}
        fps={30}
        width={1920}
        height={1080}
        schema={brollV2JobLossSceneSchema}
        defaultProps={{
          backgroundAsset: "broll-v2-green-paper/background-green-checker.png",
          subjectAsset: "broll-v2-job-loss/subject-job-loss-clean.png",
          foregroundAsset: "broll-v2-job-loss/foreground-2-clean.png",
          circleX: 1000,
          circleY: 455,
          circleSize: 780,
          circleColor: "#F5C518",
          text: "HOW MANY MORE PEOPLE WILL LOSE THEIR JOBS TO AI?",
          textX: 110,
          textY: 217,
          textSize: 77,
          textColor: "#F5F0E6",
          textStartFrame: 90,
          subjectX: 80,
          subjectY: -179,
          subjectScale: 0.6,
          subjectStrokeThickness: 7,
          subjectStrokeX: -48,
          subjectStrokeY: 0,
          subjectRiseDurationFrames: 64,
          foregroundX: 0,
          foregroundY: -111,
          foregroundScale: 0.8,
          foregroundStrokeThickness: 9,
          foregroundStrokeX: 34,
          foregroundStrokeY: -34,
        }}
      />
      <Composition
        id="BrollV2SchoolProjectScene"
        component={BrollV2SchoolProjectScene}
        durationInFrames={165}
        fps={30}
        width={1920}
        height={1080}
        schema={brollV2SchoolProjectSceneSchema}
        defaultProps={{
          backgroundAsset: "broll-v2-green-paper/background-green-checker.png",
          subjectAsset: "broll-v2-school-project/subject-school-boy.png",
          foregroundAsset:
            "broll-v2-school-project/foreground-project-table.png",
          circleX: 1110,
          circleY: 470,
          circleSize: 760,
          circleColor: "#F5C518",
          text: "HIGH SCHOOL PROJECT",
          textX: 1489,
          textY: 505,
          textSize: 60,
          textColor: "#F5F0E6",
          textStartFrame: 90,
          subjectX: 346,
          subjectY: -270,
          subjectScale: 0.58,
          subjectStrokeThickness: 8,
          subjectStrokeX: 0,
          subjectStrokeY: 0,
          subjectRiseDurationFrames: 64,
          foregroundX: -387,
          foregroundY: -516,
          foregroundScale: 0.78,
          foregroundStrokeThickness: 10,
          foregroundStrokeX: 34,
          foregroundStrokeY: -34,
        }}
      />
      <Composition
        id="ThumbnailClaude5"
        component={ThumbnailClaude5}
        durationInFrames={120}
        fps={30}
        width={1280}
        height={720}
        schema={thumbnailClaude5Schema}
        defaultProps={defaultThumbnailClaude5Props}
      />
      <Composition
        id="BrollDownfallBeginScene"
        component={BrollDownfallBeginScene}
        durationInFrames={BROLL_DOWNFALL_BEGIN_SCENE_DURATION}
        fps={30}
        width={1920}
        height={1080}
        schema={brollDownfallBeginSceneSchema}
        defaultProps={{
          backgroundAsset: "broll-ocean-tanker/mo-photoshop-background.png",
          mastheadText: "The Nation",
          estText: "EST. 1865",
          sectionText: "POLITICS",
          siteText: "THENATION.COM",
          dateText: "APRIL 8, 2026",
          headlineBefore: "The United States Is Self-Destructing Amid ",
          highlightPhrase: "Empire Collapse",
          headlineAfter: "",
          deckText:
            "Dangerously wrong priorities will accelerate America's decline.",
          bylineText: "By Julia Gledhill",
          ledeText:
            "The Trump administration's fiscal year 2027 budget request is a bat signal to Congress. The American empire is flailing, and the White House is working to ensure that the country declines with it. If there was ever a time for lawmakers to discipline the Pentagon, it is now.",
          highlightColor: "#F5C518",
        }}
      />
      <Composition
        id="BrollDebtVsEconomyScene"
        component={BrollDebtVsEconomyScene}
        durationInFrames={BROLL_DEBT_VS_ECONOMY_SCENE_DURATION}
        fps={30}
        width={1920}
        height={1080}
        schema={brollDebtVsEconomySceneSchema}
        defaultProps={{
          backgroundAsset: "broll-ocean-tanker/mo-photoshop-background.png",
          gdpValue: 29,
          debtValue: 39,
          gdpLabel: "THE ECONOMY",
          debtLabel: "NATIONAL DEBT",
          ratioText: "134% OF GDP",
          greyColor: "#8A8E93",
          accentColor: "#E04329",
          darkTextColor: "#1A1A1A",
        }}
      />
      <Composition
        id="BrollDollarDeclineScene"
        component={BrollDollarDeclineScene}
        durationInFrames={BROLL_DOLLAR_DECLINE_SCENE_DURATION}
        fps={30}
        width={1920}
        height={1080}
        schema={brollDollarDeclineSceneSchema}
        defaultProps={{
          backgroundAsset: "broll-ocean-tanker/mo-photoshop-background.png",
          peopleAsset: "broll-dollar-yuan/putin-xi.png",
          peopleX: 0,
          peopleY: -60,
          peopleWidth: 1378,
          peopleStartFrame: 30,
          peopleRisePx: 410,
          peopleRiseDurationFrames: 42,
          strokeColor: "#E04329",
          strokeOpacity: 0.95,
          peopleStrokeX: -26,
          peopleStrokeY: 8,
          buildingAsset: "broll-dollar-yuan/china-building.png",
          buildingX: -51,
          buildingWidth: 1871,
          buildingBottom: -212,
          buildingStartFrame: 6,
          buildingRisePx: 360,
          buildingRiseDurationFrames: 40,
          bubbleAccentColor: "#E04329",
          bubbleTextColor: "#1A1A1A",
          bubbleFontSize: 45,
          xiBubbleAsset: "broll-dollar-yuan/bubble-round.png",
          xiTextPrefix: "Let's trade in",
          xiTextAccent: "Yuan ¥",
          xiBubbleX: 617,
          xiBubbleY: 133,
          xiBubbleWidth: 257,
          xiBubbleFlipX: false,
          xiBubbleTilt: -17,
          xiBubbleStartFrame: 82,
          xiTextTopPct: 18,
          xiTextHeightPct: 48,
          xiTextWidthPct: 72,
          putinBubbleAsset: "broll-dollar-yuan/bubble-rect.png",
          putinTextPrefix: "Ok,",
          putinTextAccent: "deal!",
          putinBubbleX: 1440,
          putinBubbleY: 207,
          putinBubbleWidth: 318,
          putinBubbleFlipX: false,
          putinBubbleTilt: -17,
          putinBubbleStartFrame: 112,
          putinTextTopPct: 24,
          putinTextHeightPct: 55,
          putinTextWidthPct: 80,
        }}
      />
      <Composition
        id="BrollEmpireBillScene"
        component={BrollEmpireBillScene}
        durationInFrames={BROLL_EMPIRE_BILL_SCENE_DURATION}
        fps={30}
        width={1920}
        height={1080}
        schema={brollEmpireBillSceneSchema}
        defaultProps={{
          backgroundAsset: "broll-ocean-tanker/mo-photoshop-background.png",
          line1: "EMPIRES DON'T END WITH A WAR.",
          line2: "THEY END WITH A BILL THEY CAN NO LONGER PAY.",
          textColor: "#1A1A1A",
          accentColor: "#E04329",
          accentLine2: false,
          fontSize: 60,
          containerWidth: 1619,
          startFrame: 10,
          perCharFrames: 2,
          periodPauseFrames: 18,
          commaPauseFrames: 8,
          gapFrames: 22,
          cursorChar: "▌",
          cursorBlinkFrames: 7,
          vignetteStartFrame: 200,
          vignetteEndFrame: 240,
          vignetteIntensity: 0.34,
          moneyAsset: "broll-empire-bill/burning-bill.webm",
          moneyX: 0,
          moneyY: 415,
          moneyScale: 0.6,
          moneyOpacity: 1,
          moneyStartFrame: 0,
          moneyFadeFrames: 22,
        }}
      />
      <Composition
        id="EmpireDownfallSequence"
        component={EmpireDownfallSequence}
        durationInFrames={EMPIRE_DOWNFALL_SEQUENCE_DURATION}
        fps={30}
        width={1920}
        height={1080}
        schema={empireDownfallSequenceSchema}
        defaultProps={{}}
      />
    </>
  );
};
