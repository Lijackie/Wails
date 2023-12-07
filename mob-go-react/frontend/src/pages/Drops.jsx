import { useRecoilState } from "recoil";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import Drop from "../components/Drop";

import {
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
} from "../atoms";

const Drops = () => {
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

  const [itemEquipDb, setItemEquipDb] = useRecoilState(itemEquipDbAtom);
  const [itemEtcDb, setItemEtcDb] = useRecoilState(itemEtcDbAtom);
  const [itemUsableDb, setItemUsableDb] = useRecoilState(itemUsableDbAtom);

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

  return (
    <Grid container spacing={1} paddingRight={1}>
      {/* {[...Array(10)].map((_, index) => (
        <Drop key={index} num={index} />
      ))} */}
      <Drop key={uuidDrops} drops={drops} setDrops={setDrops} itemEquipDb={itemEquipDb} itemEtcDb={itemEtcDb} itemUsableDb={itemUsableDb} />
      <Drop key={uuidDrops2} drops={drops2} setDrops={setDrops2} itemEquipDb={itemEquipDb} itemEtcDb={itemEtcDb} itemUsableDb={itemUsableDb} />
      <Drop key={uuidDrops3} drops={drops3} setDrops={setDrops3} itemEquipDb={itemEquipDb} itemEtcDb={itemEtcDb} itemUsableDb={itemUsableDb} />
      <Drop key={uuidDrops4} drops={drops4} setDrops={setDrops4} itemEquipDb={itemEquipDb} itemEtcDb={itemEtcDb} itemUsableDb={itemUsableDb} />
      <Drop key={uuidDrops5} drops={drops5} setDrops={setDrops5} itemEquipDb={itemEquipDb} itemEtcDb={itemEtcDb} itemUsableDb={itemUsableDb} />
      <Drop key={uuidDrops6} drops={drops6} setDrops={setDrops6} itemEquipDb={itemEquipDb} itemEtcDb={itemEtcDb} itemUsableDb={itemUsableDb} />
      <Drop key={uuidDrops7} drops={drops7} setDrops={setDrops7} itemEquipDb={itemEquipDb} itemEtcDb={itemEtcDb} itemUsableDb={itemUsableDb} />
      <Drop key={uuidDrops8} drops={drops8} setDrops={setDrops8} itemEquipDb={itemEquipDb} itemEtcDb={itemEtcDb} itemUsableDb={itemUsableDb} />
      <Drop key={uuidDrops9} drops={drops9} setDrops={setDrops9} itemEquipDb={itemEquipDb} itemEtcDb={itemEtcDb} itemUsableDb={itemUsableDb} />
      <Drop key={uuidDrops10} drops={drops10} setDrops={setDrops10} itemEquipDb={itemEquipDb} itemEtcDb={itemEtcDb} itemUsableDb={itemUsableDb} />
      <Grid item sm={12}>
        <Typography variant="h6" component="h6" gutterBottom>
          item_equip_yml: {itemEquipDb ? "OK" : "Not Found"}
        </Typography>
      </Grid>
      <Grid item sm={12}>
        <Typography variant="h6" component="h6" gutterBottom>
          item_etc_yml: {itemEtcDb ? "OK" : "Not Found"}
        </Typography>
      </Grid>
      <Grid item sm={12}>
        <Typography variant="h6" component="h6" gutterBottom>
          item_usable_yml: {itemUsableDb ? "OK" : "Not Found"}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Drops;
