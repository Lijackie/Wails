import { useRecoilState } from "recoil";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import MvpDrop from "../components/MvpDrop";

import {
  mvpDropsAtom,
  mvpDrops2Atom,
  mvpDrops3Atom,
  itemEquipDbAtom,
  itemEtcDbAtom,
  itemUsableDbAtom,
  uuidMvpDropsAtom,
  uuidMvpDrops2Atom,
  uuidMvpDrops3Atom,
} from "../atoms";

const MvpDrops = () => {
  const [mvpDrops, setMvpDrops] = useRecoilState(mvpDropsAtom);
  const [mvpDrops2, setMvpDrops2] = useRecoilState(mvpDrops2Atom);
  const [mvpDrops3, setMvpDrops3] = useRecoilState(mvpDrops3Atom);

  const [itemEquipDb, setItemEquipDb] = useRecoilState(itemEquipDbAtom);
  const [itemEtcDb, setItemEtcDb] = useRecoilState(itemEtcDbAtom);
  const [itemUsableDb, setItemUsableDb] = useRecoilState(itemUsableDbAtom);

  const [uuidMvpDrops, setUUIDMvpDrops] = useRecoilState(uuidMvpDropsAtom);
  const [uuidMvpDrops2, setUUIDMvpDrops2] = useRecoilState(uuidMvpDrops2Atom);
  const [uuidMvpDrops3, setUUIDMvpDrops3] = useRecoilState(uuidMvpDrops3Atom);

  return (
    <Grid container spacing={1} paddingRight={2}>
      <MvpDrop key={uuidMvpDrops} mvpDrops={mvpDrops} setMvpDrops={setMvpDrops} itemEquipDb={itemEquipDb} itemEtcDb={itemEtcDb} itemUsableDb={itemUsableDb} />
      <MvpDrop key={uuidMvpDrops2} mvpDrops={mvpDrops2} setMvpDrops={setMvpDrops2} itemEquipDb={itemEquipDb} itemEtcDb={itemEtcDb} itemUsableDb={itemUsableDb} />
      <MvpDrop key={uuidMvpDrops3} mvpDrops={mvpDrops3} setMvpDrops={setMvpDrops3} itemEquipDb={itemEquipDb} itemEtcDb={itemEtcDb} itemUsableDb={itemUsableDb} />
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

export default MvpDrops;
