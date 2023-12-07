import { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { useTimer } from "react-timer-hook";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { v4 as uuidv4 } from "uuid";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";

import Upgrade from "./pages/Upgrade";
import Slots from "./pages/Slots";
import Slots2 from "./pages/Slots2";
import Slots3 from "./pages/Slots3";
import Slots4 from "./pages/Slots4";
import Random from "./pages/Random";
import ItemRandomoptGroup from "./pages/ItemRandomoptGroup";

import {
  upgradeAtom,
  targetItmesAtom,
  ItemRandomoptGroupAtom,
  slotAtom,
  slotAtom2,
  slotAtom3,
  slotAtom4,
  randomAtom,
  itemRandomoptDbAtom,
  uuidAtom,
} from "./atoms";
import { GetItemRandomoptDb } from "../wailsjs/go/main/App";

function App() {
  const [result, setResult] = useState("");
  const [laphineUpgradeText, setLaphineUpgradeText] = useState("");
  const [itemText, setItemText] = useState("");
  const [copied, setCopied] = useState(false);

  const time = new Date();
  time.setSeconds(time.getSeconds() + 5);

  const { restart } = useTimer({
    expiryTimestamp: time,
    onExpire: () => setCopied(false),
  });

  const [upgrade, setUpgrade] = useRecoilState(upgradeAtom);
  const [targetItems, setTargetItems] = useRecoilState(targetItmesAtom);
  const [itemRandomoptGroup, setItemRandomoptGroup] = useRecoilState(
    ItemRandomoptGroupAtom
  );
  const [slots, setSlots] = useRecoilState(slotAtom);
  const [slots2, setSlots2] = useRecoilState(slotAtom2);
  const [slots3, setSlots3] = useRecoilState(slotAtom3);
  const [slots4, setSlots4] = useRecoilState(slotAtom4);
  const [random, setRandom] = useRecoilState(randomAtom);
  const [itemRandomoptDb, setItemRandomoptDb] =
    useRecoilState(itemRandomoptDbAtom);

  const [uuid, setUUid] = useRecoilState(uuidAtom);

  useEffect(() => {
    GetItemRandomoptDb().then((result) => setItemRandomoptDb(result.Body));
  }, []);

  const findIdName = (id) => {
    if (itemRandomoptDb) {
      const itemRandomoptIndex = itemRandomoptDb.findIndex(
        (item) => item.Id === parseInt(id)
      );
      if (itemRandomoptIndex !== -1) {
        return itemRandomoptDb[itemRandomoptIndex].Option;
      }
    }

    return id;
  };

  const getTargetItem = () => {
    let itemsText = "";
    for (let i = 0; i < Object.keys(targetItems).length-1; i++) {
      itemsText += `${"      - Item: " + targetItems[`${"Item" + i}`]}` + "\n";
    }
    return itemsText;
  };

  const getOptions = (slotArray, n) => {
    let optionsText = "";
    optionsText += `      - Slot: ${n}\n`;
    optionsText += "        Options:\n";

    for (let i = 0; i < parseInt(slotArray.Options, 10); i++) {
      optionsText += `${
        slotArray[`${"slot" + i}Option`] !== undefined
          ? "          - Option: " +
            findIdName(slotArray[`${"slot" + i}Option`]) +
            "\n"
          : ""
      }`;
      optionsText += `${
        slotArray[`${"slot" + i}MinValue`] !== undefined
          ? "            MinValue: " + slotArray[`${"slot" + i}MinValue`] + "\n"
          : ""
      }`;
      optionsText += `${
        slotArray[`${"slot" + i}MaxValue`] !== undefined
          ? "            MaxValue: " + slotArray[`${"slot" + i}MaxValue`] + "\n"
          : ""
      }`;
      optionsText += `${
        slotArray[`${"slot" + i}Chance`] !== undefined
          ? "            Chance: " + slotArray[`${"slot" + i}Chance`] + "\n"
          : ""
      }`;
    }

    return optionsText;
  };

  const getRandomOptions = (slotArray) => {
    let optionsText = "";
    optionsText += `    Random:\n`;

    for (let i = 0; i < parseInt(slotArray.Options, 10); i++) {
      optionsText += `${
        slotArray[`${"slot" + i}Option`] !== undefined
          ? "      - Option: " +
            findIdName(slotArray[`${"slot" + i}Option`]) +
            "\n"
          : ""
      }`;
      optionsText += `${
        slotArray[`${"slot" + i}MinValue`] !== undefined
          ? "        MinValue: " + slotArray[`${"slot" + i}MinValue`] + "\n"
          : ""
      }`;
      optionsText += `${
        slotArray[`${"slot" + i}MaxValue`] !== undefined
          ? "        MaxValue: " + slotArray[`${"slot" + i}MaxValue`] + "\n"
          : ""
      }`;
      optionsText += `${
        slotArray[`${"slot" + i}Chance`] !== undefined
          ? "        Chance: " + slotArray[`${"slot" + i}Chance`] + "\n"
          : ""
      }`;
    }

    return optionsText;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const upgradetext =
      "  - Item: " +
      upgrade.Item +
      "\n" +
      `${
        upgrade.RandomOptionGroup !== undefined
          ? "    RandomOptionGroup: " + upgrade.RandomOptionGroup.toUpperCase() + "\n"
          : ""
      }` +
      `${
        upgrade.ResultRefine !== undefined
          ? "    ResultRefine: " + upgrade.ResultRefine + "\n"
          : ""
      }` +
      `${
        upgrade.ResultRefineMinimum !== undefined
          ? "    ResultRefineMinimum: " + upgrade.ResultRefineMinimum + "\n"
          : ""
      }` +
      `${
        upgrade.ResultRefineMaximum !== undefined
          ? "    ResultRefineMaximum: " + upgrade.ResultRefineMaximum + "\n"
          : ""
      }` +
      `${
        upgrade.MinimumRefine !== undefined
          ? "    MinimumRefine: " + upgrade.MinimumRefine + "\n"
          : ""
      }` +
      `${
        upgrade.RequiredRandomOptions !== undefined
          ? "    RequiredRandomOptions: " + upgrade.RequiredRandomOptions + "\n"
          : ""
      }` +
      `${
        upgrade.CardsAllowed !== false
          ? "    CardsAllowed: " + upgrade.CardsAllowed + "\n"
          : ""
      }` +
      `${targetItems["Item0"] !== "" ? "    TargetItems:" + "\n" : ""}` +
      `${targetItems["Item0"] !== "" ? getTargetItem() : ""}`;

    const itemRandomoptGroupText =
      `${
        itemRandomoptGroup.Id !== undefined
          ? "  - Id: " + itemRandomoptGroup.Id + "\n"
          : ""
      }` +
      `${
        itemRandomoptGroup.Group !== undefined
          ? "    Group: " + itemRandomoptGroup.Group.toUpperCase() + "\n"
          : ""
      }` +
      "    Slots:" +
      "\n";

    // Slots
    let slotsText = itemRandomoptGroupText + getOptions(slots, 1);

    if (slots2[`${"slot0"}Option`]) {
      slotsText = slotsText + getOptions(slots2, 2);
    }

    if (slots3[`${"slot0"}Option`] !== undefined) {
      slotsText = slotsText + getOptions(slots3, 3);
    }

    if (slots4[`${"slot0"}Option`] !== undefined) {
      slotsText = slotsText + getOptions(slots4, 4);
    }

    if (itemRandomoptGroup.MaxRandom !== undefined) {
      slotsText += `${
        itemRandomoptGroup.MaxRandom !== undefined
          ? "    MaxRandom: " + itemRandomoptGroup.MaxRandom + "\n"
          : ""
      }`;
    }

    if (random[`${"slot0"}Option`] !== undefined) {
      slotsText = slotsText + getRandomOptions(random);
    }

    const line = "=======================================";
    const newText = upgradetext + line + "\n" + slotsText;

    setLaphineUpgradeText(upgradetext);
    setItemText(slotsText);
    setResult(newText);
  };

  const handleReset = () => {
    setResult("");
    setUpgrade({ Item: "", CardsAllowed: false, TargetItems: "1" });
    setTargetItems({ Item0: "" });
    setItemRandomoptGroup({ Id: "" });
    setSlots({ Options: "1" });
    setSlots2({ Options: "1" });
    setSlots3({ Options: "1" });
    setSlots4({ Options: "1" });
    setRandom({ Options: "1" });

    setUUid(uuidv4());
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
              <Route path="/" element={<Upgrade />} />
              <Route path="/group" element={<ItemRandomoptGroup />} />
              <Route path="/slot" element={<Slots />} />
              <Route path="/slot2" element={<Slots2 />} />
              <Route path="/slot3" element={<Slots3 />} />
              <Route path="/slot4" element={<Slots4 />} />
              <Route path="/random" element={<Random />} />
            </Routes>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginLeft: 2,
            }}
          >
            <TextField
              value={result}
              inputProps={{
                style: { height: 700, width: 380, whiteSpace: "pre-wrap" },
              }}
              multiline
              rows="3"
            />
            <Box sx={{ width: "100%", display: "flex", marginTop: 1.5 }}>
              <Button
                sx={{ width: 160, marginRight: 1 }}
                type="submit"
                variant="contained"
                size="large"
              >
                產生
              </Button>
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
            <Box sx={{ marginTop: 1.5 }}>
              <CopyToClipboard
                text={laphineUpgradeText}
                onCopy={() => setCopied(true)}
              >
                <Button
                  sx={{ marginTop: 1, width: 250, textTransform: "lowercase" }}
                  type="submit"
                  variant="contained"
                  size="large"
                  color="primary"
                  onClick={() => {
                    const time = new Date();
                    time.setSeconds(time.getSeconds() + 5);
                    restart(time);
                  }}
                >
                  {copied ? "已複製" : "複製 lapine_upgrade"}
                </Button>
              </CopyToClipboard>
              <CopyToClipboard text={itemText} onCopy={() => setCopied(true)}>
                <Button
                  sx={{ marginTop: 1, width: 250, textTransform: "lowercase" }}
                  type="submit"
                  variant="contained"
                  size="large"
                  color="secondary"
                  onClick={() => {
                    const time = new Date();
                    time.setSeconds(time.getSeconds() + 5);
                    restart(time);
                  }}
                >
                  {copied ? "已複製" : "複製 item_randomopt_group"}
                </Button>
              </CopyToClipboard>
            </Box>
          </Box>
        </Box>
      </Container>
    </div>
  );
}

export default App;
