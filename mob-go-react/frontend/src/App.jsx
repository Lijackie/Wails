import { useState } from "react";
import { useRecoilState } from "recoil";
import { useTimer } from "react-timer-hook";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { v4 as uuidv4 } from 'uuid';
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Setting from "./pages/Setting";
import Drops from "./pages/Drops";
import MvpDrops from "./pages/MvpDrops";
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
  dropsAtom,
  drops2Atom,
  drops3Atom,
  drops4Atom,
  drops5Atom,
  drops6Atom,
  drops7Atom,
  drops8Atom,
  drops9Atom,
  drops10Atom,
  mvpDropsAtom,
  mvpDrops2Atom,
  mvpDrops3Atom,
  itemEquipDbAtom,
  itemEtcDbAtom,
  itemUsableDbAtom,
  uuidDropsAtom,
  uuidDrops2Atom,
  uuidDrops3Atom,
  uuidDrops4Atom,
  uuidDrops5Atom,
  uuidDrops6Atom,
  uuidDrops7Atom,
  uuidDrops8Atom,
  uuidDrops9Atom,
  uuidDrops10Atom,
  uuidMvpDropsAtom,
  uuidMvpDrops2Atom,
  uuidMvpDrops3Atom,
} from "./atoms";
import { GetItemEquipDb, GetItemEtcDb, GetItemUsableDb } from "../wailsjs/go/main/App";
import { useEffect } from "react";

function App() {
  const [result, setResult] = useState("");
  const [copied, setCopied] = useState(false);

  const time = new Date();
  time.setSeconds(time.getSeconds() + 5);

  const { restart } = useTimer({
    expiryTimestamp: time,
    onExpire: () => setCopied(false),
  });

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
  const [size, setSize] = useRecoilState(sizeAtom);
  const [race, setRace] = useRecoilState(raceAtom);
  const [raceGrops, setRaceGroups] = useRecoilState(raceGroupsAtom);
  const [element, setElement] = useRecoilState(elementAtom);
  const [elementLevel, setElementLevel] = useRecoilState(elementLevelAtom);
  const [walkSpeed, setWalkSpeed] = useRecoilState(walkSpeedAtom);
  const [attackDelay, setAttackDelay] = useRecoilState(attackDelayAtom);
  const [attackMotion, setAttackMotion] = useRecoilState(attackMotionAtom);
  const [damageMotion, setDamageMotion] = useRecoilState(damageMotionAtom);
  const [damageTaken, setDmageTaken] = useRecoilState(damageTakenAtom);
  const [ai, setAi] = useRecoilState(aiAtom);
  const [mobClass, setMobClass] = useRecoilState(mobClassAtom);
  const [modes, setModes] = useRecoilState(modesAtom);

  const [drops, setDrops] = useRecoilState(dropsAtom);
  const [drops2, setDrops2] = useRecoilState(drops2Atom);
  const [drops3, setDrops3] = useRecoilState(drops3Atom);
  const [drops4, setDrops4] = useRecoilState(drops4Atom);
  const [drops5, setDrops5] = useRecoilState(drops5Atom);
  const [drops6, setDrops6] = useRecoilState(drops6Atom);
  const [drops7, setDrops7] = useRecoilState(drops7Atom);
  const [drops8, setDrops8] = useRecoilState(drops8Atom);
  const [drops9, setDrops9] = useRecoilState(drops9Atom);
  const [drops10, setDrops10] = useRecoilState(drops10Atom);

  const [mvpDrops, setMvpDrops] = useRecoilState(mvpDropsAtom);
  const [mvpDrops2, setMvpDrops2] = useRecoilState(mvpDrops2Atom);
  const [mvpDrops3, setMvpDrops3] = useRecoilState(mvpDrops3Atom);

  const [itemEquipDb, setItemEquipDb] = useRecoilState(itemEquipDbAtom);
  const [itemEtcDb, setItemEtcDb] = useRecoilState(itemEtcDbAtom);
  const [itemUsableDb, setItemUsableDb] = useRecoilState(itemUsableDbAtom);

  // clear
  const [uuidDrops, setUUIDDrops] = useRecoilState(uuidDropsAtom);
  const [uuidDrops2, setUUIDDrops2] = useRecoilState(uuidDrops2Atom);
  const [uuidDrops3, setUUIDDrops3] = useRecoilState(uuidDrops3Atom);
  const [uuidDrops4, setUUIDDrops4] = useRecoilState(uuidDrops4Atom);
  const [uuidDrops5, setUUIDDrops5] = useRecoilState(uuidDrops5Atom);
  const [uuidDrops6, setUUIDDrops6] = useRecoilState(uuidDrops6Atom);
  const [uuidDrops7, setUUIDDrops7] = useRecoilState(uuidDrops7Atom);
  const [uuidDrops8, setUUIDDrops8] = useRecoilState(uuidDrops8Atom);
  const [uuidDrops9, setUUIDDrops9] = useRecoilState(uuidDrops9Atom);
  const [uuidDrops10, setUUIDDrops10] = useRecoilState(uuidDrops10Atom);

  const [uuidMvpDrops, setUUIDMvpDrops] = useRecoilState(uuidMvpDropsAtom);
  const [uuidMvpDrops2, setUUIDMvpDrops2] = useRecoilState(uuidMvpDrops2Atom);
  const [uuidMvpDrops3, setUUIDMvpDrops3] = useRecoilState(uuidMvpDrops3Atom);

  useEffect(() => {
    GetItemEquipDb().then((result) => setItemEquipDb(result.Body));
    GetItemEtcDb().then((result) => setItemEtcDb(result.Body));
    GetItemUsableDb().then((result) => setItemUsableDb(result.Body));
  }, []);

  const findIdName = (id) => {
    if (itemEquipDb) {
      const itemEquipIndex = itemEquipDb.findIndex((item) => item.Id === parseInt(id) )
      if (itemEquipIndex !== -1) {
        return itemEquipDb[itemEquipIndex].AegisName
      }
    }

    if (itemEtcDb) {
      const itemEtcIndex = itemEtcDb.findIndex((item) => item.Id === parseInt(id) )
      if (itemEtcIndex !== -1) {
        return itemEtcDb[itemEtcIndex].AegisName
      }
    }

    if (itemUsableDb) {
      const itemUsableIndex = itemUsableDb.findIndex((item) => item.Id === parseInt(id) )
      if (itemUsableIndex !== -1) {
        return itemUsableDb[itemUsableIndex].AegisName
      }
    }

    return id
  }

  const replaceSpaceAndComma = (s) => {
    let newS = s.trim();
    newS = newS.replaceAll(',', '');

    return newS;
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    // RaceGroups
    let textRaceGroups = "";
    if (raceGrops.length > 0) {
      textRaceGroups = "    RaceGroups:" + "\n";

      for (const value of raceGrops) {
        textRaceGroups += "      " + value + ": true" + "\n";
      }
    }

    // Modes
    let textModes = "";
    if (modes.length > 0) {
      textModes = "    Modes:" + "\n";

      for (const value of modes) {
        textModes += "      " + value + ": true" + "\n";
      }
    }

    // MvpDrops
    let textMvpDrops = "";
    if (mvpDrops.Item && mvpDrops.Rate || mvpDrops2.Item && mvpDrops2.Rate || mvpDrops3.Item && mvpDrops2.Rate) {
      textMvpDrops = "    MvpDrops:" + "\n";
    }

    if (mvpDrops.Item) {
      //textDrops = "    Drops:" + "\n";

      textMvpDrops +=
        `${
          mvpDrops.Item && mvpDrops.Rate
            ? "      - Item: " + findIdName(mvpDrops.Item) + "\n"
            : ""
        }` +
        `${
          mvpDrops.Rate && mvpDrops.Item
            ? "        Rate: " + mvpDrops.Rate + "\n"
            : ""
        }` +
        `${
          mvpDrops.RandomOptionGroup
            ? "        RandomOptionGroup: " + mvpDrops.RandomOptionGroup + "\n"
            : ""
        }` +
        `${mvpDrops.Index ? "        Index: " + mvpDrops.Index + "\n" : ""}`;
    }

    if (mvpDrops2.Item) {
      //textDrops = "    Drops:" + "\n";

      textMvpDrops +=
        `${
          mvpDrops2.Item && mvpDrops2.Rate
            ? "      - Item: " + findIdName(mvpDrops2.Item) + "\n"
            : ""
        }` +
        `${
          mvpDrops2.Rate && mvpDrops2.Item
            ? "        Rate: " + mvpDrops2.Rate + "\n"
            : ""
        }` +
        `${
          mvpDrops2.RandomOptionGroup
            ? "        RandomOptionGroup: " + mvpDrops2.RandomOptionGroup + "\n"
            : ""
        }` +
        `${mvpDrops2.Index ? "        Index: " + mvpDrops2.Index + "\n" : ""}`;
    }

    if (mvpDrops3.Item) {
      //textDrops = "    Drops:" + "\n";

      textMvpDrops +=
        `${
          mvpDrops3.Item && mvpDrops3.Rate
            ? "      - Item: " + findIdName(mvpDrops3.Item) + "\n"
            : ""
        }` +
        `${
          mvpDrops3.Rate && mvpDrops3.Item
            ? "        Rate: " + mvpDrops3.Rate + "\n"
            : ""
        }` +
        `${
          mvpDrops3.RandomOptionGroup
            ? "        RandomOptionGroup: " + mvpDrops3.RandomOptionGroup + "\n"
            : ""
        }` +
        `${mvpDrops3.Index ? "        Index: " + mvpDrops3.Index + "\n" : ""}`;
    }

    // Drops
    let textDrops = "";
    if (
      drops.Item && drops.Rate ||
      drops2.Item && drops2.Rate ||
      drops3.Item && drops3.Rate ||
      drops4.Item && drops4.Rate ||
      drops5.Item && drops5.Rate ||
      drops6.Item && drops6.Rate ||
      drops7.Item && drops7.Rate ||
      drops8.Item && drops8.Rate ||
      drops9.Item && drops9.Rate ||
      drops10.Item && drops10.Rate
    ) {
      textDrops = "    Drops:" + "\n";
    }

    if (drops.Item) {
      //textDrops = "    Drops:" + "\n";

      textDrops +=
        `${
          drops.Item && drops.Rate ? "      - Item: " + findIdName(drops.Item) + "\n" : ""
        }` +
        `${
          drops.Rate && drops.Item ? "        Rate: " + drops.Rate + "\n" : ""
        }` +
        `${
          drops.StealProtected === "true"
            ? "        StealProtected: true" + "\n"
            : ""
        }` +
        `${
          drops.RandomOptionGroup
            ? "        RandomOptionGroup: " + drops.RandomOptionGroup + "\n"
            : ""
        }` +
        `${drops.Index ? "        Index: " + drops.Index + "\n" : ""}`;
    }

    if (drops2.Item) {
      textDrops +=
        `${drops2.Item ? "      - Item: " + findIdName(drops2.Item) + "\n" : ""}` +
        `${drops2.Rate ? "        Rate: " + drops2.Rate + "\n" : ""}` +
        `${
          drops2.StealProtected === "true"
            ? "        StealProtected: true" + "\n"
            : ""
        }` +
        `${
          drops2.RandomOptionGroup
            ? "        RandomOptionGroup: " + drops2.RandomOptionGroup + "\n"
            : ""
        }` +
        `${drops2.Index ? "        Index: " + drops2.Index + "\n" : ""}`;
    }

    if (drops3.Item) {
      textDrops +=
        `${drops3.Item ? "      - Item: " + findIdName(drops3.Item) + "\n" : ""}` +
        `${drops3.Rate ? "        Rate: " + drops3.Rate + "\n" : ""}` +
        `${
          drops3.StealProtected === "true"
            ? "        StealProtected: true" + "\n"
            : ""
        }` +
        `${
          drops3.RandomOptionGroup
            ? "        RandomOptionGroup: " + drops3.RandomOptionGroup + "\n"
            : ""
        }` +
        `${drops3.Index ? "        Index: " + drops3.Index + "\n" : ""}`;
    }

    if (drops4.Item) {
      textDrops +=
        `${drops4.Item ? "      - Item: " + findIdName(drops4.Item) + "\n" : ""}` +
        `${drops4.Rate ? "        Rate: " + drops4.Rate + "\n" : ""}` +
        `${
          drops4.StealProtected === "true"
            ? "        StealProtected: true" + "\n"
            : ""
        }` +
        `${
          drops4.RandomOptionGroup
            ? "        RandomOptionGroup: " + drops4.RandomOptionGroup + "\n"
            : ""
        }` +
        `${drops4.Index ? "        Index: " + drops4.Index + "\n" : ""}`;
    }

    if (drops5.Item) {
      textDrops +=
        `${drops5.Item ? "      - Item: " + findIdName(drops5.Item) + "\n" : ""}` +
        `${drops5.Rate ? "        Rate: " + drops5.Rate + "\n" : ""}` +
        `${
          drops5.StealProtected === "true"
            ? "        StealProtected: true" + "\n"
            : ""
        }` +
        `${
          drops5.RandomOptionGroup
            ? "        RandomOptionGroup: " + drops5.RandomOptionGroup + "\n"
            : ""
        }` +
        `${drops5.Index ? "        Index: " + drops5.Index + "\n" : ""}`;
    }

    if (drops6.Item) {
      textDrops +=
        `${drops6.Item ? "      - Item: " + findIdName(drops6.Item) + "\n" : ""}` +
        `${drops6.Rate ? "        Rate: " + drops6.Rate + "\n" : ""}` +
        `${
          drops6.StealProtected === "true"
            ? "        StealProtected: true" + "\n"
            : ""
        }` +
        `${
          drops6.RandomOptionGroup
            ? "        RandomOptionGroup: " + drops6.RandomOptionGroup + "\n"
            : ""
        }` +
        `${drops6.Index ? "        Index: " + drops6.Index + "\n" : ""}`;
    }

    if (drops7.Item) {
      textDrops +=
        `${drops7.Item ? "      - Item: " + findIdName(drops7.Item) + "\n" : ""}` +
        `${drops7.Rate ? "        Rate: " + drops7.Rate + "\n" : ""}` +
        `${
          drops7.StealProtected === "true"
            ? "        StealProtected: true" + "\n"
            : ""
        }` +
        `${
          drops7.RandomOptionGroup
            ? "        RandomOptionGroup: " + drops7.RandomOptionGroup + "\n"
            : ""
        }` +
        `${drops7.Index ? "        Index: " + drops7.Index + "\n" : ""}`;
    }

    if (drops8.Item) {
      textDrops +=
        `${drops8.Item ? "      - Item: " + findIdName(drops8.Item) + "\n" : ""}` +
        `${drops8.Rate ? "        Rate: " + drops8.Rate + "\n" : ""}` +
        `${
          drops8.StealProtected === "true"
            ? "        StealProtected: true" + "\n"
            : ""
        }` +
        `${
          drops8.RandomOptionGroup
            ? "        RandomOptionGroup: " + drops8.RandomOptionGroup + "\n"
            : ""
        }` +
        `${drops8.Index ? "        Index: " + drops8.Index + "\n" : ""}`;
    }

    if (drops9.Item) {
      textDrops +=
        `${drops9.Item ? "      - Item: " + findIdName(drops9.Item) + "\n" : ""}` +
        `${drops9.Rate ? "        Rate: " + drops9.Rate + "\n" : ""}` +
        `${
          drops9.StealProtected === "true"
            ? "        StealProtected: true" + "\n"
            : ""
        }` +
        `${
          drops9.RandomOptionGroup
            ? "        RandomOptionGroup: " + drops9.RandomOptionGroup + "\n"
            : ""
        }` +
        `${drops9.Index ? "        Index: " + drops9.Index + "\n" : ""}`;
    }

    if (drops10.Item) {
      textDrops +=
        `${drops10.Item ? "      - Item: " + findIdName(drops10.Item) + "\n" : ""}` +
        `${drops10.Rate ? "        Rate: " + drops10.Rate + "\n" : ""}` +
        `${
          drops10.StealProtected === "true"
            ? "        StealProtected: true" + "\n"
            : ""
        }` +
        `${
          drops10.RandomOptionGroup
            ? "        RandomOptionGroup: " + drops10.RandomOptionGroup + "\n"
            : ""
        }` +
        `${drops10.Index ? "        Index: " + drops10.Index + "\n" : ""}`;
    }

    // 全部文字合起來
    const text =
      "  - Id: " +
      id +
      "\n" +
      "    AegisName: " +
      aegisName +
      "\n" +
      "    Name: " +
      name +
      "\n" +
      `${japaneseName && "    JapaneseName: " + japaneseName + "\n"}` +
      `${level && "    Level: " + replaceSpaceAndComma(level) + "\n"}` +
      `${hp && "    Hp: " + replaceSpaceAndComma(hp) + "\n"}` +
      `${sp && "    Sp: " + replaceSpaceAndComma(sp) + "\n"}` +
      `${baseExp && "    BaseExp: " + replaceSpaceAndComma(baseExp) + "\n"}` +
      `${jobExp && "    JobExp: " + replaceSpaceAndComma(jobExp) + "\n"}` +
      `${mvpExp && "    MvpExp: " + replaceSpaceAndComma(mvpExp) + "\n"}` +
      `${attack && "    Attack: " + replaceSpaceAndComma(attack) + "\n"}` +
      `${attack2 && "    Attack2: " + replaceSpaceAndComma(attack2) + "\n"}` +
      `${defense && "    Defense: " + replaceSpaceAndComma(defense) + "\n"}` +
      `${magicDefense && "    MagicDefense: " + replaceSpaceAndComma(magicDefense) + "\n"}` +
      `${resistance && "    Resistance: " + resistance + "\n"}` +
      `${magicResistance && "    MagicResistance: " + magicResistance + "\n"}` +
      `${str && "    Str: " + str + "\n"}` +
      `${agi && "    Agi: " + agi + "\n"}` +
      `${vit && "    Vit: " + vit + "\n"}` +
      `${int && "    Int: " + int + "\n"}` +
      `${dex && "    Dex: " + dex + "\n"}` +
      `${luk && "    Luk: " + luk + "\n"}` +
      `${attackRange && "    AttackRange: " + attackRange + "\n"}` +
      `${skillRange && "    SkillRange: " + skillRange + "\n"}` +
      `${chaseRange && "    ChaseRange: " + chaseRange + "\n"}` +
      `${size && "    Size: " + size + "\n"}` +
      `${race && "    Race: " + race + "\n"}` +
      //`${raceGrops && "    RaceGroups: " + raceGrops + "\n"}` +
      textRaceGroups +
      `${element && "    Element: " + element + "\n"}` +
      `${elementLevel && "    ElementLevel: " + elementLevel + "\n"}` +
      `${walkSpeed && "    WalkSpeed: " + walkSpeed + "\n"}` +
      `${attackDelay && "    AttackDelay: " + attackDelay + "\n"}` +
      `${attackMotion && "    AttackMotion: " + attackMotion + "\n"}` +
      `${damageMotion && "    DamageMotion: " + damageMotion + "\n"}` +
      `${damageTaken && "    DamageTaken: " + damageTaken + "\n"}` +
      `${ai && "    Ai: " + ai + "\n"}` +
      `${mobClass && "    Class: " + mobClass + "\n"}` +
      //`${modes && "    Modes: " + modes + "\n"}`;
      textModes +
      textMvpDrops +
      textDrops;

    setResult(text);
  };

  const handleReset = () => {
    setResult("");
    setID("");
    setAegisName("");
    setName("");
    setJapaneseName("");
    setLevel("");
    setHp("");
    setSp("");
    setBaseExp("");
    setJobExp("");
    setMvpExp("");
    setAttack("");
    setAttack2("");
    setDefense("");
    setMagicDefense("");
    setResistance("");
    setMagicResistance("");
    setStr("");
    setAgi("");
    setVit("");
    setInt("");
    setDex("");
    setLuk("");
    setAttackRange("");
    setSkillRange("");
    setChaseRange("");
    setSize("");
    setRace("");
    setRaceGroups([]);
    setElement("");
    setElementLevel("");
    setWalkSpeed("");
    setAttackDelay("");
    setAttackMotion("");
    setDamageMotion("");
    setDmageTaken("");
    setAi("");
    setMobClass("");
    setModes([]);
    setDrops({});
    setDrops2({});
    setDrops3({});
    setDrops4({});
    setDrops5({});
    setDrops6({});
    setDrops7({});
    setDrops8({});
    setDrops9({});
    setDrops10({});
    setMvpDrops({});
    setMvpDrops2({});
    setMvpDrops3({});

    // clear
    setUUIDDrops(uuidv4());
    setUUIDDrops2(uuidv4());
    setUUIDDrops3(uuidv4());
    setUUIDDrops4(uuidv4());
    setUUIDDrops5(uuidv4());
    setUUIDDrops6(uuidv4());
    setUUIDDrops7(uuidv4());
    setUUIDDrops8(uuidv4());
    setUUIDDrops9(uuidv4());
    setUUIDDrops10(uuidv4());

    setUUIDMvpDrops(uuidv4());
    setUUIDMvpDrops2(uuidv4());
    setUUIDMvpDrops3(uuidv4());
  };

  return (
    <div>
      <Header />

      <Container>
        <Box
          component="form"
          sx={{
            display: "flex",
            flexDirection: "row",
            p: 1,
            m: 1,
            bgcolor: "background.paper",
            borderRadius: 1,
            justifyContent: "space-between",
          }}
          onSubmit={handleSubmit}
        >
          <Box>
            <Routes>
              <Route path="/" element={<Setting />} />
              <Route path="/drops" element={<Drops />} />
              <Route path="/mvpdrops" element={<MvpDrops />} />
            </Routes>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <TextField
              value={result}
              inputProps={{
                style: { height: 700, width: 350, whiteSpace: "pre-wrap" },
              }}
              multiline
              rows="3"
            />
            <Box sx={{ width: "100%", display: "flex", marginTop: 1.5 }}>
              <Button
                sx={{ width: 250, marginRight: 1 }}
                type="submit"
                variant="contained"
                size="large"
              >
                產生
              </Button>
              <CopyToClipboard text={result} onCopy={() => setCopied(true)}>
                <Button
                  sx={{ marginLeft: "auto", width: 100 }}
                  type="submit"
                  variant="contained"
                  size="large"
                  onClick={() => {
                    const time = new Date();
                    time.setSeconds(time.getSeconds() + 5);
                    restart(time);
                  }}
                >
                  {copied ? "已複製" : "複製"}
                </Button>
              </CopyToClipboard>
            </Box>
            <Box sx={{ width: "100%", display: "flex", marginTop: 1.5 }}>
              <Button
                sx={{ width: 100, marginLeft: "auto" }}
                type="submit"
                variant="contained"
                size="large"
                color="error"
                onClick={handleReset}
              >
                重置
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </div>
  );
}

export default App;
