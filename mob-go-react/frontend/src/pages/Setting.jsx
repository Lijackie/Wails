import { useRecoilState } from "recoil";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import {
  idAtom,
  aegisNameAtom,
  nameAtom,
  japaneseNameAtom,
  levelAtom,
  hpAtom,
  spAtom,
  baseExpAtom,
  jobExpAtom,
  mvpExpAtom,
  attackAtom,
  attack2Atom,
  defenseAtom,
  magicDefenseAtom,
  resistanceAtom,
  magicResistanceAtom,
  strAtom,
  agiAtom,
  vitAtom,
  intAtom,
  dexAtom,
  lukAtom,
  attackRangeAtom,
  skillRangeAtom,
  chaseRangeAtom,
  sizeAtom,
  raceAtom,
  raceGroupsAtom,
  elementAtom,
  elementLevelAtom,
  walkSpeedAtom,
  attackDelayAtom,
  attackMotionAtom,
  damageMotionAtom,
  damageTakenAtom,
  aiAtom,
  mobClassAtom,
  modesAtom,
} from "../atoms";
import Size from "../components/Size";
import Race from "../components/Race";
import RaceGroups from "../components/RaceGroups";
import Elemtnet from "../components/Element";
import ElementLevel from "../components/ElementLevel";
import Ai from "../components/Ai";
import MobClass from "../components/MobClass";
import Modes from "../components/Modes";

const Setting = () => {
  const [id, setID] = useRecoilState(idAtom);
  const [aegisName, setAegisName] = useRecoilState(aegisNameAtom);
  const [name, setName] = useRecoilState(nameAtom);
  const [japaneseName, setJapaneseName] = useRecoilState(japaneseNameAtom);
  const [level, setLevel] = useRecoilState(levelAtom);
  const [hp, setHp] = useRecoilState(hpAtom);
  const [sp, setSp] = useRecoilState(spAtom);
  const [baseExp, setBaseExp] = useRecoilState(baseExpAtom);
  const [jobExp, setJobExp] = useRecoilState(jobExpAtom);
  const [mvpExp, setMvpExp] = useRecoilState(mvpExpAtom);
  const [attack, setAttack] = useRecoilState(attackAtom);
  const [attack2, setAttack2] = useRecoilState(attack2Atom);
  const [defense, setDefense] = useRecoilState(defenseAtom);
  const [magicDefense, setMagicDefense] = useRecoilState(magicDefenseAtom);
  const [resistance, setResistance] = useRecoilState(resistanceAtom);
  const [magicResistance, setMagicResistance] =
    useRecoilState(magicResistanceAtom);
  const [str, setStr] = useRecoilState(strAtom);
  const [agi, setAgi] = useRecoilState(agiAtom);
  const [vit, setVit] = useRecoilState(vitAtom);
  const [int, setInt] = useRecoilState(intAtom);
  const [dex, setDex] = useRecoilState(dexAtom);
  const [luk, setLuk] = useRecoilState(lukAtom);
  const [attackRange, setAttackRange] = useRecoilState(attackRangeAtom);
  const [skillRange, setSkillRange] = useRecoilState(skillRangeAtom);
  const [chaseRange, setChaseRange] = useRecoilState(chaseRangeAtom);
  //const [size, setSize] = useRecoilState(sizeAtom);
  //const [race, setRace] = useRecoilState(raceAtom);
  //const [raceGrops, setRaceGroups] = useRecoilState(raceGroupsAtom);
  //const [element, setElement] = useRecoilState(elementAtom);
  //const [elementLevel, setElementLevel] = useRecoilState(elementLevelAtom);
  const [walkSpeed, setWalkSpeed] = useRecoilState(walkSpeedAtom);
  const [attackDelay, setAttackDelay] = useRecoilState(attackDelayAtom);
  const [attackMotion, setAttackMotion] = useRecoilState(attackMotionAtom);
  const [damageMotion, setDamageMotion] = useRecoilState(damageMotionAtom);
  const [damageTaken, setDamageTaken] = useRecoilState(damageTakenAtom);
  //const [ai, setAi] = useRecoilState(aiAtom);
  //const [mobClass, setMobClass] = useRecoilState(mobClassAtom);
  //const [modes, setModes] = useRecoilState(modesAtom);

  return (
    <Grid container spacing={1}>
      <Grid item sm={4}>
        <TextField
          label="Id"
          value={id}
          required
          onChange={(event) => setID(event.target.value)}
        />
      </Grid>
      <Grid item sm={4}>
        <TextField
          label="AegisName"
          value={aegisName}
          required
          onChange={(event) => setAegisName(event.target.value)}
        />
      </Grid>
      <Grid item sm={4}>
        <TextField
          label="Name"
          value={name}
          required
          onChange={(event) => setName(event.target.value)}
        />
      </Grid>
      <Grid item sm={4}>
        <TextField
          label="JapaneseName"
          value={japaneseName}
          onChange={(event) => setJapaneseName(event.target.value)}
        />
      </Grid>
      <Grid item sm={4}>
        <TextField
          label="Level"
          value={level}
          onChange={(event) => setLevel(event.target.value)}
        />
      </Grid>
      <Grid item sm={4}>
        <TextField label="Hp" value={hp} onChange={(event) => setHp(event.target.value)} />
      </Grid>
      <Grid item sm={4}>
        <TextField label="Sp" value={sp} onChange={(event) => setSp(event.target.value)} />
      </Grid>
      <Grid item sm={4}>
        <TextField
          label="BaseExp"
          value={baseExp}
          onChange={(event) => setBaseExp(event.target.value)}
        />
      </Grid>
      <Grid item sm={4}>
        <TextField
          label="JobExp"
          value={jobExp}
          onChange={(event) => setJobExp(event.target.value)}
        />
      </Grid>
      <Grid item sm={4}>
        <TextField
          label="MvpExp"
          value={mvpExp}
          onChange={(event) => setMvpExp(event.target.value)}
        />
      </Grid>

      <Grid item sm={4}>
        <TextField
          label="Attack"
          value={attack}
          onChange={(event) => setAttack(event.target.value)}
        />
      </Grid>
      <Grid item sm={4}>
        <TextField
          label="Attack2"
          value={attack2}
          onChange={(event) => setAttack2(event.target.value)}
        />
      </Grid>
      <Grid item sm={4}>
        <TextField
          label="Defense"
          value={defense}
          onChange={(event) => setDefense(event.target.value)}
        />
      </Grid>
      <Grid item sm={4}>
        <TextField
          label="MagicDefense"
          value={magicDefense}
          onChange={(event) => setMagicDefense(event.target.value)}
        />
      </Grid>
      <Grid item sm={4}>
        <TextField
          label="Resistance"
          value={resistance}
          onChange={(event) => setResistance(event.target.value)}
        />
      </Grid>
      <Grid item sm={4}>
        <TextField
          label="MagicResistance"
          value={magicResistance}
          onChange={(event) => setMagicResistance(event.target.value)}
        />
      </Grid>

      <Grid item sm={4}>
        <TextField
          label="Str"
          value={str}
          onChange={(event) => setStr(event.target.value)}
        />
      </Grid>
      <Grid item sm={4}>
        <TextField
          label="Agi"
          value={agi}
          onChange={(event) => setAgi(event.target.value)}
        />
      </Grid>
      <Grid item sm={4}>
        <TextField
          label="Vit"
          value={vit}
          onChange={(event) => setVit(event.target.value)}
        />
      </Grid>
      <Grid item sm={4}>
        <TextField
          label="Int"
          value={int}
          onChange={(event) => setInt(event.target.value)}
        />
      </Grid>
      <Grid item sm={4}>
        <TextField
          label="Dex"
          value={dex}
          onChange={(event) => setDex(event.target.value)}
        />
      </Grid>
      <Grid item sm={4}>
        <TextField
          label="Luk"
          value={luk}
          onChange={(event) => setLuk(event.target.value)}
        />
      </Grid>
      <Grid item sm={4}>
        <TextField
          label="AttackRange"
          value={attackRange}
          onChange={(event) => setAttackRange(event.target.value)}
        />
      </Grid>
      <Grid item sm={4}>
        <TextField
          label="SkillRange"
          value={skillRange}
          onChange={(event) => setSkillRange(event.target.value)}
        />
      </Grid>

      <Grid item sm={4}>
        <TextField
          label="ChaseRange"
          value={chaseRange}
          onChange={(event) => setChaseRange(event.target.value)}
        />
      </Grid>
      <Grid item sm={4}>
        <Size />
      </Grid>
      <Grid item sm={4}>
        <Race />
      </Grid>
      <Grid item sm={4}>
        <RaceGroups />
      </Grid>
      <Grid item sm={4}>
        <Elemtnet />
      </Grid>
      <Grid item sm={4}>
        <ElementLevel />
      </Grid>
      <Grid item sm={4}>
        <TextField
          label="WalkSpeed (20~1000)"
          value={walkSpeed}
          onChange={(event) => setWalkSpeed(event.target.value)}
        />
      </Grid>
      <Grid item sm={4}>
        <TextField
          label="AttackDelay"
          value={attackDelay}
          onChange={(event) => setAttackDelay(event.target.value)}
        />
      </Grid>
      <Grid item sm={4}>
        <TextField
          label="AttackMotion"
          value={attackMotion}
          onChange={(event) => setAttackMotion(event.target.value)}
        />
      </Grid>
      <Grid item sm={4}>
        <TextField
          label="DamageMotion"
          value={damageMotion}
          onChange={(event) => setDamageMotion(event.target.value)}
        />
      </Grid>
      <Grid item sm={4}>
        <TextField
          label="DamageTaken"
          value={damageTaken}
          onChange={(event) => setDamageTaken(event.target.value)}
        />
      </Grid>
      <Grid item sm={4}>
        <Ai />
      </Grid>
      <Grid item sm={4}>
        <MobClass />
      </Grid>
      <Grid item sm={4}>
        <Modes />
      </Grid>
    </Grid>
  );
};

export default Setting;
