import { atom } from 'recoil';

export const upgradeAtom = atom({
    key: 'upgrade',
    default: {
        Item: "",
        CardsAllowed: false,
        TargetItems: "1",
    }
})

export const targetItmesAtom = atom({
    key: 'targetItmes',
    default: {
        Item0: "",
        MaxRandom: "",
    }
})

export const ItemRandomoptGroupAtom = atom({
    key: 'itemRandomoptGroup',
    default: {
        Id: ""
    }
})


export const slotAtom = atom({
    key: 'slot',
    default: {
        Options: "1"
    }
})

export const slotAtom2 = atom({
    key: 'slot2',
    default: {
        Options: "1"
    }
})

export const slotAtom3 = atom({
    key: 'slot3',
    default: {
        Options: "1"
    }
})

export const slotAtom4 = atom({
    key: 'slot4',
    default: {
        Options: "1"
    }
})

export const randomAtom = atom({
    key: 'random',
    default: {
        Options: "1",
    }
})

export const itemRandomoptDbAtom = atom({
    key: "itemRandomoptDb",
    default: null
})

// uuid
import { v4 as uuidv4 } from 'uuid';

export const uuidAtom = atom({
    key: 'uuid',
    default: uuidv4()
});