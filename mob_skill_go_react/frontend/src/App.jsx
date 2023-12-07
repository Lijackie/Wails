import { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { useTimer } from "react-timer-hook";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { v4 as uuidv4 } from "uuid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import useMediaQuery from "@mui/material/useMediaQuery";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Divider from "@mui/material/Divider";

import SkillID from "./components/SkillID";
import MobState from "./components/MobState";
import Cancelable from "./components/Cancelable";
import Target from "./components/Target";
import ConditionType from "./components/ConditionType";
import ConditionValue from "./components/ConditionValue";

import {
  mobStateAtom,
  skillIDAtom,
  cancelableAtom,
  targetAtom,
  conditionTypeAtom,
  conditionValueAtom,
} from "./components/atoms";
import { GetMobDb, GetSkillDb } from "../wailsjs/go/main/App";
import { margin } from "@mui/system";

function App() {
  const [mobID, setMobID] = useState("");
  const [copied, setCopied] = useState(false);

  const time = new Date();
  time.setSeconds(time.getSeconds() + 5);

  const { restart } = useTimer({
    expiryTimestamp: time,
    onExpire: () => setCopied(false),
  });

  const [dummyValue, setDummyValue] = useState("");
  const [checkedDummyValue, setCheckedDummyValue] = useState(true);
  //const [mobstate, setMobState]= useState("");
  //const [skillID, setSkillID] = useState("");
  const [skillLv, setSkillLv] = useState("");
  const [rate, setRate] = useState("");
  const [castTime, setCateTime] = useState("");
  const [delay, setDelay] = useState("");
  //const [cancelable, setCancelable] = useState("");
  //const [target, setTarget] = useState("");
  //const [conditionType, setConditionType] = useState("");
  //const [conditionValue, setConditionValue] = useState("");
  const [val1, setVal1] = useState("");
  const [val2, setVal2] = useState("");
  const [val3, setVal3] = useState("");
  const [val4, setVal4] = useState("");
  const [val5, setVal5] = useState("");
  const [emotion, setEmotion] = useState("");
  const [chat, setChat] = useState("");
  const [result, setResult] = useState("");

  const [mobstate, setMobState] = useRecoilState(mobStateAtom);
  const [skillID, setSkillID] = useRecoilState(skillIDAtom);
  const [cancelable, setCancelable] = useRecoilState(cancelableAtom);
  const [target, setTarget] = useRecoilState(targetAtom);
  const [conditionType, setConditionType] = useRecoilState(conditionTypeAtom);
  const [conditionValue, setConditionValue] =
    useRecoilState(conditionValueAtom);

  // yaml
  const [mobDb, setMobDb] = useState(null);
  const [skillDb, setSkillDb] = useState(null);

  const matches = useMediaQuery("(min-width: 1200px)");
  const matches2 = useMediaQuery("(min-width: 640px)");

  // clear
  const [uuidMob, setUUIDMob] = useState(uuidv4());
  const [uuidSkillId, setUUIDSkillId] = useState(uuidv4());
  const [uuidCancelable, setUUidCancelable] = useState(uuidv4());
  const [uuidTarget, setUUIDTarget] = useState(uuidv4());
  const [uuidConditionType, setUUIDConditionType] = useState(uuidv4());
  const [uuidContitionValue, setUUIDConditionValue] = useState(uuidv4());

  const FindName = (mobId, skillId) => {
    let mobName = "";
    let skillName = "";
    let name = "";

    if (mobDb) {
      const mobNameIndex = mobDb.findIndex((mob) => mob.Id === parseInt(mobId) )
      if (mobNameIndex != -1) {
        mobName = mobDb[mobNameIndex].Name;
      }
    }

    if (skillDb) {
      const SkillNameIndex = skillDb.findIndex((skill) => skill.Id === parseInt(skillId) )
      if (SkillNameIndex != -1) {
        skillName = skillDb[SkillNameIndex].Name;
      }
    }

    if (mobName !== "" && skillName !== "") {
      name = mobName + "@" + skillName;
    } else if (mobName === "" && skillName !== "") {
      name = "Not Found@" + skillName;
    } else if (mobName !== "" && skillName === "") {
      name = mobName + "@Not Found";
    } else {
      name ="Not Found@Not Found"
    }

    return name
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const text =
      mobID +
      "," +
      `${mobDb && skillDb && checkedDummyValue ? FindName(mobID, skillID) : dummyValue}` +
      "," +
      mobstate +
      "," +
      skillID +
      "," +
      skillLv +
      "," +
      rate +
      "," +
      castTime +
      "," +
      delay +
      "," +
      cancelable +
      "," +
      target +
      "," +
      conditionType +
      "," +
      conditionValue +
      "," +
      val1 +
      "," +
      val2 +
      "," +
      val3 +
      "," +
      val4 +
      "," +
      val5 +
      "," +
      emotion +
      "," +
      chat;

    setResult(text);
  };

  const handleReset = () => {
    setResult("");
    setMobID("");
    setDummyValue("");
    setSkillLv("");
    setRate("");
    setCateTime("");
    setDelay("");
    setVal1("");
    setVal2("");
    setVal3("");
    setVal4("");
    setVal5("");
    setEmotion("");
    setChat("");
    setResult("");
    setMobState("");
    setSkillID("");
    setCancelable("yes");
    setTarget("");
    setConditionType("");
    setConditionValue("");

    // bad
    setUUIDMob(uuidv4());
    setUUIDSkillId(uuidv4());
    setUUidCancelable(uuidv4());
    setUUIDTarget(uuidv4());
    setUUIDConditionType(uuidv4());
    setUUIDConditionType(uuidv4());
  };

  useEffect(() => {
    GetMobDb().then((result) => setMobDb(result.Body));
    GetSkillDb().then((result) => setSkillDb(result.Body));
  }, []);

  return (
    <div className="App">
      <Container>
        <Typography variant="h6" component="h6" gutterBottom>
          資料結構 (Structure of Database):
        </Typography>
        <Typography
          style={{
            wordWrap: "break-word",
            whiteSpace: matches && "pre-wrap",
          }}
          gutterBottom
        >
          MobID,Dummy value (info
          only),State,SkillID,SkillLv,Rate,CastTime,Delay,Cancelable,Target,Condition
          type,Condition value,val1,val2,val3,val4,val5,Emotion,Chat
        </Typography>

        <Typography variant="h6" component="h6" gutterBottom>
          Rate: 10000 = 100%
        </Typography>

        <Typography variant="h6" component="h6" gutterBottom>
          Delay: 再次使用技能的延遲時間(毫秒 milliseconds)
        </Typography>

        <Typography
          style={{ wordWrap: "break-word" }}
          variant="h6"
          component="h6"
          gutterBottom
        >
          範例:
          1002,Poring@NPC_EMOTION,loot,197,1,2000,0,5000,yes,self,always,0,2,,,,,,
        </Typography>

        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography variant="h6" component="h6" gutterBottom>
            mob_db_yml: {mobDb  ? "OK" : "Not Found"}
          </Typography>
          <Typography variant="h6" component="h6" gutterBottom>
            skill_db_yml: {skillDb ? "OK" : "Not Found"}
          </Typography>

          {mobDb && skillDb ? (
            <FormControlLabel
              sx={{ marginBottom: 1 }}
              control={
                <Checkbox
                  checked={checkedDummyValue}
                  onChange={(event) =>
                    setCheckedDummyValue(event.target.checked)
                  }
                  inputProps={{ "aria-label": "controlled" }}
                />
              }
              label="Auto Dummy Value (Mob Name@Skill Name)"
            />
          ) : (
            <FormControlLabel
              sx={{ margin: "auto 0" }}
              control={
                <Checkbox
                  checked={false}
                  disabled
                  inputProps={{ "aria-label": "controlled" }}
                />
              }
              label="Auto Dummy Value (Mob Name@Skill Name) // Need mob_db_yml and skill_db.yml"
            />
          )}
        </Box>

        <Box
          spacing={3}
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <Grid container spacing={2}>
            <Grid item md={4}>
              <TextField
                required
                name="mobID"
                label="魔物ID"
                value={mobID}
                onChange={(event) => setMobID(event.target.value)}
              />
            </Grid>
            <Grid item md={4}>
              {checkedDummyValue && mobDb && skillDb ? (
                <TextField
                  name="dummyValue"
                  value={dummyValue}
                  label="敘述 (Dummy value)"
                  onChange={(event) => setDummyValue(event.target.value)}
                />
              ) : (
                <TextField
                  required
                  name="dummyValue"
                  value={dummyValue}
                  label="敘述 (Dummy value)"
                  onChange={(event) => setDummyValue(event.target.value)}
                />
              )}
            </Grid>
            <Grid item md={4}>
              <MobState key={uuidMob} />
            </Grid>
            <Grid item md={4}>
              <SkillID key={uuidSkillId} />
            </Grid>
            <Grid item md={4}>
              <TextField
                required
                name="skillLv"
                value={skillLv}
                label="技能等級 (SkillLv)"
                onChange={(event) => setSkillLv(event.target.value)}
              />
            </Grid>
            <Grid item md={4}>
              <TextField
                required
                name="rate"
                value={rate}
                label="機率 (Rate)"
                onChange={(event) => setRate(event.target.value)}
              />
            </Grid>
            <Grid item md={4}>
              <TextField
                required
                name="castTime"
                value={castTime}
                label="詠唱時間 (CastTime)"
                onChange={(event) => setCateTime(event.target.value)}
              />
            </Grid>
            <Grid item md={4}>
              <TextField
                required
                name="delay"
                value={delay}
                label="延遲 (Delay)"
                onChange={(event) => setDelay(event.target.value)}
              />
            </Grid>
            <Grid item md={4}>
              <Cancelable key={uuidCancelable} />
            </Grid>
            <Grid item md={4}>
              <Target key={uuidTarget} />
            </Grid>
            <Grid item md={4}>
              <ConditionType key={uuidConditionType} />
            </Grid>
            <Grid item md={4}>
              <ConditionValue key={uuidContitionValue} />
            </Grid>
            <Grid item md={4}>
              <TextField
                onChange={(event) => setVal1(event.target.value)}
                name="val1"
                value={val1}
                label="val1"
              />
            </Grid>
            <Grid item md={4}>
              <TextField
                onChange={(event) => setVal2(event.target.value)}
                name="val2"
                value={val2}
                label="val2"
              />
            </Grid>
            <Grid item md={4}>
              <TextField
                onChange={(event) => setVal3(event.target.value)}
                name="val3"
                value={val3}
                label="val3"
              />
            </Grid>
            <Grid item md={4}>
              <TextField
                onChange={(event) => setVal4(event.target.value)}
                name="val4"
                value={val4}
                label="val4"
              />
            </Grid>
            <Grid item md={4}>
              <TextField
                onChange={(event) => setVal5(event.target.value)}
                name="val5"
                value={val5}
                label="val5"
              />
            </Grid>
            <Grid item md={4}>
              <TextField
                onChange={(event) => setEmotion(event.target.value)}
                name="emotion"
                value={emotion}
                label="表情 (Emotion)"
              />
            </Grid>
            <Grid item md={4}>
              <TextField
                onChange={(event) => setChat(event.target.value)}
                name="chat"
                value={chat}
                label="說話 (Chat)"
              />
            </Grid>
            <Grid item md={4}>
              <Button
                sx={{ margin: "8px", width: 225, height: 55 }}
                type="submit"
                variant="contained"
                size="large"
              >
                產生
              </Button>
            </Grid>
            <Grid item md={4}>
              <Button
                sx={{ margin: "8px", width: 150, height: 55 }}
                type="submit"
                variant="contained"
                size="large"
                color="error"
                onClick={handleReset}
              >
                重置
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Box
        sx={{
          width: 600,
          maxWidth: "100%",
          margin: "15px auto",
          display: "flex",
        }}
      >
        <TextField
          inputProps={{ min: 0, style: { textAlign: "center" } }}
          value={result}
          fullWidth
        />
      </Box>
      <Box
        sx={{
          width: 100,
          maxWidth: "100%",
          margin: "0 auto",
          marginBottom: "15px",
        }}
      >
        <CopyToClipboard text={result} onCopy={() => setCopied(true)}>
          <Button
            sx={{ width: 100, margin: "0 auto" }}
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
    </div>
  );
}

export default App;
