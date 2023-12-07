import { atom } from 'recoil';

export const idAtom = atom({
    key: 'id',
    default: "",
})

export const aegisNameAtom = atom({
    key: 'aegisName',
    default: ""
})

export const nameAtom = atom({
    key: 'name',
    default: ""
})

export const japaneseNameAtom = atom({
    key: 'japaneseName',
    default: ""
})

export const levelAtom = atom({
    key: 'level',
    default: ""
})

export const hpAtom = atom({
    key: "hp",
    default: ""
})

export const spAtom = atom({
    key: 'sp',
    default: ""
})

export const baseExpAtom = atom({
    key: 'baseExp',
    default: ""
})

export const jobExpAtom = atom({
    key: 'jobExp',
    default: ""
})

export const mvpExpAtom = atom({
    key: 'mvpExp',
    default: ""
})

export const attackAtom = atom({
    key: 'attack',
    default: ""
})

export const attack2Atom = atom({
    key: 'attack2',
    default: ""
})

export const defenseAtom = atom({
    key: 'defense',
    default: ""
})

export const magicDefenseAtom = atom({
    key: 'magicDefense',
    default: ""
})

export const resistanceAtom = atom({
    key: 'resistance',
    default: ""
})

export const magicResistanceAtom = atom({
    key: 'magicResistance',
    default: ""
})

export const strAtom = atom({
    key: 'str',
    default: ""
})

export const agiAtom = atom({
    key: 'agi',
    default: ""
})

export const vitAtom = atom({
    key: 'vit',
    default: ""
})

export const intAtom = atom({
    key: 'int',
    default: ""
})

export const dexAtom = atom({
    key: 'dex',
    default: ""
})

export const lukAtom = atom({
    key: 'luk',
    default: ""
})

export const attackRangeAtom = atom({
    key: 'attackRange',
    default: ""
})

export const skillRangeAtom = atom({
    key: 'skillRange',
    default: ""
})

export const chaseRangeAtom = atom({
    key: 'chaseRange',
    default: ""
})

export const sizeAtom = atom({
    key: 'size',
    default: ""
})

export const raceAtom = atom({
    key: 'race',
    default: ""
})

export const raceGroupsAtom = atom({
    key: 'raceGroups',
    default: []
})

export const elementAtom = atom({
    key: 'element',
    default: ""
})

export const elementLevelAtom = atom({
    key: 'elementLevel',
    default: ""
})

export const walkSpeedAtom = atom({
    key: 'walkSpeed',
    default: ""
})

export const attackDelayAtom = atom({
    key: 'attackDelay',
    default: ""
})

export const attackMotionAtom = atom({
    key: 'attackMotion',
    default: ""
})

export const damageMotionAtom = atom({
    key: 'damageMotion',
    default: ""
})

export const damageTakenAtom = atom({
    key: 'damageTaken',
    default: ""
})

export const aiAtom = atom({
    key: 'ai',
    default: ""
})

export const mobClassAtom = atom({
    key: 'mobClass',
    default: ""
})

export const modesAtom = atom({
    key: 'modes',
    default: []
})

// export const mvpDropsAtom = atom({
//     key: 'mvpDrops',
//     default: []
// })

export const dropsAtom = atom({
    key: 'drops',
    default: {}
})

export const drops2Atom = atom({
    key: 'drops2',
    default: {}
})

export const drops3Atom = atom({
    key: 'drops3',
    default: {}
})

export const drops4Atom = atom({
    key: 'drops4',
    default: {}
})

export const drops5Atom = atom({
    key: 'drops5',
    default: {}
})

export const drops6Atom = atom({
    key: 'drops6',
    default: {}
})

export const drops7Atom = atom({
    key: 'drops7',
    default: {}
})

export const drops8Atom = atom({
    key: 'drops8',
    default: {}
})

export const drops9Atom = atom({
    key: 'drops9',
    default: {}
})

export const drops10Atom = atom({
    key: 'drops10',
    default: {}
})

export const mvpDropsAtom = atom({
    key: 'mvpDrops',
    default: {}
})

export const mvpDrops2Atom = atom({
    key: 'mvpDrops2',
    default: {}
})

export const mvpDrops3Atom = atom({
    key: 'mvpDrops3',
    default: {}
})

export const itemEquipDbAtom = atom({
    key: 'itemEquipDb',
    default: null
})

export const itemEtcDbAtom = atom({
    key: 'itemEtcDb',
    default: null
})

export const itemUsableDbAtom = atom({
    key: 'itemUsableDb',
    default: null
})

import { v4 as uuidv4 } from 'uuid';

export const uuidDropsAtom = atom({
    key: 'uuidDrops',
    default: uuidv4()
})

export const uuidDrops2Atom = atom({
    key: 'uuidDrops2',
    default: uuidv4()
})

export const uuidDrops3Atom = atom({
    key: 'uuidDrops3',
    default: uuidv4()
})

export const uuidDrops4Atom = atom({
    key: 'uuidDrops4',
    default: uuidv4()
})

export const uuidDrops5Atom = atom({
    key: 'uuidDrops5',
    default: uuidv4()
})

export const uuidDrops6Atom = atom({
    key: 'uuidDrops6',
    default: uuidv4()
})

export const uuidDrops7Atom = atom({
    key: 'uuidDrops7',
    default: uuidv4()
})

export const uuidDrops8Atom = atom({
    key: 'uuidDrops8',
    default: uuidv4()
})

export const uuidDrops9Atom = atom({
    key: 'uuidDrops9',
    default: uuidv4()
})

export const uuidDrops10Atom = atom({
    key: 'uuidDrops10',
    default: uuidv4()
})

export const uuidMvpDropsAtom = atom({
    key: 'uuidDrops',
    default: uuidv4()
})

export const uuidMvpDrops2Atom = atom({
    key: 'uuidDrops2',
    default: uuidv4()
})

export const uuidMvpDrops3Atom = atom({
    key: 'uuidDrops3',
    default: uuidv4()
})