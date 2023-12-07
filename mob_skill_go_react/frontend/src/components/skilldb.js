export const skilldb = [
  {
    Id: 1,
    Name: "NV_BASIC",
    Description: "Basic Skill",
    MaxLevel: 9,
  },
  {
    Id: 2,
    Name: "SM_SWORD",
    Description: "Sword Mastery",
    MaxLevel: 10,
    Type: "Weapon",
  },
  {
    Id: 3,
    Name: "SM_TWOHAND",
    Description: "Two-Handed Sword Mastery",
    MaxLevel: 10,
    Type: "Weapon",
  },
  {
    Id: 4,
    Name: "SM_RECOVERY",
    Description: "Increase HP Recovery",
    MaxLevel: 10,
  },
  {
    Id: 5,
    Name: "SM_BASH",
    Description: "Bash",
    MaxLevel: 10,
    Type: "Weapon",
    TargetType: "Attack",
    Range: -1,
    Hit: "Single",
    HitCount: 1,
    Element: "Weapon",
    CopyFlags: {
      Skill: {
        Plagiarism: true,
        Reproduce: true,
      },
    },
    Duration2: 4500,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 8,
        },
        {
          Level: 2,
          Amount: 8,
        },
        {
          Level: 3,
          Amount: 8,
        },
        {
          Level: 4,
          Amount: 8,
        },
        {
          Level: 5,
          Amount: 8,
        },
        {
          Level: 6,
          Amount: 15,
        },
        {
          Level: 7,
          Amount: 15,
        },
        {
          Level: 8,
          Amount: 15,
        },
        {
          Level: 9,
          Amount: 15,
        },
        {
          Level: 10,
          Amount: 15,
        },
      ],
      Weapon: {
        Fist: true,
        Dagger: true,
        "1hSword": true,
        "2hSword": true,
        "1hSpear": true,
        "2hSpear": true,
        "1hAxe": true,
        "2hAxe": true,
        Mace: true,
        "2hMace": true,
        Staff: true,
        Knuckle: true,
        Musical: true,
        Whip: true,
        Book: true,
        Katar: true,
        Revolver: true,
        Rifle: true,
        Gatling: true,
        Shotgun: true,
        Grenade: true,
        Huuma: true,
      },
    },
    Status: "Stun",
  },
  {
    Id: 6,
    Name: "SM_PROVOKE",
    Description: "Provoke",
    MaxLevel: 10,
    TargetType: "Attack",
    DamageFlags: {
      NoDamage: true,
    },
    Range: 9,
    Hit: "Single",
    HitCount: 1,
    Duration1: 30000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 4,
        },
        {
          Level: 2,
          Amount: 5,
        },
        {
          Level: 3,
          Amount: 6,
        },
        {
          Level: 4,
          Amount: 7,
        },
        {
          Level: 5,
          Amount: 8,
        },
        {
          Level: 6,
          Amount: 9,
        },
        {
          Level: 7,
          Amount: 10,
        },
        {
          Level: 8,
          Amount: 11,
        },
        {
          Level: 9,
          Amount: 12,
        },
        {
          Level: 10,
          Amount: 13,
        },
      ],
    },
    Status: "Provoke",
  },
  {
    Id: 7,
    Name: "SM_MAGNUM",
    Description: "Magnum Break",
    MaxLevel: 10,
    Type: "Weapon",
    TargetType: "Self",
    DamageFlags: {
      Splash: true,
    },
    Flags: {
      TargetTrap: true,
    },
    Hit: "Single",
    HitCount: 1,
    Element: "Fire",
    SplashArea: [
      {
        Level: 1,
        Area: 2,
      },
      {
        Level: 2,
        Area: 2,
      },
      {
        Level: 3,
        Area: 2,
      },
      {
        Level: 4,
        Area: 2,
      },
      {
        Level: 5,
        Area: 2,
      },
      {
        Level: 6,
        Area: 2,
      },
      {
        Level: 7,
        Area: 2,
      },
      {
        Level: 8,
        Area: 2,
      },
      {
        Level: 9,
        Area: 2,
      },
      {
        Level: 10,
        Area: 2,
      },
      {
        Level: 11,
        Area: 4,
      },
    ],
    Knockback: 2,
    CopyFlags: {
      Skill: {
        Plagiarism: true,
        Reproduce: true,
      },
    },
    AfterCastActDelay: 500,
    Duration2: 10000,
    Cooldown: 2000,
    Requires: {
      SpCost: 30,
    },
    Status: "Watk_Element",
  },
  {
    Id: 8,
    Name: "SM_ENDURE",
    Description: "Endure",
    MaxLevel: 10,
    Type: "Weapon",
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Hit: "Single",
    HitCount: 1,
    Duration1: [
      {
        Level: 1,
        Time: 10000,
      },
      {
        Level: 2,
        Time: 13000,
      },
      {
        Level: 3,
        Time: 16000,
      },
      {
        Level: 4,
        Time: 19000,
      },
      {
        Level: 5,
        Time: 22000,
      },
      {
        Level: 6,
        Time: 25000,
      },
      {
        Level: 7,
        Time: 28000,
      },
      {
        Level: 8,
        Time: 31000,
      },
      {
        Level: 9,
        Time: 34000,
      },
      {
        Level: 10,
        Time: 37000,
      },
    ],
    Duration2: 10000,
    Cooldown: 10000,
    Requires: {
      SpCost: 10,
    },
    Status: "Endure",
  },
  {
    Id: 9,
    Name: "MG_SRECOVERY",
    Description: "Increase SP Recovery",
    MaxLevel: 10,
  },
  {
    Id: 10,
    Name: "MG_SIGHT",
    Description: "Sight",
    MaxLevel: 1,
    Type: "Magic",
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
      Splash: true,
    },
    Hit: "Single",
    HitCount: 1,
    Element: "Fire",
    SplashArea: 3,
    CastCancel: true,
    Duration1: 10000,
    Requires: {
      SpCost: 10,
    },
    Status: "Sight",
  },
  {
    Id: 11,
    Name: "MG_NAPALMBEAT",
    Description: "Napalm Beat",
    MaxLevel: 10,
    Type: "Magic",
    TargetType: "Attack",
    DamageFlags: {
      Splash: true,
      SplashSplit: true,
    },
    Flags: {
      IsAutoShadowSpell: true,
      TargetTrap: true,
    },
    Range: 9,
    Hit: "Single",
    HitCount: 1,
    Element: "Ghost",
    SplashArea: 1,
    CopyFlags: {
      Skill: {
        Plagiarism: true,
        Reproduce: true,
      },
    },
    CastCancel: true,
    CastTime: 400,
    AfterCastActDelay: [
      {
        Level: 1,
        Time: 1000,
      },
      {
        Level: 2,
        Time: 1000,
      },
      {
        Level: 3,
        Time: 1000,
      },
      {
        Level: 4,
        Time: 900,
      },
      {
        Level: 5,
        Time: 900,
      },
      {
        Level: 6,
        Time: 800,
      },
      {
        Level: 7,
        Time: 800,
      },
      {
        Level: 8,
        Time: 700,
      },
      {
        Level: 9,
        Time: 600,
      },
      {
        Level: 10,
        Time: 500,
      },
    ],
    FixedCastTime: 100,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 9,
        },
        {
          Level: 2,
          Amount: 9,
        },
        {
          Level: 3,
          Amount: 9,
        },
        {
          Level: 4,
          Amount: 12,
        },
        {
          Level: 5,
          Amount: 12,
        },
        {
          Level: 6,
          Amount: 12,
        },
        {
          Level: 7,
          Amount: 15,
        },
        {
          Level: 8,
          Amount: 15,
        },
        {
          Level: 9,
          Amount: 15,
        },
        {
          Level: 10,
          Amount: 18,
        },
      ],
    },
  },
  {
    Id: 12,
    Name: "MG_SAFETYWALL",
    Description: "Safety Wall",
    MaxLevel: 10,
    Type: "Magic",
    TargetType: "Ground",
    DamageFlags: {
      NoDamage: true,
    },
    Range: 9,
    Hit: "Multi_Hit",
    HitCount: 1,
    Element: "Ghost",
    CastCancel: true,
    CastTime: [
      {
        Level: 1,
        Time: 3200,
      },
      {
        Level: 2,
        Time: 2880,
      },
      {
        Level: 3,
        Time: 2560,
      },
      {
        Level: 4,
        Time: 2240,
      },
      {
        Level: 5,
        Time: 1920,
      },
      {
        Level: 6,
        Time: 1600,
      },
      {
        Level: 7,
        Time: 1280,
      },
      {
        Level: 8,
        Time: 960,
      },
      {
        Level: 9,
        Time: 640,
      },
      {
        Level: 10,
        Time: 320,
      },
    ],
    Duration1: [
      {
        Level: 1,
        Time: 5000,
      },
      {
        Level: 2,
        Time: 10000,
      },
      {
        Level: 3,
        Time: 15000,
      },
      {
        Level: 4,
        Time: 20000,
      },
      {
        Level: 5,
        Time: 25000,
      },
      {
        Level: 6,
        Time: 30000,
      },
      {
        Level: 7,
        Time: 35000,
      },
      {
        Level: 8,
        Time: 40000,
      },
      {
        Level: 9,
        Time: 45000,
      },
      {
        Level: 10,
        Time: 50000,
      },
    ],
    FixedCastTime: [
      {
        Level: 1,
        Time: 800,
      },
      {
        Level: 2,
        Time: 720,
      },
      {
        Level: 3,
        Time: 640,
      },
      {
        Level: 4,
        Time: 560,
      },
      {
        Level: 5,
        Time: 480,
      },
      {
        Level: 6,
        Time: 400,
      },
      {
        Level: 7,
        Time: 320,
      },
      {
        Level: 8,
        Time: 240,
      },
      {
        Level: 9,
        Time: 160,
      },
      {
        Level: 10,
        Time: 80,
      },
    ],
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 30,
        },
        {
          Level: 2,
          Amount: 30,
        },
        {
          Level: 3,
          Amount: 30,
        },
        {
          Level: 4,
          Amount: 35,
        },
        {
          Level: 5,
          Amount: 35,
        },
        {
          Level: 6,
          Amount: 35,
        },
        {
          Level: 7,
          Amount: 40,
        },
        {
          Level: 8,
          Amount: 40,
        },
        {
          Level: 9,
          Amount: 40,
        },
        {
          Level: 10,
          Amount: 40,
        },
      ],
      ItemCost: [
        {
          Item: "Blue_Gemstone",
          Amount: 1,
        },
      ],
    },
    Unit: {
      Id: "Safetywall",
      Interval: -1,
      Flag: {
        NoEnemy: true,
        NoReiteration: true,
      },
    },
    Status: "Safetywall",
  },
  {
    Id: 13,
    Name: "MG_SOULSTRIKE",
    Description: "Soul Strike",
    MaxLevel: 10,
    Type: "Magic",
    TargetType: "Attack",
    Flags: {
      IsAutoShadowSpell: true,
    },
    Range: 9,
    Hit: "Multi_Hit",
    HitCount: [
      {
        Level: 1,
        Count: 1,
      },
      {
        Level: 2,
        Count: 1,
      },
      {
        Level: 3,
        Count: 2,
      },
      {
        Level: 4,
        Count: 2,
      },
      {
        Level: 5,
        Count: 3,
      },
      {
        Level: 6,
        Count: 3,
      },
      {
        Level: 7,
        Count: 4,
      },
      {
        Level: 8,
        Count: 4,
      },
      {
        Level: 9,
        Count: 5,
      },
      {
        Level: 10,
        Count: 5,
      },
    ],
    Element: "Ghost",
    CopyFlags: {
      Skill: {
        Plagiarism: true,
        Reproduce: true,
      },
    },
    CastCancel: true,
    CastTime: 400,
    AfterCastActDelay: 1400,
    FixedCastTime: 100,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 18,
        },
        {
          Level: 2,
          Amount: 14,
        },
        {
          Level: 3,
          Amount: 24,
        },
        {
          Level: 4,
          Amount: 20,
        },
        {
          Level: 5,
          Amount: 30,
        },
        {
          Level: 6,
          Amount: 26,
        },
        {
          Level: 7,
          Amount: 36,
        },
        {
          Level: 8,
          Amount: 32,
        },
        {
          Level: 9,
          Amount: 42,
        },
        {
          Level: 10,
          Amount: 38,
        },
      ],
    },
  },
  {
    Id: 14,
    Name: "MG_COLDBOLT",
    Description: "Cold Bolt",
    MaxLevel: 10,
    Type: "Magic",
    TargetType: "Attack",
    Flags: {
      IsAutoShadowSpell: true,
    },
    Range: 9,
    Hit: "Multi_Hit",
    HitCount: [
      {
        Level: 1,
        Count: 1,
      },
      {
        Level: 2,
        Count: 2,
      },
      {
        Level: 3,
        Count: 3,
      },
      {
        Level: 4,
        Count: 4,
      },
      {
        Level: 5,
        Count: 5,
      },
      {
        Level: 6,
        Count: 6,
      },
      {
        Level: 7,
        Count: 7,
      },
      {
        Level: 8,
        Count: 8,
      },
      {
        Level: 9,
        Count: 9,
      },
      {
        Level: 10,
        Count: 10,
      },
    ],
    Element: "Water",
    CopyFlags: {
      Skill: {
        Plagiarism: true,
        Reproduce: true,
      },
    },
    CastCancel: true,
    CastTime: [
      {
        Level: 1,
        Time: 640,
      },
      {
        Level: 2,
        Time: 960,
      },
      {
        Level: 3,
        Time: 1280,
      },
      {
        Level: 4,
        Time: 1600,
      },
      {
        Level: 5,
        Time: 1920,
      },
      {
        Level: 6,
        Time: 2100,
      },
      {
        Level: 7,
        Time: 1560,
      },
      {
        Level: 8,
        Time: 2880,
      },
      {
        Level: 9,
        Time: 3200,
      },
      {
        Level: 10,
        Time: 3200,
      },
    ],
    AfterCastActDelay: 300,
    FixedCastTime: [
      {
        Level: 1,
        Time: 160,
      },
      {
        Level: 2,
        Time: 240,
      },
      {
        Level: 3,
        Time: 320,
      },
      {
        Level: 4,
        Time: 400,
      },
      {
        Level: 5,
        Time: 480,
      },
      {
        Level: 6,
        Time: 700,
      },
      {
        Level: 7,
        Time: 640,
      },
      {
        Level: 8,
        Time: 720,
      },
      {
        Level: 9,
        Time: 800,
      },
      {
        Level: 10,
        Time: 1200,
      },
    ],
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 12,
        },
        {
          Level: 2,
          Amount: 14,
        },
        {
          Level: 3,
          Amount: 16,
        },
        {
          Level: 4,
          Amount: 18,
        },
        {
          Level: 5,
          Amount: 20,
        },
        {
          Level: 6,
          Amount: 22,
        },
        {
          Level: 7,
          Amount: 24,
        },
        {
          Level: 8,
          Amount: 26,
        },
        {
          Level: 9,
          Amount: 28,
        },
        {
          Level: 10,
          Amount: 30,
        },
      ],
    },
  },
  {
    Id: 15,
    Name: "MG_FROSTDIVER",
    Description: "Frost Diver",
    MaxLevel: 10,
    Type: "Magic",
    TargetType: "Attack",
    Flags: {
      IsAutoShadowSpell: true,
    },
    Range: 9,
    Hit: "Single",
    HitCount: 1,
    Element: "Water",
    CopyFlags: {
      Skill: {
        Plagiarism: true,
        Reproduce: true,
      },
    },
    CastCancel: true,
    CastTime: 640,
    AfterCastActDelay: 500,
    Duration2: [
      {
        Level: 1,
        Time: 3000,
      },
      {
        Level: 2,
        Time: 6000,
      },
      {
        Level: 3,
        Time: 9000,
      },
      {
        Level: 4,
        Time: 12000,
      },
      {
        Level: 5,
        Time: 15000,
      },
      {
        Level: 6,
        Time: 18000,
      },
      {
        Level: 7,
        Time: 21000,
      },
      {
        Level: 8,
        Time: 24000,
      },
      {
        Level: 9,
        Time: 27000,
      },
      {
        Level: 10,
        Time: 30000,
      },
      {
        Level: 11,
        Time: 30000,
      },
    ],
    FixedCastTime: 160,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 25,
        },
        {
          Level: 2,
          Amount: 24,
        },
        {
          Level: 3,
          Amount: 23,
        },
        {
          Level: 4,
          Amount: 22,
        },
        {
          Level: 5,
          Amount: 21,
        },
        {
          Level: 6,
          Amount: 20,
        },
        {
          Level: 7,
          Amount: 19,
        },
        {
          Level: 8,
          Amount: 18,
        },
        {
          Level: 9,
          Amount: 17,
        },
        {
          Level: 10,
          Amount: 16,
        },
      ],
    },
    Status: "Freeze",
  },
  {
    Id: 16,
    Name: "MG_STONECURSE",
    Description: "Stone Curse",
    MaxLevel: 10,
    Type: "Magic",
    TargetType: "Attack",
    DamageFlags: {
      NoDamage: true,
    },
    Range: 2,
    Hit: "Single",
    HitCount: 1,
    Element: "Earth",
    CastCancel: true,
    CastTime: 800,
    Duration1: 5000,
    Duration2: 17000,
    FixedCastTime: 200,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 25,
        },
        {
          Level: 2,
          Amount: 24,
        },
        {
          Level: 3,
          Amount: 23,
        },
        {
          Level: 4,
          Amount: 22,
        },
        {
          Level: 5,
          Amount: 21,
        },
        {
          Level: 6,
          Amount: 20,
        },
        {
          Level: 7,
          Amount: 19,
        },
        {
          Level: 8,
          Amount: 18,
        },
        {
          Level: 9,
          Amount: 17,
        },
        {
          Level: 10,
          Amount: 16,
        },
      ],
      ItemCost: [
        {
          Item: "Red_Gemstone",
          Amount: 1,
        },
      ],
    },
    Status: "StoneWait",
  },
  {
    Id: 17,
    Name: "MG_FIREBALL",
    Description: "Fire Ball",
    MaxLevel: 10,
    Type: "Magic",
    TargetType: "Attack",
    DamageFlags: {
      Splash: true,
    },
    Flags: {
      IsAutoShadowSpell: true,
      TargetTrap: true,
    },
    Range: 9,
    Hit: "Single",
    HitCount: 1,
    Element: "Fire",
    SplashArea: 2,
    CopyFlags: {
      Skill: {
        Plagiarism: true,
        Reproduce: true,
      },
    },
    CastCancel: true,
    CastTime: 800,
    AfterCastActDelay: 700,
    FixedCastTime: 200,
    Requires: {
      SpCost: 25,
    },
  },
  {
    Id: 18,
    Name: "MG_FIREWALL",
    Description: "Fire Wall",
    MaxLevel: 10,
    Type: "Magic",
    TargetType: "Ground",
    Flags: {
      IsAutoShadowSpell: true,
    },
    Range: 9,
    Hit: "Single",
    HitCount: 1,
    Element: "Fire",
    ActiveInstance: 3,
    Knockback: 2,
    CopyFlags: {
      Skill: {
        Plagiarism: true,
        Reproduce: true,
      },
    },
    CastCancel: true,
    CastTime: [
      {
        Level: 1,
        Time: 1600,
      },
      {
        Level: 2,
        Time: 1440,
      },
      {
        Level: 3,
        Time: 1280,
      },
      {
        Level: 4,
        Time: 1120,
      },
      {
        Level: 5,
        Time: 960,
      },
      {
        Level: 6,
        Time: 880,
      },
      {
        Level: 7,
        Time: 800,
      },
      {
        Level: 8,
        Time: 720,
      },
      {
        Level: 9,
        Time: 640,
      },
      {
        Level: 10,
        Time: 560,
      },
    ],
    Duration1: [
      {
        Level: 1,
        Time: 5000,
      },
      {
        Level: 2,
        Time: 6000,
      },
      {
        Level: 3,
        Time: 7000,
      },
      {
        Level: 4,
        Time: 8000,
      },
      {
        Level: 5,
        Time: 9000,
      },
      {
        Level: 6,
        Time: 10000,
      },
      {
        Level: 7,
        Time: 11000,
      },
      {
        Level: 8,
        Time: 12000,
      },
      {
        Level: 9,
        Time: 13000,
      },
      {
        Level: 10,
        Time: 14000,
      },
    ],
    FixedCastTime: [
      {
        Level: 1,
        Time: 400,
      },
      {
        Level: 2,
        Time: 360,
      },
      {
        Level: 3,
        Time: 320,
      },
      {
        Level: 4,
        Time: 280,
      },
      {
        Level: 5,
        Time: 240,
      },
      {
        Level: 6,
        Time: 220,
      },
      {
        Level: 7,
        Time: 200,
      },
      {
        Level: 8,
        Time: 180,
      },
      {
        Level: 9,
        Time: 160,
      },
      {
        Level: 10,
        Time: 140,
      },
    ],
    Requires: {
      SpCost: 40,
    },
    Unit: {
      Id: "Firewall",
      Layout: -1,
      Interval: 20,
      Target: "Enemy",
      Flag: {
        PathCheck: true,
        RemovedByFireRain: true,
      },
    },
  },
  {
    Id: 19,
    Name: "MG_FIREBOLT",
    Description: "Fire Bolt",
    MaxLevel: 10,
    Type: "Magic",
    TargetType: "Attack",
    Flags: {
      IsAutoShadowSpell: true,
    },
    Range: 9,
    Hit: "Multi_Hit",
    HitCount: [
      {
        Level: 1,
        Count: 1,
      },
      {
        Level: 2,
        Count: 2,
      },
      {
        Level: 3,
        Count: 3,
      },
      {
        Level: 4,
        Count: 4,
      },
      {
        Level: 5,
        Count: 5,
      },
      {
        Level: 6,
        Count: 6,
      },
      {
        Level: 7,
        Count: 7,
      },
      {
        Level: 8,
        Count: 8,
      },
      {
        Level: 9,
        Count: 9,
      },
      {
        Level: 10,
        Count: 10,
      },
    ],
    Element: "Fire",
    CopyFlags: {
      Skill: {
        Plagiarism: true,
        Reproduce: true,
      },
    },
    CastCancel: true,
    CastTime: [
      {
        Level: 1,
        Time: 640,
      },
      {
        Level: 2,
        Time: 960,
      },
      {
        Level: 3,
        Time: 1280,
      },
      {
        Level: 4,
        Time: 1600,
      },
      {
        Level: 5,
        Time: 1920,
      },
      {
        Level: 6,
        Time: 2100,
      },
      {
        Level: 7,
        Time: 1560,
      },
      {
        Level: 8,
        Time: 2880,
      },
      {
        Level: 9,
        Time: 3200,
      },
      {
        Level: 10,
        Time: 3200,
      },
    ],
    AfterCastActDelay: 300,
    FixedCastTime: [
      {
        Level: 1,
        Time: 160,
      },
      {
        Level: 2,
        Time: 240,
      },
      {
        Level: 3,
        Time: 320,
      },
      {
        Level: 4,
        Time: 400,
      },
      {
        Level: 5,
        Time: 480,
      },
      {
        Level: 6,
        Time: 700,
      },
      {
        Level: 7,
        Time: 640,
      },
      {
        Level: 8,
        Time: 720,
      },
      {
        Level: 9,
        Time: 800,
      },
      {
        Level: 10,
        Time: 1200,
      },
    ],
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 12,
        },
        {
          Level: 2,
          Amount: 14,
        },
        {
          Level: 3,
          Amount: 16,
        },
        {
          Level: 4,
          Amount: 18,
        },
        {
          Level: 5,
          Amount: 20,
        },
        {
          Level: 6,
          Amount: 22,
        },
        {
          Level: 7,
          Amount: 24,
        },
        {
          Level: 8,
          Amount: 26,
        },
        {
          Level: 9,
          Amount: 28,
        },
        {
          Level: 10,
          Amount: 30,
        },
      ],
    },
  },
  {
    Id: 20,
    Name: "MG_LIGHTNINGBOLT",
    Description: "Lightning Bolt",
    MaxLevel: 10,
    Type: "Magic",
    TargetType: "Attack",
    Flags: {
      IsAutoShadowSpell: true,
    },
    Range: 9,
    Hit: "Multi_Hit",
    HitCount: [
      {
        Level: 1,
        Count: 1,
      },
      {
        Level: 2,
        Count: 2,
      },
      {
        Level: 3,
        Count: 3,
      },
      {
        Level: 4,
        Count: 4,
      },
      {
        Level: 5,
        Count: 5,
      },
      {
        Level: 6,
        Count: 6,
      },
      {
        Level: 7,
        Count: 7,
      },
      {
        Level: 8,
        Count: 8,
      },
      {
        Level: 9,
        Count: 9,
      },
      {
        Level: 10,
        Count: 10,
      },
    ],
    Element: "Wind",
    CopyFlags: {
      Skill: {
        Plagiarism: true,
        Reproduce: true,
      },
    },
    CastCancel: true,
    CastTime: [
      {
        Level: 1,
        Time: 640,
      },
      {
        Level: 2,
        Time: 960,
      },
      {
        Level: 3,
        Time: 1280,
      },
      {
        Level: 4,
        Time: 1600,
      },
      {
        Level: 5,
        Time: 1920,
      },
      {
        Level: 6,
        Time: 2100,
      },
      {
        Level: 7,
        Time: 1560,
      },
      {
        Level: 8,
        Time: 2880,
      },
      {
        Level: 9,
        Time: 3200,
      },
      {
        Level: 10,
        Time: 3200,
      },
    ],
    AfterCastActDelay: 300,
    FixedCastTime: [
      {
        Level: 1,
        Time: 160,
      },
      {
        Level: 2,
        Time: 240,
      },
      {
        Level: 3,
        Time: 320,
      },
      {
        Level: 4,
        Time: 400,
      },
      {
        Level: 5,
        Time: 480,
      },
      {
        Level: 6,
        Time: 700,
      },
      {
        Level: 7,
        Time: 640,
      },
      {
        Level: 8,
        Time: 720,
      },
      {
        Level: 9,
        Time: 800,
      },
      {
        Level: 10,
        Time: 1200,
      },
    ],
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 12,
        },
        {
          Level: 2,
          Amount: 14,
        },
        {
          Level: 3,
          Amount: 16,
        },
        {
          Level: 4,
          Amount: 18,
        },
        {
          Level: 5,
          Amount: 20,
        },
        {
          Level: 6,
          Amount: 22,
        },
        {
          Level: 7,
          Amount: 24,
        },
        {
          Level: 8,
          Amount: 26,
        },
        {
          Level: 9,
          Amount: 28,
        },
        {
          Level: 10,
          Amount: 30,
        },
      ],
    },
  },
  {
    Id: 21,
    Name: "MG_THUNDERSTORM",
    Description: "Thunderstorm",
    MaxLevel: 10,
    Type: "Magic",
    TargetType: "Ground",
    Flags: {
      IsAutoShadowSpell: true,
    },
    Range: 9,
    Hit: "Multi_Hit",
    HitCount: [
      {
        Level: 1,
        Count: 1,
      },
      {
        Level: 2,
        Count: 2,
      },
      {
        Level: 3,
        Count: 3,
      },
      {
        Level: 4,
        Count: 4,
      },
      {
        Level: 5,
        Count: 5,
      },
      {
        Level: 6,
        Count: 6,
      },
      {
        Level: 7,
        Count: 7,
      },
      {
        Level: 8,
        Count: 8,
      },
      {
        Level: 9,
        Count: 9,
      },
      {
        Level: 10,
        Count: 10,
      },
    ],
    Element: "Wind",
    CopyFlags: {
      Skill: {
        Plagiarism: true,
        Reproduce: true,
      },
    },
    CastCancel: true,
    CastTime: [
      {
        Level: 1,
        Time: 640,
      },
      {
        Level: 2,
        Time: 1280,
      },
      {
        Level: 3,
        Time: 1920,
      },
      {
        Level: 4,
        Time: 2560,
      },
      {
        Level: 5,
        Time: 3200,
      },
      {
        Level: 6,
        Time: 3840,
      },
      {
        Level: 7,
        Time: 4480,
      },
      {
        Level: 8,
        Time: 5120,
      },
      {
        Level: 9,
        Time: 5760,
      },
      {
        Level: 10,
        Time: 4500,
      },
    ],
    AfterCastActDelay: 2000,
    Duration1: 100,
    FixedCastTime: [
      {
        Level: 1,
        Time: 160,
      },
      {
        Level: 2,
        Time: 320,
      },
      {
        Level: 3,
        Time: 480,
      },
      {
        Level: 4,
        Time: 640,
      },
      {
        Level: 5,
        Time: 800,
      },
      {
        Level: 6,
        Time: 960,
      },
      {
        Level: 7,
        Time: 1120,
      },
      {
        Level: 8,
        Time: 1280,
      },
      {
        Level: 9,
        Time: 1440,
      },
      {
        Level: 10,
        Time: 1500,
      },
    ],
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 29,
        },
        {
          Level: 2,
          Amount: 34,
        },
        {
          Level: 3,
          Amount: 39,
        },
        {
          Level: 4,
          Amount: 44,
        },
        {
          Level: 5,
          Amount: 49,
        },
        {
          Level: 6,
          Amount: 54,
        },
        {
          Level: 7,
          Amount: 59,
        },
        {
          Level: 8,
          Amount: 64,
        },
        {
          Level: 9,
          Amount: 69,
        },
        {
          Level: 10,
          Amount: 74,
        },
      ],
    },
    Unit: {
      Id: "Dummyskill",
      Range: [
        {
          Level: 1,
          Size: 2,
        },
        {
          Level: 2,
          Size: 2,
        },
        {
          Level: 3,
          Size: 2,
        },
        {
          Level: 4,
          Size: 2,
        },
        {
          Level: 5,
          Size: 2,
        },
        {
          Level: 6,
          Size: 2,
        },
        {
          Level: 7,
          Size: 2,
        },
        {
          Level: 8,
          Size: 2,
        },
        {
          Level: 9,
          Size: 2,
        },
        {
          Level: 10,
          Size: 2,
        },
        {
          Level: 11,
          Size: 3,
        },
      ],
      Interval: 1000,
      Target: "Enemy",
      Flag: {
        PathCheck: true,
      },
    },
  },
  {
    Id: 22,
    Name: "AL_DP",
    Description: "Divine Protection",
    MaxLevel: 10,
    Type: "Weapon",
  },
  {
    Id: 23,
    Name: "AL_DEMONBANE",
    Description: "Demon Bane",
    MaxLevel: 10,
    Type: "Weapon",
  },
  {
    Id: 24,
    Name: "AL_RUWACH",
    Description: "Ruwach",
    MaxLevel: 1,
    Type: "Magic",
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
      Splash: true,
    },
    Hit: "Single",
    HitCount: 1,
    Element: "Holy",
    SplashArea: 2,
    CopyFlags: {
      Skill: {
        Plagiarism: true,
        Reproduce: true,
      },
    },
    CastCancel: true,
    Duration1: 10000,
    Requires: {
      SpCost: 10,
    },
    Status: "Ruwach",
  },
  {
    Id: 25,
    Name: "AL_PNEUMA",
    Description: "Pneuma",
    MaxLevel: 1,
    Type: "Magic",
    TargetType: "Ground",
    DamageFlags: {
      NoDamage: true,
    },
    Range: 9,
    Hit: "Single",
    HitCount: 1,
    CastCancel: true,
    Duration1: 10000,
    Requires: {
      SpCost: 10,
    },
    Unit: {
      Id: "Pneuma",
      Layout: 1,
      Interval: -1,
      Flag: {
        NoEnemy: true,
        NoReiteration: true,
        RangedSingleUnit: true,
      },
    },
    Status: "Pneuma",
  },
  {
    Id: 26,
    Name: "AL_TELEPORT",
    Description: "Teleport",
    MaxLevel: 2,
    Type: "Magic",
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      IgnoreKagehumi: true,
      AllowOnMado: true,
    },
    Hit: "Single",
    HitCount: 1,
    CastCancel: true,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 10,
        },
        {
          Level: 2,
          Amount: 9,
        },
      ],
    },
  },
  {
    Id: 27,
    Name: "AL_WARP",
    Description: "Warp Portal",
    MaxLevel: 4,
    Type: "Magic",
    TargetType: "Ground",
    DamageFlags: {
      NoDamage: true,
    },
    Range: 9,
    Hit: "Single",
    HitCount: 1,
    ActiveInstance: 3,
    CastCancel: true,
    AfterCastActDelay: 1000,
    Duration1: [
      {
        Level: 1,
        Time: 10000,
      },
      {
        Level: 2,
        Time: 15000,
      },
      {
        Level: 3,
        Time: 20000,
      },
      {
        Level: 4,
        Time: 25000,
      },
    ],
    FixedCastTime: 1000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 35,
        },
        {
          Level: 2,
          Amount: 32,
        },
        {
          Level: 3,
          Amount: 29,
        },
        {
          Level: 4,
          Amount: 26,
        },
      ],
      ItemCost: [
        {
          Item: "Blue_Gemstone",
          Amount: 1,
        },
      ],
    },
    Unit: {
      Id: "Warp_Active",
      AlternateId: "Warp_Waiting",
      Interval: -1,
      Flag: {
        NoReiteration: true,
        NoFootSet: true,
        NoOverlap: true,
      },
    },
  },
  {
    Id: 28,
    Name: "AL_HEAL",
    Description: "Heal",
    MaxLevel: 10,
    Type: "Magic",
    TargetType: "Support",
    DamageFlags: {
      NoDamage: true,
      IgnoreDefense: true,
    },
    Flags: {
      IsAutoShadowSpell: true,
    },
    Range: 9,
    Hit: "Single",
    HitCount: 1,
    Element: "Holy",
    CopyFlags: {
      Skill: {
        Plagiarism: true,
        Reproduce: true,
      },
    },
    CastCancel: true,
    AfterCastActDelay: 1000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 13,
        },
        {
          Level: 2,
          Amount: 16,
        },
        {
          Level: 3,
          Amount: 19,
        },
        {
          Level: 4,
          Amount: 22,
        },
        {
          Level: 5,
          Amount: 25,
        },
        {
          Level: 6,
          Amount: 28,
        },
        {
          Level: 7,
          Amount: 31,
        },
        {
          Level: 8,
          Amount: 34,
        },
        {
          Level: 9,
          Amount: 37,
        },
        {
          Level: 10,
          Amount: 40,
        },
      ],
    },
  },
  {
    Id: 29,
    Name: "AL_INCAGI",
    Description: "Increase AGI",
    MaxLevel: 10,
    Type: "Magic",
    TargetType: "Support",
    DamageFlags: {
      NoDamage: true,
    },
    Range: 9,
    Hit: "Single",
    HitCount: 1,
    CastCancel: true,
    CastTime: 800,
    AfterCastActDelay: 1000,
    Duration1: [
      {
        Level: 1,
        Time: 60000,
      },
      {
        Level: 2,
        Time: 80000,
      },
      {
        Level: 3,
        Time: 100000,
      },
      {
        Level: 4,
        Time: 120000,
      },
      {
        Level: 5,
        Time: 140000,
      },
      {
        Level: 6,
        Time: 160000,
      },
      {
        Level: 7,
        Time: 180000,
      },
      {
        Level: 8,
        Time: 200000,
      },
      {
        Level: 9,
        Time: 220000,
      },
      {
        Level: 10,
        Time: 240000,
      },
    ],
    FixedCastTime: 200,
    Requires: {
      HpCost: 15,
      SpCost: [
        {
          Level: 1,
          Amount: 18,
        },
        {
          Level: 2,
          Amount: 21,
        },
        {
          Level: 3,
          Amount: 24,
        },
        {
          Level: 4,
          Amount: 27,
        },
        {
          Level: 5,
          Amount: 30,
        },
        {
          Level: 6,
          Amount: 33,
        },
        {
          Level: 7,
          Amount: 36,
        },
        {
          Level: 8,
          Amount: 39,
        },
        {
          Level: 9,
          Amount: 42,
        },
        {
          Level: 10,
          Amount: 45,
        },
      ],
    },
    Status: "IncreaseAgi",
  },
  {
    Id: 30,
    Name: "AL_DECAGI",
    Description: "Decrease AGI",
    MaxLevel: 10,
    Type: "Magic",
    TargetType: "Attack",
    DamageFlags: {
      NoDamage: true,
    },
    Range: 9,
    Hit: "Single",
    HitCount: 1,
    CastCancel: true,
    CastTime: 750,
    AfterCastActDelay: 1000,
    Duration1: [
      {
        Level: 1,
        Time: 40000,
      },
      {
        Level: 2,
        Time: 50000,
      },
      {
        Level: 3,
        Time: 60000,
      },
      {
        Level: 4,
        Time: 70000,
      },
      {
        Level: 5,
        Time: 80000,
      },
      {
        Level: 6,
        Time: 90000,
      },
      {
        Level: 7,
        Time: 100000,
      },
      {
        Level: 8,
        Time: 110000,
      },
      {
        Level: 9,
        Time: 120000,
      },
      {
        Level: 10,
        Time: 130000,
      },
      {
        Level: 11,
        Time: 130000,
      },
    ],
    FixedCastTime: 250,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 15,
        },
        {
          Level: 2,
          Amount: 17,
        },
        {
          Level: 3,
          Amount: 19,
        },
        {
          Level: 4,
          Amount: 21,
        },
        {
          Level: 5,
          Amount: 23,
        },
        {
          Level: 6,
          Amount: 25,
        },
        {
          Level: 7,
          Amount: 27,
        },
        {
          Level: 8,
          Amount: 29,
        },
        {
          Level: 9,
          Amount: 31,
        },
        {
          Level: 10,
          Amount: 33,
        },
      ],
    },
    Status: "DecreaseAgi",
  },
  {
    Id: 31,
    Name: "AL_HOLYWATER",
    Description: "Aqua Benedicta",
    MaxLevel: 1,
    Type: "Magic",
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Hit: "Single",
    HitCount: 1,
    CastCancel: true,
    CastTime: 800,
    AfterCastActDelay: 500,
    FixedCastTime: 200,
    Requires: {
      SpCost: 10,
      State: "Water",
    },
  },
  {
    Id: 32,
    Name: "AL_CRUCIS",
    Description: "Signum Crucis",
    MaxLevel: 10,
    Type: "Magic",
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
      Splash: true,
    },
    Hit: "Single",
    HitCount: 1,
    SplashArea: 15,
    CastCancel: true,
    CastTime: 350,
    AfterCastActDelay: 2000,
    FixedCastTime: 150,
    Requires: {
      SpCost: 35,
    },
    Status: "SignumCrucis",
  },
  {
    Id: 33,
    Name: "AL_ANGELUS",
    Description: "Angelus",
    MaxLevel: 10,
    Type: "Magic",
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
      Splash: true,
    },
    Hit: "Single",
    HitCount: 1,
    SplashArea: 18,
    CastCancel: true,
    CastTime: 350,
    AfterCastActDelay: 3500,
    Duration1: [
      {
        Level: 1,
        Time: 30000,
      },
      {
        Level: 2,
        Time: 60000,
      },
      {
        Level: 3,
        Time: 90000,
      },
      {
        Level: 4,
        Time: 120000,
      },
      {
        Level: 5,
        Time: 150000,
      },
      {
        Level: 6,
        Time: 180000,
      },
      {
        Level: 7,
        Time: 210000,
      },
      {
        Level: 8,
        Time: 240000,
      },
      {
        Level: 9,
        Time: 270000,
      },
      {
        Level: 10,
        Time: 300000,
      },
    ],
    FixedCastTime: 150,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 23,
        },
        {
          Level: 2,
          Amount: 26,
        },
        {
          Level: 3,
          Amount: 29,
        },
        {
          Level: 4,
          Amount: 32,
        },
        {
          Level: 5,
          Amount: 35,
        },
        {
          Level: 6,
          Amount: 38,
        },
        {
          Level: 7,
          Amount: 41,
        },
        {
          Level: 8,
          Amount: 44,
        },
        {
          Level: 9,
          Amount: 47,
        },
        {
          Level: 10,
          Amount: 50,
        },
      ],
    },
    Status: "Angelus",
  },
  {
    Id: 34,
    Name: "AL_BLESSING",
    Description: "Blessing",
    MaxLevel: 10,
    Type: "Magic",
    TargetType: "Support",
    DamageFlags: {
      NoDamage: true,
    },
    Range: 9,
    Hit: "Single",
    HitCount: 1,
    CastCancel: true,
    Duration1: [
      {
        Level: 1,
        Time: 60000,
      },
      {
        Level: 2,
        Time: 80000,
      },
      {
        Level: 3,
        Time: 100000,
      },
      {
        Level: 4,
        Time: 120000,
      },
      {
        Level: 5,
        Time: 140000,
      },
      {
        Level: 6,
        Time: 160000,
      },
      {
        Level: 7,
        Time: 180000,
      },
      {
        Level: 8,
        Time: 200000,
      },
      {
        Level: 9,
        Time: 220000,
      },
      {
        Level: 10,
        Time: 240000,
      },
    ],
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 28,
        },
        {
          Level: 2,
          Amount: 32,
        },
        {
          Level: 3,
          Amount: 36,
        },
        {
          Level: 4,
          Amount: 40,
        },
        {
          Level: 5,
          Amount: 44,
        },
        {
          Level: 6,
          Amount: 48,
        },
        {
          Level: 7,
          Amount: 52,
        },
        {
          Level: 8,
          Amount: 56,
        },
        {
          Level: 9,
          Amount: 60,
        },
        {
          Level: 10,
          Amount: 64,
        },
      ],
    },
    Status: "Blessing",
  },
  {
    Id: 35,
    Name: "AL_CURE",
    Description: "Cure",
    MaxLevel: 1,
    Type: "Magic",
    TargetType: "Support",
    DamageFlags: {
      NoDamage: true,
    },
    Range: 9,
    Hit: "Single",
    HitCount: 1,
    CastCancel: true,
    AfterCastActDelay: 1000,
    Duration2: 6000,
    Requires: {
      SpCost: 15,
    },
  },
  {
    Id: 36,
    Name: "MC_INCCARRY",
    Description: "Enlarge Weight Limit",
    MaxLevel: 10,
  },
  {
    Id: 37,
    Name: "MC_DISCOUNT",
    Description: "Discount",
    MaxLevel: 10,
  },
  {
    Id: 38,
    Name: "MC_OVERCHARGE",
    Description: "Overcharge",
    MaxLevel: 10,
  },
  {
    Id: 39,
    Name: "MC_PUSHCART",
    Description: "Pushcart",
    MaxLevel: 10,
    Range: 1,
  },
  {
    Id: 40,
    Name: "MC_IDENTIFY",
    Description: "Item Appraisal",
    MaxLevel: 1,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      AllowOnMado: true,
    },
    Range: 1,
    Hit: "Single",
    HitCount: 1,
    Requires: {
      SpCost: 10,
    },
  },
  {
    Id: 41,
    Name: "MC_VENDING",
    Description: "Vending",
    MaxLevel: 10,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      AllowOnMado: true,
    },
    Range: 1,
    Hit: "Single",
    HitCount: 1,
    Requires: {
      SpCost: 30,
      State: "Cart",
    },
  },
  {
    Id: 42,
    Name: "MC_MAMMONITE",
    Description: "Mammonite",
    MaxLevel: 10,
    Type: "Weapon",
    TargetType: "Attack",
    Flags: {
      AllowOnMado: true,
    },
    Range: -1,
    Hit: "Single",
    HitCount: 1,
    Element: "Weapon",
    CopyFlags: {
      Skill: {
        Plagiarism: true,
        Reproduce: true,
      },
    },
    Requires: {
      SpCost: 5,
      ZenyCost: [
        {
          Level: 1,
          Amount: 100,
        },
        {
          Level: 2,
          Amount: 200,
        },
        {
          Level: 3,
          Amount: 300,
        },
        {
          Level: 4,
          Amount: 400,
        },
        {
          Level: 5,
          Amount: 500,
        },
        {
          Level: 6,
          Amount: 600,
        },
        {
          Level: 7,
          Amount: 700,
        },
        {
          Level: 8,
          Amount: 800,
        },
        {
          Level: 9,
          Amount: 900,
        },
        {
          Level: 10,
          Amount: 1000,
        },
      ],
    },
  },
  {
    Id: 43,
    Name: "AC_OWL",
    Description: "Owl's Eye",
    MaxLevel: 10,
  },
  {
    Id: 44,
    Name: "AC_VULTURE",
    Description: "Vulture's Eye",
    MaxLevel: 10,
  },
  {
    Id: 45,
    Name: "AC_CONCENTRATION",
    Description: "Improve Concentration",
    MaxLevel: 10,
    Type: "Weapon",
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
      Splash: true,
    },
    Hit: "Single",
    HitCount: 1,
    SplashArea: 3,
    Duration1: [
      {
        Level: 1,
        Time: 60000,
      },
      {
        Level: 2,
        Time: 80000,
      },
      {
        Level: 3,
        Time: 100000,
      },
      {
        Level: 4,
        Time: 120000,
      },
      {
        Level: 5,
        Time: 140000,
      },
      {
        Level: 6,
        Time: 160000,
      },
      {
        Level: 7,
        Time: 180000,
      },
      {
        Level: 8,
        Time: 200000,
      },
      {
        Level: 9,
        Time: 220000,
      },
      {
        Level: 10,
        Time: 240000,
      },
    ],
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 25,
        },
        {
          Level: 2,
          Amount: 30,
        },
        {
          Level: 3,
          Amount: 35,
        },
        {
          Level: 4,
          Amount: 40,
        },
        {
          Level: 5,
          Amount: 45,
        },
        {
          Level: 6,
          Amount: 50,
        },
        {
          Level: 7,
          Amount: 55,
        },
        {
          Level: 8,
          Amount: 60,
        },
        {
          Level: 9,
          Amount: 65,
        },
        {
          Level: 10,
          Amount: 70,
        },
      ],
    },
    Status: "Concentrate",
  },
  {
    Id: 46,
    Name: "AC_DOUBLE",
    Description: "Double Strafe",
    MaxLevel: 10,
    Type: "Weapon",
    TargetType: "Attack",
    Flags: {
      AlterRangeVulture: true,
    },
    Range: -9,
    Hit: "Multi_Hit",
    HitCount: 2,
    Element: "Weapon",
    CopyFlags: {
      Skill: {
        Plagiarism: true,
        Reproduce: true,
      },
    },
    AfterCastActDelay: 100,
    Duration1: 100,
    Requires: {
      SpCost: 12,
      Weapon: {
        Bow: true,
      },
      Ammo: {
        Arrow: true,
      },
      AmmoAmount: 1,
    },
  },
  {
    Id: 47,
    Name: "AC_SHOWER",
    Description: "Arrow Shower",
    MaxLevel: 10,
    Type: "Weapon",
    TargetType: "Ground",
    DamageFlags: {
      Splash: true,
    },
    Flags: {
      TargetTrap: true,
      IgnoreLandProtector: true,
      AlterRangeVulture: true,
    },
    Range: -9,
    Hit: "Single",
    HitCount: 1,
    Element: "Weapon",
    SplashArea: [
      {
        Level: 1,
        Area: 1,
      },
      {
        Level: 2,
        Area: 1,
      },
      {
        Level: 3,
        Area: 1,
      },
      {
        Level: 4,
        Area: 1,
      },
      {
        Level: 5,
        Area: 1,
      },
      {
        Level: 6,
        Area: 2,
      },
      {
        Level: 7,
        Area: 2,
      },
      {
        Level: 8,
        Area: 2,
      },
      {
        Level: 9,
        Area: 2,
      },
      {
        Level: 10,
        Area: 2,
      },
    ],
    Knockback: 2,
    CopyFlags: {
      Skill: {
        Plagiarism: true,
        Reproduce: true,
      },
    },
    AfterCastActDelay: 500,
    Duration1: 100,
    Requires: {
      SpCost: 15,
      Weapon: {
        Bow: true,
      },
      Ammo: {
        Arrow: true,
      },
      AmmoAmount: 1,
    },
  },
  {
    Id: 48,
    Name: "TF_DOUBLE",
    Description: "Double Attack",
    MaxLevel: 10,
    Type: "Weapon",
    DamageFlags: {
      Critical: true,
    },
    Range: -1,
    Hit: "Multi_Hit",
    HitCount: 2,
    Element: "Weapon",
  },
  {
    Id: 49,
    Name: "TF_MISS",
    Description: "Improve Dodge",
    MaxLevel: 10,
    Type: "Weapon",
  },
  {
    Id: 50,
    Name: "TF_STEAL",
    Description: "Steal",
    MaxLevel: 10,
    Type: "Weapon",
    TargetType: "Attack",
    DamageFlags: {
      NoDamage: true,
    },
    Range: 1,
    Hit: "Single",
    HitCount: 1,
    Requires: {
      SpCost: 10,
    },
  },
  {
    Id: 51,
    Name: "TF_HIDING",
    Description: "Hiding",
    MaxLevel: 10,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      AllowWhenHidden: true,
      IgnoreKagehumi: true,
      IgnoreWugBite: true,
      Toggleable: true,
    },
    Range: 1,
    Hit: "Single",
    HitCount: 1,
    Duration1: [
      {
        Level: 1,
        Time: 30000,
      },
      {
        Level: 2,
        Time: 60000,
      },
      {
        Level: 3,
        Time: 90000,
      },
      {
        Level: 4,
        Time: 120000,
      },
      {
        Level: 5,
        Time: 150000,
      },
      {
        Level: 6,
        Time: 180000,
      },
      {
        Level: 7,
        Time: 210000,
      },
      {
        Level: 8,
        Time: 240000,
      },
      {
        Level: 9,
        Time: 270000,
      },
      {
        Level: 10,
        Time: 300000,
      },
    ],
    Requires: {
      SpCost: 10,
    },
    Status: "Hiding",
  },
  {
    Id: 52,
    Name: "TF_POISON",
    Description: "Envenom",
    MaxLevel: 10,
    Type: "Weapon",
    TargetType: "Attack",
    Range: -2,
    Hit: "Single",
    HitCount: 1,
    Element: "Poison",
    CopyFlags: {
      Skill: {
        Plagiarism: true,
        Reproduce: true,
      },
    },
    Duration2: 18000,
    Requires: {
      SpCost: 12,
    },
    Status: "Poison",
  },
  {
    Id: 53,
    Name: "TF_DETOXIFY",
    Description: "Detoxify",
    MaxLevel: 1,
    Type: "Weapon",
    TargetType: "Support",
    DamageFlags: {
      NoDamage: true,
    },
    Range: 9,
    Hit: "Single",
    HitCount: 1,
    Element: "Poison",
    Requires: {
      SpCost: 10,
    },
  },
  {
    Id: 54,
    Name: "ALL_RESURRECTION",
    Description: "Resurrection",
    MaxLevel: 4,
    Type: "Magic",
    TargetType: "Support",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      IsAutoShadowSpell: true,
    },
    Range: 9,
    Hit: "Single",
    HitCount: 1,
    Element: "Holy",
    CopyFlags: {
      Skill: {
        Plagiarism: true,
        Reproduce: true,
      },
    },
    CastCancel: true,
    CastTime: [
      {
        Level: 1,
        Time: 4800,
      },
      {
        Level: 2,
        Time: 3200,
      },
      {
        Level: 3,
        Time: 1600,
      },
    ],
    AfterCastActDelay: [
      {
        Level: 2,
        Time: 1000,
      },
      {
        Level: 3,
        Time: 2000,
      },
      {
        Level: 4,
        Time: 3000,
      },
    ],
    FixedCastTime: [
      {
        Level: 1,
        Time: 1200,
      },
      {
        Level: 2,
        Time: 800,
      },
      {
        Level: 3,
        Time: 400,
      },
      {
        Level: 4,
        Time: 0,
      },
    ],
    Requires: {
      SpCost: 60,
      ItemCost: [
        {
          Item: "Blue_Gemstone",
          Amount: 1,
        },
      ],
    },
  },
  {
    Id: 55,
    Name: "KN_SPEARMASTERY",
    Description: "Spear Mastery",
    MaxLevel: 10,
    Type: "Weapon",
  },
  {
    Id: 56,
    Name: "KN_PIERCE",
    Description: "Pierce",
    MaxLevel: 10,
    Type: "Weapon",
    TargetType: "Attack",
    Range: -2,
    Hit: "Multi_Hit",
    HitCount: 3,
    Element: "Weapon",
    Requires: {
      SpCost: 7,
      Weapon: {
        "1hSpear": true,
        "2hSpear": true,
      },
    },
  },
  {
    Id: 57,
    Name: "KN_BRANDISHSPEAR",
    Description: "Brandish Spear",
    MaxLevel: 10,
    Type: "Weapon",
    TargetType: "Attack",
    DamageFlags: {
      NoDamage: true,
    },
    Range: -2,
    Hit: "Multi_Hit",
    HitCount: -3,
    Element: "Weapon",
    SplashArea: 2,
    ActiveInstance: 5,
    Knockback: 2,
    CastTime: 500,
    Duration1: 1000,
    Cooldown: 1000,
    FixedCastTime: 350,
    Requires: {
      SpCost: 24,
      Weapon: {
        "1hSpear": true,
        "2hSpear": true,
      },
      State: "Riding",
    },
  },
  {
    Id: 58,
    Name: "KN_SPEARSTAB",
    Description: "Spear Stab",
    MaxLevel: 10,
    Type: "Weapon",
    TargetType: "Attack",
    DamageFlags: {
      Splash: true,
    },
    Flags: {
      TargetTrap: true,
    },
    Range: -4,
    Hit: "Single",
    HitCount: 1,
    Element: "Weapon",
    Knockback: 6,
    Requires: {
      SpCost: 9,
      Weapon: {
        "1hSpear": true,
        "2hSpear": true,
      },
    },
  },
  {
    Id: 59,
    Name: "KN_SPEARBOOMERANG",
    Description: "Spear Boomerang",
    MaxLevel: 5,
    Type: "Weapon",
    TargetType: "Attack",
    Range: [
      {
        Level: 1,
        Size: 3,
      },
      {
        Level: 2,
        Size: 5,
      },
      {
        Level: 3,
        Size: 7,
      },
      {
        Level: 4,
        Size: 9,
      },
      {
        Level: 5,
        Size: 11,
      },
    ],
    Hit: "Single",
    HitCount: 1,
    Element: "Weapon",
    AfterCastActDelay: 1000,
    Requires: {
      SpCost: 10,
      Weapon: {
        "1hSpear": true,
        "2hSpear": true,
      },
    },
  },
  {
    Id: 60,
    Name: "KN_TWOHANDQUICKEN",
    Description: "Twohand Quicken",
    MaxLevel: 10,
    Type: "Weapon",
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Hit: "Single",
    HitCount: 1,
    Duration1: [
      {
        Level: 1,
        Time: 30000,
      },
      {
        Level: 2,
        Time: 60000,
      },
      {
        Level: 3,
        Time: 90000,
      },
      {
        Level: 4,
        Time: 120000,
      },
      {
        Level: 5,
        Time: 150000,
      },
      {
        Level: 6,
        Time: 180000,
      },
      {
        Level: 7,
        Time: 210000,
      },
      {
        Level: 8,
        Time: 240000,
      },
      {
        Level: 9,
        Time: 270000,
      },
      {
        Level: 10,
        Time: 300000,
      },
      {
        Level: 11,
        Time: 300000,
      },
    ],
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 14,
        },
        {
          Level: 2,
          Amount: 18,
        },
        {
          Level: 3,
          Amount: 22,
        },
        {
          Level: 4,
          Amount: 26,
        },
        {
          Level: 5,
          Amount: 30,
        },
        {
          Level: 6,
          Amount: 34,
        },
        {
          Level: 7,
          Amount: 38,
        },
        {
          Level: 8,
          Amount: 42,
        },
        {
          Level: 9,
          Amount: 46,
        },
        {
          Level: 10,
          Amount: 50,
        },
      ],
      Weapon: {
        "2hSword": true,
      },
    },
    Status: "TwoHandQuicken",
  },
  {
    Id: 61,
    Name: "KN_AUTOCOUNTER",
    Description: "Counter Attack",
    MaxLevel: 5,
    Type: "Weapon",
    TargetType: "Self",
    DamageFlags: {
      Critical: true,
    },
    Hit: "Single",
    HitCount: 1,
    Element: "Weapon",
    Duration1: [
      {
        Level: 1,
        Time: 400,
      },
      {
        Level: 2,
        Time: 800,
      },
      {
        Level: 3,
        Time: 1200,
      },
      {
        Level: 4,
        Time: 1600,
      },
      {
        Level: 5,
        Time: 2000,
      },
    ],
    Requires: {
      SpCost: 3,
      Weapon: {
        Fist: true,
        Dagger: true,
        "1hSword": true,
        "2hSword": true,
        "1hSpear": true,
        "2hSpear": true,
        "1hAxe": true,
        "2hAxe": true,
        Mace: true,
        "2hMace": true,
        Staff: true,
        Knuckle: true,
        Musical: true,
        Whip: true,
        Book: true,
        Katar: true,
        Revolver: true,
        Rifle: true,
        Gatling: true,
        Shotgun: true,
        Grenade: true,
        Huuma: true,
      },
    },
    Status: "AutoCounter",
  },
  {
    Id: 62,
    Name: "KN_BOWLINGBASH",
    Description: "Bowling Bash",
    MaxLevel: 10,
    Type: "Weapon",
    TargetType: "Attack",
    Flags: {
      TargetTrap: true,
    },
    Range: -2,
    Hit: "Single",
    HitCount: 2,
    Element: "Weapon",
    SplashArea: 2,
    Knockback: [
      {
        Level: 1,
        Amount: 1,
      },
      {
        Level: 2,
        Amount: 1,
      },
      {
        Level: 3,
        Amount: 2,
      },
      {
        Level: 4,
        Amount: 2,
      },
      {
        Level: 5,
        Amount: 3,
      },
      {
        Level: 6,
        Amount: 3,
      },
      {
        Level: 7,
        Amount: 4,
      },
      {
        Level: 8,
        Amount: 4,
      },
      {
        Level: 9,
        Amount: 5,
      },
      {
        Level: 10,
        Amount: 5,
      },
    ],
    CopyFlags: {
      Skill: {
        Plagiarism: true,
        Reproduce: true,
      },
    },
    CastTime: 350,
    AfterCastActDelay: 300,
    Duration1: 1000,
    Cooldown: 1000,
    FixedCastTime: 350,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 13,
        },
        {
          Level: 2,
          Amount: 14,
        },
        {
          Level: 3,
          Amount: 15,
        },
        {
          Level: 4,
          Amount: 16,
        },
        {
          Level: 5,
          Amount: 17,
        },
        {
          Level: 6,
          Amount: 18,
        },
        {
          Level: 7,
          Amount: 19,
        },
        {
          Level: 8,
          Amount: 20,
        },
        {
          Level: 9,
          Amount: 21,
        },
        {
          Level: 10,
          Amount: 22,
        },
      ],
    },
  },
  {
    Id: 63,
    Name: "KN_RIDING",
    Description: "Peco Peco Riding",
    MaxLevel: 1,
    Type: "Weapon",
  },
  {
    Id: 64,
    Name: "KN_CAVALIERMASTERY",
    Description: "Cavalier Mastery",
    MaxLevel: 5,
    Type: "Weapon",
  },
  {
    Id: 65,
    Name: "PR_MACEMASTERY",
    Description: "Mace Mastery",
    MaxLevel: 10,
    Type: "Weapon",
  },
  {
    Id: 66,
    Name: "PR_IMPOSITIO",
    Description: "Impositio Manus",
    MaxLevel: 5,
    Type: "Magic",
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Hit: "Single",
    HitCount: 1,
    SplashArea: 18,
    CastCancel: true,
    CastTime: 1000,
    AfterCastActDelay: 1000,
    Duration1: 120000,
    Cooldown: 30000,
    FixedCastTime: 500,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 59,
        },
        {
          Level: 2,
          Amount: 62,
        },
        {
          Level: 3,
          Amount: 65,
        },
        {
          Level: 4,
          Amount: 68,
        },
        {
          Level: 5,
          Amount: 71,
        },
      ],
    },
    Status: "Impositio",
  },
  {
    Id: 67,
    Name: "PR_SUFFRAGIUM",
    Description: "Suffragium",
    MaxLevel: 3,
    Type: "Magic",
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
      Splash: true,
    },
    Hit: "Single",
    HitCount: 1,
    SplashArea: 18,
    CastCancel: true,
    CastTime: 1000,
    AfterCastActDelay: 1000,
    Duration1: 60000,
    Cooldown: 30000,
    FixedCastTime: 500,
    Requires: {
      SpCost: 8,
    },
    Status: "Suffragium",
  },
  {
    Id: 68,
    Name: "PR_ASPERSIO",
    Description: "Aspersio",
    MaxLevel: 5,
    Type: "Magic",
    TargetType: "Support",
    DamageFlags: {
      NoDamage: true,
      IgnoreElement: true,
      IgnoreDefense: true,
    },
    Range: 9,
    Hit: "Single",
    HitCount: 1,
    Element: "Holy",
    CopyFlags: {
      Skill: {
        Plagiarism: true,
        Reproduce: true,
      },
    },
    CastCancel: true,
    AfterCastActDelay: 2000,
    Duration1: [
      {
        Level: 1,
        Time: 60000,
      },
      {
        Level: 2,
        Time: 90000,
      },
      {
        Level: 3,
        Time: 120000,
      },
      {
        Level: 4,
        Time: 150000,
      },
      {
        Level: 5,
        Time: 180000,
      },
    ],
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 14,
        },
        {
          Level: 2,
          Amount: 18,
        },
        {
          Level: 3,
          Amount: 22,
        },
        {
          Level: 4,
          Amount: 26,
        },
        {
          Level: 5,
          Amount: 30,
        },
      ],
      ItemCost: [
        {
          Item: "Holy_Water",
          Amount: 1,
        },
      ],
    },
    Status: "Aspersio",
  },
  {
    Id: 69,
    Name: "PR_BENEDICTIO",
    Description: "B.S. Sacramenti",
    MaxLevel: 5,
    Type: "Magic",
    TargetType: "Ground",
    DamageFlags: {
      NoDamage: true,
      Splash: true,
      IgnoreDefense: true,
    },
    Flags: {
      IsEnsemble: true,
    },
    Range: 9,
    Hit: "Single",
    HitCount: 1,
    SplashArea: 1,
    CopyFlags: {
      Skill: {
        Plagiarism: true,
        Reproduce: true,
      },
    },
    CastCancel: true,
    Duration1: [
      {
        Level: 1,
        Time: 40000,
      },
      {
        Level: 2,
        Time: 80000,
      },
      {
        Level: 3,
        Time: 120000,
      },
      {
        Level: 4,
        Time: 160000,
      },
      {
        Level: 5,
        Time: 200000,
      },
    ],
    Requires: {
      SpCost: 20,
    },
    Status: "Benedictio",
  },
  {
    Id: 70,
    Name: "PR_SANCTUARY",
    Description: "Sanctuary",
    MaxLevel: 10,
    Type: "Magic",
    TargetType: "Ground",
    DamageFlags: {
      NoDamage: true,
      IgnoreDefense: true,
    },
    Range: 9,
    Hit: "Single",
    HitCount: 1,
    Element: "Holy",
    Knockback: 2,
    CopyFlags: {
      Skill: {
        Plagiarism: true,
        Reproduce: true,
      },
    },
    CastCancel: true,
    CastTime: 4000,
    Duration1: [
      {
        Level: 1,
        Time: 3900,
      },
      {
        Level: 2,
        Time: 6900,
      },
      {
        Level: 3,
        Time: 9900,
      },
      {
        Level: 4,
        Time: 12900,
      },
      {
        Level: 5,
        Time: 15900,
      },
      {
        Level: 6,
        Time: 18900,
      },
      {
        Level: 7,
        Time: 21900,
      },
      {
        Level: 8,
        Time: 24900,
      },
      {
        Level: 9,
        Time: 27900,
      },
      {
        Level: 10,
        Time: 30900,
      },
    ],
    FixedCastTime: 1000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 15,
        },
        {
          Level: 2,
          Amount: 18,
        },
        {
          Level: 3,
          Amount: 21,
        },
        {
          Level: 4,
          Amount: 24,
        },
        {
          Level: 5,
          Amount: 27,
        },
        {
          Level: 6,
          Amount: 30,
        },
        {
          Level: 7,
          Amount: 33,
        },
        {
          Level: 8,
          Amount: 36,
        },
        {
          Level: 9,
          Amount: 39,
        },
        {
          Level: 10,
          Amount: 42,
        },
      ],
      ItemCost: [
        {
          Item: "Blue_Gemstone",
          Amount: 1,
        },
      ],
    },
    Unit: {
      Id: "Sanctuary",
      Layout: -1,
      Range: 1,
      Interval: 1000,
      Flag: {
        NoOverlap: true,
        PathCheck: true,
      },
    },
  },
  {
    Id: 71,
    Name: "PR_SLOWPOISON",
    Description: "Slow Poison",
    MaxLevel: 4,
    Type: "Magic",
    TargetType: "Support",
    DamageFlags: {
      NoDamage: true,
    },
    Range: 9,
    Hit: "Single",
    HitCount: 1,
    CastCancel: true,
    Duration1: [
      {
        Level: 1,
        Time: 10000,
      },
      {
        Level: 2,
        Time: 20000,
      },
      {
        Level: 3,
        Time: 30000,
      },
      {
        Level: 4,
        Time: 40000,
      },
    ],
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 6,
        },
        {
          Level: 2,
          Amount: 8,
        },
        {
          Level: 3,
          Amount: 10,
        },
        {
          Level: 4,
          Amount: 12,
        },
      ],
    },
    Status: "SlowPoison",
  },
  {
    Id: 72,
    Name: "PR_STRECOVERY",
    Description: "Status Recovery",
    MaxLevel: 1,
    Type: "Magic",
    TargetType: "Support",
    DamageFlags: {
      NoDamage: true,
    },
    Range: 9,
    Hit: "Single",
    HitCount: 1,
    CastCancel: true,
    AfterCastActDelay: 2000,
    Duration2: 18000,
    Requires: {
      SpCost: 5,
    },
    Status: "Blind",
  },
  {
    Id: 73,
    Name: "PR_KYRIE",
    Description: "Kyrie Eleison",
    MaxLevel: 10,
    Type: "Magic",
    TargetType: "Support",
    DamageFlags: {
      NoDamage: true,
    },
    Range: 9,
    Hit: "Single",
    HitCount: 1,
    CastCancel: true,
    CastTime: 1600,
    AfterCastActDelay: 2000,
    Duration1: 120000,
    FixedCastTime: 400,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 20,
        },
        {
          Level: 2,
          Amount: 20,
        },
        {
          Level: 3,
          Amount: 20,
        },
        {
          Level: 4,
          Amount: 25,
        },
        {
          Level: 5,
          Amount: 25,
        },
        {
          Level: 6,
          Amount: 25,
        },
        {
          Level: 7,
          Amount: 30,
        },
        {
          Level: 8,
          Amount: 30,
        },
        {
          Level: 9,
          Amount: 30,
        },
        {
          Level: 10,
          Amount: 35,
        },
      ],
    },
    Status: "Kyrie",
  },
  {
    Id: 74,
    Name: "PR_MAGNIFICAT",
    Description: "Magnificat",
    MaxLevel: 5,
    Type: "Magic",
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
      Splash: true,
    },
    Hit: "Single",
    HitCount: 1,
    SplashArea: 18,
    CastCancel: true,
    CastTime: 3200,
    AfterCastActDelay: 2000,
    Duration1: [
      {
        Level: 1,
        Time: 30000,
      },
      {
        Level: 2,
        Time: 45000,
      },
      {
        Level: 3,
        Time: 60000,
      },
      {
        Level: 4,
        Time: 75000,
      },
      {
        Level: 5,
        Time: 90000,
      },
    ],
    FixedCastTime: 800,
    Requires: {
      SpCost: 40,
    },
    Status: "Magnificat",
  },
  {
    Id: 75,
    Name: "PR_GLORIA",
    Description: "Gloria",
    MaxLevel: 5,
    Type: "Magic",
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
      Splash: true,
    },
    Hit: "Single",
    HitCount: 1,
    SplashArea: 18,
    CastCancel: true,
    AfterCastActDelay: 2000,
    Duration1: [
      {
        Level: 1,
        Time: 10000,
      },
      {
        Level: 2,
        Time: 15000,
      },
      {
        Level: 3,
        Time: 20000,
      },
      {
        Level: 4,
        Time: 25000,
      },
      {
        Level: 5,
        Time: 30000,
      },
    ],
    Requires: {
      SpCost: 20,
    },
    Status: "Gloria",
  },
  {
    Id: 76,
    Name: "PR_LEXDIVINA",
    Description: "Lex Divina",
    MaxLevel: 10,
    Type: "Magic",
    TargetType: "Attack",
    DamageFlags: {
      NoDamage: true,
    },
    Range: 5,
    Hit: "Single",
    CastCancel: true,
    AfterCastActDelay: 3000,
    Duration2: [
      {
        Level: 1,
        Time: 30000,
      },
      {
        Level: 2,
        Time: 35000,
      },
      {
        Level: 3,
        Time: 40000,
      },
      {
        Level: 4,
        Time: 45000,
      },
      {
        Level: 5,
        Time: 50000,
      },
      {
        Level: 6,
        Time: 60000,
      },
      {
        Level: 7,
        Time: 60000,
      },
      {
        Level: 8,
        Time: 60000,
      },
      {
        Level: 9,
        Time: 60000,
      },
      {
        Level: 10,
        Time: 60000,
      },
    ],
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 20,
        },
        {
          Level: 2,
          Amount: 20,
        },
        {
          Level: 3,
          Amount: 20,
        },
        {
          Level: 4,
          Amount: 20,
        },
        {
          Level: 5,
          Amount: 20,
        },
        {
          Level: 6,
          Amount: 18,
        },
        {
          Level: 7,
          Amount: 16,
        },
        {
          Level: 8,
          Amount: 14,
        },
        {
          Level: 9,
          Amount: 12,
        },
        {
          Level: 10,
          Amount: 10,
        },
      ],
    },
    Status: "Silence",
  },
  {
    Id: 77,
    Name: "PR_TURNUNDEAD",
    Description: "Turn Undead",
    MaxLevel: 10,
    Type: "Magic",
    TargetType: "Attack",
    DamageFlags: {
      IgnoreAtkCard: true,
      IgnoreDefense: true,
    },
    Range: 5,
    Hit: "Single",
    HitCount: 1,
    Element: "Holy",
    CopyFlags: {
      Skill: {
        Plagiarism: true,
        Reproduce: true,
      },
    },
    CastCancel: true,
    CastTime: 800,
    AfterCastActDelay: 3000,
    FixedCastTime: 200,
    Requires: {
      SpCost: 20,
    },
  },
  {
    Id: 78,
    Name: "PR_LEXAETERNA",
    Description: "Lex Aeterna",
    MaxLevel: 1,
    Type: "Magic",
    TargetType: "Attack",
    DamageFlags: {
      NoDamage: true,
    },
    Range: 9,
    Hit: "Single",
    CastCancel: true,
    AfterCastActDelay: 3000,
    Duration1: 600000,
    Requires: {
      SpCost: 10,
    },
    Status: "Aeterna",
  },
  {
    Id: 79,
    Name: "PR_MAGNUS",
    Description: "Magnus Exorcismus",
    MaxLevel: 10,
    Type: "Magic",
    TargetType: "Ground",
    Range: 9,
    Hit: "Multi_Hit",
    HitCount: [
      {
        Level: 1,
        Count: 1,
      },
      {
        Level: 2,
        Count: 2,
      },
      {
        Level: 3,
        Count: 3,
      },
      {
        Level: 4,
        Count: 4,
      },
      {
        Level: 5,
        Count: 5,
      },
      {
        Level: 6,
        Count: 6,
      },
      {
        Level: 7,
        Count: 7,
      },
      {
        Level: 8,
        Count: 8,
      },
      {
        Level: 9,
        Count: 9,
      },
      {
        Level: 10,
        Count: 10,
      },
    ],
    Element: "Holy",
    CopyFlags: {
      Skill: {
        Plagiarism: true,
        Reproduce: true,
      },
    },
    CastCancel: true,
    CastTime: 4000,
    AfterCastActDelay: 1000,
    Duration1: [
      {
        Level: 1,
        Time: 4000,
      },
      {
        Level: 2,
        Time: 5000,
      },
      {
        Level: 3,
        Time: 6000,
      },
      {
        Level: 4,
        Time: 7000,
      },
      {
        Level: 5,
        Time: 8000,
      },
      {
        Level: 6,
        Time: 9000,
      },
      {
        Level: 7,
        Time: 10000,
      },
      {
        Level: 8,
        Time: 11000,
      },
      {
        Level: 9,
        Time: 12000,
      },
      {
        Level: 10,
        Time: 13000,
      },
    ],
    Cooldown: 6000,
    FixedCastTime: 1000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 40,
        },
        {
          Level: 2,
          Amount: 42,
        },
        {
          Level: 3,
          Amount: 44,
        },
        {
          Level: 4,
          Amount: 46,
        },
        {
          Level: 5,
          Amount: 48,
        },
        {
          Level: 6,
          Amount: 50,
        },
        {
          Level: 7,
          Amount: 52,
        },
        {
          Level: 8,
          Amount: 54,
        },
        {
          Level: 9,
          Amount: 56,
        },
        {
          Level: 10,
          Amount: 58,
        },
      ],
      ItemCost: [
        {
          Item: "Blue_Gemstone",
          Amount: 1,
        },
      ],
    },
    Unit: {
      Id: "Magnus",
      Layout: -1,
      Range: 1,
      Interval: 3000,
      Target: "Enemy",
      Flag: {
        NoOverlap: true,
        PathCheck: true,
        RemovedByFireRain: true,
      },
    },
  },
  {
    Id: 80,
    Name: "WZ_FIREPILLAR",
    Description: "Fire Pillar",
    MaxLevel: 10,
    Type: "Magic",
    TargetType: "Ground",
    DamageFlags: {
      IgnoreDefense: true,
    },
    Flags: {
      IsAutoShadowSpell: true,
    },
    Range: 9,
    Hit: "Multi_Hit",
    HitCount: [
      {
        Level: 1,
        Count: 3,
      },
      {
        Level: 2,
        Count: 4,
      },
      {
        Level: 3,
        Count: 5,
      },
      {
        Level: 4,
        Count: 6,
      },
      {
        Level: 5,
        Count: 7,
      },
      {
        Level: 6,
        Count: 8,
      },
      {
        Level: 7,
        Count: 9,
      },
      {
        Level: 8,
        Count: 10,
      },
      {
        Level: 9,
        Count: 11,
      },
      {
        Level: 10,
        Count: 12,
      },
    ],
    Element: "Fire",
    SplashArea: [
      {
        Level: 1,
        Area: 1,
      },
      {
        Level: 2,
        Area: 1,
      },
      {
        Level: 3,
        Area: 1,
      },
      {
        Level: 4,
        Area: 1,
      },
      {
        Level: 5,
        Area: 1,
      },
      {
        Level: 6,
        Area: 2,
      },
      {
        Level: 7,
        Area: 2,
      },
      {
        Level: 8,
        Area: 2,
      },
      {
        Level: 9,
        Area: 2,
      },
      {
        Level: 10,
        Area: 2,
      },
      {
        Level: 11,
        Area: 2,
      },
    ],
    ActiveInstance: 5,
    CopyFlags: {
      Skill: {
        Plagiarism: true,
        Reproduce: true,
      },
    },
    CastCancel: true,
    CastTime: [
      {
        Level: 1,
        Time: 1920,
      },
      {
        Level: 2,
        Time: 1728,
      },
      {
        Level: 3,
        Time: 1536,
      },
      {
        Level: 4,
        Time: 1344,
      },
      {
        Level: 5,
        Time: 1152,
      },
      {
        Level: 6,
        Time: 960,
      },
      {
        Level: 7,
        Time: 768,
      },
      {
        Level: 8,
        Time: 576,
      },
      {
        Level: 9,
        Time: 384,
      },
      {
        Level: 10,
        Time: 192,
      },
    ],
    AfterCastActDelay: 1000,
    Duration1: 30000,
    Duration2: [
      {
        Level: 1,
        Time: 600,
      },
      {
        Level: 2,
        Time: 800,
      },
      {
        Level: 3,
        Time: 1000,
      },
      {
        Level: 4,
        Time: 1200,
      },
      {
        Level: 5,
        Time: 1400,
      },
      {
        Level: 6,
        Time: 1600,
      },
      {
        Level: 7,
        Time: 1800,
      },
      {
        Level: 8,
        Time: 2000,
      },
      {
        Level: 9,
        Time: 2200,
      },
      {
        Level: 10,
        Time: 2400,
      },
    ],
    FixedCastTime: [
      {
        Level: 1,
        Time: 480,
      },
      {
        Level: 2,
        Time: 432,
      },
      {
        Level: 3,
        Time: 384,
      },
      {
        Level: 4,
        Time: 336,
      },
      {
        Level: 5,
        Time: 288,
      },
      {
        Level: 6,
        Time: 240,
      },
      {
        Level: 7,
        Time: 192,
      },
      {
        Level: 8,
        Time: 144,
      },
      {
        Level: 9,
        Time: 96,
      },
      {
        Level: 10,
        Time: 48,
      },
    ],
    Requires: {
      SpCost: 75,
      ItemCost: [
        {
          Item: "Blue_Gemstone",
          Amount: 1,
          Level: 6,
        },
        {
          Item: "Blue_Gemstone",
          Amount: 1,
          Level: 7,
        },
        {
          Item: "Blue_Gemstone",
          Amount: 1,
          Level: 8,
        },
        {
          Item: "Blue_Gemstone",
          Amount: 1,
          Level: 9,
        },
        {
          Item: "Blue_Gemstone",
          Amount: 1,
          Level: 10,
        },
      ],
    },
    Unit: {
      Id: "Firepillar_Waiting",
      AlternateId: "Firepillar_Active",
      Range: 1,
      Interval: 2000,
      Target: "Enemy",
      Flag: {
        NoReiteration: true,
        NoFootSet: true,
      },
    },
  },
  {
    Id: 81,
    Name: "WZ_SIGHTRASHER",
    Description: "Sightrasher",
    MaxLevel: 10,
    Type: "Magic",
    TargetType: "Self",
    DamageFlags: {
      Splash: true,
    },
    Flags: {
      IsAutoShadowSpell: true,
      TargetTrap: true,
    },
    Hit: "Single",
    HitCount: 1,
    Element: "Fire",
    SplashArea: 7,
    Knockback: 5,
    CopyFlags: {
      Skill: {
        Plagiarism: true,
        Reproduce: true,
      },
    },
    CastCancel: true,
    CastTime: 320,
    AfterCastActDelay: 2000,
    Duration1: 500,
    FixedCastTime: 80,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 35,
        },
        {
          Level: 2,
          Amount: 37,
        },
        {
          Level: 3,
          Amount: 39,
        },
        {
          Level: 4,
          Amount: 41,
        },
        {
          Level: 5,
          Amount: 43,
        },
        {
          Level: 6,
          Amount: 45,
        },
        {
          Level: 7,
          Amount: 47,
        },
        {
          Level: 8,
          Amount: 49,
        },
        {
          Level: 9,
          Amount: 51,
        },
        {
          Level: 10,
          Amount: 53,
        },
      ],
      Status: {
        Sight: true,
      },
    },
  },
  {
    Id: 83,
    Name: "WZ_METEOR",
    Description: "Meteor Storm",
    MaxLevel: 10,
    Type: "Magic",
    TargetType: "Ground",
    Flags: {
      IsAutoShadowSpell: true,
    },
    Range: 9,
    Hit: "Multi_Hit",
    HitCount: [
      {
        Level: 1,
        Count: 2,
      },
      {
        Level: 2,
        Count: 3,
      },
      {
        Level: 3,
        Count: 3,
      },
      {
        Level: 4,
        Count: 4,
      },
      {
        Level: 5,
        Count: 4,
      },
      {
        Level: 6,
        Count: 5,
      },
      {
        Level: 7,
        Count: 5,
      },
      {
        Level: 8,
        Count: 6,
      },
      {
        Level: 9,
        Count: 6,
      },
      {
        Level: 10,
        Count: 7,
      },
      {
        Level: 11,
        Count: 15,
      },
    ],
    Element: "Fire",
    SplashArea: [
      {
        Level: 1,
        Area: 3,
      },
      {
        Level: 2,
        Area: 3,
      },
      {
        Level: 3,
        Area: 3,
      },
      {
        Level: 4,
        Area: 3,
      },
      {
        Level: 5,
        Area: 3,
      },
      {
        Level: 6,
        Area: 3,
      },
      {
        Level: 7,
        Area: 3,
      },
      {
        Level: 8,
        Area: 3,
      },
      {
        Level: 9,
        Area: 3,
      },
      {
        Level: 10,
        Area: 3,
      },
      {
        Level: 11,
        Area: 14,
      },
    ],
    CopyFlags: {
      Skill: {
        Plagiarism: true,
        Reproduce: true,
      },
    },
    CastCancel: true,
    CastTime: [
      {
        Level: 1,
        Time: 9600,
      },
      {
        Level: 2,
        Time: 9600,
      },
      {
        Level: 3,
        Time: 9600,
      },
      {
        Level: 4,
        Time: 9600,
      },
      {
        Level: 5,
        Time: 9600,
      },
      {
        Level: 6,
        Time: 9600,
      },
      {
        Level: 7,
        Time: 9600,
      },
      {
        Level: 8,
        Time: 9600,
      },
      {
        Level: 9,
        Time: 9600,
      },
      {
        Level: 10,
        Time: 6300,
      },
    ],
    AfterCastActDelay: 1000,
    Duration1: [
      {
        Level: 1,
        Time: 2000,
      },
      {
        Level: 2,
        Time: 3000,
      },
      {
        Level: 3,
        Time: 3000,
      },
      {
        Level: 4,
        Time: 4000,
      },
      {
        Level: 5,
        Time: 4000,
      },
      {
        Level: 6,
        Time: 5000,
      },
      {
        Level: 7,
        Time: 5000,
      },
      {
        Level: 8,
        Time: 6000,
      },
      {
        Level: 9,
        Time: 6000,
      },
      {
        Level: 10,
        Time: 7000,
      },
    ],
    Duration2: 4500,
    Cooldown: 7000,
    FixedCastTime: [
      {
        Level: 1,
        Time: 2400,
      },
      {
        Level: 2,
        Time: 2400,
      },
      {
        Level: 3,
        Time: 2400,
      },
      {
        Level: 4,
        Time: 2400,
      },
      {
        Level: 5,
        Time: 2400,
      },
      {
        Level: 6,
        Time: 2400,
      },
      {
        Level: 7,
        Time: 2400,
      },
      {
        Level: 8,
        Time: 2400,
      },
      {
        Level: 9,
        Time: 2400,
      },
      {
        Level: 10,
        Time: 1500,
      },
    ],
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 20,
        },
        {
          Level: 2,
          Amount: 24,
        },
        {
          Level: 3,
          Amount: 30,
        },
        {
          Level: 4,
          Amount: 34,
        },
        {
          Level: 5,
          Amount: 40,
        },
        {
          Level: 6,
          Amount: 44,
        },
        {
          Level: 7,
          Amount: 50,
        },
        {
          Level: 8,
          Amount: 54,
        },
        {
          Level: 9,
          Amount: 60,
        },
        {
          Level: 10,
          Amount: 64,
        },
      ],
    },
    Unit: {
      Id: "Dummyskill",
      Range: 3,
      Interval: 1000,
      Target: "Enemy",
      Flag: {
        PathCheck: true,
      },
    },
    Status: "Stun",
  },
  {
    Id: 84,
    Name: "WZ_JUPITEL",
    Description: "Jupitel Thunder",
    MaxLevel: 10,
    Type: "Magic",
    TargetType: "Attack",
    Flags: {
      IsAutoShadowSpell: true,
    },
    Range: 9,
    Hit: "Multi_Hit",
    HitCount: [
      {
        Level: 1,
        Count: 3,
      },
      {
        Level: 2,
        Count: 4,
      },
      {
        Level: 3,
        Count: 5,
      },
      {
        Level: 4,
        Count: 6,
      },
      {
        Level: 5,
        Count: 7,
      },
      {
        Level: 6,
        Count: 8,
      },
      {
        Level: 7,
        Count: 9,
      },
      {
        Level: 8,
        Count: 10,
      },
      {
        Level: 9,
        Count: 11,
      },
      {
        Level: 10,
        Count: 12,
      },
    ],
    Element: "Wind",
    Knockback: [
      {
        Level: 1,
        Amount: 2,
      },
      {
        Level: 2,
        Amount: 3,
      },
      {
        Level: 3,
        Amount: 3,
      },
      {
        Level: 4,
        Amount: 4,
      },
      {
        Level: 5,
        Amount: 4,
      },
      {
        Level: 6,
        Amount: 5,
      },
      {
        Level: 7,
        Amount: 5,
      },
      {
        Level: 8,
        Amount: 6,
      },
      {
        Level: 9,
        Amount: 6,
      },
      {
        Level: 10,
        Amount: 7,
      },
    ],
    CopyFlags: {
      Skill: {
        Plagiarism: true,
        Reproduce: true,
      },
    },
    CastCancel: true,
    CastTime: [
      {
        Level: 1,
        Time: 1600,
      },
      {
        Level: 2,
        Time: 1920,
      },
      {
        Level: 3,
        Time: 2240,
      },
      {
        Level: 4,
        Time: 2560,
      },
      {
        Level: 5,
        Time: 2880,
      },
      {
        Level: 6,
        Time: 3200,
      },
      {
        Level: 7,
        Time: 3520,
      },
      {
        Level: 8,
        Time: 3840,
      },
      {
        Level: 9,
        Time: 4160,
      },
      {
        Level: 10,
        Time: 3800,
      },
    ],
    FixedCastTime: [
      {
        Level: 1,
        Time: 400,
      },
      {
        Level: 2,
        Time: 480,
      },
      {
        Level: 3,
        Time: 560,
      },
      {
        Level: 4,
        Time: 640,
      },
      {
        Level: 5,
        Time: 720,
      },
      {
        Level: 6,
        Time: 800,
      },
      {
        Level: 7,
        Time: 880,
      },
      {
        Level: 8,
        Time: 960,
      },
      {
        Level: 9,
        Time: 1040,
      },
      {
        Level: 10,
        Time: 500,
      },
    ],
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 20,
        },
        {
          Level: 2,
          Amount: 23,
        },
        {
          Level: 3,
          Amount: 26,
        },
        {
          Level: 4,
          Amount: 29,
        },
        {
          Level: 5,
          Amount: 32,
        },
        {
          Level: 6,
          Amount: 35,
        },
        {
          Level: 7,
          Amount: 38,
        },
        {
          Level: 8,
          Amount: 41,
        },
        {
          Level: 9,
          Amount: 44,
        },
        {
          Level: 10,
          Amount: 47,
        },
      ],
    },
  },
  {
    Id: 85,
    Name: "WZ_VERMILION",
    Description: "Lord of Vermilion",
    MaxLevel: 10,
    Type: "Magic",
    TargetType: "Ground",
    Flags: {
      IsAutoShadowSpell: true,
    },
    Range: 9,
    Hit: "Multi_Hit",
    HitCount: -20,
    Element: "Wind",
    CopyFlags: {
      Skill: {
        Plagiarism: true,
        Reproduce: true,
      },
    },
    CastCancel: true,
    CastTime: [
      {
        Level: 1,
        Time: 9600,
      },
      {
        Level: 2,
        Time: 9280,
      },
      {
        Level: 3,
        Time: 8960,
      },
      {
        Level: 4,
        Time: 8640,
      },
      {
        Level: 5,
        Time: 8320,
      },
      {
        Level: 6,
        Time: 8000,
      },
      {
        Level: 7,
        Time: 7680,
      },
      {
        Level: 8,
        Time: 7360,
      },
      {
        Level: 9,
        Time: 7040,
      },
      {
        Level: 10,
        Time: 4500,
      },
    ],
    AfterCastActDelay: 1000,
    Duration1: 1000,
    Duration2: 18000,
    Cooldown: 5000,
    FixedCastTime: [
      {
        Level: 1,
        Time: 2400,
      },
      {
        Level: 2,
        Time: 2320,
      },
      {
        Level: 3,
        Time: 2240,
      },
      {
        Level: 4,
        Time: 2160,
      },
      {
        Level: 5,
        Time: 2080,
      },
      {
        Level: 6,
        Time: 2000,
      },
      {
        Level: 7,
        Time: 1920,
      },
      {
        Level: 8,
        Time: 1840,
      },
      {
        Level: 9,
        Time: 1760,
      },
      {
        Level: 10,
        Time: 1500,
      },
    ],
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 60,
        },
        {
          Level: 2,
          Amount: 64,
        },
        {
          Level: 3,
          Amount: 68,
        },
        {
          Level: 4,
          Amount: 72,
        },
        {
          Level: 5,
          Amount: 76,
        },
        {
          Level: 6,
          Amount: 80,
        },
        {
          Level: 7,
          Amount: 84,
        },
        {
          Level: 8,
          Amount: 88,
        },
        {
          Level: 9,
          Amount: 92,
        },
        {
          Level: 10,
          Amount: 96,
        },
      ],
    },
    Unit: {
      Id: "Dummyskill",
      Layout: [
        {
          Level: 1,
          Size: 6,
        },
        {
          Level: 2,
          Size: 6,
        },
        {
          Level: 3,
          Size: 6,
        },
        {
          Level: 4,
          Size: 6,
        },
        {
          Level: 5,
          Size: 6,
        },
        {
          Level: 6,
          Size: 6,
        },
        {
          Level: 7,
          Size: 6,
        },
        {
          Level: 8,
          Size: 6,
        },
        {
          Level: 9,
          Size: 6,
        },
        {
          Level: 10,
          Size: 6,
        },
        {
          Level: 11,
          Size: 7,
        },
      ],
      Range: 1,
      Interval: 1250,
      Target: "Enemy",
      Flag: {
        NoOverlap: true,
        PathCheck: true,
      },
    },
    Status: "Blind",
  },
  {
    Id: 86,
    Name: "WZ_WATERBALL",
    Description: "Water Ball",
    MaxLevel: 5,
    Type: "Magic",
    TargetType: "Attack",
    Flags: {
      IsAutoShadowSpell: true,
    },
    Range: 9,
    Hit: "Multi_Hit",
    HitCount: 1,
    Element: "Water",
    CopyFlags: {
      Skill: {
        Plagiarism: true,
        Reproduce: true,
      },
    },
    CastCancel: true,
    CastTime: [
      {
        Level: 1,
        Time: 640,
      },
      {
        Level: 2,
        Time: 1280,
      },
      {
        Level: 3,
        Time: 1920,
      },
      {
        Level: 4,
        Time: 2560,
      },
      {
        Level: 5,
        Time: 3200,
      },
    ],
    Duration1: 10000,
    FixedCastTime: [
      {
        Level: 1,
        Time: 160,
      },
      {
        Level: 2,
        Time: 320,
      },
      {
        Level: 3,
        Time: 480,
      },
      {
        Level: 4,
        Time: 640,
      },
      {
        Level: 5,
        Time: 800,
      },
    ],
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 15,
        },
        {
          Level: 2,
          Amount: 20,
        },
        {
          Level: 3,
          Amount: 20,
        },
        {
          Level: 4,
          Amount: 25,
        },
        {
          Level: 5,
          Amount: 25,
        },
        {
          Level: 6,
          Amount: 25,
        },
        {
          Level: 7,
          Amount: 25,
        },
        {
          Level: 8,
          Amount: 25,
        },
        {
          Level: 9,
          Amount: 25,
        },
        {
          Level: 10,
          Amount: 25,
        },
      ],
      State: "Water",
    },
    Unit: {
      Id: "Dummyskill",
      Layout: [
        {
          Level: 1,
          Size: 0,
        },
        {
          Level: 2,
          Size: 1,
        },
        {
          Level: 3,
          Size: 1,
        },
        {
          Level: 4,
          Size: 2,
        },
        {
          Level: 5,
          Size: 2,
        },
        {
          Level: 6,
          Size: 2,
        },
        {
          Level: 7,
          Size: 2,
        },
        {
          Level: 8,
          Size: 2,
        },
        {
          Level: 9,
          Size: 2,
        },
        {
          Level: 10,
          Size: 2,
        },
      ],
      Interval: -1,
      Flag: {
        PathCheck: true,
      },
    },
  },
  {
    Id: 87,
    Name: "WZ_ICEWALL",
    Description: "Ice Wall",
    MaxLevel: 10,
    Type: "Magic",
    TargetType: "Ground",
    DamageFlags: {
      NoDamage: true,
    },
    Range: 9,
    Hit: "Single",
    HitCount: 1,
    Element: "Water",
    CastCancel: true,
    Requires: {
      SpCost: 20,
    },
    Unit: {
      Id: "Icewall",
      Layout: -1,
      Interval: 1000,
      Flag: {
        PathCheck: true,
        NoKnockback: true,
        RemovedByFireRain: true,
      },
    },
  },
  {
    Id: 88,
    Name: "WZ_FROSTNOVA",
    Description: "Frost Nova",
    MaxLevel: 10,
    Type: "Magic",
    TargetType: "Self",
    DamageFlags: {
      Splash: true,
    },
    Flags: {
      IsAutoShadowSpell: true,
    },
    Hit: "Single",
    HitCount: 1,
    Element: "Water",
    SplashArea: 3,
    CopyFlags: {
      Skill: {
        Plagiarism: true,
        Reproduce: true,
      },
    },
    CastCancel: true,
    CastTime: [
      {
        Level: 1,
        Time: 640,
      },
      {
        Level: 2,
        Time: 640,
      },
      {
        Level: 3,
        Time: 576,
      },
      {
        Level: 4,
        Time: 576,
      },
      {
        Level: 5,
        Time: 512,
      },
      {
        Level: 6,
        Time: 512,
      },
      {
        Level: 7,
        Time: 448,
      },
      {
        Level: 8,
        Time: 448,
      },
      {
        Level: 9,
        Time: 384,
      },
      {
        Level: 10,
        Time: 384,
      },
    ],
    AfterCastActDelay: 200,
    Duration2: [
      {
        Level: 1,
        Time: 1500,
      },
      {
        Level: 2,
        Time: 3000,
      },
      {
        Level: 3,
        Time: 4500,
      },
      {
        Level: 4,
        Time: 6000,
      },
      {
        Level: 5,
        Time: 7500,
      },
      {
        Level: 6,
        Time: 9000,
      },
      {
        Level: 7,
        Time: 10500,
      },
      {
        Level: 8,
        Time: 12000,
      },
      {
        Level: 9,
        Time: 13500,
      },
      {
        Level: 10,
        Time: 15000,
      },
    ],
    FixedCastTime: [
      {
        Level: 1,
        Time: 160,
      },
      {
        Level: 2,
        Time: 160,
      },
      {
        Level: 3,
        Time: 144,
      },
      {
        Level: 4,
        Time: 144,
      },
      {
        Level: 5,
        Time: 128,
      },
      {
        Level: 6,
        Time: 128,
      },
      {
        Level: 7,
        Time: 112,
      },
      {
        Level: 8,
        Time: 112,
      },
      {
        Level: 9,
        Time: 96,
      },
      {
        Level: 10,
        Time: 96,
      },
    ],
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 45,
        },
        {
          Level: 2,
          Amount: 43,
        },
        {
          Level: 3,
          Amount: 41,
        },
        {
          Level: 4,
          Amount: 39,
        },
        {
          Level: 5,
          Amount: 37,
        },
        {
          Level: 6,
          Amount: 35,
        },
        {
          Level: 7,
          Amount: 33,
        },
        {
          Level: 8,
          Amount: 31,
        },
        {
          Level: 9,
          Amount: 29,
        },
        {
          Level: 10,
          Amount: 27,
        },
      ],
    },
    Status: "Freeze",
  },
  {
    Id: 89,
    Name: "WZ_STORMGUST",
    Description: "Storm Gust",
    MaxLevel: 10,
    Type: "Magic",
    TargetType: "Ground",
    Flags: {
      IsAutoShadowSpell: true,
    },
    Range: 9,
    Hit: "Single",
    HitCount: 1,
    Element: "Water",
    Knockback: 2,
    CopyFlags: {
      Skill: {
        Plagiarism: true,
        Reproduce: true,
      },
    },
    CastCancel: true,
    CastTime: [
      {
        Level: 1,
        Time: 3840,
      },
      {
        Level: 2,
        Time: 4480,
      },
      {
        Level: 3,
        Time: 5120,
      },
      {
        Level: 4,
        Time: 5760,
      },
      {
        Level: 5,
        Time: 6400,
      },
      {
        Level: 6,
        Time: 7040,
      },
      {
        Level: 7,
        Time: 7680,
      },
      {
        Level: 8,
        Time: 8320,
      },
      {
        Level: 9,
        Time: 8960,
      },
      {
        Level: 10,
        Time: 6300,
      },
    ],
    AfterCastActDelay: 1000,
    Duration1: 4500,
    Duration2: 27000,
    Cooldown: 6000,
    FixedCastTime: [
      {
        Level: 1,
        Time: 960,
      },
      {
        Level: 2,
        Time: 1120,
      },
      {
        Level: 3,
        Time: 1280,
      },
      {
        Level: 4,
        Time: 1440,
      },
      {
        Level: 5,
        Time: 1600,
      },
      {
        Level: 6,
        Time: 1760,
      },
      {
        Level: 7,
        Time: 1920,
      },
      {
        Level: 8,
        Time: 2080,
      },
      {
        Level: 9,
        Time: 2240,
      },
      {
        Level: 10,
        Time: 1500,
      },
    ],
    Requires: {
      SpCost: 78,
    },
    Unit: {
      Id: "Dummyskill",
      Layout: 4,
      Range: 1,
      Interval: 450,
      Target: "Enemy",
      Flag: {
        NoOverlap: true,
        PathCheck: true,
      },
    },
    Status: "Freeze",
  },
  {
    Id: 90,
    Name: "WZ_EARTHSPIKE",
    Description: "Earth Spike",
    MaxLevel: 5,
    Type: "Magic",
    TargetType: "Attack",
    Flags: {
      IsAutoShadowSpell: true,
    },
    Range: 9,
    Hit: "Multi_Hit",
    HitCount: [
      {
        Level: 1,
        Count: 1,
      },
      {
        Level: 2,
        Count: 2,
      },
      {
        Level: 3,
        Count: 3,
      },
      {
        Level: 4,
        Count: 4,
      },
      {
        Level: 5,
        Count: 5,
      },
    ],
    Element: "Earth",
    CopyFlags: {
      Skill: {
        Plagiarism: true,
        Reproduce: true,
      },
    },
    CastCancel: true,
    CastTime: [
      {
        Level: 1,
        Time: 448,
      },
      {
        Level: 2,
        Time: 896,
      },
      {
        Level: 3,
        Time: 1344,
      },
      {
        Level: 4,
        Time: 1792,
      },
      {
        Level: 5,
        Time: 3200,
      },
    ],
    AfterCastActDelay: [
      {
        Level: 1,
        Time: 1000,
      },
      {
        Level: 2,
        Time: 1200,
      },
      {
        Level: 3,
        Time: 1400,
      },
      {
        Level: 4,
        Time: 1600,
      },
      {
        Level: 5,
        Time: 1400,
      },
      {
        Level: 6,
        Time: 2000,
      },
      {
        Level: 7,
        Time: 2200,
      },
      {
        Level: 8,
        Time: 2400,
      },
      {
        Level: 9,
        Time: 2600,
      },
      {
        Level: 10,
        Time: 2800,
      },
    ],
    FixedCastTime: [
      {
        Level: 1,
        Time: 112,
      },
      {
        Level: 2,
        Time: 224,
      },
      {
        Level: 3,
        Time: 336,
      },
      {
        Level: 4,
        Time: 448,
      },
      {
        Level: 5,
        Time: 1200,
      },
    ],
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 14,
        },
        {
          Level: 2,
          Amount: 18,
        },
        {
          Level: 3,
          Amount: 22,
        },
        {
          Level: 4,
          Amount: 26,
        },
        {
          Level: 5,
          Amount: 30,
        },
      ],
    },
  },
  {
    Id: 91,
    Name: "WZ_HEAVENDRIVE",
    Description: "Heaven's Drive",
    MaxLevel: 5,
    Type: "Magic",
    TargetType: "Ground",
    Flags: {
      IsAutoShadowSpell: true,
      TargetHidden: true,
    },
    Range: 9,
    Hit: "Multi_Hit",
    HitCount: [
      {
        Level: 1,
        Count: 1,
      },
      {
        Level: 2,
        Count: 2,
      },
      {
        Level: 3,
        Count: 3,
      },
      {
        Level: 4,
        Count: 4,
      },
      {
        Level: 5,
        Count: 5,
      },
    ],
    Element: "Earth",
    CopyFlags: {
      Skill: {
        Plagiarism: true,
        Reproduce: true,
      },
    },
    CastCancel: true,
    CastTime: [
      {
        Level: 1,
        Time: 640,
      },
      {
        Level: 2,
        Time: 1280,
      },
      {
        Level: 3,
        Time: 1920,
      },
      {
        Level: 4,
        Time: 2560,
      },
      {
        Level: 5,
        Time: 1900,
      },
    ],
    AfterCastActDelay: [
      {
        Level: 1,
        Time: 1000,
      },
      {
        Level: 2,
        Time: 1000,
      },
      {
        Level: 3,
        Time: 1000,
      },
      {
        Level: 4,
        Time: 1000,
      },
      {
        Level: 5,
        Time: 500,
      },
    ],
    Duration1: 100,
    FixedCastTime: [
      {
        Level: 1,
        Time: 160,
      },
      {
        Level: 2,
        Time: 320,
      },
      {
        Level: 3,
        Time: 480,
      },
      {
        Level: 4,
        Time: 640,
      },
      {
        Level: 5,
        Time: 800,
      },
    ],
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 28,
        },
        {
          Level: 2,
          Amount: 32,
        },
        {
          Level: 3,
          Amount: 36,
        },
        {
          Level: 4,
          Amount: 40,
        },
        {
          Level: 5,
          Amount: 44,
        },
      ],
    },
    Unit: {
      Id: "Dummyskill",
      Layout: 2,
      Interval: 1000,
      Target: "Enemy",
      Flag: {
        PathCheck: true,
      },
    },
  },
  {
    Id: 92,
    Name: "WZ_QUAGMIRE",
    Description: "Quagmire",
    MaxLevel: 5,
    Type: "Magic",
    TargetType: "Ground",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      IgnoreHovering: true,
      TargetHidden: true,
    },
    Range: 9,
    Hit: "Single",
    HitCount: 1,
    Element: "Earth",
    ActiveInstance: 3,
    CastCancel: true,
    AfterCastActDelay: 1000,
    Duration1: [
      {
        Level: 1,
        Time: 5000,
      },
      {
        Level: 2,
        Time: 10000,
      },
      {
        Level: 3,
        Time: 15000,
      },
      {
        Level: 4,
        Time: 20000,
      },
      {
        Level: 5,
        Time: 25000,
      },
    ],
    Duration2: [
      {
        Level: 1,
        Time: 5000,
      },
      {
        Level: 2,
        Time: 10000,
      },
      {
        Level: 3,
        Time: 15000,
      },
      {
        Level: 4,
        Time: 20000,
      },
      {
        Level: 5,
        Time: 25000,
      },
    ],
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 5,
        },
        {
          Level: 2,
          Amount: 10,
        },
        {
          Level: 3,
          Amount: 15,
        },
        {
          Level: 4,
          Amount: 20,
        },
        {
          Level: 5,
          Amount: 25,
        },
      ],
    },
    Unit: {
      Id: "Quagmire",
      Layout: 2,
      Interval: -1,
      Target: "Enemy",
      Flag: {
        PathCheck: true,
        RemovedByFireRain: true,
      },
    },
    Status: "Quagmire",
  },
  {
    Id: 93,
    Name: "WZ_ESTIMATION",
    Description: "Sense",
    MaxLevel: 1,
    Type: "Magic",
    TargetType: "Attack",
    DamageFlags: {
      NoDamage: true,
    },
    Range: 9,
    Hit: "Single",
    HitCount: 1,
    CastCancel: true,
    Requires: {
      SpCost: 10,
    },
  },
  {
    Id: 94,
    Name: "BS_IRON",
    Description: "Iron Tempering",
    MaxLevel: 5,
    Type: "Weapon",
  },
  {
    Id: 95,
    Name: "BS_STEEL",
    Description: "Steel Tempering",
    MaxLevel: 5,
    Type: "Weapon",
  },
  {
    Id: 96,
    Name: "BS_ENCHANTEDSTONE",
    Description: "Enchanted Stone Craft",
    MaxLevel: 5,
    Type: "Weapon",
  },
  {
    Id: 97,
    Name: "BS_ORIDEOCON",
    Description: "Oridecon Research",
    MaxLevel: 5,
    Type: "Weapon",
  },
  {
    Id: 98,
    Name: "BS_DAGGER",
    Description: "Smith Dagger",
    MaxLevel: 3,
    Type: "Weapon",
  },
  {
    Id: 99,
    Name: "BS_SWORD",
    Description: "Smith Sword",
    MaxLevel: 3,
    Type: "Weapon",
  },
  {
    Id: 100,
    Name: "BS_TWOHANDSWORD",
    Description: "Smith Two-handed Sword",
    MaxLevel: 3,
    Type: "Weapon",
  },
  {
    Id: 101,
    Name: "BS_AXE",
    Description: "Smith Axe",
    MaxLevel: 3,
    Type: "Weapon",
  },
  {
    Id: 102,
    Name: "BS_MACE",
    Description: "Smith Mace",
    MaxLevel: 3,
    Type: "Weapon",
  },
  {
    Id: 103,
    Name: "BS_KNUCKLE",
    Description: "Smith Knucklebrace",
    MaxLevel: 3,
    Type: "Weapon",
  },
  {
    Id: 104,
    Name: "BS_SPEAR",
    Description: "Smith Spear",
    MaxLevel: 3,
    Type: "Weapon",
  },
  {
    Id: 105,
    Name: "BS_HILTBINDING",
    Description: "Hilt Binding",
    MaxLevel: 1,
    Type: "Weapon",
  },
  {
    Id: 106,
    Name: "BS_FINDINGORE",
    Description: "Ore Discovery",
    MaxLevel: 1,
    Type: "Weapon",
  },
  {
    Id: 107,
    Name: "BS_WEAPONRESEARCH",
    Description: "Weaponry Research",
    MaxLevel: 10,
    Type: "Weapon",
  },
  {
    Id: 108,
    Name: "BS_REPAIRWEAPON",
    Description: "Weapon Repair",
    MaxLevel: 1,
    Type: "Weapon",
    TargetType: "Support",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      AllowOnMado: true,
    },
    Range: 2,
    Hit: "Single",
    HitCount: 1,
    CastCancel: true,
    CastTime: 2500,
    FixedCastTime: 2500,
    Requires: {
      SpCost: 30,
    },
  },
  {
    Id: 109,
    Name: "BS_SKINTEMPER",
    Description: "Skin Tempering",
    MaxLevel: 5,
    Type: "Weapon",
  },
  {
    Id: 110,
    Name: "BS_HAMMERFALL",
    Description: "Hammer Fall",
    MaxLevel: 5,
    Type: "Weapon",
    TargetType: "Ground",
    DamageFlags: {
      NoDamage: true,
      Splash: true,
    },
    Flags: {
      AllowOnMado: true,
    },
    Range: 1,
    Hit: "Single",
    HitCount: 1,
    SplashArea: [
      {
        Level: 1,
        Area: 2,
      },
      {
        Level: 2,
        Area: 2,
      },
      {
        Level: 3,
        Area: 2,
      },
      {
        Level: 4,
        Area: 2,
      },
      {
        Level: 5,
        Area: 2,
      },
      {
        Level: 6,
        Area: 12,
      },
    ],
    Duration2: 4500,
    Requires: {
      SpCost: 10,
      Weapon: {
        Dagger: true,
        "1hSword": true,
        "1hAxe": true,
        "2hAxe": true,
        Mace: true,
      },
    },
    Status: "Stun",
  },
  {
    Id: 111,
    Name: "BS_ADRENALINE",
    Description: "Adrenaline Rush",
    MaxLevel: 5,
    Type: "Weapon",
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
      Splash: true,
    },
    Flags: {
      AllowOnMado: true,
    },
    Hit: "Single",
    HitCount: 1,
    SplashArea: -1,
    Duration1: [
      {
        Level: 1,
        Time: 30000,
      },
      {
        Level: 2,
        Time: 60000,
      },
      {
        Level: 3,
        Time: 90000,
      },
      {
        Level: 4,
        Time: 120000,
      },
      {
        Level: 5,
        Time: 150000,
      },
    ],
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 20,
        },
        {
          Level: 2,
          Amount: 23,
        },
        {
          Level: 3,
          Amount: 26,
        },
        {
          Level: 4,
          Amount: 29,
        },
        {
          Level: 5,
          Amount: 32,
        },
      ],
      Weapon: {
        "1hAxe": true,
        "2hAxe": true,
        Mace: true,
      },
    },
    Status: "Adrenaline",
  },
  {
    Id: 112,
    Name: "BS_WEAPONPERFECT",
    Description: "Weapon Perfection",
    MaxLevel: 5,
    Type: "Weapon",
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
      Splash: true,
    },
    Flags: {
      AllowOnMado: true,
    },
    Hit: "Single",
    HitCount: 1,
    SplashArea: -1,
    Duration1: [
      {
        Level: 1,
        Time: 10000,
      },
      {
        Level: 2,
        Time: 20000,
      },
      {
        Level: 3,
        Time: 30000,
      },
      {
        Level: 4,
        Time: 40000,
      },
      {
        Level: 5,
        Time: 50000,
      },
    ],
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 18,
        },
        {
          Level: 2,
          Amount: 16,
        },
        {
          Level: 3,
          Amount: 14,
        },
        {
          Level: 4,
          Amount: 12,
        },
        {
          Level: 5,
          Amount: 10,
        },
      ],
    },
    Status: "WeaponPerfection",
  },
  {
    Id: 113,
    Name: "BS_OVERTHRUST",
    Description: "Power-Thrust",
    MaxLevel: 5,
    Type: "Weapon",
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
      Splash: true,
    },
    Flags: {
      AllowOnMado: true,
    },
    Hit: "Single",
    HitCount: 1,
    SplashArea: -1,
    Duration1: [
      {
        Level: 1,
        Time: 20000,
      },
      {
        Level: 2,
        Time: 40000,
      },
      {
        Level: 3,
        Time: 60000,
      },
      {
        Level: 4,
        Time: 80000,
      },
      {
        Level: 5,
        Time: 100000,
      },
    ],
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 18,
        },
        {
          Level: 2,
          Amount: 16,
        },
        {
          Level: 3,
          Amount: 14,
        },
        {
          Level: 4,
          Amount: 12,
        },
        {
          Level: 5,
          Amount: 10,
        },
      ],
      Weapon: {
        Dagger: true,
        "1hSword": true,
        "2hSword": true,
        "1hSpear": true,
        "2hSpear": true,
        "1hAxe": true,
        "2hAxe": true,
        Mace: true,
        "2hMace": true,
        Staff: true,
        Bow: true,
        Knuckle: true,
        Musical: true,
        Whip: true,
        Book: true,
        Katar: true,
        Revolver: true,
        Rifle: true,
        Gatling: true,
        Shotgun: true,
        Grenade: true,
        Huuma: true,
        "2hStaff": true,
      },
    },
    Status: "Overthrust",
  },
  {
    Id: 114,
    Name: "BS_MAXIMIZE",
    Description: "Maximize Power",
    MaxLevel: 5,
    Type: "Weapon",
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      AllowOnMado: true,
      Toggleable: true,
    },
    Hit: "Single",
    HitCount: 1,
    Duration1: [
      {
        Level: 1,
        Time: 1000,
      },
      {
        Level: 2,
        Time: 2000,
      },
      {
        Level: 3,
        Time: 3000,
      },
      {
        Level: 4,
        Time: 4000,
      },
      {
        Level: 5,
        Time: 5000,
      },
    ],
    Requires: {
      SpCost: 10,
    },
    Status: "MaximizePower",
  },
  {
    Id: 115,
    Name: "HT_SKIDTRAP",
    Description: "Skid Trap",
    MaxLevel: 5,
    Type: "Misc",
    TargetType: "Ground",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      IsTrap: true,
      IgnoreHovering: true,
      AllowOnWarg: true,
    },
    Range: 3,
    Hit: "Single",
    HitCount: 1,
    Knockback: [
      {
        Level: 1,
        Amount: 6,
      },
      {
        Level: 2,
        Amount: 7,
      },
      {
        Level: 3,
        Amount: 8,
      },
      {
        Level: 4,
        Amount: 9,
      },
      {
        Level: 5,
        Amount: 10,
      },
    ],
    Duration1: [
      {
        Level: 1,
        Time: 300000,
      },
      {
        Level: 2,
        Time: 240000,
      },
      {
        Level: 3,
        Time: 180000,
      },
      {
        Level: 4,
        Time: 120000,
      },
      {
        Level: 5,
        Time: 60000,
      },
    ],
    Duration2: 3000,
    Requires: {
      SpCost: 10,
      ItemCost: [
        {
          Item: "Booby_Trap",
          Amount: 1,
        },
      ],
    },
    Unit: {
      Id: "Skidtrap",
      Range: 1,
      Interval: 1000,
      Target: "Enemy",
      Flag: {
        NoReiteration: true,
        NoFootSet: true,
        RemovedByFireRain: true,
        HiddenTrap: true,
      },
    },
  },
  {
    Id: 116,
    Name: "HT_LANDMINE",
    Description: "Land Mine",
    MaxLevel: 5,
    Type: "Misc",
    TargetType: "Ground",
    DamageFlags: {
      IgnoreFlee: true,
      IgnoreDefCard: true,
    },
    Flags: {
      IsTrap: true,
      AlterRangeResearchTrap: true,
      IgnoreHovering: true,
      AllowOnWarg: true,
    },
    Range: 3,
    Hit: "Single",
    HitCount: 1,
    Element: "Earth",
    CopyFlags: {
      Skill: {
        Plagiarism: true,
        Reproduce: true,
      },
    },
    CastTime: 500,
    AfterCastActDelay: 1000,
    Duration1: [
      {
        Level: 1,
        Time: 200000,
      },
      {
        Level: 2,
        Time: 160000,
      },
      {
        Level: 3,
        Time: 120000,
      },
      {
        Level: 4,
        Time: 80000,
      },
      {
        Level: 5,
        Time: 40000,
      },
    ],
    Duration2: 4500,
    FixedCastTime: 300,
    Requires: {
      SpCost: 10,
      ItemCost: [
        {
          Item: "Booby_Trap",
          Amount: 1,
        },
      ],
    },
    Unit: {
      Id: "Landmine",
      Range: 1,
      Interval: 1000,
      Target: "Enemy",
      Flag: {
        NoReiteration: true,
        NoFootSet: true,
        RemovedByFireRain: true,
        HiddenTrap: true,
      },
    },
    Status: "Stun",
  },
  {
    Id: 117,
    Name: "HT_ANKLESNARE",
    Description: "Ankle Snare",
    MaxLevel: 5,
    Type: "Misc",
    TargetType: "Ground",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      IsTrap: true,
      IgnoreHovering: true,
      AllowOnWarg: true,
    },
    Range: 3,
    Hit: "Single",
    HitCount: 1,
    Duration1: [
      {
        Level: 1,
        Time: 250000,
      },
      {
        Level: 2,
        Time: 200000,
      },
      {
        Level: 3,
        Time: 150000,
      },
      {
        Level: 4,
        Time: 100000,
      },
      {
        Level: 5,
        Time: 50000,
      },
    ],
    Duration2: [
      {
        Level: 1,
        Time: 4000,
      },
      {
        Level: 2,
        Time: 8000,
      },
      {
        Level: 3,
        Time: 12000,
      },
      {
        Level: 4,
        Time: 16000,
      },
      {
        Level: 5,
        Time: 20000,
      },
    ],
    Requires: {
      SpCost: 12,
      ItemCost: [
        {
          Item: "Booby_Trap",
          Amount: 1,
        },
      ],
    },
    Unit: {
      Id: "Anklesnare",
      Range: 1,
      Interval: 1000,
      Target: "Enemy",
      Flag: {
        NoReiteration: true,
        NoFootSet: true,
        NoKnockback: true,
        RemovedByFireRain: true,
        HiddenTrap: true,
      },
    },
    Status: "Ankle",
  },
  {
    Id: 118,
    Name: "HT_SHOCKWAVE",
    Description: "Shockwave Trap",
    MaxLevel: 5,
    Type: "Misc",
    TargetType: "Ground",
    DamageFlags: {
      NoDamage: true,
      Splash: true,
    },
    Flags: {
      IsTrap: true,
      IgnoreHovering: true,
      AllowOnWarg: true,
    },
    Range: 3,
    Hit: "Single",
    HitCount: 1,
    SplashArea: 1,
    Duration1: [
      {
        Level: 1,
        Time: 200000,
      },
      {
        Level: 2,
        Time: 160000,
      },
      {
        Level: 3,
        Time: 120000,
      },
      {
        Level: 4,
        Time: 80000,
      },
      {
        Level: 5,
        Time: 40000,
      },
    ],
    Requires: {
      SpCost: 45,
      ItemCost: [
        {
          Item: "Booby_Trap",
          Amount: 2,
        },
      ],
    },
    Unit: {
      Id: "Shockwave",
      Range: 1,
      Interval: 1000,
      Target: "Enemy",
      Flag: {
        NoReiteration: true,
        NoFootSet: true,
        RemovedByFireRain: true,
        HiddenTrap: true,
      },
    },
  },
  {
    Id: 119,
    Name: "HT_SANDMAN",
    Description: "Sandman",
    MaxLevel: 5,
    Type: "Misc",
    TargetType: "Ground",
    DamageFlags: {
      NoDamage: true,
      Splash: true,
    },
    Flags: {
      IsTrap: true,
      IgnoreHovering: true,
      AllowOnWarg: true,
    },
    Range: 3,
    Hit: "Single",
    HitCount: 1,
    SplashArea: 2,
    Duration1: [
      {
        Level: 1,
        Time: 150000,
      },
      {
        Level: 2,
        Time: 120000,
      },
      {
        Level: 3,
        Time: 90000,
      },
      {
        Level: 4,
        Time: 60000,
      },
      {
        Level: 5,
        Time: 30000,
      },
    ],
    Duration2: 18000,
    Requires: {
      SpCost: 12,
      ItemCost: [
        {
          Item: "Booby_Trap",
          Amount: 1,
        },
      ],
    },
    Unit: {
      Id: "Sandman",
      Range: 1,
      Interval: 1000,
      Target: "Enemy",
      Flag: {
        NoReiteration: true,
        NoFootSet: true,
        RemovedByFireRain: true,
        HiddenTrap: true,
      },
    },
    Status: "Sleep",
  },
  {
    Id: 120,
    Name: "HT_FLASHER",
    Description: "Flasher",
    MaxLevel: 5,
    Type: "Misc",
    TargetType: "Ground",
    DamageFlags: {
      NoDamage: true,
      Splash: true,
    },
    Flags: {
      IsTrap: true,
      IgnoreHovering: true,
      AllowOnWarg: true,
    },
    Range: 3,
    Hit: "Single",
    HitCount: 1,
    SplashArea: 1,
    Duration1: [
      {
        Level: 1,
        Time: 150000,
      },
      {
        Level: 2,
        Time: 120000,
      },
      {
        Level: 3,
        Time: 90000,
      },
      {
        Level: 4,
        Time: 60000,
      },
      {
        Level: 5,
        Time: 30000,
      },
    ],
    Duration2: 18000,
    Requires: {
      SpCost: 12,
      ItemCost: [
        {
          Item: "Booby_Trap",
          Amount: 2,
        },
      ],
    },
    Unit: {
      Id: "Flasher",
      Range: 1,
      Interval: 1000,
      Target: "Enemy",
      Flag: {
        NoReiteration: true,
        NoFootSet: true,
        RemovedByFireRain: true,
        HiddenTrap: true,
      },
    },
    Status: "Blind",
  },
  {
    Id: 121,
    Name: "HT_FREEZINGTRAP",
    Description: "Freezing Trap",
    MaxLevel: 5,
    Type: "Weapon",
    TargetType: "Ground",
    DamageFlags: {
      Splash: true,
      IgnoreFlee: true,
    },
    Flags: {
      IsTrap: true,
      AlterRangeResearchTrap: true,
      IgnoreHovering: true,
      AllowOnWarg: true,
    },
    Range: 3,
    Hit: "Single",
    HitCount: 1,
    Element: "Water",
    SplashArea: 1,
    CopyFlags: {
      Skill: {
        Plagiarism: true,
        Reproduce: true,
      },
    },
    Duration1: [
      {
        Level: 1,
        Time: 150000,
      },
      {
        Level: 2,
        Time: 120000,
      },
      {
        Level: 3,
        Time: 90000,
      },
      {
        Level: 4,
        Time: 60000,
      },
      {
        Level: 5,
        Time: 30000,
      },
    ],
    Duration2: [
      {
        Level: 1,
        Time: 3000,
      },
      {
        Level: 2,
        Time: 6000,
      },
      {
        Level: 3,
        Time: 9000,
      },
      {
        Level: 4,
        Time: 12000,
      },
      {
        Level: 5,
        Time: 15000,
      },
    ],
    Requires: {
      SpCost: 10,
      ItemCost: [
        {
          Item: "Booby_Trap",
          Amount: 2,
        },
      ],
    },
    Unit: {
      Id: "Freezingtrap",
      Range: 1,
      Interval: 1000,
      Target: "Enemy",
      Flag: {
        NoReiteration: true,
        NoFootSet: true,
        RemovedByFireRain: true,
        HiddenTrap: true,
      },
    },
    Status: "Freeze",
  },
  {
    Id: 122,
    Name: "HT_BLASTMINE",
    Description: "Blast Mine",
    MaxLevel: 5,
    Type: "Misc",
    TargetType: "Ground",
    DamageFlags: {
      Splash: true,
      SplashSplit: true,
      IgnoreFlee: true,
      IgnoreDefCard: true,
    },
    Flags: {
      IsTrap: true,
      AlterRangeResearchTrap: true,
      IgnoreHovering: true,
      AllowOnWarg: true,
    },
    Range: 3,
    Hit: "Single",
    HitCount: 1,
    Element: "Wind",
    SplashArea: 1,
    CopyFlags: {
      Skill: {
        Plagiarism: true,
        Reproduce: true,
      },
    },
    CastTime: 500,
    AfterCastActDelay: 1000,
    Duration1: [
      {
        Level: 1,
        Time: 25000,
      },
      {
        Level: 2,
        Time: 20000,
      },
      {
        Level: 3,
        Time: 15000,
      },
      {
        Level: 4,
        Time: 10000,
      },
      {
        Level: 5,
        Time: 5000,
      },
    ],
    FixedCastTime: 300,
    Requires: {
      SpCost: 10,
      ItemCost: [
        {
          Item: "Booby_Trap",
          Amount: 1,
        },
      ],
    },
    Unit: {
      Id: "Blastmine",
      Range: 1,
      Interval: 1000,
      Target: "Enemy",
      Flag: {
        NoReiteration: true,
        NoFootSet: true,
        RemovedByFireRain: true,
      },
    },
  },
  {
    Id: 123,
    Name: "HT_CLAYMORETRAP",
    Description: "Claymore Trap",
    MaxLevel: 5,
    Type: "Misc",
    TargetType: "Ground",
    DamageFlags: {
      Splash: true,
      SplashSplit: true,
      IgnoreFlee: true,
      IgnoreDefCard: true,
    },
    Flags: {
      IsTrap: true,
      TargetTrap: true,
      AlterRangeResearchTrap: true,
      IgnoreHovering: true,
      AllowOnWarg: true,
    },
    Range: 3,
    Hit: "Single",
    HitCount: 1,
    Element: "Fire",
    SplashArea: 2,
    CopyFlags: {
      Skill: {
        Plagiarism: true,
        Reproduce: true,
      },
    },
    CastTime: 500,
    AfterCastActDelay: 1000,
    Duration1: [
      {
        Level: 1,
        Time: 20000,
      },
      {
        Level: 2,
        Time: 40000,
      },
      {
        Level: 3,
        Time: 60000,
      },
      {
        Level: 4,
        Time: 80000,
      },
      {
        Level: 5,
        Time: 100000,
      },
    ],
    FixedCastTime: 300,
    Requires: {
      SpCost: 15,
      ItemCost: [
        {
          Item: "Booby_Trap",
          Amount: 2,
        },
      ],
    },
    Unit: {
      Id: "Claymoretrap",
      Range: 1,
      Interval: 1000,
      Target: "Enemy",
      Flag: {
        NoReiteration: true,
        NoFootSet: true,
        RemovedByFireRain: true,
      },
    },
  },
  {
    Id: 124,
    Name: "HT_REMOVETRAP",
    Description: "Remove Trap",
    MaxLevel: 1,
    Type: "Misc",
    TargetType: "Trap",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      TargetTrap: true,
    },
    Range: 2,
    Hit: "Single",
    HitCount: 1,
    Requires: {
      SpCost: 5,
    },
  },
  {
    Id: 125,
    Name: "HT_TALKIEBOX",
    Description: "Talkie Box",
    MaxLevel: 1,
    Type: "Misc",
    TargetType: "Ground",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      IsTrap: true,
      AllowOnWarg: true,
    },
    Range: 3,
    Hit: "Single",
    HitCount: 1,
    Duration1: 600000,
    Requires: {
      SpCost: 1,
      ItemCost: [
        {
          Item: "Booby_Trap",
          Amount: 1,
        },
      ],
    },
    Unit: {
      Id: "Talkiebox",
      Range: 1,
      Interval: 1000,
      Flag: {
        NoMob: true,
        RemovedByFireRain: true,
        HiddenTrap: true,
      },
    },
  },
  {
    Id: 126,
    Name: "HT_BEASTBANE",
    Description: "Beast Bane",
    MaxLevel: 10,
    Type: "Weapon",
  },
  {
    Id: 127,
    Name: "HT_FALCON",
    Description: "Falconry Mastery",
    MaxLevel: 1,
    Type: "Misc",
  },
  {
    Id: 128,
    Name: "HT_STEELCROW",
    Description: "Steel Crow",
    MaxLevel: 10,
    Type: "Misc",
  },
  {
    Id: 129,
    Name: "HT_BLITZBEAT",
    Description: "Blitz Beat",
    MaxLevel: 5,
    Type: "Misc",
    TargetType: "Attack",
    DamageFlags: {
      Splash: true,
      IgnoreFlee: true,
    },
    Flags: {
      TargetTrap: true,
      AlterRangeVulture: true,
    },
    Range: 5,
    Hit: "Multi_Hit",
    HitCount: [
      {
        Level: 1,
        Count: 1,
      },
      {
        Level: 2,
        Count: 2,
      },
      {
        Level: 3,
        Count: 3,
      },
      {
        Level: 4,
        Count: 4,
      },
      {
        Level: 5,
        Count: 5,
      },
    ],
    SplashArea: 1,
    CastCancel: true,
    CastTime: 800,
    AfterCastActDelay: 1000,
    FixedCastTime: 200,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 10,
        },
        {
          Level: 2,
          Amount: 13,
        },
        {
          Level: 3,
          Amount: 16,
        },
        {
          Level: 4,
          Amount: 19,
        },
        {
          Level: 5,
          Amount: 22,
        },
      ],
      State: "Falcon",
    },
  },
  {
    Id: 130,
    Name: "HT_DETECTING",
    Description: "Detect",
    MaxLevel: 4,
    Type: "Misc",
    TargetType: "Ground",
    DamageFlags: {
      NoDamage: true,
      Splash: true,
    },
    Range: [
      {
        Level: 1,
        Size: 3,
      },
      {
        Level: 2,
        Size: 5,
      },
      {
        Level: 3,
        Size: 7,
      },
      {
        Level: 4,
        Size: 9,
      },
    ],
    Hit: "Single",
    HitCount: 1,
    SplashArea: 3,
    Requires: {
      SpCost: 8,
      State: "Falcon",
    },
  },
  {
    Id: 131,
    Name: "HT_SPRINGTRAP",
    Description: "Spring Trap",
    MaxLevel: 5,
    Type: "Misc",
    TargetType: "Trap",
    DamageFlags: {
      NoDamage: true,
    },
    Range: [
      {
        Level: 1,
        Size: 4,
      },
      {
        Level: 2,
        Size: 5,
      },
      {
        Level: 3,
        Size: 6,
      },
      {
        Level: 4,
        Size: 7,
      },
      {
        Level: 5,
        Size: 8,
      },
    ],
    Hit: "Single",
    HitCount: 1,
    Requires: {
      SpCost: 10,
      State: "Falcon",
    },
  },
  {
    Id: 132,
    Name: "AS_RIGHT",
    Description: "Righthand Mastery",
    MaxLevel: 5,
    Type: "Weapon",
  },
  {
    Id: 133,
    Name: "AS_LEFT",
    Description: "Lefthand Mastery",
    MaxLevel: 5,
    Type: "Weapon",
  },
  {
    Id: 134,
    Name: "AS_KATAR",
    Description: "Katar Mastery",
    MaxLevel: 10,
    Type: "Weapon",
  },
  {
    Id: 135,
    Name: "AS_CLOAKING",
    Description: "Cloaking",
    MaxLevel: 10,
    Type: "Weapon",
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      IgnoreKagehumi: true,
      IgnoreWugBite: true,
      Toggleable: true,
    },
    Hit: "Single",
    HitCount: 1,
    Duration1: [
      {
        Level: 1,
        Time: 500,
      },
      {
        Level: 2,
        Time: 1000,
      },
      {
        Level: 3,
        Time: 2000,
      },
      {
        Level: 4,
        Time: 3000,
      },
      {
        Level: 5,
        Time: 4000,
      },
      {
        Level: 6,
        Time: 5000,
      },
      {
        Level: 7,
        Time: 6000,
      },
      {
        Level: 8,
        Time: 7000,
      },
      {
        Level: 9,
        Time: 8000,
      },
      {
        Level: 10,
        Time: 9000,
      },
    ],
    Requires: {
      SpCost: 15,
    },
    Status: "Cloaking",
  },
  {
    Id: 136,
    Name: "AS_SONICBLOW",
    Description: "Sonic Blow",
    MaxLevel: 10,
    Type: "Weapon",
    TargetType: "Attack",
    Range: 1,
    Hit: "Multi_Hit",
    HitCount: -8,
    Element: "Weapon",
    Duration2: 4500,
    Cooldown: 1000,
    CastDelayFlags: {
      IgnoreStatus: true,
    },
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 16,
        },
        {
          Level: 2,
          Amount: 18,
        },
        {
          Level: 3,
          Amount: 20,
        },
        {
          Level: 4,
          Amount: 22,
        },
        {
          Level: 5,
          Amount: 24,
        },
        {
          Level: 6,
          Amount: 26,
        },
        {
          Level: 7,
          Amount: 28,
        },
        {
          Level: 8,
          Amount: 30,
        },
        {
          Level: 9,
          Amount: 32,
        },
        {
          Level: 10,
          Amount: 34,
        },
      ],
      Weapon: {
        Katar: true,
      },
    },
    Status: "Stun",
  },
  {
    Id: 137,
    Name: "AS_GRIMTOOTH",
    Description: "Grimtooth",
    MaxLevel: 5,
    Type: "Weapon",
    TargetType: "Attack",
    DamageFlags: {
      Splash: true,
    },
    Flags: {
      TargetTrap: true,
      AllowWhenHidden: true,
    },
    Range: [
      {
        Level: 1,
        Size: 3,
      },
      {
        Level: 2,
        Size: 4,
      },
      {
        Level: 3,
        Size: 5,
      },
      {
        Level: 4,
        Size: 6,
      },
      {
        Level: 5,
        Size: 7,
      },
    ],
    Hit: "Single",
    HitCount: 1,
    Element: "Weapon",
    SplashArea: 1,
    Duration2: 1000,
    Requires: {
      SpCost: 3,
      Weapon: {
        Katar: true,
      },
      Status: {
        Hiding: true,
      },
    },
  },
  {
    Id: 138,
    Name: "AS_ENCHANTPOISON",
    Description: "Enchant Poison",
    MaxLevel: 10,
    Type: "Weapon",
    TargetType: "Support",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      PartyOnly: true,
    },
    Range: 1,
    Hit: "Single",
    HitCount: 1,
    Element: "Poison",
    Duration1: [
      {
        Level: 1,
        Time: 30000,
      },
      {
        Level: 2,
        Time: 45000,
      },
      {
        Level: 3,
        Time: 60000,
      },
      {
        Level: 4,
        Time: 75000,
      },
      {
        Level: 5,
        Time: 90000,
      },
      {
        Level: 6,
        Time: 105000,
      },
      {
        Level: 7,
        Time: 120000,
      },
      {
        Level: 8,
        Time: 135000,
      },
      {
        Level: 9,
        Time: 150000,
      },
      {
        Level: 10,
        Time: 165000,
      },
    ],
    Duration2: [
      {
        Level: 1,
        Time: 10000,
      },
      {
        Level: 2,
        Time: 20000,
      },
      {
        Level: 3,
        Time: 30000,
      },
      {
        Level: 4,
        Time: 40000,
      },
      {
        Level: 5,
        Time: 50000,
      },
      {
        Level: 6,
        Time: 60000,
      },
      {
        Level: 7,
        Time: 70000,
      },
      {
        Level: 8,
        Time: 80000,
      },
      {
        Level: 9,
        Time: 90000,
      },
      {
        Level: 10,
        Time: 100000,
      },
    ],
    Requires: {
      SpCost: 20,
    },
    Status: "EncPoison",
  },
  {
    Id: 139,
    Name: "AS_POISONREACT",
    Description: "Poison React",
    MaxLevel: 10,
    Type: "Weapon",
    TargetType: "Self",
    Hit: "Single",
    HitCount: 1,
    Duration1: [
      {
        Level: 1,
        Time: 20000,
      },
      {
        Level: 2,
        Time: 25000,
      },
      {
        Level: 3,
        Time: 30000,
      },
      {
        Level: 4,
        Time: 35000,
      },
      {
        Level: 5,
        Time: 40000,
      },
      {
        Level: 6,
        Time: 45000,
      },
      {
        Level: 7,
        Time: 50000,
      },
      {
        Level: 8,
        Time: 55000,
      },
      {
        Level: 9,
        Time: 60000,
      },
      {
        Level: 10,
        Time: 65000,
      },
    ],
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 25,
        },
        {
          Level: 2,
          Amount: 30,
        },
        {
          Level: 3,
          Amount: 35,
        },
        {
          Level: 4,
          Amount: 40,
        },
        {
          Level: 5,
          Amount: 45,
        },
        {
          Level: 6,
          Amount: 50,
        },
        {
          Level: 7,
          Amount: 55,
        },
        {
          Level: 8,
          Amount: 60,
        },
        {
          Level: 9,
          Amount: 45,
        },
        {
          Level: 10,
          Amount: 45,
        },
      ],
    },
    Status: "PoisonReact",
  },
  {
    Id: 140,
    Name: "AS_VENOMDUST",
    Description: "Venom Dust",
    MaxLevel: 10,
    Type: "Weapon",
    TargetType: "Ground",
    DamageFlags: {
      NoDamage: true,
    },
    Range: 2,
    Hit: "Single",
    HitCount: 1,
    Element: "Poison",
    Duration1: [
      {
        Level: 1,
        Time: 5000,
      },
      {
        Level: 2,
        Time: 10000,
      },
      {
        Level: 3,
        Time: 15000,
      },
      {
        Level: 4,
        Time: 20000,
      },
      {
        Level: 5,
        Time: 25000,
      },
      {
        Level: 6,
        Time: 30000,
      },
      {
        Level: 7,
        Time: 35000,
      },
      {
        Level: 8,
        Time: 40000,
      },
      {
        Level: 9,
        Time: 45000,
      },
      {
        Level: 10,
        Time: 50000,
      },
    ],
    Duration2: 18000,
    Requires: {
      SpCost: 20,
      ItemCost: [
        {
          Item: "Red_Gemstone",
          Amount: 1,
        },
      ],
    },
    Unit: {
      Id: "Venomdust",
      Layout: -1,
      Range: 1,
      Interval: 1000,
      Target: "Enemy",
      Flag: {
        RemovedByFireRain: true,
      },
    },
    Status: "Poison",
  },
  {
    Id: 141,
    Name: "AS_SPLASHER",
    Description: "Venom Splasher",
    MaxLevel: 10,
    Type: "Weapon",
    TargetType: "Attack",
    DamageFlags: {
      NoDamage: true,
      IgnoreElement: true,
      IgnoreFlee: true,
    },
    Range: 1,
    Hit: "Single",
    HitCount: 1,
    Element: "Weapon",
    SplashArea: 2,
    CopyFlags: {
      Skill: {
        Plagiarism: true,
        Reproduce: true,
      },
    },
    CastCancel: true,
    CastTime: 500,
    Duration1: [
      {
        Level: 1,
        Time: 11000,
      },
      {
        Level: 2,
        Time: 10000,
      },
      {
        Level: 3,
        Time: 9000,
      },
      {
        Level: 4,
        Time: 8000,
      },
      {
        Level: 5,
        Time: 7000,
      },
      {
        Level: 6,
        Time: 6000,
      },
      {
        Level: 7,
        Time: 5000,
      },
      {
        Level: 8,
        Time: 4000,
      },
      {
        Level: 9,
        Time: 3000,
      },
      {
        Level: 10,
        Time: 2000,
      },
    ],
    Duration2: 20000,
    Cooldown: [
      {
        Level: 1,
        Time: 7500,
      },
      {
        Level: 2,
        Time: 8000,
      },
      {
        Level: 3,
        Time: 8500,
      },
      {
        Level: 4,
        Time: 9000,
      },
      {
        Level: 5,
        Time: 9500,
      },
      {
        Level: 6,
        Time: 10000,
      },
      {
        Level: 7,
        Time: 10500,
      },
      {
        Level: 8,
        Time: 11000,
      },
      {
        Level: 9,
        Time: 11500,
      },
      {
        Level: 10,
        Time: 2000,
      },
    ],
    FixedCastTime: 500,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 12,
        },
        {
          Level: 2,
          Amount: 14,
        },
        {
          Level: 3,
          Amount: 16,
        },
        {
          Level: 4,
          Amount: 18,
        },
        {
          Level: 5,
          Amount: 20,
        },
        {
          Level: 6,
          Amount: 22,
        },
        {
          Level: 7,
          Amount: 24,
        },
        {
          Level: 8,
          Amount: 26,
        },
        {
          Level: 9,
          Amount: 28,
        },
        {
          Level: 10,
          Amount: 30,
        },
      ],
    },
    Status: "Splasher",
  },
  {
    Id: 142,
    Name: "NV_FIRSTAID",
    Description: "First Aid",
    MaxLevel: 1,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      IsQuest: true,
    },
    Hit: "Single",
    HitCount: 1,
    Requires: {
      SpCost: 3,
    },
  },
  {
    Id: 143,
    Name: "NV_TRICKDEAD",
    Description: "Play Dead",
    MaxLevel: 1,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      IsQuest: true,
      Toggleable: true,
    },
    Hit: "Single",
    HitCount: 1,
    Duration1: 600000,
    Requires: {
      SpCost: 5,
    },
    Status: "TrickDead",
  },
  {
    Id: 144,
    Name: "SM_MOVINGRECOVERY",
    Description: "Moving HP-Recovery",
    MaxLevel: 1,
    Flags: {
      IsQuest: true,
    },
  },
  {
    Id: 145,
    Name: "SM_FATALBLOW",
    Description: "Fatal Blow",
    MaxLevel: 1,
    Type: "Weapon",
    Flags: {
      IsQuest: true,
    },
  },
  {
    Id: 146,
    Name: "SM_AUTOBERSERK",
    Description: "Auto Berserk",
    MaxLevel: 1,
    Type: "Weapon",
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      IsQuest: true,
    },
    Hit: "Single",
    HitCount: 1,
    Requires: {
      SpCost: 1,
    },
    Status: "AutoBerserk",
  },
  {
    Id: 147,
    Name: "AC_MAKINGARROW",
    Description: "Arrow Crafting",
    MaxLevel: 1,
    Type: "Weapon",
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      IsQuest: true,
    },
    Requires: {
      SpCost: 10,
      State: "Recover_Weight_Rate",
    },
  },
  {
    Id: 148,
    Name: "AC_CHARGEARROW",
    Description: "Arrow Repel",
    MaxLevel: 1,
    Type: "Weapon",
    TargetType: "Attack",
    DamageFlags: {
      Splash: true,
    },
    Flags: {
      IsQuest: true,
      AlterRangeVulture: true,
    },
    Range: -9,
    Hit: "Single",
    HitCount: 1,
    Element: "Weapon",
    Knockback: 6,
    CopyFlags: {
      Skill: {
        Plagiarism: true,
        Reproduce: true,
      },
    },
    FixedCastTime: 1500,
    Requires: {
      SpCost: 15,
      Weapon: {
        Bow: true,
      },
      Ammo: {
        Arrow: true,
      },
      AmmoAmount: 1,
    },
  },
  {
    Id: 149,
    Name: "TF_SPRINKLESAND",
    Description: "Sand Attack",
    MaxLevel: 1,
    Type: "Weapon",
    TargetType: "Attack",
    Flags: {
      IsQuest: true,
    },
    Range: 1,
    Hit: "Single",
    HitCount: 1,
    Element: "Earth",
    Duration2: 18000,
    Requires: {
      SpCost: 9,
    },
    Status: "Blind",
  },
  {
    Id: 150,
    Name: "TF_BACKSLIDING",
    Description: "Back Slide",
    MaxLevel: 1,
    Type: "Weapon",
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      IsQuest: true,
      IgnoreKagehumi: true,
    },
    Hit: "Single",
    HitCount: 1,
    Knockback: 5,
    Requires: {
      SpCost: 7,
    },
  },
  {
    Id: 151,
    Name: "TF_PICKSTONE",
    Description: "Find Stone",
    MaxLevel: 1,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      IsQuest: true,
    },
    Hit: "Single",
    HitCount: 1,
    FixedCastTime: 500,
    Requires: {
      SpCost: 2,
      State: "Recover_Weight_Rate",
    },
  },
  {
    Id: 152,
    Name: "TF_THROWSTONE",
    Description: "Stone Fling",
    MaxLevel: 1,
    Type: "Misc",
    TargetType: "Attack",
    DamageFlags: {
      IgnoreFlee: true,
    },
    Flags: {
      IsQuest: true,
    },
    Range: 7,
    Hit: "Single",
    HitCount: 1,
    CopyFlags: {
      Skill: {
        Plagiarism: true,
        Reproduce: true,
      },
    },
    AfterCastActDelay: 100,
    Duration1: 4500,
    Duration2: 20000,
    Requires: {
      SpCost: 2,
      ItemCost: [
        {
          Item: "Stone",
          Amount: 1,
        },
      ],
    },
    Status: "Stun",
  },
  {
    Id: 153,
    Name: "MC_CARTREVOLUTION",
    Description: "Cart Revolution",
    MaxLevel: 1,
    Type: "Weapon",
    TargetType: "Attack",
    DamageFlags: {
      Splash: true,
    },
    Flags: {
      IsQuest: true,
      TargetTrap: true,
      AllowOnMado: true,
    },
    Range: 1,
    Hit: "Single",
    HitCount: 1,
    Element: "Weapon",
    SplashArea: 1,
    Knockback: 2,
    Requires: {
      SpCost: 12,
      State: "Cart",
    },
  },
  {
    Id: 154,
    Name: "MC_CHANGECART",
    Description: "Change Cart",
    MaxLevel: 1,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      IsQuest: true,
      AllowOnMado: true,
    },
    Hit: "Single",
    HitCount: 1,
    Requires: {
      SpCost: 40,
      State: "Cart",
    },
  },
  {
    Id: 155,
    Name: "MC_LOUD",
    Description: "Crazy Uproar",
    MaxLevel: 1,
    Type: "Weapon",
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
      Splash: true,
    },
    Flags: {
      IsQuest: true,
      AllowOnMado: true,
    },
    Hit: "Single",
    HitCount: 1,
    SplashArea: -1,
    CastTime: 1000,
    Duration1: 300000,
    Cooldown: 30000,
    FixedCastTime: 300,
    Requires: {
      SpCost: 8,
    },
    Status: "Loud",
  },
  {
    Id: 156,
    Name: "AL_HOLYLIGHT",
    Description: "Holy Light",
    MaxLevel: 1,
    Type: "Magic",
    TargetType: "Attack",
    Flags: {
      IsQuest: true,
    },
    Range: 9,
    Hit: "Single",
    HitCount: 1,
    Element: "Holy",
    CopyFlags: {
      Skill: {
        Plagiarism: true,
        Reproduce: true,
      },
    },
    CastCancel: true,
    CastTime: 800,
    FixedCastTime: 200,
    Requires: {
      SpCost: 15,
    },
  },
  {
    Id: 157,
    Name: "MG_ENERGYCOAT",
    Description: "Energy Coat",
    MaxLevel: 1,
    Type: "Magic",
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      IsQuest: true,
    },
    Hit: "Single",
    HitCount: 1,
    CastCancel: true,
    Duration1: 300000,
    FixedCastTime: 5000,
    Requires: {
      SpCost: 30,
    },
    Status: "EnergyCoat",
  },
  {
    Id: 158,
    Name: "NPC_PIERCINGATT",
    Description: "Piercing Attack",
    MaxLevel: 10,
    Type: "Weapon",
    TargetType: "Attack",
    DamageFlags: {
      IgnoreDefense: true,
    },
    Flags: {
      IsNpc: true,
    },
    Range: -7,
    Hit: "Single",
    HitCount: 1,
    Element: "Weapon",
  },
  {
    Id: 159,
    Name: "NPC_MENTALBREAKER",
    Description: "Spirit Destruction",
    MaxLevel: 5,
    Type: "Weapon",
    TargetType: "Attack",
    DamageFlags: {
      IgnoreFlee: true,
    },
    Flags: {
      IsNpc: true,
    },
    Range: -7,
    Hit: "Single",
    HitCount: 1,
    Element: "Weapon",
  },
  {
    Id: 160,
    Name: "NPC_RANGEATTACK",
    Description: "Stand off attack",
    MaxLevel: 10,
    Type: "Weapon",
    TargetType: "Attack",
    Flags: {
      IsNpc: true,
    },
    Range: -7,
    Hit: "Single",
    HitCount: 1,
  },
  {
    Id: 161,
    Name: "NPC_ATTRICHANGE",
    Description: "Attribute Change",
    MaxLevel: 1,
    Type: "Magic",
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      IsNpc: true,
    },
    HitCount: 1,
    Duration1: 1800000,
    Status: "ElementalChange",
  },
  {
    Id: 162,
    Name: "NPC_CHANGEWATER",
    Description: "Water Attribute Change",
    MaxLevel: 1,
    Type: "Magic",
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      IsNpc: true,
    },
    HitCount: 1,
    Element: "Water",
    Duration1: 1800000,
    Status: "ElementalChange",
  },
  {
    Id: 163,
    Name: "NPC_CHANGEGROUND",
    Description: "Earth Attribute Change",
    MaxLevel: 1,
    Type: "Magic",
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      IsNpc: true,
    },
    HitCount: 1,
    Element: "Earth",
    Duration1: 1800000,
    Status: "ElementalChange",
  },
  {
    Id: 164,
    Name: "NPC_CHANGEFIRE",
    Description: "Fire Attribute Change",
    MaxLevel: 1,
    Type: "Magic",
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      IsNpc: true,
    },
    HitCount: 1,
    Element: "Fire",
    Duration1: 1800000,
    Status: "ElementalChange",
  },
  {
    Id: 165,
    Name: "NPC_CHANGEWIND",
    Description: "Wind Attribute Change",
    MaxLevel: 1,
    Type: "Magic",
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      IsNpc: true,
    },
    HitCount: 1,
    Element: "Wind",
    Duration1: 1800000,
    Status: "ElementalChange",
  },
  {
    Id: 166,
    Name: "NPC_CHANGEPOISON",
    Description: "Poison Attribute Change",
    MaxLevel: 1,
    Type: "Magic",
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      IsNpc: true,
    },
    HitCount: 1,
    Element: "Poison",
    Duration1: 1800000,
    Status: "ElementalChange",
  },
  {
    Id: 167,
    Name: "NPC_CHANGEHOLY",
    Description: "Holy Attribute Change",
    MaxLevel: 1,
    Type: "Magic",
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      IsNpc: true,
    },
    HitCount: 1,
    Element: "Holy",
    Duration1: 1800000,
    Status: "ElementalChange",
  },
  {
    Id: 168,
    Name: "NPC_CHANGEDARKNESS",
    Description: "Shadow Attribute Change",
    MaxLevel: 1,
    Type: "Magic",
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      IsNpc: true,
    },
    HitCount: 1,
    Element: "Dark",
    Duration1: 1800000,
    Status: "ElementalChange",
  },
  {
    Id: 169,
    Name: "NPC_CHANGETELEKINESIS",
    Description: "Ghost Attribute Change",
    MaxLevel: 1,
    Type: "Magic",
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      IsNpc: true,
    },
    HitCount: 1,
    Element: "Ghost",
    Duration1: 1800000,
    Status: "ElementalChange",
  },
  {
    Id: 170,
    Name: "NPC_CRITICALSLASH",
    Description: "Defense disregard attack",
    MaxLevel: 10,
    Type: "Weapon",
    TargetType: "Attack",
    DamageFlags: {
      IgnoreDefense: true,
      Critical: true,
    },
    Flags: {
      IsNpc: true,
    },
    Range: -7,
    Hit: "Single",
    HitCount: 1,
    Element: "Weapon",
  },
  {
    Id: 171,
    Name: "NPC_COMBOATTACK",
    Description: "Multi-stage Attack",
    MaxLevel: 10,
    Type: "Weapon",
    TargetType: "Attack",
    Flags: {
      IsNpc: true,
    },
    Range: -7,
    Hit: "Multi_Hit",
    HitCount: [
      {
        Level: 1,
        Count: -2,
      },
      {
        Level: 2,
        Count: -3,
      },
      {
        Level: 3,
        Count: -4,
      },
      {
        Level: 4,
        Count: -5,
      },
      {
        Level: 5,
        Count: -6,
      },
      {
        Level: 6,
        Count: -7,
      },
      {
        Level: 7,
        Count: -8,
      },
      {
        Level: 8,
        Count: -9,
      },
      {
        Level: 9,
        Count: -10,
      },
      {
        Level: 10,
        Count: -11,
      },
    ],
    Element: "Weapon",
  },
  {
    Id: 172,
    Name: "NPC_GUIDEDATTACK",
    Description: "Guided Attack",
    MaxLevel: 10,
    Type: "Weapon",
    TargetType: "Attack",
    DamageFlags: {
      IgnoreFlee: true,
    },
    Flags: {
      IsNpc: true,
    },
    Range: -7,
    Hit: "Single",
    HitCount: 1,
    Element: "Weapon",
  },
  {
    Id: 173,
    Name: "NPC_SELFDESTRUCTION",
    Description: "Suicide bombing",
    MaxLevel: 10,
    Type: "Misc",
    TargetType: "Self",
    DamageFlags: {
      Splash: true,
      IgnoreDefense: true,
      IgnoreFlee: true,
      IgnoreDefCard: true,
    },
    Flags: {
      IsNpc: true,
      TargetTrap: true,
    },
    Hit: "Single",
    HitCount: 1,
    Element: "Fire",
    SplashArea: 5,
    Knockback: 3,
    Duration1: 3500,
  },
  {
    Id: 174,
    Name: "NPC_SPLASHATTACK",
    Description: "Splash attack",
    MaxLevel: 1,
    Type: "Weapon",
    TargetType: "Attack",
    DamageFlags: {
      Splash: true,
    },
    Flags: {
      IsNpc: true,
      TargetTrap: true,
    },
    Range: -9,
    Hit: "Single",
    HitCount: 1,
    Element: "Weapon",
    SplashArea: 3,
  },
  {
    Id: 175,
    Name: "NPC_SUICIDE",
    Description: "Suicide",
    MaxLevel: 10,
    Type: "Misc",
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
      IgnoreFlee: true,
    },
    Flags: {
      IsNpc: true,
    },
    HitCount: 1,
  },
  {
    Id: 176,
    Name: "NPC_POISON",
    Description: "Poison Attack",
    MaxLevel: 5,
    Type: "Weapon",
    TargetType: "Attack",
    Flags: {
      IsNpc: true,
    },
    Range: -7,
    Hit: "Single",
    HitCount: 1,
    Element: "Weapon",
    Duration2: 18000,
    Status: "Poison",
  },
  {
    Id: 177,
    Name: "NPC_BLINDATTACK",
    Description: "Blind Attack",
    MaxLevel: 5,
    Type: "Weapon",
    TargetType: "Attack",
    Flags: {
      IsNpc: true,
    },
    Range: -7,
    Hit: "Single",
    HitCount: 1,
    Element: "Weapon",
    Duration2: 18000,
    Status: "Blind",
  },
  {
    Id: 178,
    Name: "NPC_SILENCEATTACK",
    Description: "Silence Attack",
    MaxLevel: 5,
    Type: "Weapon",
    TargetType: "Attack",
    Flags: {
      IsNpc: true,
    },
    Range: -7,
    Hit: "Single",
    HitCount: 1,
    Element: "Weapon",
    Duration2: 18000,
    Status: "Silence",
  },
  {
    Id: 179,
    Name: "NPC_STUNATTACK",
    Description: "Stun Attack",
    MaxLevel: 5,
    Type: "Weapon",
    TargetType: "Attack",
    Flags: {
      IsNpc: true,
    },
    Range: -7,
    Hit: "Single",
    HitCount: 1,
    Element: "Weapon",
    Duration2: 4500,
    Status: "Stun",
  },
  {
    Id: 180,
    Name: "NPC_PETRIFYATTACK",
    Description: "Petrify Attack",
    MaxLevel: 5,
    Type: "Weapon",
    TargetType: "Attack",
    Flags: {
      IsNpc: true,
    },
    Range: -7,
    Hit: "Single",
    HitCount: 1,
    Element: "Weapon",
    Duration1: 100,
    Duration2: 17000,
    Status: "StoneWait",
  },
  {
    Id: 181,
    Name: "NPC_CURSEATTACK",
    Description: "Curse Attack",
    MaxLevel: 5,
    Type: "Weapon",
    TargetType: "Attack",
    Flags: {
      IsNpc: true,
    },
    Range: -7,
    Hit: "Single",
    HitCount: 1,
    Element: "Dark",
    Duration2: 28000,
    Status: "Curse",
  },
  {
    Id: 182,
    Name: "NPC_SLEEPATTACK",
    Description: "Sleep attack",
    MaxLevel: 5,
    Type: "Weapon",
    TargetType: "Attack",
    Flags: {
      IsNpc: true,
    },
    Range: -7,
    Hit: "Single",
    HitCount: 1,
    Element: "Weapon",
    Duration2: 18000,
    Status: "Sleep",
  },
  {
    Id: 183,
    Name: "NPC_RANDOMATTACK",
    Description: "Random Attack",
    MaxLevel: 10,
    Type: "Weapon",
    TargetType: "Attack",
    Flags: {
      IsNpc: true,
    },
    Range: -7,
    Hit: "Single",
    HitCount: 1,
    Element: "Random",
  },
  {
    Id: 184,
    Name: "NPC_WATERATTACK",
    Description: "Water Attribute Attack",
    MaxLevel: 10,
    Type: "Weapon",
    TargetType: "Attack",
    Flags: {
      IsNpc: true,
    },
    Range: -7,
    Hit: "Single",
    HitCount: 1,
    Element: "Water",
  },
  {
    Id: 185,
    Name: "NPC_GROUNDATTACK",
    Description: "Earth Attribute Attack",
    MaxLevel: 10,
    Type: "Weapon",
    TargetType: "Attack",
    Flags: {
      IsNpc: true,
      TargetHidden: true,
    },
    Range: -7,
    Hit: "Single",
    HitCount: 1,
    Element: "Earth",
  },
  {
    Id: 186,
    Name: "NPC_FIREATTACK",
    Description: "Fire Attribute Attack",
    MaxLevel: 10,
    Type: "Weapon",
    TargetType: "Attack",
    Flags: {
      IsNpc: true,
    },
    Range: -7,
    Hit: "Single",
    HitCount: 1,
    Element: "Fire",
  },
  {
    Id: 187,
    Name: "NPC_WINDATTACK",
    Description: "Wind Attribute Attack",
    MaxLevel: 10,
    Type: "Weapon",
    TargetType: "Attack",
    Flags: {
      IsNpc: true,
    },
    Range: -7,
    Hit: "Single",
    HitCount: 1,
    Element: "Wind",
  },
  {
    Id: 188,
    Name: "NPC_POISONATTACK",
    Description: "Poison Attribute Attack",
    MaxLevel: 10,
    Type: "Weapon",
    TargetType: "Attack",
    Flags: {
      IsNpc: true,
    },
    Range: -7,
    Hit: "Single",
    HitCount: 1,
    Element: "Poison",
    Status: "Poison",
  },
  {
    Id: 189,
    Name: "NPC_HOLYATTACK",
    Description: "Holy Attribute Attack",
    MaxLevel: 10,
    Type: "Weapon",
    TargetType: "Attack",
    Flags: {
      IsNpc: true,
    },
    Range: -7,
    Hit: "Single",
    HitCount: 1,
    Element: "Holy",
  },
  {
    Id: 190,
    Name: "NPC_DARKNESSATTACK",
    Description: "Shadow Attribute Attack",
    MaxLevel: 10,
    Type: "Weapon",
    TargetType: "Attack",
    Flags: {
      IsNpc: true,
    },
    Range: -7,
    Hit: "Single",
    HitCount: 1,
    Element: "Dark",
  },
  {
    Id: 191,
    Name: "NPC_TELEKINESISATTACK",
    Description: "Ghost Attribute Attack",
    MaxLevel: 10,
    Type: "Weapon",
    TargetType: "Attack",
    Flags: {
      IsNpc: true,
    },
    Range: -7,
    Hit: "Single",
    HitCount: 1,
    Element: "Ghost",
  },
  {
    Id: 192,
    Name: "NPC_MAGICALATTACK",
    Description: "Demon Shock Attack",
    MaxLevel: 10,
    Type: "Weapon",
    TargetType: "Attack",
    Flags: {
      IsNpc: true,
    },
    Range: -7,
    Hit: "Single",
    HitCount: 1,
    Element: "Weapon",
    Duration1: 15000,
    Status: "MagicalAttack",
  },
  {
    Id: 193,
    Name: "NPC_METAMORPHOSIS",
    Description: "Metamorphosis",
    MaxLevel: 10,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      IsNpc: true,
    },
    HitCount: 1,
  },
  {
    Id: 194,
    Name: "NPC_PROVOCATION",
    Description: "Provocation",
    MaxLevel: 10,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      IsNpc: true,
    },
    HitCount: 1,
  },
  {
    Id: 195,
    Name: "NPC_SMOKING",
    Description: "Smoking",
    MaxLevel: 10,
    Type: "Misc",
    TargetType: "Self",
    DamageFlags: {
      IgnoreElement: true,
      IgnoreFlee: true,
    },
    Flags: {
      IsNpc: true,
    },
    Hit: "Single",
    HitCount: 1,
  },
  {
    Id: 196,
    Name: "NPC_SUMMONSLAVE",
    Description: "Follower Summons",
    MaxLevel: 10,
    Type: "Magic",
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      IsNpc: true,
    },
    HitCount: 1,
  },
  {
    Id: 197,
    Name: "NPC_EMOTION",
    Description: "Emotion",
    MaxLevel: 10,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      IsNpc: true,
    },
    HitCount: 1,
    Status: "ModeChange",
  },
  {
    Id: 198,
    Name: "NPC_TRANSFORMATION",
    Description: "Transformation",
    MaxLevel: 10,
    Type: "Magic",
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      IsNpc: true,
    },
    HitCount: 1,
  },
  {
    Id: 199,
    Name: "NPC_BLOODDRAIN",
    Description: "Sucking Blood",
    MaxLevel: 1,
    Type: "Weapon",
    TargetType: "Attack",
    DamageFlags: {
      IgnoreFlee: true,
    },
    Flags: {
      IsNpc: true,
    },
    Range: -7,
    Hit: "Single",
    HitCount: 1,
    Element: "Dark",
  },
  {
    Id: 200,
    Name: "NPC_ENERGYDRAIN",
    Description: "Energy Drain",
    MaxLevel: 1,
    Type: "Magic",
    TargetType: "Attack",
    Flags: {
      IsNpc: true,
    },
    Range: 9,
    Hit: "Single",
    HitCount: 1,
    Element: "Dark",
  },
  {
    Id: 201,
    Name: "NPC_KEEPING",
    Description: "Keeping",
    MaxLevel: 1,
    Type: "Weapon",
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      IsNpc: true,
    },
    HitCount: 1,
    Duration1: [
      {
        Level: 1,
        Time: 60000,
      },
      {
        Level: 2,
        Time: 70000,
      },
      {
        Level: 3,
        Time: 80000,
      },
      {
        Level: 4,
        Time: 90000,
      },
      {
        Level: 5,
        Time: 100000,
      },
      {
        Level: 6,
        Time: 110000,
      },
      {
        Level: 7,
        Time: 120000,
      },
      {
        Level: 8,
        Time: 130000,
      },
      {
        Level: 9,
        Time: 140000,
      },
      {
        Level: 10,
        Time: 150000,
      },
    ],
    Status: "Keeping",
  },
  {
    Id: 202,
    Name: "NPC_DARKBREATH",
    Description: "Dark Breath",
    MaxLevel: 5,
    Type: "Magic",
    TargetType: "Attack",
    Flags: {
      IsNpc: true,
    },
    Range: 9,
    Hit: "Single",
    HitCount: 1,
    Element: "Dark",
  },
  {
    Id: 203,
    Name: "NPC_DARKBLESSING",
    Description: "Dark Blessing",
    MaxLevel: 10,
    Type: "Magic",
    TargetType: "Attack",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      IsNpc: true,
    },
    Range: 9,
    Hit: "Single",
    HitCount: 1,
    Element: "Dark",
    Status: "Coma",
  },
  {
    Id: 204,
    Name: "NPC_BARRIER",
    Description: "Barrier",
    MaxLevel: 1,
    Type: "Magic",
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      IsNpc: true,
    },
    HitCount: 1,
    Duration1: [
      {
        Level: 1,
        Time: 60000,
      },
      {
        Level: 2,
        Time: 70000,
      },
      {
        Level: 3,
        Time: 80000,
      },
      {
        Level: 4,
        Time: 90000,
      },
      {
        Level: 5,
        Time: 100000,
      },
      {
        Level: 6,
        Time: 110000,
      },
      {
        Level: 7,
        Time: 120000,
      },
      {
        Level: 8,
        Time: 130000,
      },
      {
        Level: 9,
        Time: 140000,
      },
      {
        Level: 10,
        Time: 150000,
      },
    ],
    Status: "Barrier",
  },
  {
    Id: 205,
    Name: "NPC_DEFENDER",
    Description: "Defender",
    MaxLevel: 1,
    Type: "Weapon",
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      IsNpc: true,
    },
    HitCount: 1,
    Duration1: [
      {
        Level: 1,
        Time: 60000,
      },
      {
        Level: 2,
        Time: 70000,
      },
      {
        Level: 3,
        Time: 80000,
      },
      {
        Level: 4,
        Time: 90000,
      },
      {
        Level: 5,
        Time: 100000,
      },
      {
        Level: 6,
        Time: 110000,
      },
      {
        Level: 7,
        Time: 120000,
      },
      {
        Level: 8,
        Time: 130000,
      },
      {
        Level: 9,
        Time: 140000,
      },
      {
        Level: 10,
        Time: 150000,
      },
    ],
    Status: "Armor",
  },
  {
    Id: 206,
    Name: "NPC_LICK",
    Description: "Lick",
    MaxLevel: 5,
    Type: "Weapon",
    TargetType: "Attack",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      IsNpc: true,
    },
    Range: 1,
    Hit: "Single",
    HitCount: 1,
    Element: "Weapon",
    Duration2: 4500,
    Status: "Stun",
  },
  {
    Id: 207,
    Name: "NPC_HALLUCINATION",
    Description: "Hallucination",
    MaxLevel: 5,
    Type: "Magic",
    TargetType: "Attack",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      IsNpc: true,
    },
    Range: 9,
    HitCount: 1,
    Duration2: 30000,
    Status: "Hallucination",
  },
  {
    Id: 208,
    Name: "NPC_REBIRTH",
    Description: "Rebirth",
    MaxLevel: 1,
    Type: "Magic",
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      IsNpc: true,
    },
    HitCount: 1,
    Status: "Rebirth",
  },
  {
    Id: 209,
    Name: "NPC_SUMMONMONSTER",
    Description: "Monster Summons",
    MaxLevel: 10,
    Type: "Magic",
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      IsNpc: true,
    },
    HitCount: 1,
  },
  {
    Id: 210,
    Name: "RG_SNATCHER",
    Description: "Gank",
    MaxLevel: 10,
    Type: "Weapon",
    Element: "Weapon",
  },
  {
    Id: 211,
    Name: "RG_STEALCOIN",
    Description: "Mug",
    MaxLevel: 10,
    Type: "Weapon",
    TargetType: "Attack",
    DamageFlags: {
      NoDamage: true,
    },
    Range: 1,
    Hit: "Single",
    HitCount: 1,
    Requires: {
      SpCost: 15,
    },
  },
  {
    Id: 212,
    Name: "RG_BACKSTAP",
    Description: "Back Stab",
    MaxLevel: 10,
    Type: "Weapon",
    TargetType: "Attack",
    Range: -1,
    Hit: "Single",
    HitCount: 1,
    Element: "Weapon",
    CopyFlags: {
      Skill: {
        Plagiarism: true,
        Reproduce: true,
      },
    },
    AfterCastActDelay: 500,
    Duration1: 4500,
    Cooldown: 500,
    Requires: {
      SpCost: 16,
    },
    Status: "Stun",
  },
  {
    Id: 213,
    Name: "RG_TUNNELDRIVE",
    Description: "Stalk",
    MaxLevel: 5,
  },
  {
    Id: 214,
    Name: "RG_RAID",
    Description: "Sightless Mind",
    MaxLevel: 5,
    Type: "Weapon",
    TargetType: "Self",
    DamageFlags: {
      Splash: true,
    },
    Flags: {
      TargetTrap: true,
      AllowWhenHidden: true,
    },
    Hit: "Single",
    HitCount: 1,
    Element: "Weapon",
    SplashArea: 2,
    Duration1: 5000,
    Duration2: 20000,
    Requires: {
      SpCost: 15,
      Status: {
        Hiding: true,
      },
    },
    Status: "Raid",
  },
  {
    Id: 215,
    Name: "RG_STRIPWEAPON",
    Description: "Divest Weapon",
    MaxLevel: 5,
    Type: "Weapon",
    TargetType: "Attack",
    DamageFlags: {
      NoDamage: true,
    },
    Range: 1,
    Hit: "Single",
    HitCount: 1,
    CastTime: [
      {
        Level: 1,
        Time: 560,
      },
      {
        Level: 2,
        Time: 720,
      },
      {
        Level: 3,
        Time: 880,
      },
      {
        Level: 4,
        Time: 1140,
      },
      {
        Level: 5,
        Time: 1200,
      },
    ],
    AfterCastActDelay: 1000,
    Duration1: [
      {
        Level: 1,
        Time: 75000,
      },
      {
        Level: 2,
        Time: 90000,
      },
      {
        Level: 3,
        Time: 105000,
      },
      {
        Level: 4,
        Time: 120000,
      },
      {
        Level: 5,
        Time: 135000,
      },
    ],
    FixedCastTime: [
      {
        Level: 1,
        Time: 140,
      },
      {
        Level: 2,
        Time: 180,
      },
      {
        Level: 3,
        Time: 220,
      },
      {
        Level: 4,
        Time: 260,
      },
      {
        Level: 5,
        Time: 300,
      },
    ],
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 17,
        },
        {
          Level: 2,
          Amount: 19,
        },
        {
          Level: 3,
          Amount: 21,
        },
        {
          Level: 4,
          Amount: 23,
        },
        {
          Level: 5,
          Amount: 25,
        },
      ],
    },
    Status: "StripWeapon",
  },
  {
    Id: 216,
    Name: "RG_STRIPSHIELD",
    Description: "Divest Shield",
    MaxLevel: 5,
    Type: "Weapon",
    TargetType: "Attack",
    DamageFlags: {
      NoDamage: true,
    },
    Range: 1,
    Hit: "Single",
    HitCount: 1,
    CastTime: [
      {
        Level: 1,
        Time: 560,
      },
      {
        Level: 2,
        Time: 720,
      },
      {
        Level: 3,
        Time: 880,
      },
      {
        Level: 4,
        Time: 1140,
      },
      {
        Level: 5,
        Time: 1200,
      },
    ],
    AfterCastActDelay: 1000,
    Duration1: [
      {
        Level: 1,
        Time: 75000,
      },
      {
        Level: 2,
        Time: 90000,
      },
      {
        Level: 3,
        Time: 105000,
      },
      {
        Level: 4,
        Time: 120000,
      },
      {
        Level: 5,
        Time: 135000,
      },
    ],
    FixedCastTime: [
      {
        Level: 1,
        Time: 140,
      },
      {
        Level: 2,
        Time: 180,
      },
      {
        Level: 3,
        Time: 220,
      },
      {
        Level: 4,
        Time: 260,
      },
      {
        Level: 5,
        Time: 300,
      },
    ],
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 12,
        },
        {
          Level: 2,
          Amount: 14,
        },
        {
          Level: 3,
          Amount: 16,
        },
        {
          Level: 4,
          Amount: 18,
        },
        {
          Level: 5,
          Amount: 20,
        },
      ],
    },
    Status: "StripShield",
  },
  {
    Id: 217,
    Name: "RG_STRIPARMOR",
    Description: "Divest Armor",
    MaxLevel: 5,
    Type: "Weapon",
    TargetType: "Attack",
    DamageFlags: {
      NoDamage: true,
    },
    Range: 1,
    Hit: "Single",
    HitCount: 1,
    CastTime: [
      {
        Level: 1,
        Time: 560,
      },
      {
        Level: 2,
        Time: 720,
      },
      {
        Level: 3,
        Time: 880,
      },
      {
        Level: 4,
        Time: 1140,
      },
      {
        Level: 5,
        Time: 1200,
      },
    ],
    AfterCastActDelay: 1000,
    Duration1: [
      {
        Level: 1,
        Time: 75000,
      },
      {
        Level: 2,
        Time: 90000,
      },
      {
        Level: 3,
        Time: 105000,
      },
      {
        Level: 4,
        Time: 120000,
      },
      {
        Level: 5,
        Time: 135000,
      },
    ],
    FixedCastTime: [
      {
        Level: 1,
        Time: 140,
      },
      {
        Level: 2,
        Time: 180,
      },
      {
        Level: 3,
        Time: 220,
      },
      {
        Level: 4,
        Time: 260,
      },
      {
        Level: 5,
        Time: 300,
      },
    ],
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 17,
        },
        {
          Level: 2,
          Amount: 19,
        },
        {
          Level: 3,
          Amount: 21,
        },
        {
          Level: 4,
          Amount: 23,
        },
        {
          Level: 5,
          Amount: 25,
        },
      ],
    },
    Status: "StripArmor",
  },
  {
    Id: 218,
    Name: "RG_STRIPHELM",
    Description: "Divest Helm",
    MaxLevel: 5,
    Type: "Weapon",
    TargetType: "Attack",
    DamageFlags: {
      NoDamage: true,
    },
    Range: 1,
    Hit: "Single",
    HitCount: 1,
    CastTime: [
      {
        Level: 1,
        Time: 560,
      },
      {
        Level: 2,
        Time: 720,
      },
      {
        Level: 3,
        Time: 880,
      },
      {
        Level: 4,
        Time: 1140,
      },
      {
        Level: 5,
        Time: 1200,
      },
    ],
    AfterCastActDelay: 1000,
    Duration1: [
      {
        Level: 1,
        Time: 75000,
      },
      {
        Level: 2,
        Time: 90000,
      },
      {
        Level: 3,
        Time: 105000,
      },
      {
        Level: 4,
        Time: 120000,
      },
      {
        Level: 5,
        Time: 135000,
      },
    ],
    FixedCastTime: [
      {
        Level: 1,
        Time: 140,
      },
      {
        Level: 2,
        Time: 180,
      },
      {
        Level: 3,
        Time: 220,
      },
      {
        Level: 4,
        Time: 260,
      },
      {
        Level: 5,
        Time: 300,
      },
    ],
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 12,
        },
        {
          Level: 2,
          Amount: 14,
        },
        {
          Level: 3,
          Amount: 16,
        },
        {
          Level: 4,
          Amount: 18,
        },
        {
          Level: 5,
          Amount: 20,
        },
      ],
    },
    Status: "StripHelm",
  },
  {
    Id: 219,
    Name: "RG_INTIMIDATE",
    Description: "Snatch",
    MaxLevel: 5,
    Type: "Weapon",
    TargetType: "Attack",
    Range: 1,
    Hit: "Single",
    HitCount: 1,
    Element: "Weapon",
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 13,
        },
        {
          Level: 2,
          Amount: 16,
        },
        {
          Level: 3,
          Amount: 19,
        },
        {
          Level: 4,
          Amount: 22,
        },
        {
          Level: 5,
          Amount: 25,
        },
      ],
    },
  },
  {
    Id: 220,
    Name: "RG_GRAFFITI",
    Description: "Scribble",
    MaxLevel: 1,
    TargetType: "Ground",
    DamageFlags: {
      NoDamage: true,
    },
    Range: 1,
    Hit: "Single",
    HitCount: 1,
    Duration1: 180000,
    Requires: {
      SpCost: 15,
      ItemCost: [
        {
          Item: "Red_Gemstone",
          Amount: 1,
        },
      ],
    },
    Unit: {
      Id: "Graffiti",
      Interval: -1,
      Flag: {
        NoReiteration: true,
        RemovedByFireRain: true,
      },
    },
  },
  {
    Id: 221,
    Name: "RG_FLAGGRAFFITI",
    Description: "Piece",
    MaxLevel: 5,
    TargetType: "Ground",
    DamageFlags: {
      NoDamage: true,
    },
    Hit: "Single",
    HitCount: 1,
    Requires: {
      SpCost: 10,
    },
  },
  {
    Id: 222,
    Name: "RG_CLEANER",
    Description: "Remover",
    MaxLevel: 1,
    TargetType: "Ground",
    DamageFlags: {
      NoDamage: true,
      Splash: true,
    },
    Range: 1,
    Hit: "Single",
    HitCount: 1,
    SplashArea: 5,
    Requires: {
      SpCost: 5,
    },
  },
  {
    Id: 223,
    Name: "RG_GANGSTER",
    Description: "Slyness",
    MaxLevel: 1,
    SplashArea: 1,
  },
  {
    Id: 224,
    Name: "RG_COMPULSION",
    Description: "Haggle",
    MaxLevel: 5,
  },
  {
    Id: 225,
    Name: "RG_PLAGIARISM",
    Description: "Intimidate",
    MaxLevel: 10,
  },
  {
    Id: 226,
    Name: "AM_AXEMASTERY",
    Description: "Axe Mastery",
    MaxLevel: 10,
    Type: "Weapon",
  },
  {
    Id: 227,
    Name: "AM_LEARNINGPOTION",
    Description: "Potion Research",
    MaxLevel: 10,
  },
  {
    Id: 228,
    Name: "AM_PHARMACY",
    Description: "Prepare Potion",
    MaxLevel: 10,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Hit: "Single",
    Requires: {
      SpCost: 5,
      ItemCost: [
        {
          Item: "Medicine_Bowl",
          Amount: 1,
        },
      ],
    },
  },
  {
    Id: 229,
    Name: "AM_DEMONSTRATION",
    Description: "Bomb",
    MaxLevel: 5,
    Type: "Weapon",
    TargetType: "Ground",
    DamageFlags: {
      NoDamage: true,
      IgnoreAtkCard: true,
    },
    Flags: {
      IgnoreAutoGuard: true,
      IgnoreCicada: true,
    },
    Range: 9,
    Hit: "Single",
    HitCount: 1,
    Element: "Fire",
    CopyFlags: {
      Skill: {
        Plagiarism: true,
        Reproduce: true,
      },
    },
    CastCancel: true,
    CastTime: 800,
    AfterCastActDelay: 500,
    Duration1: [
      {
        Level: 1,
        Time: 40000,
      },
      {
        Level: 2,
        Time: 45000,
      },
      {
        Level: 3,
        Time: 50000,
      },
      {
        Level: 4,
        Time: 55000,
      },
      {
        Level: 5,
        Time: 60000,
      },
    ],
    FixedCastTime: 200,
    Requires: {
      SpCost: 10,
      ItemCost: [
        {
          Item: "Fire_Bottle",
          Amount: 1,
        },
      ],
    },
    Unit: {
      Id: "Demonstration",
      Range: 1,
      Interval: 500,
      Target: "Enemy",
      Flag: {
        NoReiteration: true,
        NoFootSet: true,
      },
    },
  },
  {
    Id: 230,
    Name: "AM_ACIDTERROR",
    Description: "Acid Terror",
    MaxLevel: 5,
    Type: "Weapon",
    TargetType: "Attack",
    DamageFlags: {
      IgnoreAtkCard: true,
      IgnoreFlee: true,
    },
    Flags: {
      IgnoreAutoGuard: true,
      IgnoreCicada: true,
    },
    Range: 9,
    Hit: "Single",
    HitCount: 1,
    CopyFlags: {
      Skill: {
        Plagiarism: true,
        Reproduce: true,
      },
    },
    CastCancel: true,
    CastTime: 500,
    AfterCastActDelay: 500,
    Duration1: [
      {
        Level: 1,
        Time: 3,
      },
      {
        Level: 2,
        Time: 7,
      },
      {
        Level: 3,
        Time: 10,
      },
      {
        Level: 4,
        Time: 12,
      },
      {
        Level: 5,
        Time: 13,
      },
    ],
    Duration2: 108000,
    FixedCastTime: 500,
    Requires: {
      SpCost: 15,
      ItemCost: [
        {
          Item: "Acid_Bottle",
          Amount: 1,
        },
      ],
    },
    Status: "Bleeding",
  },
  {
    Id: 231,
    Name: "AM_POTIONPITCHER",
    Description: "Aid Potion",
    MaxLevel: 5,
    TargetType: "Support",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      PartyOnly: true,
      GuildOnly: true,
    },
    Range: 9,
    Hit: "Single",
    HitCount: 1,
    CastCancel: true,
    AfterCastActDelay: 500,
    Requires: {
      SpCost: 1,
      ItemCost: [
        {
          Item: "Red_Potion",
          Amount: 1,
        },
        {
          Item: "Orange_Potion",
          Amount: 1,
        },
        {
          Item: "Yellow_Potion",
          Amount: 1,
        },
        {
          Item: "White_Potion",
          Amount: 1,
        },
        {
          Item: "Blue_Potion",
          Amount: 1,
        },
        {
          Item: "Fruit_Of_Mastela",
          Amount: 1,
        },
        {
          Item: "Royal_Jelly",
          Amount: 1,
        },
        {
          Item: "Seed_Of_Yggdrasil",
          Amount: 1,
        },
        {
          Item: "Yggdrasilberry",
          Amount: 1,
        },
        {
          Item: "Berserk_Potion",
          Amount: 1,
        },
      ],
    },
  },
  {
    Id: 232,
    Name: "AM_CANNIBALIZE",
    Description: "Summon Flora",
    MaxLevel: 5,
    TargetType: "Ground",
    DamageFlags: {
      NoDamage: true,
    },
    Range: 4,
    Hit: "Single",
    HitCount: 1,
    ActiveInstance: 5,
    CastTime: 1600,
    AfterCastActDelay: 500,
    Duration1: [
      {
        Level: 1,
        Time: 300000,
      },
      {
        Level: 2,
        Time: 240000,
      },
      {
        Level: 3,
        Time: 180000,
      },
      {
        Level: 4,
        Time: 120000,
      },
      {
        Level: 5,
        Time: 60000,
      },
    ],
    FixedCastTime: 400,
    Requires: {
      SpCost: 20,
      ItemCost: [
        {
          Item: "MenEater_Plant_Bottle",
          Amount: 1,
        },
      ],
    },
  },
  {
    Id: 233,
    Name: "AM_SPHEREMINE",
    Description: "Summon Marine Sphere",
    MaxLevel: 5,
    TargetType: "Ground",
    DamageFlags: {
      NoDamage: true,
    },
    Range: 1,
    Hit: "Single",
    HitCount: 1,
    ActiveInstance: 3,
    CastTime: 1600,
    AfterCastActDelay: 500,
    Duration1: 30000,
    FixedCastTime: 400,
    Requires: {
      SpCost: 10,
      ItemCost: [
        {
          Item: "Mini_Bottle",
          Amount: 1,
        },
      ],
    },
  },
  {
    Id: 234,
    Name: "AM_CP_WEAPON",
    Description: "Alchemical Weapon",
    MaxLevel: 5,
    Type: "Weapon",
    TargetType: "Support",
    DamageFlags: {
      NoDamage: true,
    },
    Range: 1,
    Hit: "Single",
    HitCount: 1,
    CastCancel: true,
    AfterCastActDelay: 500,
    Duration1: [
      {
        Level: 1,
        Time: 120000,
      },
      {
        Level: 2,
        Time: 240000,
      },
      {
        Level: 3,
        Time: 360000,
      },
      {
        Level: 4,
        Time: 480000,
      },
      {
        Level: 5,
        Time: 600000,
      },
    ],
    FixedCastTime: 2000,
    Requires: {
      SpCost: 30,
      ItemCost: [
        {
          Item: "Coating_Bottle",
          Amount: 1,
        },
      ],
    },
    Status: "Cp_Weapon",
  },
  {
    Id: 235,
    Name: "AM_CP_SHIELD",
    Description: "Synthesized Shield",
    MaxLevel: 5,
    Type: "Weapon",
    TargetType: "Support",
    DamageFlags: {
      NoDamage: true,
    },
    Range: 1,
    Hit: "Single",
    HitCount: 1,
    CastCancel: true,
    AfterCastActDelay: 500,
    Duration1: [
      {
        Level: 1,
        Time: 120000,
      },
      {
        Level: 2,
        Time: 240000,
      },
      {
        Level: 3,
        Time: 360000,
      },
      {
        Level: 4,
        Time: 480000,
      },
      {
        Level: 5,
        Time: 600000,
      },
    ],
    FixedCastTime: 2000,
    Requires: {
      SpCost: 25,
      ItemCost: [
        {
          Item: "Coating_Bottle",
          Amount: 1,
        },
      ],
    },
    Status: "Cp_Shield",
  },
  {
    Id: 236,
    Name: "AM_CP_ARMOR",
    Description: "Synthetic Armor",
    MaxLevel: 5,
    Type: "Weapon",
    TargetType: "Support",
    DamageFlags: {
      NoDamage: true,
    },
    Range: 1,
    Hit: "Single",
    HitCount: 1,
    CastCancel: true,
    AfterCastActDelay: 500,
    Duration1: [
      {
        Level: 1,
        Time: 120000,
      },
      {
        Level: 2,
        Time: 240000,
      },
      {
        Level: 3,
        Time: 360000,
      },
      {
        Level: 4,
        Time: 480000,
      },
      {
        Level: 5,
        Time: 600000,
      },
    ],
    FixedCastTime: 2000,
    Requires: {
      SpCost: 25,
      ItemCost: [
        {
          Item: "Coating_Bottle",
          Amount: 1,
        },
      ],
    },
    Status: "Cp_Armor",
  },
  {
    Id: 237,
    Name: "AM_CP_HELM",
    Description: "Biochemical Helm",
    MaxLevel: 5,
    Type: "Weapon",
    TargetType: "Support",
    DamageFlags: {
      NoDamage: true,
    },
    Range: 1,
    Hit: "Single",
    HitCount: 1,
    CastCancel: true,
    AfterCastActDelay: 500,
    Duration1: [
      {
        Level: 1,
        Time: 120000,
      },
      {
        Level: 2,
        Time: 240000,
      },
      {
        Level: 3,
        Time: 360000,
      },
      {
        Level: 4,
        Time: 480000,
      },
      {
        Level: 5,
        Time: 600000,
      },
    ],
    FixedCastTime: 2000,
    Requires: {
      SpCost: 20,
      ItemCost: [
        {
          Item: "Coating_Bottle",
          Amount: 1,
        },
      ],
    },
    Status: "Cp_Helm",
  },
  {
    Id: 238,
    Name: "AM_BIOETHICS",
    Description: "Bioethics",
    MaxLevel: 1,
    Flags: {
      IsQuest: true,
    },
  },
  {
    Id: 243,
    Name: "AM_CALLHOMUN",
    Description: "Call Homunculus",
    MaxLevel: 1,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    SplashArea: 1,
    Duration1: 1800000,
    Requires: {
      SpCost: 10,
      ItemCost: [
        {
          Item: "Germination_Breed",
          Amount: 1,
        },
        {
          Item: "Seed_Of_Life",
          Amount: 1,
        },
      ],
    },
    Status: "Homun_Time",
  },
  {
    Id: 244,
    Name: "AM_REST",
    Description: "Vaporize",
    MaxLevel: 1,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Cooldown: 20000,
    Requires: {
      SpCost: 50,
    },
  },
  {
    Id: 247,
    Name: "AM_RESURRECTHOMUN",
    Description: "Homunculus Resurrection",
    MaxLevel: 5,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Hit: "Single",
    SplashArea: 1,
    CastTime: 2000,
    Cooldown: 20000,
    FixedCastTime: 1000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 74,
        },
        {
          Level: 2,
          Amount: 68,
        },
        {
          Level: 3,
          Amount: 62,
        },
        {
          Level: 4,
          Amount: 56,
        },
        {
          Level: 5,
          Amount: 50,
        },
      ],
    },
  },
  {
    Id: 248,
    Name: "CR_TRUST",
    Description: "Faith",
    MaxLevel: 10,
  },
  {
    Id: 249,
    Name: "CR_AUTOGUARD",
    Description: "Guard",
    MaxLevel: 10,
    Type: "Weapon",
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      Toggleable: true,
    },
    Hit: "Single",
    HitCount: 1,
    Duration1: 300000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 12,
        },
        {
          Level: 2,
          Amount: 14,
        },
        {
          Level: 3,
          Amount: 16,
        },
        {
          Level: 4,
          Amount: 18,
        },
        {
          Level: 5,
          Amount: 20,
        },
        {
          Level: 6,
          Amount: 22,
        },
        {
          Level: 7,
          Amount: 24,
        },
        {
          Level: 8,
          Amount: 26,
        },
        {
          Level: 9,
          Amount: 28,
        },
        {
          Level: 10,
          Amount: 30,
        },
      ],
      State: "Shield",
    },
    Status: "AutoGuard",
  },
  {
    Id: 250,
    Name: "CR_SHIELDCHARGE",
    Description: "Smite",
    MaxLevel: 5,
    Type: "Weapon",
    TargetType: "Attack",
    Range: 3,
    Hit: "Single",
    HitCount: 1,
    Knockback: [
      {
        Level: 1,
        Amount: 5,
      },
      {
        Level: 2,
        Amount: 6,
      },
      {
        Level: 3,
        Amount: 7,
      },
      {
        Level: 4,
        Amount: 8,
      },
      {
        Level: 5,
        Amount: 9,
      },
    ],
    CopyFlags: {
      Skill: {
        Plagiarism: true,
        Reproduce: true,
      },
    },
    Duration2: 4500,
    Requires: {
      SpCost: 10,
      State: "Shield",
    },
    Status: "Stun",
  },
  {
    Id: 251,
    Name: "CR_SHIELDBOOMERANG",
    Description: "Shield Boomerang",
    MaxLevel: 5,
    Type: "Weapon",
    TargetType: "Attack",
    Range: [
      {
        Level: 1,
        Size: 3,
      },
      {
        Level: 2,
        Size: 5,
      },
      {
        Level: 3,
        Size: 7,
      },
      {
        Level: 4,
        Size: 9,
      },
      {
        Level: 5,
        Size: 11,
      },
    ],
    Hit: "Single",
    HitCount: 1,
    CopyFlags: {
      Skill: {
        Plagiarism: true,
        Reproduce: true,
      },
    },
    AfterCastActDelay: 700,
    Requires: {
      SpCost: 12,
      State: "Shield",
    },
  },
  {
    Id: 252,
    Name: "CR_REFLECTSHIELD",
    Description: "Shield Reflect",
    MaxLevel: 10,
    Type: "Weapon",
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Hit: "Single",
    HitCount: 1,
    Duration1: 300000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 35,
        },
        {
          Level: 2,
          Amount: 40,
        },
        {
          Level: 3,
          Amount: 45,
        },
        {
          Level: 4,
          Amount: 50,
        },
        {
          Level: 5,
          Amount: 55,
        },
        {
          Level: 6,
          Amount: 60,
        },
        {
          Level: 7,
          Amount: 65,
        },
        {
          Level: 8,
          Amount: 70,
        },
        {
          Level: 9,
          Amount: 75,
        },
        {
          Level: 10,
          Amount: 80,
        },
      ],
      State: "Shield",
    },
    Status: "ReflectShield",
  },
  {
    Id: 253,
    Name: "CR_HOLYCROSS",
    Description: "Holy Cross",
    MaxLevel: 10,
    Type: "Weapon",
    TargetType: "Attack",
    Flags: {
      TargetTrap: true,
    },
    Range: -2,
    Hit: "Multi_Hit",
    HitCount: -2,
    Element: "Holy",
    CopyFlags: {
      Skill: {
        Plagiarism: true,
        Reproduce: true,
      },
    },
    Duration2: 18000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 11,
        },
        {
          Level: 2,
          Amount: 12,
        },
        {
          Level: 3,
          Amount: 13,
        },
        {
          Level: 4,
          Amount: 14,
        },
        {
          Level: 5,
          Amount: 15,
        },
        {
          Level: 6,
          Amount: 16,
        },
        {
          Level: 7,
          Amount: 17,
        },
        {
          Level: 8,
          Amount: 18,
        },
        {
          Level: 9,
          Amount: 19,
        },
        {
          Level: 10,
          Amount: 20,
        },
      ],
    },
    Status: "Blind",
  },
  {
    Id: 254,
    Name: "CR_GRANDCROSS",
    Description: "Grand Cross",
    MaxLevel: 10,
    Type: "Magic",
    TargetType: "Self",
    DamageFlags: {
      IgnoreAtkCard: true,
      IgnoreFlee: true,
    },
    Range: 5,
    Hit: "Single",
    HitCount: 1,
    Element: "Holy",
    CopyFlags: {
      Skill: {
        Plagiarism: true,
        Reproduce: true,
      },
    },
    CastDefenseReduction: 33,
    CastTime: 1000,
    AfterCastActDelay: 500,
    AfterCastWalkDelay: 1000,
    Duration1: 950,
    Duration2: 18000,
    Cooldown: 1000,
    FixedCastTime: 500,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 37,
        },
        {
          Level: 2,
          Amount: 44,
        },
        {
          Level: 3,
          Amount: 51,
        },
        {
          Level: 4,
          Amount: 58,
        },
        {
          Level: 5,
          Amount: 65,
        },
        {
          Level: 6,
          Amount: 72,
        },
        {
          Level: 7,
          Amount: 79,
        },
        {
          Level: 8,
          Amount: 86,
        },
        {
          Level: 9,
          Amount: 93,
        },
        {
          Level: 10,
          Amount: 100,
        },
      ],
      HpRateCost: 20,
    },
    Unit: {
      Id: "Dummyskill",
      Layout: -1,
      Interval: 300,
      Target: "Enemy",
      Flag: {
        PathCheck: true,
      },
    },
    Status: "Blind",
  },
  {
    Id: 255,
    Name: "CR_DEVOTION",
    Description: "Sacrifice",
    MaxLevel: 5,
    TargetType: "Support",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      NoTargetSelf: true,
      PartyOnly: true,
    },
    Range: [
      {
        Level: 1,
        Size: 7,
      },
      {
        Level: 2,
        Size: 8,
      },
      {
        Level: 3,
        Size: 9,
      },
      {
        Level: 4,
        Size: 10,
      },
      {
        Level: 5,
        Size: 11,
      },
    ],
    Hit: "Single",
    HitCount: 1,
    CastCancel: true,
    CastTime: 1500,
    Duration2: [
      {
        Level: 1,
        Time: 30000,
      },
      {
        Level: 2,
        Time: 45000,
      },
      {
        Level: 3,
        Time: 60000,
      },
      {
        Level: 4,
        Time: 75000,
      },
      {
        Level: 5,
        Time: 90000,
      },
    ],
    FixedCastTime: 1500,
    Requires: {
      SpCost: 25,
    },
    Status: "Devotion",
  },
  {
    Id: 256,
    Name: "CR_PROVIDENCE",
    Description: "Resistant Souls",
    MaxLevel: 5,
    TargetType: "Support",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      NoTargetSelf: true,
    },
    Range: 9,
    Hit: "Single",
    HitCount: 1,
    CastCancel: true,
    CastTime: 1500,
    Duration1: 180000,
    FixedCastTime: 1500,
    Requires: {
      SpCost: 30,
    },
    Status: "Providence",
  },
  {
    Id: 257,
    Name: "CR_DEFENDER",
    Description: "Defending Aura",
    MaxLevel: 5,
    Type: "Weapon",
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      Toggleable: true,
    },
    Hit: "Single",
    HitCount: 1,
    AfterCastActDelay: 800,
    Duration1: 180000,
    Requires: {
      SpCost: 30,
      State: "Shield",
    },
    Status: "Defender",
  },
  {
    Id: 258,
    Name: "CR_SPEARQUICKEN",
    Description: "Spear Quicken",
    MaxLevel: 10,
    Type: "Weapon",
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Hit: "Single",
    HitCount: 1,
    Duration1: [
      {
        Level: 1,
        Time: 30000,
      },
      {
        Level: 2,
        Time: 60000,
      },
      {
        Level: 3,
        Time: 90000,
      },
      {
        Level: 4,
        Time: 120000,
      },
      {
        Level: 5,
        Time: 150000,
      },
      {
        Level: 6,
        Time: 180000,
      },
      {
        Level: 7,
        Time: 210000,
      },
      {
        Level: 8,
        Time: 240000,
      },
      {
        Level: 9,
        Time: 270000,
      },
      {
        Level: 10,
        Time: 300000,
      },
    ],
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 24,
        },
        {
          Level: 2,
          Amount: 28,
        },
        {
          Level: 3,
          Amount: 32,
        },
        {
          Level: 4,
          Amount: 36,
        },
        {
          Level: 5,
          Amount: 40,
        },
        {
          Level: 6,
          Amount: 44,
        },
        {
          Level: 7,
          Amount: 48,
        },
        {
          Level: 8,
          Amount: 52,
        },
        {
          Level: 9,
          Amount: 56,
        },
        {
          Level: 10,
          Amount: 60,
        },
      ],
      Weapon: {
        "1hSpear": true,
        "2hSpear": true,
      },
    },
    Status: "SpearQuicken",
  },
  {
    Id: 259,
    Name: "MO_IRONHAND",
    Description: "Iron Fists",
    MaxLevel: 10,
    Type: "Weapon",
  },
  {
    Id: 260,
    Name: "MO_SPIRITSRECOVERY",
    Description: "Spiritual Cadence",
    MaxLevel: 5,
    Type: "Weapon",
  },
  {
    Id: 261,
    Name: "MO_CALLSPIRITS",
    Description: "Summon Spirit Sphere",
    MaxLevel: 5,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Hit: "Single",
    HitCount: 1,
    CastTime: 500,
    Duration1: 600000,
    FixedCastTime: 500,
    Requires: {
      SpCost: 8,
    },
  },
  {
    Id: 262,
    Name: "MO_ABSORBSPIRITS",
    Description: "Absorb Spirit Sphere",
    MaxLevel: 1,
    Type: "Weapon",
    TargetType: "Support",
    DamageFlags: {
      NoDamage: true,
    },
    Range: 9,
    Hit: "Single",
    HitCount: 1,
    CastCancel: true,
    FixedCastTime: 500,
    Requires: {
      SpCost: 5,
    },
  },
  {
    Id: 263,
    Name: "MO_TRIPLEATTACK",
    Description: "Raging Trifecta Blow",
    MaxLevel: 10,
    Type: "Weapon",
    Flags: {
      TargetTrap: true,
    },
    Range: -1,
    Hit: "Multi_Hit",
    HitCount: -3,
    Element: "Weapon",
    CopyFlags: {
      Skill: {
        Plagiarism: true,
        Reproduce: true,
      },
    },
    CastDelayFlags: {
      IgnoreStatus: true,
    },
  },
  {
    Id: 264,
    Name: "MO_BODYRELOCATION",
    Description: "Snap",
    MaxLevel: 1,
    TargetType: "Ground",
    DamageFlags: {
      NoDamage: true,
    },
    Range: 18,
    Hit: "Single",
    HitCount: 1,
    Requires: {
      SpCost: 14,
      SpiritSphereCost: 1,
    },
  },
  {
    Id: 265,
    Name: "MO_DODGE",
    Description: "Dodge",
    MaxLevel: 10,
    Type: "Weapon",
  },
  {
    Id: 266,
    Name: "MO_INVESTIGATE",
    Description: "Occult Impaction",
    MaxLevel: 5,
    Type: "Weapon",
    TargetType: "Attack",
    DamageFlags: {
      IgnoreFlee: true,
    },
    Flags: {
      TargetTrap: true,
    },
    Range: 2,
    Hit: "Single",
    HitCount: 1,
    Element: "Weapon",
    CopyFlags: {
      Skill: {
        Plagiarism: true,
        Reproduce: true,
      },
    },
    CastTime: 500,
    AfterCastActDelay: 500,
    FixedCastTime: 500,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 10,
        },
        {
          Level: 2,
          Amount: 14,
        },
        {
          Level: 3,
          Amount: 17,
        },
        {
          Level: 4,
          Amount: 19,
        },
        {
          Level: 5,
          Amount: 20,
        },
      ],
      SpiritSphereCost: 1,
    },
  },
  {
    Id: 267,
    Name: "MO_FINGEROFFENSIVE",
    Description: "Throw Spirit Sphere",
    MaxLevel: 5,
    Type: "Weapon",
    TargetType: "Attack",
    Flags: {
      TargetTrap: true,
    },
    Range: 9,
    Hit: "Multi_Hit",
    HitCount: 5,
    Element: "Weapon",
    CopyFlags: {
      Skill: {
        Plagiarism: true,
        Reproduce: true,
      },
    },
    CastTime: 500,
    AfterCastActDelay: 500,
    AfterCastWalkDelay: [
      {
        Level: 2,
        Time: 200,
      },
      {
        Level: 3,
        Time: 400,
      },
      {
        Level: 4,
        Time: 600,
      },
      {
        Level: 5,
        Time: 800,
      },
    ],
    FixedCastTime: 500,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 12,
        },
        {
          Level: 2,
          Amount: 16,
        },
        {
          Level: 3,
          Amount: 20,
        },
        {
          Level: 4,
          Amount: 24,
        },
        {
          Level: 5,
          Amount: 28,
        },
      ],
      SpiritSphereCost: 1,
    },
  },
  {
    Id: 268,
    Name: "MO_STEELBODY",
    Description: "Mental Strength",
    MaxLevel: 5,
    Type: "Weapon",
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Hit: "Single",
    HitCount: 1,
    CastTime: 2500,
    Duration1: [
      {
        Level: 1,
        Time: 30000,
      },
      {
        Level: 2,
        Time: 60000,
      },
      {
        Level: 3,
        Time: 90000,
      },
      {
        Level: 4,
        Time: 120000,
      },
      {
        Level: 5,
        Time: 150000,
      },
    ],
    FixedCastTime: 2500,
    Requires: {
      SpCost: 200,
      SpiritSphereCost: 5,
    },
    Status: "SteelBody",
  },
  {
    Id: 269,
    Name: "MO_BLADESTOP",
    Description: "Root",
    MaxLevel: 5,
    Type: "Weapon",
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Hit: "Single",
    HitCount: 1,
    AfterCastActDelay: 500,
    Duration1: [
      {
        Level: 1,
        Time: 500,
      },
      {
        Level: 2,
        Time: 700,
      },
      {
        Level: 3,
        Time: 900,
      },
      {
        Level: 4,
        Time: 1100,
      },
      {
        Level: 5,
        Time: 1300,
      },
    ],
    Duration2: 10000,
    Requires: {
      SpCost: 10,
      Weapon: {
        Fist: true,
        Dagger: true,
        "1hSword": true,
        "2hSword": true,
        "1hSpear": true,
        "2hSpear": true,
        "1hAxe": true,
        "2hAxe": true,
        Mace: true,
        "2hMace": true,
        Staff: true,
        Knuckle: true,
        Musical: true,
        Whip: true,
        Book: true,
        Katar: true,
        Revolver: true,
        Rifle: true,
        Gatling: true,
        Shotgun: true,
        Grenade: true,
        Huuma: true,
      },
      SpiritSphereCost: 1,
    },
    Status: "BladeStop_Wait",
  },
  {
    Id: 270,
    Name: "MO_EXPLOSIONSPIRITS",
    Description: "Fury",
    MaxLevel: 5,
    Type: "Weapon",
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Hit: "Single",
    Duration1: 180000,
    Requires: {
      SpCost: 15,
      SpiritSphereCost: 5,
    },
    Status: "ExplosionSpirits",
  },
  {
    Id: 271,
    Name: "MO_EXTREMITYFIST",
    Description: "Asura Strike",
    MaxLevel: 5,
    Type: "Weapon",
    TargetType: "Attack",
    DamageFlags: {
      IgnoreDefense: true,
      IgnoreFlee: true,
    },
    Flags: {
      TargetTrap: true,
    },
    Range: -2,
    Hit: "Single",
    HitCount: 1,
    CopyFlags: {
      Skill: {
        Plagiarism: true,
        Reproduce: true,
      },
    },
    CastCancel: true,
    CastTime: [
      {
        Level: 1,
        Time: 2000,
      },
      {
        Level: 2,
        Time: 1750,
      },
      {
        Level: 3,
        Time: 1500,
      },
      {
        Level: 4,
        Time: 1250,
      },
      {
        Level: 5,
        Time: 1000,
      },
    ],
    AfterCastActDelay: [
      {
        Level: 1,
        Time: 3000,
      },
      {
        Level: 2,
        Time: 2500,
      },
      {
        Level: 3,
        Time: 2000,
      },
      {
        Level: 4,
        Time: 1500,
      },
      {
        Level: 5,
        Time: 1000,
      },
    ],
    Duration1: 3000,
    Duration2: 300000,
    FixedCastTime: [
      {
        Level: 1,
        Time: 2000,
      },
      {
        Level: 2,
        Time: 1750,
      },
      {
        Level: 3,
        Time: 1500,
      },
      {
        Level: 4,
        Time: 1250,
      },
      {
        Level: 5,
        Time: 1000,
      },
    ],
    Requires: {
      SpCost: 1,
      Weapon: {
        Fist: true,
        Dagger: true,
        "1hSword": true,
        "2hSword": true,
        "1hSpear": true,
        "2hSpear": true,
        "1hAxe": true,
        "2hAxe": true,
        Mace: true,
        "2hMace": true,
        Staff: true,
        Knuckle: true,
        Musical: true,
        Whip: true,
        Book: true,
        Katar: true,
        Revolver: true,
        Rifle: true,
        Gatling: true,
        Shotgun: true,
        Grenade: true,
        Huuma: true,
      },
      Status: {
        Explosionspirits: true,
      },
      SpiritSphereCost: 5,
    },
    Status: "ExtremityFist",
  },
  {
    Id: 272,
    Name: "MO_CHAINCOMBO",
    Description: "Raging Quadruple Blow",
    MaxLevel: 5,
    Type: "Weapon",
    TargetType: "Self",
    Flags: {
      NoTargetSelf: true,
    },
    Range: -2,
    Hit: "Multi_Hit",
    HitCount: -4,
    Element: "Weapon",
    CopyFlags: {
      Skill: {
        Plagiarism: true,
        Reproduce: true,
      },
    },
    CastDelayFlags: {
      IgnoreStatus: true,
    },
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 5,
        },
        {
          Level: 2,
          Amount: 6,
        },
        {
          Level: 3,
          Amount: 7,
        },
        {
          Level: 4,
          Amount: 8,
        },
        {
          Level: 5,
          Amount: 9,
        },
      ],
      Weapon: {
        Fist: true,
        Dagger: true,
        "1hSword": true,
        "2hSword": true,
        "1hSpear": true,
        "2hSpear": true,
        "1hAxe": true,
        "2hAxe": true,
        Mace: true,
        "2hMace": true,
        Staff: true,
        Knuckle: true,
        Musical: true,
        Whip: true,
        Book: true,
        Katar: true,
        Revolver: true,
        Rifle: true,
        Gatling: true,
        Shotgun: true,
        Grenade: true,
        Huuma: true,
      },
    },
  },
  {
    Id: 273,
    Name: "MO_COMBOFINISH",
    Description: "Raging Thrust",
    MaxLevel: 5,
    Type: "Weapon",
    TargetType: "Self",
    DamageFlags: {
      Splash: true,
    },
    Flags: {
      NoTargetSelf: true,
      TargetTrap: true,
    },
    Range: -2,
    Hit: "Single",
    HitCount: 1,
    Element: "Weapon",
    SplashArea: 2,
    CastDelayFlags: {
      IgnoreStatus: true,
    },
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 3,
        },
        {
          Level: 2,
          Amount: 4,
        },
        {
          Level: 3,
          Amount: 5,
        },
        {
          Level: 4,
          Amount: 6,
        },
        {
          Level: 5,
          Amount: 7,
        },
      ],
      Weapon: {
        Fist: true,
        Dagger: true,
        "1hSword": true,
        "2hSword": true,
        "1hSpear": true,
        "2hSpear": true,
        "1hAxe": true,
        "2hAxe": true,
        Mace: true,
        "2hMace": true,
        Staff: true,
        Knuckle: true,
        Musical: true,
        Whip: true,
        Book: true,
        Katar: true,
        Revolver: true,
        Rifle: true,
        Gatling: true,
        Shotgun: true,
        Grenade: true,
        Huuma: true,
      },
      SpiritSphereCost: 1,
    },
  },
  {
    Id: 274,
    Name: "SA_ADVANCEDBOOK",
    Description: "Study",
    MaxLevel: 10,
    Type: "Weapon",
  },
  {
    Id: 275,
    Name: "SA_CASTCANCEL",
    Description: "Cast Cancel",
    MaxLevel: 5,
    Type: "Magic",
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Hit: "Single",
    HitCount: 1,
    Requires: {
      SpCost: 2,
    },
  },
  {
    Id: 276,
    Name: "SA_MAGICROD",
    Description: "Magic Rod",
    MaxLevel: 5,
    Type: "Magic",
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Hit: "Single",
    HitCount: 1,
    CastCancel: true,
    AfterCastActDelay: 1000,
    Duration1: [
      {
        Level: 1,
        Time: 400,
      },
      {
        Level: 2,
        Time: 600,
      },
      {
        Level: 3,
        Time: 800,
      },
      {
        Level: 4,
        Time: 1000,
      },
      {
        Level: 5,
        Time: 1200,
      },
    ],
    Requires: {
      SpCost: 2,
    },
    Status: "MagicRod",
  },
  {
    Id: 277,
    Name: "SA_SPELLBREAKER",
    Description: "Spell Breaker",
    MaxLevel: 5,
    Type: "Magic",
    TargetType: "Attack",
    DamageFlags: {
      NoDamage: true,
    },
    Range: 9,
    Hit: "Single",
    HitCount: 1,
    CastCancel: true,
    CastTime: 560,
    FixedCastTime: 140,
    Requires: {
      SpCost: 10,
    },
  },
  {
    Id: 278,
    Name: "SA_FREECAST",
    Description: "Free Cast",
    MaxLevel: 10,
    Type: "Magic",
  },
  {
    Id: 279,
    Name: "SA_AUTOSPELL",
    Description: "Hindsight",
    MaxLevel: 10,
    Type: "Magic",
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Hit: "Single",
    HitCount: 1,
    CastCancel: true,
    Duration1: [
      {
        Level: 1,
        Time: 120000,
      },
      {
        Level: 2,
        Time: 150000,
      },
      {
        Level: 3,
        Time: 180000,
      },
      {
        Level: 4,
        Time: 210000,
      },
      {
        Level: 5,
        Time: 240000,
      },
      {
        Level: 6,
        Time: 270000,
      },
      {
        Level: 7,
        Time: 300000,
      },
      {
        Level: 8,
        Time: 330000,
      },
      {
        Level: 9,
        Time: 360000,
      },
      {
        Level: 10,
        Time: 390000,
      },
    ],
    FixedCastTime: 3000,
    Requires: {
      SpCost: 35,
    },
    Status: "AutoSpell",
  },
  {
    Id: 280,
    Name: "SA_FLAMELAUNCHER",
    Description: "Endow Blaze",
    MaxLevel: 5,
    Type: "Magic",
    TargetType: "Support",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      PartyOnly: true,
      GuildOnly: true,
    },
    Range: 9,
    Hit: "Single",
    HitCount: 1,
    Element: "Fire",
    CastCancel: true,
    CastTime: 1000,
    Duration1: [
      {
        Level: 1,
        Time: 600000,
      },
      {
        Level: 2,
        Time: 900000,
      },
      {
        Level: 3,
        Time: 1200000,
      },
      {
        Level: 4,
        Time: 1500000,
      },
      {
        Level: 5,
        Time: 1800000,
      },
    ],
    FixedCastTime: 1000,
    Requires: {
      SpCost: 40,
      ItemCost: [
        {
          Item: "Scarlet_Pts",
          Amount: 1,
        },
      ],
    },
    Status: "FireWeapon",
  },
  {
    Id: 281,
    Name: "SA_FROSTWEAPON",
    Description: "Endow Tsunami",
    MaxLevel: 5,
    Type: "Magic",
    TargetType: "Support",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      PartyOnly: true,
      GuildOnly: true,
    },
    Range: 9,
    Hit: "Single",
    HitCount: 1,
    Element: "Water",
    CastCancel: true,
    CastTime: 1000,
    Duration1: [
      {
        Level: 1,
        Time: 600000,
      },
      {
        Level: 2,
        Time: 900000,
      },
      {
        Level: 3,
        Time: 1200000,
      },
      {
        Level: 4,
        Time: 1500000,
      },
      {
        Level: 5,
        Time: 1800000,
      },
    ],
    FixedCastTime: 1000,
    Requires: {
      SpCost: 40,
      ItemCost: [
        {
          Item: "Indigo_Pts",
          Amount: 1,
        },
      ],
    },
    Status: "WaterWeapon",
  },
  {
    Id: 282,
    Name: "SA_LIGHTNINGLOADER",
    Description: "Endow Tornado",
    MaxLevel: 5,
    Type: "Magic",
    TargetType: "Support",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      PartyOnly: true,
      GuildOnly: true,
    },
    Range: 9,
    Hit: "Single",
    HitCount: 1,
    Element: "Wind",
    CastCancel: true,
    CastTime: 1000,
    Duration1: [
      {
        Level: 1,
        Time: 600000,
      },
      {
        Level: 2,
        Time: 900000,
      },
      {
        Level: 3,
        Time: 1200000,
      },
      {
        Level: 4,
        Time: 1500000,
      },
      {
        Level: 5,
        Time: 1800000,
      },
    ],
    FixedCastTime: 1000,
    Requires: {
      SpCost: 40,
      ItemCost: [
        {
          Item: "Yellow_Wish_Pts",
          Amount: 1,
        },
      ],
    },
    Status: "WindWeapon",
  },
  {
    Id: 283,
    Name: "SA_SEISMICWEAPON",
    Description: "Endow Quake",
    MaxLevel: 5,
    Type: "Magic",
    TargetType: "Support",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      PartyOnly: true,
      GuildOnly: true,
    },
    Range: 9,
    Hit: "Single",
    HitCount: 1,
    Element: "Earth",
    CastCancel: true,
    CastTime: 1000,
    Duration1: [
      {
        Level: 1,
        Time: 600000,
      },
      {
        Level: 2,
        Time: 900000,
      },
      {
        Level: 3,
        Time: 1200000,
      },
      {
        Level: 4,
        Time: 1500000,
      },
      {
        Level: 5,
        Time: 1800000,
      },
    ],
    FixedCastTime: 1000,
    Requires: {
      SpCost: 40,
      ItemCost: [
        {
          Item: "Lime_Green_Pts",
          Amount: 1,
        },
      ],
    },
    Status: "EarthWeapon",
  },
  {
    Id: 284,
    Name: "SA_DRAGONOLOGY",
    Description: "Dragonology",
    MaxLevel: 5,
    Type: "Weapon",
  },
  {
    Id: 285,
    Name: "SA_VOLCANO",
    Description: "Volcano",
    MaxLevel: 5,
    Type: "Magic",
    TargetType: "Ground",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      IgnoreHovering: true,
    },
    Range: 2,
    Hit: "Single",
    HitCount: 1,
    Element: "Fire",
    CastCancel: true,
    CastTime: 4000,
    Duration1: [
      {
        Level: 1,
        Time: 60000,
      },
      {
        Level: 2,
        Time: 120000,
      },
      {
        Level: 3,
        Time: 180000,
      },
      {
        Level: 4,
        Time: 240000,
      },
      {
        Level: 5,
        Time: 300000,
      },
    ],
    FixedCastTime: 1000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 48,
        },
        {
          Level: 2,
          Amount: 46,
        },
        {
          Level: 3,
          Amount: 44,
        },
        {
          Level: 4,
          Amount: 42,
        },
        {
          Level: 5,
          Amount: 40,
        },
      ],
      ItemCost: [
        {
          Item: "Blue_Gemstone",
          Amount: 1,
        },
      ],
    },
    Unit: {
      Id: "Volcano",
      Layout: 3,
      Interval: -1,
      Flag: {
        PathCheck: true,
        RemovedByFireRain: true,
      },
    },
    Status: "Volcano",
  },
  {
    Id: 286,
    Name: "SA_DELUGE",
    Description: "Deluge",
    MaxLevel: 5,
    Type: "Magic",
    TargetType: "Ground",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      IgnoreHovering: true,
    },
    Range: 2,
    Hit: "Single",
    HitCount: 1,
    Element: "Water",
    CastCancel: true,
    CastTime: 4000,
    Duration1: [
      {
        Level: 1,
        Time: 60000,
      },
      {
        Level: 2,
        Time: 120000,
      },
      {
        Level: 3,
        Time: 180000,
      },
      {
        Level: 4,
        Time: 240000,
      },
      {
        Level: 5,
        Time: 300000,
      },
    ],
    FixedCastTime: 1000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 48,
        },
        {
          Level: 2,
          Amount: 46,
        },
        {
          Level: 3,
          Amount: 44,
        },
        {
          Level: 4,
          Amount: 42,
        },
        {
          Level: 5,
          Amount: 40,
        },
      ],
      ItemCost: [
        {
          Item: "Blue_Gemstone",
          Amount: 1,
        },
      ],
    },
    Unit: {
      Id: "Deluge",
      Layout: 3,
      Interval: -1,
      Flag: {
        PathCheck: true,
        RemovedByFireRain: true,
      },
    },
    Status: "Deluge",
  },
  {
    Id: 287,
    Name: "SA_VIOLENTGALE",
    Description: "Whirlwind",
    MaxLevel: 5,
    Type: "Magic",
    TargetType: "Ground",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      IgnoreHovering: true,
    },
    Range: 2,
    Hit: "Single",
    HitCount: 1,
    Element: "Wind",
    CastCancel: true,
    CastTime: 4000,
    Duration1: [
      {
        Level: 1,
        Time: 60000,
      },
      {
        Level: 2,
        Time: 120000,
      },
      {
        Level: 3,
        Time: 180000,
      },
      {
        Level: 4,
        Time: 240000,
      },
      {
        Level: 5,
        Time: 300000,
      },
    ],
    FixedCastTime: 1000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 48,
        },
        {
          Level: 2,
          Amount: 46,
        },
        {
          Level: 3,
          Amount: 44,
        },
        {
          Level: 4,
          Amount: 42,
        },
        {
          Level: 5,
          Amount: 40,
        },
      ],
      ItemCost: [
        {
          Item: "Blue_Gemstone",
          Amount: 1,
        },
      ],
    },
    Unit: {
      Id: "Violentgale",
      Layout: 3,
      Interval: -1,
      Flag: {
        PathCheck: true,
        RemovedByFireRain: true,
      },
    },
    Status: "ViolentGale",
  },
  {
    Id: 288,
    Name: "SA_LANDPROTECTOR",
    Description: "Magnetic Earth",
    MaxLevel: 5,
    Type: "Magic",
    TargetType: "Ground",
    DamageFlags: {
      NoDamage: true,
    },
    Range: 2,
    Hit: "Single",
    HitCount: 1,
    CastCancel: true,
    CastTime: 4000,
    Duration1: [
      {
        Level: 1,
        Time: 165000,
      },
      {
        Level: 2,
        Time: 210000,
      },
      {
        Level: 3,
        Time: 255000,
      },
      {
        Level: 4,
        Time: 300000,
      },
      {
        Level: 5,
        Time: 345000,
      },
    ],
    FixedCastTime: 1000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 66,
        },
        {
          Level: 2,
          Amount: 62,
        },
        {
          Level: 3,
          Amount: 58,
        },
        {
          Level: 4,
          Amount: 54,
        },
        {
          Level: 5,
          Amount: 50,
        },
      ],
      ItemCost: [
        {
          Item: "Blue_Gemstone",
          Amount: 1,
        },
        {
          Item: "Yellow_Gemstone",
          Amount: 1,
        },
      ],
    },
    Unit: {
      Id: "Landprotector",
      Layout: [
        {
          Level: 1,
          Size: 3,
        },
        {
          Level: 2,
          Size: 3,
        },
        {
          Level: 3,
          Size: 4,
        },
        {
          Level: 4,
          Size: 4,
        },
        {
          Level: 5,
          Size: 5,
        },
      ],
      Interval: -1,
      Flag: {
        PathCheck: true,
        RemovedByFireRain: true,
      },
    },
  },
  {
    Id: 289,
    Name: "SA_DISPELL",
    Description: "Dispell",
    MaxLevel: 5,
    Type: "Magic",
    TargetType: "Attack",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      NoTargetSelf: true,
      PartyOnly: true,
      GuildOnly: true,
      TargetHidden: true,
    },
    Range: 9,
    Hit: "Single",
    HitCount: 1,
    CastCancel: true,
    CastTime: 1600,
    FixedCastTime: 400,
    Requires: {
      SpCost: 1,
      ItemCost: [
        {
          Item: "Yellow_Gemstone",
          Amount: 1,
        },
      ],
    },
  },
  {
    Id: 290,
    Name: "SA_ABRACADABRA",
    Description: "Hocus-pocus",
    MaxLevel: 10,
    Type: "Magic",
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Hit: "Single",
    HitCount: 1,
    CastCancel: true,
    Requires: {
      SpCost: 50,
      ItemCost: [
        {
          Item: "Yellow_Gemstone",
          Amount: 2,
        },
      ],
    },
  },
  {
    Id: 291,
    Name: "SA_MONOCELL",
    Description: "Monocell",
    MaxLevel: 1,
    Type: "Magic",
    TargetType: "Attack",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      IsNpc: true,
    },
    Range: 9,
    Hit: "Single",
    HitCount: 1,
    CastCancel: true,
    Requires: {
      SpCost: 1,
    },
  },
  {
    Id: 292,
    Name: "SA_CLASSCHANGE",
    Description: "Class Change",
    MaxLevel: 1,
    Type: "Magic",
    TargetType: "Attack",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      IsNpc: true,
    },
    Range: 9,
    Hit: "Single",
    HitCount: 1,
    CastCancel: true,
    Requires: {
      SpCost: 1,
    },
  },
  {
    Id: 293,
    Name: "SA_SUMMONMONSTER",
    Description: "Monster Chant",
    MaxLevel: 1,
    Type: "Magic",
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      IsNpc: true,
    },
    Hit: "Single",
    HitCount: 1,
    CastCancel: true,
    Requires: {
      SpCost: 1,
    },
  },
  {
    Id: 294,
    Name: "SA_REVERSEORCISH",
    Description: "Grampus Morph",
    MaxLevel: 1,
    Type: "Magic",
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      IsNpc: true,
    },
    Range: 9,
    Hit: "Single",
    HitCount: 1,
    CastCancel: true,
    Duration1: 1200000,
    Requires: {
      SpCost: 1,
    },
    Status: "Orcish",
  },
  {
    Id: 295,
    Name: "SA_DEATH",
    Description: "Grim Reaper",
    MaxLevel: 1,
    Type: "Magic",
    TargetType: "Attack",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      IsNpc: true,
    },
    Range: 9,
    Hit: "Single",
    HitCount: 1,
    CastCancel: true,
    Requires: {
      SpCost: 1,
    },
  },
  {
    Id: 296,
    Name: "SA_FORTUNE",
    Description: "Gold Digger",
    MaxLevel: 1,
    Type: "Magic",
    TargetType: "Attack",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      IsNpc: true,
    },
    Range: 9,
    Hit: "Single",
    HitCount: 1,
    CastCancel: true,
    Requires: {
      SpCost: 1,
    },
  },
  {
    Id: 297,
    Name: "SA_TAMINGMONSTER",
    Description: "Beastly Hypnosis",
    MaxLevel: 1,
    Type: "Magic",
    TargetType: "Attack",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      IsNpc: true,
    },
    Range: 9,
    Hit: "Single",
    HitCount: 1,
    CastCancel: true,
    Requires: {
      SpCost: 1,
    },
  },
  {
    Id: 298,
    Name: "SA_QUESTION",
    Description: "Questioning",
    MaxLevel: 1,
    Type: "Magic",
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      IsNpc: true,
    },
    Range: 9,
    Hit: "Single",
    HitCount: 1,
    CastCancel: true,
    Requires: {
      SpCost: 1,
    },
  },
  {
    Id: 299,
    Name: "SA_GRAVITY",
    Description: "Gravity",
    MaxLevel: 1,
    Type: "Magic",
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      IsNpc: true,
    },
    Range: 9,
    Hit: "Single",
    HitCount: 1,
    CastCancel: true,
    Requires: {
      SpCost: 1,
    },
  },
  {
    Id: 300,
    Name: "SA_LEVELUP",
    Description: "Leveling",
    MaxLevel: 1,
    Type: "Magic",
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      IsNpc: true,
    },
    Range: 9,
    Hit: "Single",
    HitCount: 1,
    CastCancel: true,
    Requires: {
      SpCost: 1,
    },
  },
  {
    Id: 301,
    Name: "SA_INSTANTDEATH",
    Description: "Suicide",
    MaxLevel: 1,
    Type: "Magic",
    TargetType: "Self",
    Flags: {
      IsNpc: true,
    },
    Range: 9,
    Hit: "Single",
    HitCount: 1,
    CastCancel: true,
    Requires: {
      SpCost: 1,
    },
  },
  {
    Id: 302,
    Name: "SA_FULLRECOVERY",
    Description: "Rejuvenation",
    MaxLevel: 1,
    Type: "Magic",
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      IsNpc: true,
    },
    Range: 9,
    Hit: "Single",
    HitCount: 1,
    CastCancel: true,
    Requires: {
      SpCost: 1,
    },
  },
  {
    Id: 303,
    Name: "SA_COMA",
    Description: "Coma",
    MaxLevel: 1,
    Type: "Magic",
    TargetType: "Self",
    Flags: {
      IsNpc: true,
    },
    Range: 9,
    Hit: "Single",
    HitCount: 1,
    CastCancel: true,
    Requires: {
      SpCost: 1,
    },
    Status: "Coma",
  },
  {
    Id: 304,
    Name: "BD_ADAPTATION",
    Description: "Amp",
    MaxLevel: 1,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      AllowWhenPerforming: true,
    },
    Hit: "Single",
    HitCount: 1,
    AfterCastActDelay: 300,
    Duration1: 300000,
    Cooldown: 300000,
    Requires: {
      SpCost: 10,
    },
    Status: "Adaptation",
  },
  {
    Id: 305,
    Name: "BD_ENCORE",
    Description: "Encore",
    MaxLevel: 1,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Hit: "Single",
    HitCount: 1,
    AfterCastActDelay: 300,
    Cooldown: 10000,
    Requires: {
      SpCost: 1,
      Weapon: {
        Musical: true,
        Whip: true,
      },
    },
    Status: "Dancing",
  },
  {
    Id: 306,
    Name: "BD_LULLABY",
    Description: "Lullaby",
    MaxLevel: 1,
    Type: "Misc",
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      IsEnsemble: true,
    },
    Hit: "Single",
    HitCount: 1,
    SplashArea: 4,
    CastTime: 1000,
    Duration1: 60000,
    Duration2: 15000,
    Cooldown: 20000,
    Requires: {
      SpCost: 40,
      Weapon: {
        Musical: true,
        Whip: true,
      },
    },
  },
  {
    Id: 307,
    Name: "BD_RICHMANKIM",
    Description: "Mental Sensing",
    MaxLevel: 5,
    Type: "Misc",
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      IsEnsemble: true,
    },
    Hit: "Single",
    HitCount: 1,
    SplashArea: 15,
    CastTime: 1000,
    Duration1: 180000,
    Duration2: 60000,
    Cooldown: 20000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 62,
        },
        {
          Level: 2,
          Amount: 68,
        },
        {
          Level: 3,
          Amount: 74,
        },
        {
          Level: 4,
          Amount: 80,
        },
        {
          Level: 5,
          Amount: 86,
        },
      ],
      Weapon: {
        Musical: true,
        Whip: true,
      },
    },
    Status: "RichManKim",
  },
  {
    Id: 308,
    Name: "BD_ETERNALCHAOS",
    Description: "Down Tempo",
    MaxLevel: 1,
    Type: "Misc",
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      IsEnsemble: true,
    },
    Hit: "Single",
    HitCount: 1,
    SplashArea: 4,
    CastTime: 1000,
    Duration1: 60000,
    Duration2: 60000,
    Cooldown: 60000,
    Requires: {
      SpCost: 120,
      Weapon: {
        Musical: true,
        Whip: true,
      },
    },
    Status: "EternalChaos",
  },
  {
    Id: 309,
    Name: "BD_DRUMBATTLEFIELD",
    Description: "Battle Theme",
    MaxLevel: 5,
    Type: "Misc",
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      IsEnsemble: true,
    },
    Hit: "Single",
    HitCount: 1,
    SplashArea: 15,
    CastTime: 1000,
    Duration1: 180000,
    Duration2: 60000,
    Cooldown: 20000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 50,
        },
        {
          Level: 2,
          Amount: 54,
        },
        {
          Level: 3,
          Amount: 58,
        },
        {
          Level: 4,
          Amount: 62,
        },
        {
          Level: 5,
          Amount: 66,
        },
      ],
      Weapon: {
        Musical: true,
        Whip: true,
      },
    },
    Status: "DrumBattle",
  },
  {
    Id: 310,
    Name: "BD_RINGNIBELUNGEN",
    Description: "Harmonic Lick",
    MaxLevel: 5,
    Type: "Misc",
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      IsEnsemble: true,
    },
    Hit: "Single",
    HitCount: 1,
    SplashArea: 15,
    CastTime: 1000,
    Duration1: 60000,
    Duration2: 60000,
    Cooldown: 20000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 64,
        },
        {
          Level: 2,
          Amount: 60,
        },
        {
          Level: 3,
          Amount: 56,
        },
        {
          Level: 4,
          Amount: 52,
        },
        {
          Level: 5,
          Amount: 48,
        },
      ],
      Weapon: {
        Musical: true,
        Whip: true,
      },
    },
    Status: "Nibelungen",
  },
  {
    Id: 311,
    Name: "BD_ROKISWEIL",
    Description: "Classical Pluck",
    MaxLevel: 1,
    Type: "Misc",
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      IsEnsemble: true,
    },
    Hit: "Single",
    HitCount: 1,
    SplashArea: 4,
    CastTime: 1000,
    Duration1: 30000,
    Duration2: 60000,
    Cooldown: 180000,
    Requires: {
      SpCost: 180,
      Weapon: {
        Musical: true,
        Whip: true,
      },
    },
    Status: "RokisWeil",
  },
  {
    Id: 312,
    Name: "BD_INTOABYSS",
    Description: "Power Chord",
    MaxLevel: 1,
    Type: "Misc",
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      IsEnsemble: true,
    },
    Hit: "Single",
    HitCount: 1,
    SplashArea: 15,
    CastTime: 1000,
    Duration1: 180000,
    Duration2: 60000,
    Cooldown: 20000,
    Requires: {
      SpCost: 70,
      Weapon: {
        Musical: true,
        Whip: true,
      },
    },
    Status: "IntoAbyss",
  },
  {
    Id: 313,
    Name: "BD_SIEGFRIED",
    Description: "Acoustic Rhythm",
    MaxLevel: 5,
    Type: "Misc",
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      IsEnsemble: true,
    },
    Hit: "Single",
    HitCount: 1,
    SplashArea: 15,
    CastTime: 1000,
    Duration1: 180000,
    Duration2: 60000,
    Cooldown: 20000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 40,
        },
        {
          Level: 2,
          Amount: 44,
        },
        {
          Level: 3,
          Amount: 48,
        },
        {
          Level: 4,
          Amount: 52,
        },
        {
          Level: 5,
          Amount: 56,
        },
      ],
      Weapon: {
        Musical: true,
        Whip: true,
      },
    },
    Status: "Siegfried",
  },
  {
    Id: 315,
    Name: "BA_MUSICALLESSON",
    Description: "Music Lessons",
    MaxLevel: 10,
    Type: "Weapon",
  },
  {
    Id: 316,
    Name: "BA_MUSICALSTRIKE",
    Description: "Melody Strike",
    MaxLevel: 5,
    Type: "Weapon",
    TargetType: "Attack",
    Flags: {
      AllowWhenPerforming: true,
    },
    Range: 9,
    Hit: "Single",
    HitCount: 2,
    Element: "Weapon",
    CastTime: 500,
    AfterCastActDelay: 300,
    FixedCastTime: 300,
    Requires: {
      SpCost: 12,
      Weapon: {
        Musical: true,
      },
      Ammo: {
        Arrow: true,
      },
      AmmoAmount: 1,
    },
  },
  {
    Id: 317,
    Name: "BA_DISSONANCE",
    Description: "Unchained Serenade",
    MaxLevel: 5,
    Type: "Magic",
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
      IgnoreFlee: true,
    },
    Flags: {
      IsSong: true,
    },
    Hit: "Multi_Hit",
    HitCount: 1,
    SplashArea: 4,
    CastTime: 1000,
    Duration1: 30000,
    Duration2: 3000,
    Cooldown: 5000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 35,
        },
        {
          Level: 2,
          Amount: 38,
        },
        {
          Level: 3,
          Amount: 41,
        },
        {
          Level: 4,
          Amount: 44,
        },
        {
          Level: 5,
          Amount: 47,
        },
      ],
      Weapon: {
        Musical: true,
      },
    },
  },
  {
    Id: 318,
    Name: "BA_FROSTJOKER",
    Description: "Unbarring Octave",
    MaxLevel: 5,
    Type: "Misc",
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
      Splash: true,
    },
    Hit: "Single",
    HitCount: 1,
    SplashArea: -1,
    AfterCastActDelay: 300,
    Duration2: 27000,
    Cooldown: 4000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 12,
        },
        {
          Level: 2,
          Amount: 14,
        },
        {
          Level: 3,
          Amount: 16,
        },
        {
          Level: 4,
          Amount: 18,
        },
        {
          Level: 5,
          Amount: 20,
        },
      ],
    },
    Status: "Freeze",
  },
  {
    Id: 319,
    Name: "BA_WHISTLE",
    Description: "Perfect Tablature",
    MaxLevel: 10,
    Type: "Misc",
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      IsSong: true,
    },
    Hit: "Single",
    HitCount: 1,
    SplashArea: 15,
    CastTime: 1000,
    Duration1: 180000,
    Duration2: 20000,
    Cooldown: 20000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 22,
        },
        {
          Level: 2,
          Amount: 24,
        },
        {
          Level: 3,
          Amount: 26,
        },
        {
          Level: 4,
          Amount: 28,
        },
        {
          Level: 5,
          Amount: 30,
        },
        {
          Level: 6,
          Amount: 32,
        },
        {
          Level: 7,
          Amount: 34,
        },
        {
          Level: 8,
          Amount: 36,
        },
        {
          Level: 9,
          Amount: 38,
        },
        {
          Level: 10,
          Amount: 40,
        },
      ],
      Weapon: {
        Musical: true,
        Whip: true,
      },
    },
    Status: "Whistle",
  },
  {
    Id: 320,
    Name: "BA_ASSASSINCROSS",
    Description: "Impressive Riff",
    MaxLevel: 10,
    Type: "Misc",
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      IsSong: true,
    },
    Hit: "Single",
    HitCount: 1,
    SplashArea: 15,
    CastTime: 1000,
    Duration1: 180000,
    Duration2: 20000,
    Cooldown: 20000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 40,
        },
        {
          Level: 2,
          Amount: 45,
        },
        {
          Level: 3,
          Amount: 50,
        },
        {
          Level: 4,
          Amount: 55,
        },
        {
          Level: 5,
          Amount: 60,
        },
        {
          Level: 6,
          Amount: 65,
        },
        {
          Level: 7,
          Amount: 70,
        },
        {
          Level: 8,
          Amount: 75,
        },
        {
          Level: 9,
          Amount: 80,
        },
        {
          Level: 10,
          Amount: 85,
        },
      ],
      Weapon: {
        Musical: true,
        Whip: true,
      },
    },
    Status: "AssnCros",
  },
  {
    Id: 321,
    Name: "BA_POEMBRAGI",
    Description: "Magic Strings",
    MaxLevel: 10,
    Type: "Misc",
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      IsSong: true,
    },
    Hit: "Single",
    HitCount: 1,
    SplashArea: 15,
    CastTime: 1000,
    Duration1: 180000,
    Duration2: 20000,
    Cooldown: 20000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 65,
        },
        {
          Level: 2,
          Amount: 70,
        },
        {
          Level: 3,
          Amount: 75,
        },
        {
          Level: 4,
          Amount: 80,
        },
        {
          Level: 5,
          Amount: 85,
        },
        {
          Level: 6,
          Amount: 90,
        },
        {
          Level: 7,
          Amount: 95,
        },
        {
          Level: 8,
          Amount: 100,
        },
        {
          Level: 9,
          Amount: 105,
        },
        {
          Level: 10,
          Amount: 110,
        },
      ],
      Weapon: {
        Musical: true,
        Whip: true,
      },
    },
    Status: "PoemBragi",
  },
  {
    Id: 322,
    Name: "BA_APPLEIDUN",
    Description: "Song of Lutie",
    MaxLevel: 10,
    Type: "Misc",
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      IsSong: true,
    },
    Hit: "Single",
    HitCount: 1,
    SplashArea: 15,
    CastTime: 1000,
    Duration1: 180000,
    Duration2: 20000,
    Cooldown: 20000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 40,
        },
        {
          Level: 2,
          Amount: 45,
        },
        {
          Level: 3,
          Amount: 50,
        },
        {
          Level: 4,
          Amount: 55,
        },
        {
          Level: 5,
          Amount: 60,
        },
        {
          Level: 6,
          Amount: 65,
        },
        {
          Level: 7,
          Amount: 70,
        },
        {
          Level: 8,
          Amount: 75,
        },
        {
          Level: 9,
          Amount: 80,
        },
        {
          Level: 10,
          Amount: 85,
        },
      ],
      Weapon: {
        Musical: true,
        Whip: true,
      },
    },
    Status: "AppleIdun",
  },
  {
    Id: 323,
    Name: "DC_DANCINGLESSON",
    Description: "Dance Lessons",
    MaxLevel: 10,
    Type: "Weapon",
  },
  {
    Id: 324,
    Name: "DC_THROWARROW",
    Description: "Slinging Arrow",
    MaxLevel: 5,
    Type: "Weapon",
    TargetType: "Attack",
    Flags: {
      AllowWhenPerforming: true,
    },
    Range: 9,
    Hit: "Single",
    HitCount: 2,
    Element: "Weapon",
    CastTime: 1200,
    FixedCastTime: 300,
    Requires: {
      SpCost: 12,
      Weapon: {
        Whip: true,
      },
      Ammo: {
        Arrow: true,
      },
      AmmoAmount: 1,
    },
  },
  {
    Id: 325,
    Name: "DC_UGLYDANCE",
    Description: "Hip Shaker",
    MaxLevel: 5,
    Type: "Misc",
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      IsSong: true,
    },
    Hit: "Multi_Hit",
    HitCount: 1,
    SplashArea: 4,
    CastTime: 1000,
    Duration1: 30000,
    Duration2: 3000,
    Cooldown: 20000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 23,
        },
        {
          Level: 2,
          Amount: 26,
        },
        {
          Level: 3,
          Amount: 29,
        },
        {
          Level: 4,
          Amount: 32,
        },
        {
          Level: 5,
          Amount: 35,
        },
      ],
      Weapon: {
        Whip: true,
      },
    },
  },
  {
    Id: 326,
    Name: "DC_SCREAM",
    Description: "Dazzler",
    MaxLevel: 5,
    Type: "Misc",
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
      Splash: true,
    },
    Hit: "Single",
    HitCount: 1,
    SplashArea: -1,
    AfterCastActDelay: 300,
    Duration2: 4500,
    Cooldown: 4000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 12,
        },
        {
          Level: 2,
          Amount: 14,
        },
        {
          Level: 3,
          Amount: 16,
        },
        {
          Level: 4,
          Amount: 18,
        },
        {
          Level: 5,
          Amount: 20,
        },
      ],
    },
    Status: "Stun",
  },
  {
    Id: 327,
    Name: "DC_HUMMING",
    Description: "Focus Ballet",
    MaxLevel: 10,
    Type: "Misc",
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      IsSong: true,
    },
    Hit: "Single",
    HitCount: 1,
    SplashArea: 15,
    CastTime: 1000,
    Duration1: 180000,
    Duration2: 20000,
    Cooldown: 20000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 33,
        },
        {
          Level: 2,
          Amount: 36,
        },
        {
          Level: 3,
          Amount: 39,
        },
        {
          Level: 4,
          Amount: 42,
        },
        {
          Level: 5,
          Amount: 45,
        },
        {
          Level: 6,
          Amount: 48,
        },
        {
          Level: 7,
          Amount: 51,
        },
        {
          Level: 8,
          Amount: 54,
        },
        {
          Level: 9,
          Amount: 57,
        },
        {
          Level: 10,
          Amount: 60,
        },
      ],
      Weapon: {
        Musical: true,
        Whip: true,
      },
    },
    Status: "Humming",
  },
  {
    Id: 328,
    Name: "DC_DONTFORGETME",
    Description: "Slow Grace",
    MaxLevel: 10,
    Type: "Misc",
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      IsSong: true,
    },
    Hit: "Single",
    HitCount: 1,
    SplashArea: 4,
    CastTime: 1000,
    Duration1: 60000,
    Duration2: 20000,
    Cooldown: 20000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 38,
        },
        {
          Level: 2,
          Amount: 41,
        },
        {
          Level: 3,
          Amount: 44,
        },
        {
          Level: 4,
          Amount: 47,
        },
        {
          Level: 5,
          Amount: 50,
        },
        {
          Level: 6,
          Amount: 53,
        },
        {
          Level: 7,
          Amount: 56,
        },
        {
          Level: 8,
          Amount: 59,
        },
        {
          Level: 9,
          Amount: 62,
        },
        {
          Level: 10,
          Amount: 65,
        },
      ],
      Weapon: {
        Musical: true,
        Whip: true,
      },
    },
    Status: "DontForgetMe",
  },
  {
    Id: 329,
    Name: "DC_FORTUNEKISS",
    Description: "Lady Luck",
    MaxLevel: 10,
    Type: "Misc",
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      IsSong: true,
    },
    Hit: "Single",
    HitCount: 1,
    SplashArea: 15,
    CastTime: 1000,
    Duration1: 180000,
    Duration2: 20000,
    Cooldown: 20000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 40,
        },
        {
          Level: 2,
          Amount: 45,
        },
        {
          Level: 3,
          Amount: 50,
        },
        {
          Level: 4,
          Amount: 55,
        },
        {
          Level: 5,
          Amount: 60,
        },
        {
          Level: 6,
          Amount: 65,
        },
        {
          Level: 7,
          Amount: 70,
        },
        {
          Level: 8,
          Amount: 75,
        },
        {
          Level: 9,
          Amount: 80,
        },
        {
          Level: 10,
          Amount: 85,
        },
      ],
      Weapon: {
        Musical: true,
        Whip: true,
      },
    },
    Status: "Fortune",
  },
  {
    Id: 330,
    Name: "DC_SERVICEFORYOU",
    Description: "Gypsy's Kiss",
    MaxLevel: 10,
    Type: "Misc",
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      IsSong: true,
    },
    Hit: "Single",
    HitCount: 1,
    SplashArea: 15,
    CastTime: 1000,
    Duration1: 180000,
    Duration2: 20000,
    Cooldown: 20000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 60,
        },
        {
          Level: 2,
          Amount: 63,
        },
        {
          Level: 3,
          Amount: 66,
        },
        {
          Level: 4,
          Amount: 69,
        },
        {
          Level: 5,
          Amount: 72,
        },
        {
          Level: 6,
          Amount: 75,
        },
        {
          Level: 7,
          Amount: 78,
        },
        {
          Level: 8,
          Amount: 81,
        },
        {
          Level: 9,
          Amount: 84,
        },
        {
          Level: 10,
          Amount: 87,
        },
      ],
      Weapon: {
        Musical: true,
        Whip: true,
      },
    },
    Status: "Service4U",
  },
  {
    Id: 331,
    Name: "NPC_RANDOMMOVE",
    Description: "Random Move",
    MaxLevel: 10,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      IsNpc: true,
    },
    Hit: "Single",
  },
  {
    Id: 332,
    Name: "NPC_SPEEDUP",
    Description: "Speed UP",
    MaxLevel: 10,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      IsNpc: true,
    },
    Hit: "Single",
  },
  {
    Id: 333,
    Name: "NPC_REVENGE",
    Description: "Revenge",
    MaxLevel: 1,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      IsNpc: true,
    },
    Hit: "Single",
  },
  {
    Id: 334,
    Name: "WE_MALE",
    Description: "I Will Protect You",
    MaxLevel: 1,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      IsWedding: true,
    },
    Range: 9,
    Hit: "Single",
    HitCount: 1,
    CastCancel: true,
    CastTime: 1500,
    FixedCastTime: 1500,
    Requires: {
      SpCost: 1,
      HpRateCost: -15,
    },
  },
  {
    Id: 335,
    Name: "WE_FEMALE",
    Description: "I Look up to You",
    MaxLevel: 1,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      IsWedding: true,
    },
    Range: 9,
    Hit: "Single",
    HitCount: 1,
    CastCancel: true,
    CastTime: 1500,
    FixedCastTime: 1500,
    Requires: {
      SpCost: 1,
      SpRateCost: -15,
    },
  },
  {
    Id: 336,
    Name: "WE_CALLPARTNER",
    Description: "I miss You",
    MaxLevel: 1,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      IsWedding: true,
    },
    Range: 9,
    Hit: "Single",
    HitCount: 1,
    SplashArea: 3,
    ActiveInstance: 1,
    CastCancel: true,
    Duration1: 20000,
    CastTimeFlags: {
      IgnoreDex: true,
    },
    Requires: {
      SpCost: 1,
    },
    Unit: {
      Id: "Callfamily",
      Range: -1,
      Interval: -1,
    },
  },
  {
    Id: 337,
    Name: "ITM_TOMAHAWK",
    Description: "Throw Tomahawk",
    MaxLevel: 1,
    Type: "Weapon",
    TargetType: "Attack",
    Flags: {
      IsNpc: true,
    },
    Range: 9,
    Hit: "Single",
    HitCount: 1,
    Element: "Weapon",
    CopyFlags: {
      Skill: {
        Plagiarism: true,
        Reproduce: true,
      },
    },
    Requires: {
      SpCost: 1,
    },
  },
  {
    Id: 338,
    Name: "NPC_DARKCROSS",
    Description: "Cross of Darkness",
    MaxLevel: 10,
    Type: "Weapon",
    TargetType: "Attack",
    Flags: {
      IsNpc: true,
    },
    Range: -2,
    Hit: "Multi_Hit",
    HitCount: -2,
    Element: "Dark",
    Duration2: 18000,
    Status: "Blind",
  },
  {
    Id: 339,
    Name: "NPC_GRANDDARKNESS",
    Description: "Grand cross of Darkness",
    MaxLevel: 10,
    Type: "Magic",
    TargetType: "Self",
    DamageFlags: {
      IgnoreAtkCard: true,
      IgnoreFlee: true,
    },
    Flags: {
      IsNpc: true,
      TargetSelf: true,
    },
    Hit: "Single",
    HitCount: 1,
    Element: "Dark",
    AfterCastWalkDelay: 1000,
    Duration1: 950,
    Duration2: 18000,
    Unit: {
      Id: "Dummyskill",
      Layout: -1,
      Interval: 300,
      Target: "Enemy",
    },
    Status: "Blind",
  },
  {
    Id: 340,
    Name: "NPC_DARKSTRIKE",
    Description: "Soul Strike of Darkness",
    MaxLevel: 10,
    Type: "Magic",
    TargetType: "Attack",
    Flags: {
      IsNpc: true,
    },
    Range: 9,
    Hit: "Multi_Hit",
    HitCount: [
      {
        Level: 1,
        Count: 1,
      },
      {
        Level: 2,
        Count: 1,
      },
      {
        Level: 3,
        Count: 2,
      },
      {
        Level: 4,
        Count: 2,
      },
      {
        Level: 5,
        Count: 3,
      },
      {
        Level: 6,
        Count: 3,
      },
      {
        Level: 7,
        Count: 4,
      },
      {
        Level: 8,
        Count: 4,
      },
      {
        Level: 9,
        Count: 5,
      },
      {
        Level: 10,
        Count: 5,
      },
    ],
    Element: "Dark",
    CastCancel: true,
  },
  {
    Id: 341,
    Name: "NPC_DARKTHUNDER",
    Description: "Darkness Jupitel",
    MaxLevel: 10,
    Type: "Magic",
    TargetType: "Attack",
    Flags: {
      IsNpc: true,
    },
    Range: 9,
    Hit: "Multi_Hit",
    HitCount: [
      {
        Level: 1,
        Count: 3,
      },
      {
        Level: 2,
        Count: 4,
      },
      {
        Level: 3,
        Count: 5,
      },
      {
        Level: 4,
        Count: 6,
      },
      {
        Level: 5,
        Count: 7,
      },
      {
        Level: 6,
        Count: 8,
      },
      {
        Level: 7,
        Count: 9,
      },
      {
        Level: 8,
        Count: 10,
      },
      {
        Level: 9,
        Count: 11,
      },
      {
        Level: 10,
        Count: 12,
      },
    ],
    Element: "Dark",
    Knockback: [
      {
        Level: 1,
        Amount: 2,
      },
      {
        Level: 2,
        Amount: 3,
      },
      {
        Level: 3,
        Amount: 3,
      },
      {
        Level: 4,
        Amount: 4,
      },
      {
        Level: 5,
        Amount: 4,
      },
      {
        Level: 6,
        Amount: 5,
      },
      {
        Level: 7,
        Amount: 5,
      },
      {
        Level: 8,
        Amount: 6,
      },
      {
        Level: 9,
        Amount: 6,
      },
      {
        Level: 10,
        Amount: 7,
      },
    ],
    CastCancel: true,
  },
  {
    Id: 342,
    Name: "NPC_STOP",
    Description: "Stop",
    MaxLevel: 1,
    TargetType: "Attack",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      IsNpc: true,
    },
    Range: -2,
    Hit: "Single",
    Duration1: 15000,
    Status: "Stop",
  },
  {
    Id: 343,
    Name: "NPC_WEAPONBRAKER",
    Description: "Break weapon",
    MaxLevel: 10,
    Type: "Weapon",
    TargetType: "Attack",
    Flags: {
      IsNpc: true,
    },
    Range: 9,
    Hit: "Single",
    HitCount: 1,
    Element: "Weapon",
    Status: "BrokenWeapon",
  },
  {
    Id: 344,
    Name: "NPC_ARMORBRAKE",
    Description: "Break armor",
    MaxLevel: 10,
    Type: "Weapon",
    TargetType: "Attack",
    Flags: {
      IsNpc: true,
    },
    Range: -2,
    Hit: "Single",
    HitCount: 1,
    Element: "Weapon",
    Status: "BrokenArmor",
  },
  {
    Id: 345,
    Name: "NPC_HELMBRAKE",
    Description: "Break helm",
    MaxLevel: 10,
    Type: "Weapon",
    TargetType: "Attack",
    Flags: {
      IsNpc: true,
    },
    Range: -2,
    Hit: "Single",
    HitCount: 1,
    Element: "Weapon",
  },
  {
    Id: 346,
    Name: "NPC_SHIELDBRAKE",
    Description: "Break shield",
    MaxLevel: 10,
    Type: "Weapon",
    TargetType: "Attack",
    Flags: {
      IsNpc: true,
    },
    Range: -2,
    Hit: "Single",
    HitCount: 1,
    Element: "Weapon",
  },
  {
    Id: 347,
    Name: "NPC_UNDEADATTACK",
    Description: "Undead Element Attack",
    MaxLevel: 10,
    Type: "Weapon",
    TargetType: "Attack",
    Flags: {
      IsNpc: true,
    },
    Range: -7,
    Hit: "Single",
    HitCount: 1,
    Element: "Undead",
  },
  {
    Id: 348,
    Name: "NPC_CHANGEUNDEAD",
    Description: "Undead Attribute Change",
    MaxLevel: 5,
    Type: "Weapon",
    TargetType: "Attack",
    Flags: {
      IsNpc: true,
    },
    Range: -2,
    Hit: "Single",
    HitCount: 1,
    Element: "Undead",
    Duration2: 60000,
    Status: "ChangeUndead",
  },
  {
    Id: 349,
    Name: "NPC_POWERUP",
    Description: "Power Up",
    MaxLevel: 10,
    Type: "Weapon",
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      IsNpc: true,
    },
    Hit: "Single",
    Duration1: [
      {
        Level: 1,
        Time: 10000,
      },
      {
        Level: 2,
        Time: 15000,
      },
      {
        Level: 3,
        Time: 20000,
      },
      {
        Level: 4,
        Time: 25000,
      },
      {
        Level: 5,
        Time: 30000,
      },
    ],
    Status: "IncHitRate",
  },
  {
    Id: 350,
    Name: "NPC_AGIUP",
    Description: "Agility UP",
    MaxLevel: 10,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      IsNpc: true,
    },
    Hit: "Single",
    Duration1: [
      {
        Level: 1,
        Time: 10000,
      },
      {
        Level: 2,
        Time: 15000,
      },
      {
        Level: 3,
        Time: 20000,
      },
      {
        Level: 4,
        Time: 25000,
      },
      {
        Level: 5,
        Time: 30000,
      },
    ],
    Status: "IncFleeRate",
  },
  {
    Id: 351,
    Name: "NPC_SIEGEMODE",
    Description: "Siege Mode",
    MaxLevel: 1,
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      IsNpc: true,
    },
  },
  {
    Id: 352,
    Name: "NPC_CALLSLAVE",
    Description: "Recall Slaves",
    MaxLevel: 1,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      IsNpc: true,
    },
  },
  {
    Id: 353,
    Name: "NPC_INVISIBLE",
    Description: "Invisible",
    MaxLevel: 1,
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      IsNpc: true,
    },
    Duration1: 30000,
    Status: "Cloaking",
  },
  {
    Id: 354,
    Name: "NPC_RUN",
    Description: "Run",
    MaxLevel: 10,
    Type: "Misc",
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      IsNpc: true,
    },
    Hit: "Single",
  },
  {
    Id: 355,
    Name: "LK_AURABLADE",
    Description: "Aura Blade",
    MaxLevel: 5,
    Type: "Weapon",
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Hit: "Single",
    HitCount: 1,
    Duration1: [
      {
        Level: 1,
        Time: 40000,
      },
      {
        Level: 2,
        Time: 60000,
      },
      {
        Level: 3,
        Time: 80000,
      },
      {
        Level: 4,
        Time: 100000,
      },
      {
        Level: 5,
        Time: 120000,
      },
    ],
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 18,
        },
        {
          Level: 2,
          Amount: 26,
        },
        {
          Level: 3,
          Amount: 34,
        },
        {
          Level: 4,
          Amount: 42,
        },
        {
          Level: 5,
          Amount: 50,
        },
      ],
      Weapon: {
        Dagger: true,
        "1hSword": true,
        "2hSword": true,
        "1hSpear": true,
        "2hSpear": true,
        "1hAxe": true,
        "2hAxe": true,
        Mace: true,
        "2hMace": true,
        Staff: true,
        Bow: true,
        Knuckle: true,
        Musical: true,
        Whip: true,
        Book: true,
        Katar: true,
        Revolver: true,
        Rifle: true,
        Gatling: true,
        Shotgun: true,
        Grenade: true,
        Huuma: true,
      },
    },
    Status: "AuraBlade",
  },
  {
    Id: 356,
    Name: "LK_PARRYING",
    Description: "Parrying",
    MaxLevel: 10,
    Type: "Weapon",
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Hit: "Single",
    HitCount: 1,
    Duration1: [
      {
        Level: 1,
        Time: 15000,
      },
      {
        Level: 2,
        Time: 20000,
      },
      {
        Level: 3,
        Time: 25000,
      },
      {
        Level: 4,
        Time: 30000,
      },
      {
        Level: 5,
        Time: 35000,
      },
      {
        Level: 6,
        Time: 40000,
      },
      {
        Level: 7,
        Time: 45000,
      },
      {
        Level: 8,
        Time: 50000,
      },
      {
        Level: 9,
        Time: 55000,
      },
      {
        Level: 10,
        Time: 60000,
      },
    ],
    Requires: {
      SpCost: 50,
      Weapon: {
        "2hSword": true,
      },
    },
    Status: "Parrying",
  },
  {
    Id: 357,
    Name: "LK_CONCENTRATION",
    Description: "Concentration",
    MaxLevel: 5,
    Type: "Weapon",
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Hit: "Single",
    HitCount: 1,
    Duration1: [
      {
        Level: 1,
        Time: 25000,
      },
      {
        Level: 2,
        Time: 30000,
      },
      {
        Level: 3,
        Time: 35000,
      },
      {
        Level: 4,
        Time: 40000,
      },
      {
        Level: 5,
        Time: 60000,
      },
    ],
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 14,
        },
        {
          Level: 2,
          Amount: 18,
        },
        {
          Level: 3,
          Amount: 22,
        },
        {
          Level: 4,
          Amount: 26,
        },
        {
          Level: 5,
          Amount: 30,
        },
      ],
    },
    Status: "Concentration",
  },
  {
    Id: 358,
    Name: "LK_TENSIONRELAX",
    Description: "Relax",
    MaxLevel: 1,
    Type: "Weapon",
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Hit: "Single",
    HitCount: 1,
    Duration1: 180000,
    Requires: {
      SpCost: 15,
    },
    Status: "TensionRelax",
  },
  {
    Id: 359,
    Name: "LK_BERSERK",
    Description: "Frenzy",
    MaxLevel: 1,
    Type: "Weapon",
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Hit: "Single",
    HitCount: 1,
    Duration1: 300000,
    Duration2: 15000,
    Requires: {
      SpCost: 200,
    },
    Status: "Berserk",
  },
  {
    Id: 360,
    Name: "LK_FURY",
    Description: "Fury",
    MaxLevel: 1,
    Type: "Weapon",
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Hit: "Single",
    HitCount: 1,
    Duration1: 300000,
  },
  {
    Id: 361,
    Name: "HP_ASSUMPTIO",
    Description: "Assumptio",
    MaxLevel: 5,
    Type: "Magic",
    TargetType: "Support",
    DamageFlags: {
      NoDamage: true,
    },
    Range: 9,
    Hit: "Single",
    HitCount: 1,
    SplashArea: 1,
    CastCancel: true,
    CastTime: [
      {
        Level: 1,
        Time: 800,
      },
      {
        Level: 2,
        Time: 1200,
      },
      {
        Level: 3,
        Time: 1600,
      },
      {
        Level: 4,
        Time: 2000,
      },
      {
        Level: 5,
        Time: 2400,
      },
    ],
    AfterCastActDelay: [
      {
        Level: 1,
        Time: 1100,
      },
      {
        Level: 2,
        Time: 1200,
      },
      {
        Level: 3,
        Time: 1300,
      },
      {
        Level: 4,
        Time: 1400,
      },
      {
        Level: 5,
        Time: 500,
      },
    ],
    Duration1: [
      {
        Level: 1,
        Time: 20000,
      },
      {
        Level: 2,
        Time: 40000,
      },
      {
        Level: 3,
        Time: 60000,
      },
      {
        Level: 4,
        Time: 80000,
      },
      {
        Level: 5,
        Time: 100000,
      },
    ],
    FixedCastTime: [
      {
        Level: 1,
        Time: 200,
      },
      {
        Level: 2,
        Time: 300,
      },
      {
        Level: 3,
        Time: 400,
      },
      {
        Level: 4,
        Time: 500,
      },
      {
        Level: 5,
        Time: 600,
      },
    ],
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 20,
        },
        {
          Level: 2,
          Amount: 30,
        },
        {
          Level: 3,
          Amount: 40,
        },
        {
          Level: 4,
          Amount: 50,
        },
        {
          Level: 5,
          Amount: 60,
        },
      ],
    },
    Status: "Assumptio",
  },
  {
    Id: 362,
    Name: "HP_BASILICA",
    Description: "Basilica",
    MaxLevel: 5,
    Type: "Magic",
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Hit: "Single",
    HitCount: 1,
    CastCancel: true,
    CastTime: 3000,
    AfterCastActDelay: [
      {
        Level: 1,
        Time: 200,
      },
      {
        Level: 2,
        Time: 400,
      },
      {
        Level: 3,
        Time: 600,
      },
      {
        Level: 4,
        Time: 800,
      },
      {
        Level: 5,
        Time: 1000,
      },
    ],
    Duration1: [
      {
        Level: 1,
        Time: 60000,
      },
      {
        Level: 2,
        Time: 90000,
      },
      {
        Level: 3,
        Time: 120000,
      },
      {
        Level: 4,
        Time: 150000,
      },
      {
        Level: 5,
        Time: 180000,
      },
    ],
    Cooldown: 30000,
    FixedCastTime: [
      {
        Level: 1,
        Time: 200,
      },
      {
        Level: 2,
        Time: 400,
      },
      {
        Level: 3,
        Time: 600,
      },
      {
        Level: 4,
        Time: 800,
      },
      {
        Level: 5,
        Time: 1000,
      },
    ],
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 40,
        },
        {
          Level: 2,
          Amount: 50,
        },
        {
          Level: 3,
          Amount: 60,
        },
        {
          Level: 4,
          Amount: 70,
        },
        {
          Level: 5,
          Amount: 80,
        },
      ],
    },
    Status: "Basilica",
  },
  {
    Id: 363,
    Name: "HP_MEDITATIO",
    Description: "Meditatio",
    MaxLevel: 10,
    Type: "Magic",
  },
  {
    Id: 364,
    Name: "HW_SOULDRAIN",
    Description: "Soul Drain",
    MaxLevel: 10,
    Type: "Magic",
    HitCount: 1,
  },
  {
    Id: 365,
    Name: "HW_MAGICCRASHER",
    Description: "Stave Crasher",
    MaxLevel: 1,
    Type: "Weapon",
    TargetType: "Attack",
    Range: 9,
    Hit: "Multi_Hit",
    HitCount: 1,
    Element: "Weapon",
    CastCancel: true,
    CastTime: 240,
    AfterCastActDelay: 300,
    FixedCastTime: 60,
    Requires: {
      SpCost: 8,
    },
  },
  {
    Id: 366,
    Name: "HW_MAGICPOWER",
    Description: "Mystical Amplification",
    MaxLevel: 10,
    Type: "Magic",
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Hit: "Single",
    HitCount: 1,
    Duration1: 60000,
    FixedCastTime: 700,
    CastTimeFlags: {
      IgnoreDex: true,
    },
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 35,
        },
        {
          Level: 2,
          Amount: 40,
        },
        {
          Level: 3,
          Amount: 45,
        },
        {
          Level: 4,
          Amount: 50,
        },
        {
          Level: 5,
          Amount: 55,
        },
        {
          Level: 6,
          Amount: 60,
        },
        {
          Level: 7,
          Amount: 65,
        },
        {
          Level: 8,
          Amount: 70,
        },
        {
          Level: 9,
          Amount: 75,
        },
        {
          Level: 10,
          Amount: 80,
        },
      ],
    },
    Status: "MagicPower",
  },
  {
    Id: 367,
    Name: "PA_PRESSURE",
    Description: "Gloria Domini",
    MaxLevel: 5,
    Type: "Magic",
    TargetType: "Attack",
    Range: 9,
    Hit: "Multi_Hit",
    HitCount: 3,
    Element: "Holy",
    CastTime: 1000,
    AfterCastActDelay: [
      {
        Level: 1,
        Time: 2000,
      },
      {
        Level: 2,
        Time: 2500,
      },
      {
        Level: 3,
        Time: 3000,
      },
      {
        Level: 4,
        Time: 3500,
      },
      {
        Level: 5,
        Time: 1000,
      },
    ],
    Duration2: [
      {
        Level: 1,
        Time: 2000,
      },
      {
        Level: 2,
        Time: 3000,
      },
      {
        Level: 3,
        Time: 4000,
      },
      {
        Level: 4,
        Time: 5000,
      },
      {
        Level: 5,
        Time: 6000,
      },
    ],
    FixedCastTime: 400,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 30,
        },
        {
          Level: 2,
          Amount: 35,
        },
        {
          Level: 3,
          Amount: 40,
        },
        {
          Level: 4,
          Amount: 45,
        },
        {
          Level: 5,
          Amount: 50,
        },
      ],
    },
  },
  {
    Id: 368,
    Name: "PA_SACRIFICE",
    Description: "Martyr's Reckoning",
    MaxLevel: 5,
    Type: "Weapon",
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
      IgnoreAtkCard: true,
      IgnoreDefense: true,
      IgnoreFlee: true,
    },
    Flags: {
      IgnoreAutoGuard: true,
      IgnoreCicada: true,
    },
    Hit: "Single",
    HitCount: 1,
    CastCancel: true,
    Requires: {
      SpCost: 100,
    },
    Status: "Sacrifice",
  },
  {
    Id: 369,
    Name: "PA_GOSPEL",
    Description: "Battle Chant",
    MaxLevel: 10,
    Type: "Misc",
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
      IgnoreFlee: true,
    },
    Flags: {
      Toggleable: true,
    },
    Hit: "Single",
    HitCount: 1,
    CastCancel: true,
    Duration1: 60000,
    Duration2: 60000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 80,
        },
        {
          Level: 2,
          Amount: 80,
        },
        {
          Level: 3,
          Amount: 80,
        },
        {
          Level: 4,
          Amount: 80,
        },
        {
          Level: 5,
          Amount: 80,
        },
        {
          Level: 6,
          Amount: 100,
        },
        {
          Level: 7,
          Amount: 100,
        },
        {
          Level: 8,
          Amount: 100,
        },
        {
          Level: 9,
          Amount: 100,
        },
        {
          Level: 10,
          Amount: 100,
        },
      ],
    },
    Unit: {
      Id: "Gospel",
      Layout: -1,
      Interval: 10000,
      Flag: {
        NoOverlap: true,
      },
    },
    Status: "Gospel",
  },
  {
    Id: 370,
    Name: "CH_PALMSTRIKE",
    Description: "Raging Palm Strike",
    MaxLevel: 5,
    Type: "Weapon",
    TargetType: "Attack",
    Range: -2,
    Hit: "Single",
    HitCount: 1,
    Element: "Weapon",
    Knockback: 3,
    CastCancel: true,
    AfterCastActDelay: 300,
    CastTimeFlags: {
      IgnoreDex: true,
    },
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 2,
        },
        {
          Level: 2,
          Amount: 4,
        },
        {
          Level: 3,
          Amount: 6,
        },
        {
          Level: 4,
          Amount: 8,
        },
        {
          Level: 5,
          Amount: 10,
        },
      ],
      Status: {
        Explosionspirits: true,
      },
    },
  },
  {
    Id: 371,
    Name: "CH_TIGERFIST",
    Description: "Glacier Fist",
    MaxLevel: 5,
    Type: "Weapon",
    TargetType: "Self",
    Flags: {
      NoTargetSelf: true,
    },
    Range: -2,
    Hit: "Multi_Hit",
    HitCount: 1,
    Element: "Weapon",
    Duration1: [
      {
        Level: 1,
        Time: 4000,
      },
      {
        Level: 2,
        Time: 8000,
      },
      {
        Level: 3,
        Time: 12000,
      },
      {
        Level: 4,
        Time: 16000,
      },
      {
        Level: 5,
        Time: 24000,
      },
    ],
    CastDelayFlags: {
      IgnoreStatus: true,
    },
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 4,
        },
        {
          Level: 2,
          Amount: 6,
        },
        {
          Level: 3,
          Amount: 8,
        },
        {
          Level: 4,
          Amount: 10,
        },
        {
          Level: 5,
          Amount: 12,
        },
      ],
      SpiritSphereCost: 1,
    },
    Status: "Stop",
  },
  {
    Id: 372,
    Name: "CH_CHAINCRUSH",
    Description: "Chain Crush Combo",
    MaxLevel: 10,
    Type: "Weapon",
    TargetType: "Self",
    Flags: {
      NoTargetSelf: true,
    },
    Range: -2,
    Hit: "Multi_Hit",
    HitCount: [
      {
        Level: 1,
        Count: -1,
      },
      {
        Level: 2,
        Count: -1,
      },
      {
        Level: 3,
        Count: -2,
      },
      {
        Level: 4,
        Count: -2,
      },
      {
        Level: 5,
        Count: -3,
      },
      {
        Level: 6,
        Count: -3,
      },
      {
        Level: 7,
        Count: -4,
      },
      {
        Level: 8,
        Count: -4,
      },
      {
        Level: 9,
        Count: -5,
      },
      {
        Level: 10,
        Count: -5,
      },
    ],
    Element: "Weapon",
    CastDelayFlags: {
      IgnoreStatus: true,
    },
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 4,
        },
        {
          Level: 2,
          Amount: 6,
        },
        {
          Level: 3,
          Amount: 8,
        },
        {
          Level: 4,
          Amount: 10,
        },
        {
          Level: 5,
          Amount: 12,
        },
        {
          Level: 6,
          Amount: 14,
        },
        {
          Level: 7,
          Amount: 16,
        },
        {
          Level: 8,
          Amount: 18,
        },
        {
          Level: 9,
          Amount: 20,
        },
        {
          Level: 10,
          Amount: 22,
        },
      ],
      SpiritSphereCost: 1,
    },
  },
  {
    Id: 373,
    Name: "PF_HPCONVERSION",
    Description: "Indulge",
    MaxLevel: 5,
    Type: "Magic",
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Hit: "Single",
    HitCount: 1,
    AfterCastActDelay: 500,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 1,
        },
        {
          Level: 2,
          Amount: 2,
        },
        {
          Level: 3,
          Amount: 3,
        },
        {
          Level: 4,
          Amount: 4,
        },
        {
          Level: 5,
          Amount: 5,
        },
      ],
    },
  },
  {
    Id: 374,
    Name: "PF_SOULCHANGE",
    Description: "Soul Exhale",
    MaxLevel: 1,
    TargetType: "Attack",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      NoTargetSelf: true,
      PartyOnly: true,
      GuildOnly: true,
    },
    Range: 9,
    Hit: "Single",
    HitCount: 1,
    CastCancel: true,
    FixedCastTime: 3000,
    Requires: {
      SpCost: 5,
    },
  },
  {
    Id: 375,
    Name: "PF_SOULBURN",
    Description: "Soul Siphon",
    MaxLevel: 5,
    Type: "Magic",
    TargetType: "Attack",
    DamageFlags: {
      IgnoreAtkCard: true,
      IgnoreElement: true,
      IgnoreDefCard: true,
    },
    Range: 9,
    Hit: "Single",
    HitCount: 1,
    CastCancel: true,
    Cooldown: [
      {
        Level: 1,
        Time: 10000,
      },
      {
        Level: 2,
        Time: 10000,
      },
      {
        Level: 3,
        Time: 10000,
      },
      {
        Level: 4,
        Time: 10000,
      },
      {
        Level: 5,
        Time: 15000,
      },
    ],
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 80,
        },
        {
          Level: 2,
          Amount: 90,
        },
        {
          Level: 3,
          Amount: 100,
        },
        {
          Level: 4,
          Amount: 110,
        },
        {
          Level: 5,
          Amount: 120,
        },
      ],
    },
  },
  {
    Id: 376,
    Name: "ASC_KATAR",
    Description: "Advanced Katar Mastery",
    MaxLevel: 5,
    Type: "Weapon",
    DamageFlags: {
      NoDamage: true,
    },
    HitCount: 1,
  },
  {
    Id: 378,
    Name: "ASC_EDP",
    Description: "Enchant Deadly Poison",
    MaxLevel: 5,
    Type: "Weapon",
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Hit: "Single",
    HitCount: 1,
    Element: "Poison",
    Duration1: [
      {
        Level: 1,
        Time: 40000,
      },
      {
        Level: 2,
        Time: 45000,
      },
      {
        Level: 3,
        Time: 50000,
      },
      {
        Level: 4,
        Time: 55000,
      },
      {
        Level: 5,
        Time: 120000,
      },
    ],
    Duration2: [
      {
        Level: 1,
        Time: 20000,
      },
      {
        Level: 2,
        Time: 30000,
      },
      {
        Level: 3,
        Time: 40000,
      },
      {
        Level: 4,
        Time: 50000,
      },
      {
        Level: 5,
        Time: 60000,
      },
    ],
    Cooldown: 2000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 60,
        },
        {
          Level: 2,
          Amount: 70,
        },
        {
          Level: 3,
          Amount: 80,
        },
        {
          Level: 4,
          Amount: 90,
        },
        {
          Level: 5,
          Amount: 100,
        },
      ],
      ItemCost: [
        {
          Item: "Poison_Bottle",
          Amount: 1,
        },
      ],
    },
    Status: "Edp",
  },
  {
    Id: 379,
    Name: "ASC_BREAKER",
    Description: "Soul Destroyer",
    MaxLevel: 10,
    Type: "Weapon",
    TargetType: "Attack",
    DamageFlags: {
      Critical: true,
    },
    Range: 4,
    Hit: "Single",
    HitCount: 1,
    Element: "Weapon",
    CastCancel: true,
    CastTime: 250,
    AfterCastActDelay: 1000,
    Cooldown: 250,
    FixedCastTime: 250,
    Requires: {
      SpCost: 20,
    },
  },
  {
    Id: 380,
    Name: "SN_SIGHT",
    Description: "Falcon Eyes",
    MaxLevel: 10,
    Type: "Weapon",
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Hit: "Single",
    HitCount: 1,
    Duration1: 30000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 20,
        },
        {
          Level: 2,
          Amount: 20,
        },
        {
          Level: 3,
          Amount: 25,
        },
        {
          Level: 4,
          Amount: 25,
        },
        {
          Level: 5,
          Amount: 30,
        },
        {
          Level: 6,
          Amount: 30,
        },
        {
          Level: 7,
          Amount: 35,
        },
        {
          Level: 8,
          Amount: 35,
        },
        {
          Level: 9,
          Amount: 40,
        },
        {
          Level: 10,
          Amount: 40,
        },
      ],
    },
    Status: "TrueSight",
  },
  {
    Id: 381,
    Name: "SN_FALCONASSAULT",
    Description: "Falcon Assault",
    MaxLevel: 5,
    Type: "Misc",
    TargetType: "Attack",
    DamageFlags: {
      IgnoreFlee: true,
      IgnoreDefCard: true,
    },
    Range: 9,
    Hit: "Multi_Hit",
    HitCount: 1,
    CastCancel: true,
    CastTime: 500,
    AfterCastActDelay: 3000,
    FixedCastTime: 500,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 30,
        },
        {
          Level: 2,
          Amount: 34,
        },
        {
          Level: 3,
          Amount: 38,
        },
        {
          Level: 4,
          Amount: 42,
        },
        {
          Level: 5,
          Amount: 46,
        },
      ],
      State: "Falcon",
    },
  },
  {
    Id: 382,
    Name: "SN_SHARPSHOOTING",
    Description: "Focused Arrow Strike",
    MaxLevel: 5,
    Type: "Weapon",
    TargetType: "Attack",
    DamageFlags: {
      Critical: true,
    },
    Flags: {
      TargetTrap: true,
    },
    Range: 11,
    Hit: "Multi_Hit",
    HitCount: 1,
    Element: "Weapon",
    SplashArea: 2,
    ActiveInstance: 14,
    CastCancel: true,
    CastTime: 500,
    AfterCastActDelay: 500,
    FixedCastTime: 500,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 16,
        },
        {
          Level: 2,
          Amount: 18,
        },
        {
          Level: 3,
          Amount: 20,
        },
        {
          Level: 4,
          Amount: 22,
        },
        {
          Level: 5,
          Amount: 24,
        },
      ],
      Weapon: {
        Bow: true,
      },
      Ammo: {
        Arrow: true,
      },
      AmmoAmount: 1,
    },
  },
  {
    Id: 383,
    Name: "SN_WINDWALK",
    Description: "Wind Walker",
    MaxLevel: 10,
    Type: "Weapon",
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
      Splash: true,
    },
    Hit: "Single",
    HitCount: 1,
    SplashArea: -1,
    CastCancel: true,
    CastTime: [
      {
        Level: 1,
        Time: 1500,
      },
      {
        Level: 2,
        Time: 1800,
      },
      {
        Level: 3,
        Time: 2100,
      },
      {
        Level: 4,
        Time: 2400,
      },
      {
        Level: 5,
        Time: 2700,
      },
      {
        Level: 6,
        Time: 3000,
      },
      {
        Level: 7,
        Time: 3300,
      },
      {
        Level: 8,
        Time: 3600,
      },
      {
        Level: 9,
        Time: 3900,
      },
      {
        Level: 10,
        Time: 4200,
      },
    ],
    AfterCastActDelay: 2000,
    Duration1: [
      {
        Level: 1,
        Time: 130000,
      },
      {
        Level: 2,
        Time: 160000,
      },
      {
        Level: 3,
        Time: 190000,
      },
      {
        Level: 4,
        Time: 220000,
      },
      {
        Level: 5,
        Time: 250000,
      },
      {
        Level: 6,
        Time: 280000,
      },
      {
        Level: 7,
        Time: 310000,
      },
      {
        Level: 8,
        Time: 340000,
      },
      {
        Level: 9,
        Time: 370000,
      },
      {
        Level: 10,
        Time: 400000,
      },
    ],
    FixedCastTime: [
      {
        Level: 1,
        Time: 500,
      },
      {
        Level: 2,
        Time: 600,
      },
      {
        Level: 3,
        Time: 700,
      },
      {
        Level: 4,
        Time: 800,
      },
      {
        Level: 5,
        Time: 900,
      },
      {
        Level: 6,
        Time: 1000,
      },
      {
        Level: 7,
        Time: 1100,
      },
      {
        Level: 8,
        Time: 1200,
      },
      {
        Level: 9,
        Time: 1300,
      },
      {
        Level: 10,
        Time: 1400,
      },
    ],
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 46,
        },
        {
          Level: 2,
          Amount: 52,
        },
        {
          Level: 3,
          Amount: 58,
        },
        {
          Level: 4,
          Amount: 64,
        },
        {
          Level: 5,
          Amount: 70,
        },
        {
          Level: 6,
          Amount: 76,
        },
        {
          Level: 7,
          Amount: 82,
        },
        {
          Level: 8,
          Amount: 88,
        },
        {
          Level: 9,
          Amount: 94,
        },
        {
          Level: 10,
          Amount: 100,
        },
      ],
    },
    Status: "WindWalk",
  },
  {
    Id: 384,
    Name: "WS_MELTDOWN",
    Description: "Shattering Strike",
    MaxLevel: 10,
    Type: "Weapon",
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      AllowOnMado: true,
    },
    HitCount: 1,
    CastCancel: true,
    Duration1: [
      {
        Level: 1,
        Time: 15000,
      },
      {
        Level: 2,
        Time: 20000,
      },
      {
        Level: 3,
        Time: 25000,
      },
      {
        Level: 4,
        Time: 30000,
      },
      {
        Level: 5,
        Time: 35000,
      },
      {
        Level: 6,
        Time: 40000,
      },
      {
        Level: 7,
        Time: 45000,
      },
      {
        Level: 8,
        Time: 50000,
      },
      {
        Level: 9,
        Time: 55000,
      },
      {
        Level: 10,
        Time: 60000,
      },
    ],
    Duration2: 5000,
    FixedCastTime: [
      {
        Level: 1,
        Time: 5,
      },
      {
        Level: 2,
        Time: 5,
      },
      {
        Level: 3,
        Time: 6,
      },
      {
        Level: 4,
        Time: 6,
      },
      {
        Level: 5,
        Time: 7,
      },
      {
        Level: 6,
        Time: 7,
      },
      {
        Level: 7,
        Time: 8,
      },
      {
        Level: 8,
        Time: 8,
      },
      {
        Level: 9,
        Time: 9,
      },
      {
        Level: 10,
        Time: 10,
      },
    ],
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 50,
        },
        {
          Level: 2,
          Amount: 50,
        },
        {
          Level: 3,
          Amount: 60,
        },
        {
          Level: 4,
          Amount: 60,
        },
        {
          Level: 5,
          Amount: 70,
        },
        {
          Level: 6,
          Amount: 70,
        },
        {
          Level: 7,
          Amount: 80,
        },
        {
          Level: 8,
          Amount: 80,
        },
        {
          Level: 9,
          Amount: 90,
        },
        {
          Level: 10,
          Amount: 90,
        },
      ],
    },
    Status: "Meltdown",
  },
  {
    Id: 385,
    Name: "WS_CREATECOIN",
    Description: "Create Coins",
    MaxLevel: 1,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    HitCount: 1,
    CastCancel: true,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 10,
        },
        {
          Level: 2,
          Amount: 20,
        },
        {
          Level: 3,
          Amount: 30,
        },
      ],
    },
  },
  {
    Id: 386,
    Name: "WS_CREATENUGGET",
    Description: "Create Nuggets",
    MaxLevel: 1,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    HitCount: 1,
    CastCancel: true,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 10,
        },
        {
          Level: 2,
          Amount: 20,
        },
        {
          Level: 3,
          Amount: 30,
        },
      ],
    },
  },
  {
    Id: 387,
    Name: "WS_CARTBOOST",
    Description: "Cart Boost",
    MaxLevel: 1,
    Type: "Weapon",
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      AllowOnMado: true,
    },
    Hit: "Single",
    HitCount: 1,
    Duration1: 60000,
    Requires: {
      SpCost: 20,
      State: "Cart",
    },
    Status: "CartBoost",
  },
  {
    Id: 388,
    Name: "WS_SYSTEMCREATE",
    Description: "Auto Attack System",
    MaxLevel: 5,
    TargetType: "Ground",
    DamageFlags: {
      NoDamage: true,
    },
    Range: 9,
    Hit: "Single",
    HitCount: 1,
    Requires: {
      SpCost: 40,
      ItemCost: [
        {
          Item: "MenEater_Plant_Bottle",
          Amount: 1,
        },
      ],
    },
  },
  {
    Id: 389,
    Name: "ST_CHASEWALK",
    Description: "Stealth",
    MaxLevel: 5,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      IgnoreKagehumi: true,
      Toggleable: true,
    },
    Hit: "Single",
    HitCount: 1,
    CastTime: 500,
    Duration1: 10000,
    Duration2: 30000,
    FixedCastTime: 500,
    Requires: {
      SpCost: 10,
    },
    Status: "ChaseWalk",
  },
  {
    Id: 390,
    Name: "ST_REJECTSWORD",
    Description: "Counter Instinct",
    MaxLevel: 5,
    Type: "Weapon",
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    HitCount: 1,
    CastCancel: true,
    Duration1: 300000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 10,
        },
        {
          Level: 2,
          Amount: 15,
        },
        {
          Level: 3,
          Amount: 20,
        },
        {
          Level: 4,
          Amount: 25,
        },
        {
          Level: 5,
          Amount: 30,
        },
      ],
    },
    Status: "RejectSword",
  },
  {
    Id: 392,
    Name: "CR_ALCHEMY",
    Description: "Alchemy",
    MaxLevel: 1,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    HitCount: 1,
    CastCancel: true,
  },
  {
    Id: 393,
    Name: "CR_SYNTHESISPOTION",
    Description: "Potion Synthesis",
    MaxLevel: 1,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    HitCount: 1,
    CastCancel: true,
  },
  {
    Id: 394,
    Name: "CG_ARROWVULCAN",
    Description: "Vulcan Arrow",
    MaxLevel: 10,
    Type: "Weapon",
    TargetType: "Attack",
    Range: 9,
    Hit: "Multi_Hit",
    HitCount: -9,
    Element: "Weapon",
    CastCancel: true,
    CastTime: [
      {
        Level: 1,
        Time: 1600,
      },
      {
        Level: 2,
        Time: 1760,
      },
      {
        Level: 3,
        Time: 1920,
      },
      {
        Level: 4,
        Time: 2080,
      },
      {
        Level: 5,
        Time: 2240,
      },
      {
        Level: 6,
        Time: 2400,
      },
      {
        Level: 7,
        Time: 2560,
      },
      {
        Level: 8,
        Time: 2720,
      },
      {
        Level: 9,
        Time: 2880,
      },
      {
        Level: 10,
        Time: 1500,
      },
    ],
    AfterCastActDelay: 500,
    AfterCastWalkDelay: 2000,
    Cooldown: 1500,
    FixedCastTime: [
      {
        Level: 1,
        Time: 400,
      },
      {
        Level: 2,
        Time: 440,
      },
      {
        Level: 3,
        Time: 480,
      },
      {
        Level: 4,
        Time: 520,
      },
      {
        Level: 5,
        Time: 560,
      },
      {
        Level: 6,
        Time: 600,
      },
      {
        Level: 7,
        Time: 640,
      },
      {
        Level: 8,
        Time: 680,
      },
      {
        Level: 9,
        Time: 720,
      },
      {
        Level: 10,
        Time: 500,
      },
    ],
    CastDelayFlags: {
      IgnoreStatus: true,
    },
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 12,
        },
        {
          Level: 2,
          Amount: 14,
        },
        {
          Level: 3,
          Amount: 16,
        },
        {
          Level: 4,
          Amount: 18,
        },
        {
          Level: 5,
          Amount: 20,
        },
        {
          Level: 6,
          Amount: 22,
        },
        {
          Level: 7,
          Amount: 24,
        },
        {
          Level: 8,
          Amount: 26,
        },
        {
          Level: 9,
          Amount: 28,
        },
        {
          Level: 10,
          Amount: 30,
        },
      ],
      Weapon: {
        Musical: true,
        Whip: true,
      },
      Ammo: {
        Arrow: true,
      },
      AmmoAmount: 1,
    },
  },
  {
    Id: 395,
    Name: "CG_MOONLIT",
    Description: "Sheltering Bliss",
    MaxLevel: 5,
    Type: "Misc",
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      IsEnsemble: true,
    },
    HitCount: 1,
    SplashArea: 3,
    Knockback: 2,
    CastCancel: true,
    Duration1: [
      {
        Level: 1,
        Time: 20000,
      },
      {
        Level: 2,
        Time: 25000,
      },
      {
        Level: 3,
        Time: 30000,
      },
      {
        Level: 4,
        Time: 35000,
      },
      {
        Level: 5,
        Time: 40000,
      },
    ],
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 30,
        },
        {
          Level: 2,
          Amount: 40,
        },
        {
          Level: 3,
          Amount: 50,
        },
        {
          Level: 4,
          Amount: 60,
        },
        {
          Level: 5,
          Amount: 70,
        },
      ],
      Weapon: {
        Musical: true,
        Whip: true,
      },
    },
    Unit: {
      Id: "Moonlit",
      Layout: 4,
      Interval: -1,
      Flag: {
        Ensemble: true,
      },
    },
  },
  {
    Id: 396,
    Name: "CG_MARIONETTE",
    Description: "Marionette Control",
    MaxLevel: 1,
    TargetType: "Support",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      NoTargetSelf: true,
      PartyOnly: true,
      IgnoreKagehumi: true,
    },
    Range: 7,
    Hit: "Single",
    HitCount: 1,
    CastCancel: true,
    Duration1: 1000,
    Requires: {
      SpCost: 100,
    },
    Status: "Marionette",
  },
  {
    Id: 397,
    Name: "LK_SPIRALPIERCE",
    Description: "Spiral Pierce",
    MaxLevel: 5,
    Type: "Weapon",
    TargetType: "Attack",
    Flags: {
      TargetTrap: true,
    },
    Range: 5,
    Hit: "Multi_Hit",
    HitCount: 5,
    Element: "Weapon",
    CastTime: [
      {
        Level: 1,
        Time: 150,
      },
      {
        Level: 2,
        Time: 250,
      },
      {
        Level: 3,
        Time: 350,
      },
      {
        Level: 4,
        Time: 450,
      },
      {
        Level: 5,
        Time: 250,
      },
    ],
    AfterCastActDelay: [
      {
        Level: 1,
        Time: 1200,
      },
      {
        Level: 2,
        Time: 1400,
      },
      {
        Level: 3,
        Time: 1600,
      },
      {
        Level: 4,
        Time: 1800,
      },
      {
        Level: 5,
        Time: 2000,
      },
    ],
    Duration2: 1000,
    FixedCastTime: [
      {
        Level: 1,
        Time: 150,
      },
      {
        Level: 2,
        Time: 250,
      },
      {
        Level: 3,
        Time: 350,
      },
      {
        Level: 4,
        Time: 450,
      },
      {
        Level: 5,
        Time: 300,
      },
    ],
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 18,
        },
        {
          Level: 2,
          Amount: 21,
        },
        {
          Level: 3,
          Amount: 24,
        },
        {
          Level: 4,
          Amount: 27,
        },
        {
          Level: 5,
          Amount: 30,
        },
      ],
      Weapon: {
        "1hSword": true,
        "2hSword": true,
        "1hSpear": true,
        "2hSpear": true,
      },
    },
    Status: "Stop",
  },
  {
    Id: 398,
    Name: "LK_HEADCRUSH",
    Description: "Traumatic Blow",
    MaxLevel: 5,
    Type: "Weapon",
    TargetType: "Attack",
    Range: 4,
    Hit: "Single",
    HitCount: 1,
    Element: "Weapon",
    AfterCastActDelay: 500,
    Duration2: 108000,
    Requires: {
      SpCost: 23,
    },
    Status: "Bleeding",
  },
  {
    Id: 399,
    Name: "LK_JOINTBEAT",
    Description: "Vital Strike",
    MaxLevel: 10,
    Type: "Weapon",
    TargetType: "Attack",
    Range: 4,
    Hit: "Single",
    HitCount: 1,
    Element: "Weapon",
    AfterCastActDelay: [
      {
        Level: 1,
        Time: 800,
      },
      {
        Level: 2,
        Time: 800,
      },
      {
        Level: 3,
        Time: 800,
      },
      {
        Level: 4,
        Time: 800,
      },
      {
        Level: 5,
        Time: 1000,
      },
    ],
    Duration2: 30000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 12,
        },
        {
          Level: 2,
          Amount: 12,
        },
        {
          Level: 3,
          Amount: 14,
        },
        {
          Level: 4,
          Amount: 14,
        },
        {
          Level: 5,
          Amount: 16,
        },
        {
          Level: 6,
          Amount: 16,
        },
        {
          Level: 7,
          Amount: 18,
        },
        {
          Level: 8,
          Amount: 18,
        },
        {
          Level: 9,
          Amount: 20,
        },
        {
          Level: 10,
          Amount: 20,
        },
      ],
      Weapon: {
        "1hSpear": true,
        "2hSpear": true,
      },
    },
    Status: "JointBeat",
  },
  {
    Id: 400,
    Name: "HW_NAPALMVULCAN",
    Description: "Napalm Vulcan",
    MaxLevel: 5,
    Type: "Magic",
    TargetType: "Attack",
    DamageFlags: {
      Splash: true,
    },
    Flags: {
      TargetTrap: true,
    },
    Range: 9,
    Hit: "Multi_Hit",
    HitCount: [
      {
        Level: 1,
        Count: 1,
      },
      {
        Level: 2,
        Count: 2,
      },
      {
        Level: 3,
        Count: 3,
      },
      {
        Level: 4,
        Count: 4,
      },
      {
        Level: 5,
        Count: 5,
      },
    ],
    Element: "Ghost",
    SplashArea: 1,
    CastCancel: true,
    CastTime: 800,
    AfterCastActDelay: 500,
    Duration2: 18000,
    Cooldown: 1000,
    FixedCastTime: 200,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 30,
        },
        {
          Level: 2,
          Amount: 40,
        },
        {
          Level: 3,
          Amount: 50,
        },
        {
          Level: 4,
          Amount: 60,
        },
        {
          Level: 5,
          Amount: 70,
        },
      ],
    },
    Status: "Curse",
  },
  {
    Id: 401,
    Name: "CH_SOULCOLLECT",
    Description: "Zen",
    MaxLevel: 1,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Hit: "Single",
    HitCount: 1,
    CastCancel: true,
    Duration1: 600000,
    FixedCastTime: 1000,
    Requires: {
      SpCost: 20,
    },
  },
  {
    Id: 402,
    Name: "PF_MINDBREAKER",
    Description: "Mind Breaker",
    MaxLevel: 5,
    TargetType: "Attack",
    DamageFlags: {
      NoDamage: true,
    },
    Range: 9,
    Hit: "Single",
    HitCount: 1,
    AfterCastActDelay: [
      {
        Level: 1,
        Time: 800,
      },
      {
        Level: 2,
        Time: 900,
      },
      {
        Level: 3,
        Time: 1000,
      },
      {
        Level: 4,
        Time: 1100,
      },
      {
        Level: 5,
        Time: 1200,
      },
    ],
    Duration1: 30000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 12,
        },
        {
          Level: 2,
          Amount: 15,
        },
        {
          Level: 3,
          Amount: 18,
        },
        {
          Level: 4,
          Amount: 21,
        },
        {
          Level: 5,
          Amount: 24,
        },
      ],
    },
    Status: "MindBreaker",
  },
  {
    Id: 403,
    Name: "PF_MEMORIZE",
    Description: "Foresight",
    MaxLevel: 1,
    Type: "Magic",
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    HitCount: 1,
    CastCancel: true,
    FixedCastTime: 2500,
    CastTimeFlags: {
      IgnoreDex: true,
      IgnoreStatus: true,
    },
    Requires: {
      SpCost: 1,
    },
    Status: "Memorize",
  },
  {
    Id: 404,
    Name: "PF_FOGWALL",
    Description: "Blinding Mist",
    MaxLevel: 5,
    Type: "Magic",
    TargetType: "Ground",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      TargetSelf: true,
      TargetHidden: true,
    },
    Range: 9,
    Hit: "Single",
    HitCount: 1,
    Element: "Earth",
    ActiveInstance: 2,
    CastCancel: true,
    Duration1: 20000,
    Duration2: 10000,
    Requires: {
      SpCost: 25,
    },
    Unit: {
      Id: "Fogwall",
      Layout: -1,
      Interval: -1,
      Flag: {
        RemovedByFireRain: true,
      },
    },
    Status: "FogWall",
  },
  {
    Id: 405,
    Name: "PF_SPIDERWEB",
    Description: "Fiber Lock",
    MaxLevel: 1,
    Type: "Magic",
    TargetType: "Attack",
    DamageFlags: {
      NoDamage: true,
    },
    Range: 7,
    Hit: "Single",
    HitCount: 1,
    ActiveInstance: 3,
    Duration1: 16000,
    Duration2: 8000,
    Requires: {
      SpCost: 30,
      ItemCost: [
        {
          Item: "Spiderweb",
          Amount: 1,
        },
      ],
    },
    Unit: {
      Id: "Spiderweb",
      Interval: -1,
      Target: "Enemy",
      Flag: {
        RemovedByFireRain: true,
      },
    },
    Status: "SpiderWeb",
  },
  {
    Id: 406,
    Name: "ASC_METEORASSAULT",
    Description: "Meteor Assault",
    MaxLevel: 10,
    Type: "Weapon",
    TargetType: "Self",
    DamageFlags: {
      Splash: true,
    },
    Flags: {
      TargetTrap: true,
      IgnoreAutoGuard: true,
      IgnoreCicada: true,
    },
    Hit: "Single",
    HitCount: 1,
    Element: "Weapon",
    SplashArea: 2,
    CastTime: 250,
    Duration2: [
      {
        Level: 1,
        Time: 20000,
      },
      {
        Level: 2,
        Time: 5000,
      },
      {
        Level: 3,
        Time: 120000,
      },
    ],
    Cooldown: 500,
    FixedCastTime: 250,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 10,
        },
        {
          Level: 2,
          Amount: 12,
        },
        {
          Level: 3,
          Amount: 14,
        },
        {
          Level: 4,
          Amount: 16,
        },
        {
          Level: 5,
          Amount: 18,
        },
        {
          Level: 6,
          Amount: 20,
        },
        {
          Level: 7,
          Amount: 22,
        },
        {
          Level: 8,
          Amount: 24,
        },
        {
          Level: 9,
          Amount: 26,
        },
        {
          Level: 10,
          Amount: 28,
        },
      ],
    },
  },
  {
    Id: 407,
    Name: "ASC_CDP",
    Description: "Create Deadly Poison",
    MaxLevel: 1,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Hit: "Single",
    AfterCastActDelay: 5000,
    Requires: {
      SpCost: 50,
    },
  },
  {
    Id: 408,
    Name: "WE_BABY",
    Description: "Baby",
    MaxLevel: 1,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      IsWedding: true,
    },
    Range: 9,
    Hit: "Single",
    HitCount: 1,
    CastCancel: true,
    Duration1: 300000,
    FixedCastTime: 2000,
    CastTimeFlags: {
      IgnoreDex: true,
    },
    Requires: {
      SpCost: 1,
      SpRateCost: -10,
    },
    Status: "ProtectExp",
  },
  {
    Id: 409,
    Name: "WE_CALLPARENT",
    Description: "Call Parent",
    MaxLevel: 1,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      IsWedding: true,
    },
    Range: 9,
    Hit: "Single",
    HitCount: 1,
    SplashArea: 3,
    ActiveInstance: 1,
    CastCancel: true,
    Duration1: 20000,
    CastTimeFlags: {
      IgnoreDex: true,
    },
    Requires: {
      SpCost: 1,
    },
    Unit: {
      Id: "Callfamily",
      Range: -1,
      Interval: -1,
    },
  },
  {
    Id: 410,
    Name: "WE_CALLBABY",
    Description: "Call Baby",
    MaxLevel: 1,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      IsWedding: true,
    },
    Range: 9,
    Hit: "Single",
    HitCount: 1,
    SplashArea: 3,
    ActiveInstance: 1,
    CastCancel: true,
    Duration1: 20000,
    CastTimeFlags: {
      IgnoreDex: true,
    },
    Requires: {
      SpCost: 1,
    },
    Unit: {
      Id: "Callfamily",
      Range: -1,
      Interval: -1,
    },
  },
  {
    Id: 411,
    Name: "TK_RUN",
    Description: "Running",
    MaxLevel: 10,
    Type: "Misc",
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      Toggleable: true,
    },
    Hit: "Single",
    HitCount: 1,
    Knockback: 4,
    CastCancel: true,
    CastTime: [
      {
        Level: 1,
        Time: 3000,
      },
      {
        Level: 2,
        Time: 2500,
      },
      {
        Level: 3,
        Time: 2000,
      },
      {
        Level: 4,
        Time: 1500,
      },
      {
        Level: 5,
        Time: 1000,
      },
      {
        Level: 6,
        Time: 500,
      },
    ],
    AfterCastActDelay: 300,
    Duration1: 1000,
    Duration2: 150000,
    FixedCastTime: [
      {
        Level: 1,
        Time: 3000,
      },
      {
        Level: 2,
        Time: 2500,
      },
      {
        Level: 3,
        Time: 2000,
      },
      {
        Level: 4,
        Time: 1500,
      },
      {
        Level: 5,
        Time: 1000,
      },
      {
        Level: 6,
        Time: 500,
      },
      {
        Level: 7,
        Time: 0,
      },
      {
        Level: 8,
        Time: 0,
      },
      {
        Level: 9,
        Time: 0,
      },
      {
        Level: 10,
        Time: 0,
      },
    ],
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 100,
        },
        {
          Level: 2,
          Amount: 90,
        },
        {
          Level: 3,
          Amount: 80,
        },
        {
          Level: 4,
          Amount: 70,
        },
        {
          Level: 5,
          Amount: 60,
        },
        {
          Level: 6,
          Amount: 50,
        },
        {
          Level: 7,
          Amount: 40,
        },
        {
          Level: 8,
          Amount: 30,
        },
        {
          Level: 9,
          Amount: 20,
        },
        {
          Level: 10,
          Amount: 10,
        },
      ],
      State: "Move_Enable",
    },
    Status: "Run",
  },
  {
    Id: 412,
    Name: "TK_READYSTORM",
    Description: "Tornado Stance",
    MaxLevel: 1,
    Type: "Weapon",
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      Toggleable: true,
    },
    Hit: "Single",
    HitCount: 1,
    Requires: {
      SpCost: 1,
    },
    Status: "ReadyStorm",
  },
  {
    Id: 413,
    Name: "TK_STORMKICK",
    Description: "Tornado Kick",
    MaxLevel: 7,
    Type: "Weapon",
    TargetType: "Self",
    DamageFlags: {
      Splash: true,
    },
    Flags: {
      NoTargetSelf: true,
      TargetTrap: true,
    },
    Range: -2,
    Hit: "Multi_Hit",
    HitCount: -3,
    Element: "Weapon",
    SplashArea: 2,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 14,
        },
        {
          Level: 2,
          Amount: 12,
        },
        {
          Level: 3,
          Amount: 10,
        },
        {
          Level: 4,
          Amount: 8,
        },
        {
          Level: 5,
          Amount: 6,
        },
        {
          Level: 6,
          Amount: 4,
        },
        {
          Level: 7,
          Amount: 2,
        },
      ],
    },
  },
  {
    Id: 414,
    Name: "TK_READYDOWN",
    Description: "Heel Drop Stance",
    MaxLevel: 1,
    Type: "Weapon",
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      Toggleable: true,
    },
    Hit: "Single",
    HitCount: 1,
    Requires: {
      SpCost: 1,
    },
    Status: "ReadyDown",
  },
  {
    Id: 415,
    Name: "TK_DOWNKICK",
    Description: "Heel Drop",
    MaxLevel: 7,
    Type: "Weapon",
    TargetType: "Self",
    Flags: {
      NoTargetSelf: true,
    },
    Range: -2,
    Hit: "Multi_Hit",
    HitCount: -3,
    Element: "Weapon",
    Duration2: 2500,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 14,
        },
        {
          Level: 2,
          Amount: 12,
        },
        {
          Level: 3,
          Amount: 10,
        },
        {
          Level: 4,
          Amount: 8,
        },
        {
          Level: 5,
          Amount: 6,
        },
        {
          Level: 6,
          Amount: 4,
        },
        {
          Level: 7,
          Amount: 2,
        },
      ],
    },
    Status: "Stun",
  },
  {
    Id: 416,
    Name: "TK_READYTURN",
    Description: "Roundhouse Stance",
    MaxLevel: 1,
    Type: "Weapon",
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      Toggleable: true,
    },
    Hit: "Single",
    HitCount: 1,
    Requires: {
      SpCost: 1,
    },
    Status: "ReadyTurn",
  },
  {
    Id: 417,
    Name: "TK_TURNKICK",
    Description: "Roundhouse Kick",
    MaxLevel: 7,
    Type: "Weapon",
    TargetType: "Self",
    DamageFlags: {
      Splash: true,
    },
    Flags: {
      NoTargetSelf: true,
    },
    Range: -2,
    Hit: "Multi_Hit",
    HitCount: -3,
    Element: "Weapon",
    SplashArea: 1,
    Knockback: 2,
    Duration2: 2000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 14,
        },
        {
          Level: 2,
          Amount: 12,
        },
        {
          Level: 3,
          Amount: 10,
        },
        {
          Level: 4,
          Amount: 8,
        },
        {
          Level: 5,
          Amount: 6,
        },
        {
          Level: 6,
          Amount: 4,
        },
        {
          Level: 7,
          Amount: 2,
        },
      ],
    },
  },
  {
    Id: 418,
    Name: "TK_READYCOUNTER",
    Description: "Counter Kick Stance",
    MaxLevel: 1,
    Type: "Weapon",
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      Toggleable: true,
    },
    Hit: "Single",
    HitCount: 1,
    Requires: {
      SpCost: 1,
    },
    Status: "ReadyCounter",
  },
  {
    Id: 419,
    Name: "TK_COUNTER",
    Description: "Counter Kick",
    MaxLevel: 7,
    Type: "Weapon",
    TargetType: "Self",
    DamageFlags: {
      IgnoreFlee: true,
    },
    Flags: {
      NoTargetSelf: true,
    },
    Range: -2,
    Hit: "Multi_Hit",
    HitCount: -3,
    Element: "Weapon",
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 14,
        },
        {
          Level: 2,
          Amount: 12,
        },
        {
          Level: 3,
          Amount: 10,
        },
        {
          Level: 4,
          Amount: 8,
        },
        {
          Level: 5,
          Amount: 6,
        },
        {
          Level: 6,
          Amount: 4,
        },
        {
          Level: 7,
          Amount: 2,
        },
      ],
    },
  },
  {
    Id: 420,
    Name: "TK_DODGE",
    Description: "Tumbling",
    MaxLevel: 1,
    Type: "Weapon",
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Hit: "Single",
    HitCount: 1,
    Requires: {
      SpCost: 1,
    },
    Status: "Dodge",
  },
  {
    Id: 421,
    Name: "TK_JUMPKICK",
    Description: "Flying Kick",
    MaxLevel: 7,
    Type: "Weapon",
    TargetType: "Support",
    DamageFlags: {
      NoDamage: true,
    },
    Range: 9,
    Hit: "Multi_Hit",
    HitCount: -3,
    Element: "Weapon",
    CopyFlags: {
      Skill: {
        Plagiarism: true,
        Reproduce: true,
      },
    },
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 70,
        },
        {
          Level: 2,
          Amount: 60,
        },
        {
          Level: 3,
          Amount: 50,
        },
        {
          Level: 4,
          Amount: 40,
        },
        {
          Level: 5,
          Amount: 30,
        },
        {
          Level: 6,
          Amount: 20,
        },
        {
          Level: 7,
          Amount: 10,
        },
      ],
    },
  },
  {
    Id: 422,
    Name: "TK_HPTIME",
    Description: "Peaceful Break",
    MaxLevel: 10,
    SplashArea: 1,
  },
  {
    Id: 423,
    Name: "TK_SPTIME",
    Description: "Happy Break",
    MaxLevel: 10,
    SplashArea: 1,
    Duration1: 1800000,
    Status: "EarthScroll",
  },
  {
    Id: 424,
    Name: "TK_POWER",
    Description: "Kihop",
    MaxLevel: 5,
    Type: "Weapon",
  },
  {
    Id: 425,
    Name: "TK_SEVENWIND",
    Description: "Mild Wind",
    MaxLevel: 7,
    Type: "Weapon",
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Hit: "Single",
    HitCount: 1,
    Element: [
      {
        Level: 1,
        Element: "Earth",
      },
      {
        Level: 2,
        Element: "Wind",
      },
      {
        Level: 3,
        Element: "Water",
      },
      {
        Level: 4,
        Element: "Fire",
      },
      {
        Level: 5,
        Element: "Ghost",
      },
      {
        Level: 6,
        Element: "Dark",
      },
      {
        Level: 7,
        Element: "Holy",
      },
    ],
    Duration1: 300000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 20,
        },
        {
          Level: 2,
          Amount: 20,
        },
        {
          Level: 3,
          Amount: 20,
        },
        {
          Level: 4,
          Amount: 20,
        },
        {
          Level: 5,
          Amount: 50,
        },
        {
          Level: 6,
          Amount: 50,
        },
        {
          Level: 7,
          Amount: 50,
        },
      ],
    },
    Status: "SevenWind",
  },
  {
    Id: 426,
    Name: "TK_HIGHJUMP",
    Description: "Taekwon Jump",
    MaxLevel: 5,
    Type: "Weapon",
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Hit: "Single",
    HitCount: 1,
    CastTime: [
      {
        Level: 1,
        Time: 2500,
      },
      {
        Level: 2,
        Time: 2000,
      },
      {
        Level: 3,
        Time: 1500,
      },
      {
        Level: 4,
        Time: 1000,
      },
      {
        Level: 5,
        Time: 500,
      },
    ],
    FixedCastTime: [
      {
        Level: 1,
        Time: 2500,
      },
      {
        Level: 2,
        Time: 2000,
      },
      {
        Level: 3,
        Time: 1500,
      },
      {
        Level: 4,
        Time: 1000,
      },
      {
        Level: 5,
        Time: 500,
      },
    ],
    Requires: {
      SpCost: 50,
    },
  },
  {
    Id: 427,
    Name: "SG_FEEL",
    Description: "Feeling the Sun Moon and Stars",
    MaxLevel: 3,
    Type: "Magic",
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Hit: "Single",
    HitCount: 1,
    CastCancel: true,
    FixedCastTime: 3000,
    Requires: {
      SpCost: 100,
    },
  },
  {
    Id: 428,
    Name: "SG_SUN_WARM",
    Description: "Warmth of the Sun",
    MaxLevel: 3,
    Type: "Weapon",
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
      Splash: true,
    },
    Flags: {
      IgnoreLandProtector: true,
    },
    Range: 1,
    Hit: "Single",
    HitCount: 1,
    Element: "Weapon",
    SplashArea: 1,
    Knockback: 2,
    CastCancel: true,
    Duration1: [
      {
        Level: 1,
        Time: 10000,
      },
      {
        Level: 2,
        Time: 20000,
      },
      {
        Level: 3,
        Time: 60000,
      },
    ],
    Requires: {
      SpCost: 20,
    },
    Unit: {
      Id: "Dummyskill",
      Range: 1,
      Interval: 100,
      Target: "Enemy",
    },
    Status: "Warm",
  },
  {
    Id: 429,
    Name: "SG_MOON_WARM",
    Description: "Warmth of the Moon",
    MaxLevel: 3,
    Type: "Weapon",
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
      Splash: true,
    },
    Flags: {
      IgnoreLandProtector: true,
    },
    Range: 1,
    Hit: "Single",
    HitCount: 1,
    Element: "Weapon",
    SplashArea: 1,
    Knockback: 2,
    CastCancel: true,
    Duration1: [
      {
        Level: 1,
        Time: 10000,
      },
      {
        Level: 2,
        Time: 20000,
      },
      {
        Level: 3,
        Time: 60000,
      },
    ],
    Requires: {
      SpCost: 20,
    },
    Unit: {
      Id: "Dummyskill",
      Range: 1,
      Interval: 100,
      Target: "Enemy",
    },
    Status: "Warm",
  },
  {
    Id: 430,
    Name: "SG_STAR_WARM",
    Description: "Warmth of the Stars",
    MaxLevel: 3,
    Type: "Weapon",
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
      Splash: true,
    },
    Flags: {
      IgnoreLandProtector: true,
    },
    Range: 1,
    Hit: "Single",
    HitCount: 1,
    Element: "Weapon",
    SplashArea: 1,
    Knockback: 2,
    CastCancel: true,
    Duration1: [
      {
        Level: 1,
        Time: 10000,
      },
      {
        Level: 2,
        Time: 20000,
      },
      {
        Level: 3,
        Time: 60000,
      },
    ],
    Requires: {
      SpCost: 10,
    },
    Unit: {
      Id: "Dummyskill",
      Range: 1,
      Interval: 100,
      Target: "Enemy",
    },
    Status: "Warm",
  },
  {
    Id: 431,
    Name: "SG_SUN_COMFORT",
    Description: "Comfort of the Sun",
    MaxLevel: 4,
    Type: "Magic",
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    HitCount: 1,
    CastCancel: true,
    Duration1: [
      {
        Level: 1,
        Time: 80000,
      },
      {
        Level: 2,
        Time: 160000,
      },
      {
        Level: 3,
        Time: 240000,
      },
      {
        Level: 4,
        Time: 320000,
      },
    ],
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 70,
        },
        {
          Level: 2,
          Amount: 60,
        },
        {
          Level: 3,
          Amount: 50,
        },
        {
          Level: 4,
          Amount: 40,
        },
      ],
    },
    Status: "Sun_Comfort",
  },
  {
    Id: 432,
    Name: "SG_MOON_COMFORT",
    Description: "Comfort of the Moon",
    MaxLevel: 4,
    Type: "Magic",
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    HitCount: 1,
    CastCancel: true,
    Duration1: [
      {
        Level: 1,
        Time: 80000,
      },
      {
        Level: 2,
        Time: 160000,
      },
      {
        Level: 3,
        Time: 240000,
      },
      {
        Level: 4,
        Time: 320000,
      },
    ],
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 70,
        },
        {
          Level: 2,
          Amount: 60,
        },
        {
          Level: 3,
          Amount: 50,
        },
        {
          Level: 4,
          Amount: 40,
        },
      ],
    },
    Status: "Moon_Comfort",
  },
  {
    Id: 433,
    Name: "SG_STAR_COMFORT",
    Description: "Comfort of the Stars",
    MaxLevel: 4,
    Type: "Magic",
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    HitCount: 1,
    CastCancel: true,
    Duration1: [
      {
        Level: 1,
        Time: 80000,
      },
      {
        Level: 2,
        Time: 160000,
      },
      {
        Level: 3,
        Time: 240000,
      },
      {
        Level: 4,
        Time: 320000,
      },
    ],
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 70,
        },
        {
          Level: 2,
          Amount: 60,
        },
        {
          Level: 3,
          Amount: 50,
        },
        {
          Level: 4,
          Amount: 40,
        },
      ],
    },
    Status: "Star_Comfort",
  },
  {
    Id: 434,
    Name: "SG_HATE",
    Description: "Hatred of the Sun Moon and Stars",
    MaxLevel: 3,
    Type: "Magic",
    TargetType: "Attack",
    DamageFlags: {
      NoDamage: true,
    },
    Range: 9,
    Hit: "Single",
    HitCount: 1,
    CastCancel: true,
    FixedCastTime: 3000,
    Requires: {
      SpCost: 100,
    },
  },
  {
    Id: 435,
    Name: "SG_SUN_ANGER",
    Description: "Anger of the Sun",
    MaxLevel: 3,
  },
  {
    Id: 436,
    Name: "SG_MOON_ANGER",
    Description: "Anger of the Moon",
    MaxLevel: 3,
  },
  {
    Id: 437,
    Name: "SG_STAR_ANGER",
    Description: "Anger of the Stars",
    MaxLevel: 3,
  },
  {
    Id: 438,
    Name: "SG_SUN_BLESS",
    Description: "Blessing of the Sun",
    MaxLevel: 5,
  },
  {
    Id: 439,
    Name: "SG_MOON_BLESS",
    Description: "Blessing of the Moon",
    MaxLevel: 5,
  },
  {
    Id: 440,
    Name: "SG_STAR_BLESS",
    Description: "Blessing of the Stars",
    MaxLevel: 5,
  },
  {
    Id: 441,
    Name: "SG_DEVIL",
    Description: "Demon of the Sun Moon and Stars",
    MaxLevel: 10,
  },
  {
    Id: 442,
    Name: "SG_FRIEND",
    Description: "Friend of the Sun Moon and Stars",
    MaxLevel: 3,
    Duration1: 10000,
    Status: "SkillRate_Up",
  },
  {
    Id: 443,
    Name: "SG_KNOWLEDGE",
    Description: "Knowledge of the Sun Moon and Stars",
    MaxLevel: 10,
    Duration1: 600000,
    Status: "Knowledge",
  },
  {
    Id: 444,
    Name: "SG_FUSION",
    Description: "Union of the Sun Moon and Stars",
    MaxLevel: 1,
    Type: "Misc",
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      Toggleable: true,
    },
    Hit: "Single",
    HitCount: 1,
    Duration1: 600000,
    Requires: {
      SpCost: 100,
    },
    Status: "Fusion",
  },
  {
    Id: 445,
    Name: "SL_ALCHEMIST",
    Description: "Spirit of the Alchemist",
    MaxLevel: 5,
    Type: "Magic",
    TargetType: "Support",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      NoTargetSelf: true,
    },
    Range: 9,
    Hit: "Single",
    HitCount: 1,
    CastCancel: true,
    Duration1: [
      {
        Level: 1,
        Time: 150000,
      },
      {
        Level: 2,
        Time: 200000,
      },
      {
        Level: 3,
        Time: 250000,
      },
      {
        Level: 4,
        Time: 300000,
      },
      {
        Level: 5,
        Time: 350000,
      },
    ],
    FixedCastTime: 1000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 460,
        },
        {
          Level: 2,
          Amount: 360,
        },
        {
          Level: 3,
          Amount: 260,
        },
        {
          Level: 4,
          Amount: 160,
        },
        {
          Level: 5,
          Amount: 60,
        },
      ],
    },
    Status: "Spirit",
  },
  {
    Id: 446,
    Name: "AM_BERSERKPITCHER",
    Description: "Aid Berserk Potion",
    MaxLevel: 1,
    TargetType: "Support",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      IsSpirit: true,
      PartyOnly: true,
      GuildOnly: true,
    },
    Range: 9,
    Hit: "Single",
    HitCount: 1,
    CastCancel: true,
    FixedCastTime: 1000,
    Requires: {
      SpCost: 10,
      SpRateCost: 8,
      ItemCost: [
        {
          Item: "Berserk_Potion",
          Amount: 2,
        },
      ],
    },
  },
  {
    Id: 447,
    Name: "SL_MONK",
    Description: "Spirit of the Monk",
    MaxLevel: 5,
    Type: "Magic",
    TargetType: "Support",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      NoTargetSelf: true,
    },
    Range: 9,
    Hit: "Single",
    HitCount: 1,
    CastCancel: true,
    Duration1: [
      {
        Level: 1,
        Time: 150000,
      },
      {
        Level: 2,
        Time: 200000,
      },
      {
        Level: 3,
        Time: 250000,
      },
      {
        Level: 4,
        Time: 300000,
      },
      {
        Level: 5,
        Time: 350000,
      },
    ],
    FixedCastTime: 1000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 460,
        },
        {
          Level: 2,
          Amount: 360,
        },
        {
          Level: 3,
          Amount: 260,
        },
        {
          Level: 4,
          Amount: 160,
        },
        {
          Level: 5,
          Amount: 60,
        },
      ],
    },
    Status: "Spirit",
  },
  {
    Id: 448,
    Name: "SL_STAR",
    Description: "Spirit of the Star Gladiator",
    MaxLevel: 5,
    Type: "Magic",
    TargetType: "Support",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      NoTargetSelf: true,
    },
    Range: 9,
    Hit: "Single",
    HitCount: 1,
    CastCancel: true,
    CastTime: 800,
    Duration1: [
      {
        Level: 1,
        Time: 150000,
      },
      {
        Level: 2,
        Time: 200000,
      },
      {
        Level: 3,
        Time: 250000,
      },
      {
        Level: 4,
        Time: 300000,
      },
      {
        Level: 5,
        Time: 350000,
      },
    ],
    FixedCastTime: 200,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 460,
        },
        {
          Level: 2,
          Amount: 360,
        },
        {
          Level: 3,
          Amount: 260,
        },
        {
          Level: 4,
          Amount: 160,
        },
        {
          Level: 5,
          Amount: 60,
        },
      ],
    },
    Status: "Spirit",
  },
  {
    Id: 449,
    Name: "SL_SAGE",
    Description: "Spirit of the Sage",
    MaxLevel: 5,
    Type: "Magic",
    TargetType: "Support",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      NoTargetSelf: true,
    },
    Range: 9,
    Hit: "Single",
    HitCount: 1,
    CastCancel: true,
    Duration1: [
      {
        Level: 1,
        Time: 150000,
      },
      {
        Level: 2,
        Time: 200000,
      },
      {
        Level: 3,
        Time: 250000,
      },
      {
        Level: 4,
        Time: 300000,
      },
      {
        Level: 5,
        Time: 350000,
      },
    ],
    FixedCastTime: 1000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 460,
        },
        {
          Level: 2,
          Amount: 360,
        },
        {
          Level: 3,
          Amount: 260,
        },
        {
          Level: 4,
          Amount: 160,
        },
        {
          Level: 5,
          Amount: 60,
        },
      ],
    },
    Status: "Spirit",
  },
  {
    Id: 450,
    Name: "SL_CRUSADER",
    Description: "Spirit of the Crusader",
    MaxLevel: 5,
    Type: "Magic",
    TargetType: "Support",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      NoTargetSelf: true,
    },
    Range: 9,
    Hit: "Single",
    HitCount: 1,
    CastCancel: true,
    Duration1: [
      {
        Level: 1,
        Time: 150000,
      },
      {
        Level: 2,
        Time: 200000,
      },
      {
        Level: 3,
        Time: 250000,
      },
      {
        Level: 4,
        Time: 300000,
      },
      {
        Level: 5,
        Time: 350000,
      },
    ],
    FixedCastTime: 1000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 460,
        },
        {
          Level: 2,
          Amount: 360,
        },
        {
          Level: 3,
          Amount: 260,
        },
        {
          Level: 4,
          Amount: 160,
        },
        {
          Level: 5,
          Amount: 60,
        },
      ],
    },
    Status: "Spirit",
  },
  {
    Id: 451,
    Name: "SL_SUPERNOVICE",
    Description: "Spirit of the Supernovice",
    MaxLevel: 5,
    Type: "Magic",
    TargetType: "Support",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      NoTargetSelf: true,
    },
    Range: 9,
    Hit: "Single",
    HitCount: 1,
    CastCancel: true,
    Duration1: [
      {
        Level: 1,
        Time: 150000,
      },
      {
        Level: 2,
        Time: 200000,
      },
      {
        Level: 3,
        Time: 250000,
      },
      {
        Level: 4,
        Time: 300000,
      },
      {
        Level: 5,
        Time: 350000,
      },
    ],
    FixedCastTime: 1000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 460,
        },
        {
          Level: 2,
          Amount: 360,
        },
        {
          Level: 3,
          Amount: 260,
        },
        {
          Level: 4,
          Amount: 160,
        },
        {
          Level: 5,
          Amount: 60,
        },
      ],
    },
    Status: "Spirit",
  },
  {
    Id: 452,
    Name: "SL_KNIGHT",
    Description: "Spirit of the Knight",
    MaxLevel: 5,
    Type: "Magic",
    TargetType: "Support",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      NoTargetSelf: true,
    },
    Range: 9,
    Hit: "Single",
    HitCount: 1,
    CastCancel: true,
    Duration1: [
      {
        Level: 1,
        Time: 150000,
      },
      {
        Level: 2,
        Time: 200000,
      },
      {
        Level: 3,
        Time: 250000,
      },
      {
        Level: 4,
        Time: 300000,
      },
      {
        Level: 5,
        Time: 350000,
      },
    ],
    FixedCastTime: 1000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 460,
        },
        {
          Level: 2,
          Amount: 360,
        },
        {
          Level: 3,
          Amount: 260,
        },
        {
          Level: 4,
          Amount: 160,
        },
        {
          Level: 5,
          Amount: 60,
        },
      ],
    },
    Status: "Spirit",
  },
  {
    Id: 453,
    Name: "SL_WIZARD",
    Description: "Spirit of the Wizard",
    MaxLevel: 5,
    Type: "Magic",
    TargetType: "Support",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      NoTargetSelf: true,
    },
    Range: 9,
    Hit: "Single",
    HitCount: 1,
    CastCancel: true,
    Duration1: [
      {
        Level: 1,
        Time: 150000,
      },
      {
        Level: 2,
        Time: 200000,
      },
      {
        Level: 3,
        Time: 250000,
      },
      {
        Level: 4,
        Time: 300000,
      },
      {
        Level: 5,
        Time: 350000,
      },
    ],
    FixedCastTime: 1000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 460,
        },
        {
          Level: 2,
          Amount: 360,
        },
        {
          Level: 3,
          Amount: 260,
        },
        {
          Level: 4,
          Amount: 160,
        },
        {
          Level: 5,
          Amount: 60,
        },
      ],
    },
    Status: "Spirit",
  },
  {
    Id: 454,
    Name: "SL_PRIEST",
    Description: "Spirit of the Priest",
    MaxLevel: 5,
    Type: "Magic",
    TargetType: "Support",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      NoTargetSelf: true,
    },
    Range: 9,
    Hit: "Single",
    HitCount: 1,
    CastCancel: true,
    Duration1: [
      {
        Level: 1,
        Time: 150000,
      },
      {
        Level: 2,
        Time: 200000,
      },
      {
        Level: 3,
        Time: 250000,
      },
      {
        Level: 4,
        Time: 300000,
      },
      {
        Level: 5,
        Time: 350000,
      },
    ],
    FixedCastTime: 1000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 460,
        },
        {
          Level: 2,
          Amount: 360,
        },
        {
          Level: 3,
          Amount: 260,
        },
        {
          Level: 4,
          Amount: 160,
        },
        {
          Level: 5,
          Amount: 60,
        },
      ],
    },
    Status: "Spirit",
  },
  {
    Id: 455,
    Name: "SL_BARDDANCER",
    Description: "Spirit of the Artist",
    MaxLevel: 5,
    Type: "Magic",
    TargetType: "Support",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      NoTargetSelf: true,
    },
    Range: 9,
    Hit: "Single",
    HitCount: 1,
    CastCancel: true,
    Duration1: [
      {
        Level: 1,
        Time: 150000,
      },
      {
        Level: 2,
        Time: 200000,
      },
      {
        Level: 3,
        Time: 250000,
      },
      {
        Level: 4,
        Time: 300000,
      },
      {
        Level: 5,
        Time: 350000,
      },
    ],
    FixedCastTime: 1000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 460,
        },
        {
          Level: 2,
          Amount: 360,
        },
        {
          Level: 3,
          Amount: 260,
        },
        {
          Level: 4,
          Amount: 160,
        },
        {
          Level: 5,
          Amount: 60,
        },
      ],
    },
    Status: "Spirit",
  },
  {
    Id: 456,
    Name: "SL_ROGUE",
    Description: "Spirit of the Rogue",
    MaxLevel: 5,
    Type: "Magic",
    TargetType: "Support",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      NoTargetSelf: true,
    },
    Range: 9,
    Hit: "Single",
    HitCount: 1,
    CastCancel: true,
    Duration1: [
      {
        Level: 1,
        Time: 150000,
      },
      {
        Level: 2,
        Time: 200000,
      },
      {
        Level: 3,
        Time: 250000,
      },
      {
        Level: 4,
        Time: 300000,
      },
      {
        Level: 5,
        Time: 350000,
      },
    ],
    FixedCastTime: 1000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 460,
        },
        {
          Level: 2,
          Amount: 360,
        },
        {
          Level: 3,
          Amount: 260,
        },
        {
          Level: 4,
          Amount: 160,
        },
        {
          Level: 5,
          Amount: 60,
        },
      ],
    },
    Status: "Spirit",
  },
  {
    Id: 457,
    Name: "SL_ASSASIN",
    Description: "Spirit of the Assasin",
    MaxLevel: 5,
    Type: "Magic",
    TargetType: "Support",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      NoTargetSelf: true,
    },
    Range: 9,
    Hit: "Single",
    HitCount: 1,
    CastCancel: true,
    Duration1: [
      {
        Level: 1,
        Time: 150000,
      },
      {
        Level: 2,
        Time: 200000,
      },
      {
        Level: 3,
        Time: 250000,
      },
      {
        Level: 4,
        Time: 300000,
      },
      {
        Level: 5,
        Time: 350000,
      },
    ],
    FixedCastTime: 1000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 460,
        },
        {
          Level: 2,
          Amount: 360,
        },
        {
          Level: 3,
          Amount: 260,
        },
        {
          Level: 4,
          Amount: 160,
        },
        {
          Level: 5,
          Amount: 60,
        },
      ],
    },
    Status: "Spirit",
  },
  {
    Id: 458,
    Name: "SL_BLACKSMITH",
    Description: "Spirit of the Blacksmith",
    MaxLevel: 5,
    Type: "Magic",
    TargetType: "Support",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      NoTargetSelf: true,
    },
    Range: 9,
    Hit: "Single",
    HitCount: 1,
    CastCancel: true,
    Duration1: [
      {
        Level: 1,
        Time: 150000,
      },
      {
        Level: 2,
        Time: 200000,
      },
      {
        Level: 3,
        Time: 250000,
      },
      {
        Level: 4,
        Time: 300000,
      },
      {
        Level: 5,
        Time: 350000,
      },
    ],
    FixedCastTime: 1000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 460,
        },
        {
          Level: 2,
          Amount: 360,
        },
        {
          Level: 3,
          Amount: 260,
        },
        {
          Level: 4,
          Amount: 160,
        },
        {
          Level: 5,
          Amount: 60,
        },
      ],
    },
    Status: "Spirit",
  },
  {
    Id: 459,
    Name: "BS_ADRENALINE2",
    Description: "Advanced Adrenaline Rush",
    MaxLevel: 1,
    Type: "Weapon",
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
      Splash: true,
    },
    Flags: {
      IsSpirit: true,
      AllowOnMado: true,
    },
    Hit: "Single",
    HitCount: 1,
    SplashArea: -1,
    Duration1: 150000,
    Requires: {
      SpCost: 64,
      Weapon: {
        Fist: true,
        Dagger: true,
        "1hSword": true,
        "2hSword": true,
        "1hSpear": true,
        "2hSpear": true,
        "1hAxe": true,
        "2hAxe": true,
        Mace: true,
        "2hMace": true,
        Staff: true,
        Knuckle: true,
        Musical: true,
        Whip: true,
        Book: true,
        Katar: true,
      },
    },
    Status: "Adrenaline2",
  },
  {
    Id: 460,
    Name: "SL_HUNTER",
    Description: "Spirit of the Hunter",
    MaxLevel: 5,
    Type: "Magic",
    TargetType: "Support",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      NoTargetSelf: true,
    },
    Range: 9,
    Hit: "Single",
    HitCount: 1,
    CastCancel: true,
    Duration1: [
      {
        Level: 1,
        Time: 150000,
      },
      {
        Level: 2,
        Time: 200000,
      },
      {
        Level: 3,
        Time: 250000,
      },
      {
        Level: 4,
        Time: 300000,
      },
      {
        Level: 5,
        Time: 350000,
      },
    ],
    FixedCastTime: 1000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 460,
        },
        {
          Level: 2,
          Amount: 360,
        },
        {
          Level: 3,
          Amount: 260,
        },
        {
          Level: 4,
          Amount: 160,
        },
        {
          Level: 5,
          Amount: 60,
        },
      ],
    },
    Status: "Spirit",
  },
  {
    Id: 461,
    Name: "SL_SOULLINKER",
    Description: "Spirit of the Soul Linker",
    MaxLevel: 5,
    Type: "Magic",
    TargetType: "Support",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      NoTargetSelf: true,
    },
    Range: 9,
    Hit: "Single",
    HitCount: 1,
    CastCancel: true,
    Duration1: [
      {
        Level: 1,
        Time: 150000,
      },
      {
        Level: 2,
        Time: 200000,
      },
      {
        Level: 3,
        Time: 250000,
      },
      {
        Level: 4,
        Time: 300000,
      },
      {
        Level: 5,
        Time: 350000,
      },
    ],
    FixedCastTime: 1000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 460,
        },
        {
          Level: 2,
          Amount: 360,
        },
        {
          Level: 3,
          Amount: 260,
        },
        {
          Level: 4,
          Amount: 160,
        },
        {
          Level: 5,
          Amount: 60,
        },
      ],
    },
    Status: "Spirit",
  },
  {
    Id: 462,
    Name: "SL_KAIZEL",
    Description: "Kaizel",
    MaxLevel: 7,
    Type: "Magic",
    TargetType: "Support",
    DamageFlags: {
      NoDamage: true,
    },
    Range: 9,
    Hit: "Single",
    HitCount: 1,
    CastCancel: true,
    CastTime: [
      {
        Level: 1,
        Time: 3600,
      },
      {
        Level: 2,
        Time: 3200,
      },
      {
        Level: 3,
        Time: 2800,
      },
      {
        Level: 4,
        Time: 2400,
      },
      {
        Level: 5,
        Time: 2000,
      },
    ],
    Duration1: 1800000,
    Duration2: 2000,
    FixedCastTime: [
      {
        Level: 1,
        Time: 900,
      },
      {
        Level: 2,
        Time: 800,
      },
      {
        Level: 3,
        Time: 700,
      },
      {
        Level: 4,
        Time: 600,
      },
      {
        Level: 5,
        Time: 500,
      },
    ],
    CastTimeFlags: {
      IgnoreDex: true,
    },
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 120,
        },
        {
          Level: 2,
          Amount: 110,
        },
        {
          Level: 3,
          Amount: 100,
        },
        {
          Level: 4,
          Amount: 90,
        },
        {
          Level: 5,
          Amount: 80,
        },
        {
          Level: 6,
          Amount: 70,
        },
        {
          Level: 7,
          Amount: 60,
        },
      ],
    },
    Status: "Kaizel",
  },
  {
    Id: 463,
    Name: "SL_KAAHI",
    Description: "Kaahi",
    MaxLevel: 7,
    Type: "Magic",
    TargetType: "Support",
    DamageFlags: {
      NoDamage: true,
    },
    Range: 9,
    Hit: "Single",
    HitCount: 1,
    CastCancel: true,
    Duration1: 350000,
    Requires: {
      SpCost: 30,
    },
    Status: "Kaahi",
  },
  {
    Id: 464,
    Name: "SL_KAUPE",
    Description: "Kaupe",
    MaxLevel: 3,
    Type: "Magic",
    TargetType: "Support",
    DamageFlags: {
      NoDamage: true,
    },
    Range: 9,
    Hit: "Single",
    HitCount: 1,
    CastCancel: true,
    CastTime: 400,
    Duration1: 600000,
    FixedCastTime: 100,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 20,
        },
        {
          Level: 2,
          Amount: 30,
        },
        {
          Level: 3,
          Amount: 40,
        },
      ],
    },
    Status: "Kaupe",
  },
  {
    Id: 465,
    Name: "SL_KAITE",
    Description: "Kaite",
    MaxLevel: 7,
    Type: "Magic",
    TargetType: "Support",
    DamageFlags: {
      NoDamage: true,
    },
    Range: 9,
    Hit: "Single",
    HitCount: 1,
    CastCancel: true,
    CastTime: [
      {
        Level: 1,
        Time: 4800,
      },
      {
        Level: 2,
        Time: 4400,
      },
      {
        Level: 3,
        Time: 4000,
      },
      {
        Level: 4,
        Time: 3600,
      },
      {
        Level: 5,
        Time: 3200,
      },
      {
        Level: 6,
        Time: 2800,
      },
      {
        Level: 7,
        Time: 2400,
      },
    ],
    Duration1: [
      {
        Level: 1,
        Time: 60000,
      },
      {
        Level: 2,
        Time: 120000,
      },
      {
        Level: 3,
        Time: 180000,
      },
      {
        Level: 4,
        Time: 240000,
      },
      {
        Level: 5,
        Time: 300000,
      },
      {
        Level: 6,
        Time: 360000,
      },
      {
        Level: 7,
        Time: 600000,
      },
    ],
    FixedCastTime: [
      {
        Level: 1,
        Time: 1200,
      },
      {
        Level: 2,
        Time: 1100,
      },
      {
        Level: 3,
        Time: 1000,
      },
      {
        Level: 4,
        Time: 900,
      },
      {
        Level: 5,
        Time: 800,
      },
      {
        Level: 6,
        Time: 700,
      },
      {
        Level: 7,
        Time: 600,
      },
    ],
    Requires: {
      SpCost: 70,
    },
    Status: "Kaite",
  },
  {
    Id: 466,
    Name: "SL_KAINA",
    Description: "Kaina",
    MaxLevel: 7,
    Type: "Magic",
    CastCancel: true,
  },
  {
    Id: 467,
    Name: "SL_STIN",
    Description: "Estin",
    MaxLevel: 7,
    Type: "Magic",
    TargetType: "Attack",
    Range: 9,
    Hit: "Single",
    HitCount: 1,
    Element: "Endowed",
    Knockback: 2,
    CastTime: 80,
    AfterCastActDelay: 500,
    FixedCastTime: 20,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 18,
        },
        {
          Level: 2,
          Amount: 20,
        },
        {
          Level: 3,
          Amount: 22,
        },
        {
          Level: 4,
          Amount: 24,
        },
        {
          Level: 5,
          Amount: 26,
        },
        {
          Level: 6,
          Amount: 28,
        },
        {
          Level: 7,
          Amount: 30,
        },
      ],
    },
  },
  {
    Id: 468,
    Name: "SL_STUN",
    Description: "Estun",
    MaxLevel: 7,
    Type: "Magic",
    TargetType: "Attack",
    Range: 9,
    Hit: "Single",
    HitCount: 1,
    Element: "Endowed",
    CastTime: 80,
    AfterCastActDelay: 500,
    Duration1: 1500,
    FixedCastTime: 20,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 18,
        },
        {
          Level: 2,
          Amount: 20,
        },
        {
          Level: 3,
          Amount: 22,
        },
        {
          Level: 4,
          Amount: 24,
        },
        {
          Level: 5,
          Amount: 26,
        },
        {
          Level: 6,
          Amount: 28,
        },
        {
          Level: 7,
          Amount: 30,
        },
      ],
    },
    Status: "Stun",
  },
  {
    Id: 469,
    Name: "SL_SMA",
    Description: "Esma",
    MaxLevel: 10,
    Type: "Magic",
    TargetType: "Attack",
    Range: 9,
    Hit: "Multi_Hit",
    HitCount: [
      {
        Level: 1,
        Count: 1,
      },
      {
        Level: 2,
        Count: 2,
      },
      {
        Level: 3,
        Count: 3,
      },
      {
        Level: 4,
        Count: 4,
      },
      {
        Level: 5,
        Count: 5,
      },
      {
        Level: 6,
        Count: 6,
      },
      {
        Level: 7,
        Count: 7,
      },
      {
        Level: 8,
        Count: 8,
      },
      {
        Level: 9,
        Count: 9,
      },
      {
        Level: 10,
        Count: 10,
      },
    ],
    Element: "Endowed",
    CastCancel: true,
    CastTime: 1600,
    AfterCastActDelay: 500,
    Duration1: 3000,
    FixedCastTime: 400,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 8,
        },
        {
          Level: 2,
          Amount: 16,
        },
        {
          Level: 3,
          Amount: 24,
        },
        {
          Level: 4,
          Amount: 32,
        },
        {
          Level: 5,
          Amount: 40,
        },
        {
          Level: 6,
          Amount: 48,
        },
        {
          Level: 7,
          Amount: 56,
        },
        {
          Level: 8,
          Amount: 64,
        },
        {
          Level: 9,
          Amount: 72,
        },
        {
          Level: 10,
          Amount: 80,
        },
      ],
    },
    Status: "Sma",
  },
  {
    Id: 470,
    Name: "SL_SWOO",
    Description: "Eswoo",
    MaxLevel: 7,
    Type: "Magic",
    TargetType: "Attack",
    DamageFlags: {
      NoDamage: true,
    },
    Range: 9,
    Hit: "Single",
    HitCount: 1,
    CastTime: 800,
    AfterCastActDelay: 500,
    Duration1: [
      {
        Level: 1,
        Time: 1000,
      },
      {
        Level: 2,
        Time: 2000,
      },
      {
        Level: 3,
        Time: 3000,
      },
      {
        Level: 4,
        Time: 4000,
      },
      {
        Level: 5,
        Time: 5000,
      },
      {
        Level: 6,
        Time: 6000,
      },
      {
        Level: 7,
        Time: 7000,
      },
    ],
    FixedCastTime: 200,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 75,
        },
        {
          Level: 2,
          Amount: 65,
        },
        {
          Level: 3,
          Amount: 55,
        },
        {
          Level: 4,
          Amount: 45,
        },
        {
          Level: 5,
          Amount: 35,
        },
        {
          Level: 6,
          Amount: 25,
        },
        {
          Level: 7,
          Amount: 15,
        },
      ],
    },
    Status: "Swoo",
  },
  {
    Id: 471,
    Name: "SL_SKE",
    Description: "Eske",
    MaxLevel: 3,
    Type: "Magic",
    TargetType: "Attack",
    DamageFlags: {
      NoDamage: true,
    },
    Range: 9,
    Hit: "Single",
    HitCount: 1,
    CastTime: [
      {
        Level: 1,
        Time: 2400,
      },
      {
        Level: 2,
        Time: 1600,
      },
      {
        Level: 3,
        Time: 800,
      },
    ],
    AfterCastActDelay: 500,
    Duration1: [
      {
        Level: 1,
        Time: 10000,
      },
      {
        Level: 2,
        Time: 20000,
      },
      {
        Level: 3,
        Time: 30000,
      },
    ],
    Duration2: 3000,
    FixedCastTime: [
      {
        Level: 1,
        Time: 600,
      },
      {
        Level: 2,
        Time: 400,
      },
      {
        Level: 3,
        Time: 200,
      },
    ],
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 45,
        },
        {
          Level: 2,
          Amount: 30,
        },
        {
          Level: 3,
          Amount: 15,
        },
      ],
    },
    Status: "Ske",
  },
  {
    Id: 472,
    Name: "SL_SKA",
    Description: "Eska",
    MaxLevel: 3,
    Type: "Magic",
    TargetType: "Attack",
    DamageFlags: {
      NoDamage: true,
    },
    Range: 9,
    Hit: "Single",
    HitCount: 1,
    CastTime: [
      {
        Level: 1,
        Time: 2400,
      },
      {
        Level: 2,
        Time: 1600,
      },
      {
        Level: 3,
        Time: 800,
      },
    ],
    AfterCastActDelay: 500,
    Duration1: [
      {
        Level: 1,
        Time: 10000,
      },
      {
        Level: 2,
        Time: 20000,
      },
      {
        Level: 3,
        Time: 30000,
      },
    ],
    FixedCastTime: [
      {
        Level: 1,
        Time: 600,
      },
      {
        Level: 2,
        Time: 400,
      },
      {
        Level: 3,
        Time: 200,
      },
    ],
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 100,
        },
        {
          Level: 2,
          Amount: 80,
        },
        {
          Level: 3,
          Amount: 60,
        },
      ],
    },
    Status: "Ska",
  },
  {
    Id: 473,
    Name: "SM_SELFPROVOKE",
    Description: "Provoke Self",
    MaxLevel: 1,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Hit: "Single",
    HitCount: 1,
    Duration1: 30000,
    Status: "Provoke",
  },
  {
    Id: 474,
    Name: "NPC_EMOTION_ON",
    Description: "Emotion ON",
    MaxLevel: 10,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      IsNpc: true,
    },
    HitCount: 1,
    Status: "ModeChange",
  },
  {
    Id: 475,
    Name: "ST_PRESERVE",
    Description: "Preserve",
    MaxLevel: 1,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    HitCount: 1,
    CastCancel: true,
    Duration1: 600000,
    FixedCastTime: 1000,
    Requires: {
      SpCost: 30,
    },
    Status: "Preserve",
  },
  {
    Id: 476,
    Name: "ST_FULLSTRIP",
    Description: "Divest All",
    MaxLevel: 5,
    Type: "Weapon",
    TargetType: "Attack",
    DamageFlags: {
      NoDamage: true,
    },
    Range: 1,
    Hit: "Single",
    HitCount: 1,
    CastCancel: true,
    AfterCastActDelay: 1000,
    Duration1: [
      {
        Level: 1,
        Time: 75000,
      },
      {
        Level: 2,
        Time: 90000,
      },
      {
        Level: 3,
        Time: 105000,
      },
      {
        Level: 4,
        Time: 120000,
      },
      {
        Level: 5,
        Time: 135000,
      },
    ],
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 22,
        },
        {
          Level: 2,
          Amount: 24,
        },
        {
          Level: 3,
          Amount: 26,
        },
        {
          Level: 4,
          Amount: 28,
        },
        {
          Level: 5,
          Amount: 30,
        },
      ],
    },
  },
  {
    Id: 477,
    Name: "WS_WEAPONREFINE",
    Description: "Upgrade Weapon",
    MaxLevel: 10,
    Type: "Weapon",
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      AllowOnMado: true,
    },
    Hit: "Single",
    HitCount: 1,
    Requires: {
      SpCost: 30,
    },
  },
  {
    Id: 478,
    Name: "CR_SLIMPITCHER",
    Description: "Aid Condensed Potion",
    MaxLevel: 10,
    TargetType: "Ground",
    DamageFlags: {
      NoDamage: true,
      Splash: true,
    },
    Range: 3,
    Hit: "Single",
    HitCount: 1,
    SplashArea: 3,
    CastTime: 1000,
    AfterCastActDelay: 1000,
    FixedCastTime: 1000,
    Requires: {
      SpCost: 30,
      ItemCost: [
        {
          Item: "Red_Slim_Potion",
          Amount: 1,
        },
        {
          Item: "Red_Slim_Potion",
          Amount: 1,
        },
        {
          Item: "Red_Slim_Potion",
          Amount: 1,
        },
        {
          Item: "Red_Slim_Potion",
          Amount: 1,
        },
        {
          Item: "Red_Slim_Potion",
          Amount: 1,
        },
        {
          Item: "Yellow_Slim_Potion",
          Amount: 1,
        },
        {
          Item: "Yellow_Slim_Potion",
          Amount: 1,
        },
        {
          Item: "Yellow_Slim_Potion",
          Amount: 1,
        },
        {
          Item: "Yellow_Slim_Potion",
          Amount: 1,
        },
        {
          Item: "White_Slim_Potion",
          Amount: 1,
        },
      ],
    },
  },
  {
    Id: 479,
    Name: "CR_FULLPROTECTION",
    Description: "Full Protection",
    MaxLevel: 5,
    Type: "Weapon",
    TargetType: "Support",
    DamageFlags: {
      NoDamage: true,
    },
    Range: 1,
    Hit: "Single",
    HitCount: 1,
    CastCancel: true,
    AfterCastActDelay: 500,
    Duration1: [
      {
        Level: 1,
        Time: 120000,
      },
      {
        Level: 2,
        Time: 240000,
      },
      {
        Level: 3,
        Time: 360000,
      },
      {
        Level: 4,
        Time: 480000,
      },
      {
        Level: 5,
        Time: 600000,
      },
    ],
    FixedCastTime: 1000,
    Requires: {
      SpCost: 40,
      ItemCost: [
        {
          Item: "Coating_Bottle",
          Amount: 1,
        },
      ],
    },
  },
  {
    Id: 480,
    Name: "PA_SHIELDCHAIN",
    Description: "Shield Chain",
    MaxLevel: 5,
    Type: "Weapon",
    TargetType: "Attack",
    Range: [
      {
        Level: 1,
        Size: 7,
      },
      {
        Level: 2,
        Size: 7,
      },
      {
        Level: 3,
        Size: 9,
      },
      {
        Level: 4,
        Size: 9,
      },
      {
        Level: 5,
        Size: 11,
      },
    ],
    Hit: "Multi_Hit",
    HitCount: 5,
    Element: "Weapon",
    CastTime: 800,
    AfterCastActDelay: 1000,
    FixedCastTime: 200,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 28,
        },
        {
          Level: 2,
          Amount: 31,
        },
        {
          Level: 3,
          Amount: 34,
        },
        {
          Level: 4,
          Amount: 37,
        },
        {
          Level: 5,
          Amount: 40,
        },
      ],
      State: "Shield",
    },
  },
  {
    Id: 481,
    Name: "HP_MANARECHARGE",
    Description: "Mana Recharge",
    MaxLevel: 5,
  },
  {
    Id: 482,
    Name: "PF_DOUBLECASTING",
    Description: "Double Casting",
    MaxLevel: 5,
    Type: "Magic",
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Hit: "Single",
    HitCount: 1,
    CastTime: 1600,
    Duration1: 90000,
    FixedCastTime: 400,
    CastTimeFlags: {
      IgnoreDex: true,
    },
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 40,
        },
        {
          Level: 2,
          Amount: 45,
        },
        {
          Level: 3,
          Amount: 50,
        },
        {
          Level: 4,
          Amount: 55,
        },
        {
          Level: 5,
          Amount: 60,
        },
      ],
    },
    Status: "DoubleCast",
  },
  {
    Id: 483,
    Name: "HW_GANBANTEIN",
    Description: "Ganbantein",
    MaxLevel: 1,
    TargetType: "Ground",
    DamageFlags: {
      NoDamage: true,
    },
    Range: 18,
    Hit: "Single",
    HitCount: 1,
    SplashArea: [
      {
        Level: 1,
        Area: 1,
      },
      {
        Level: 2,
        Area: 2,
      },
      {
        Level: 3,
        Area: 3,
      },
      {
        Level: 4,
        Area: 4,
      },
      {
        Level: 5,
        Area: 5,
      },
    ],
    AfterCastActDelay: 5000,
    FixedCastTime: 3000,
    Requires: {
      SpCost: 40,
      ItemCost: [
        {
          Item: "Yellow_Gemstone",
          Amount: 1,
        },
        {
          Item: "Blue_Gemstone",
          Amount: 1,
        },
      ],
    },
  },
  {
    Id: 484,
    Name: "HW_GRAVITATION",
    Description: "Gravitation Field",
    MaxLevel: 5,
    Type: "Magic",
    TargetType: "Ground",
    Flags: {
      TargetEmperium: true,
      IgnoreHovering: true,
      TargetHidden: true,
    },
    Range: 18,
    Hit: "Multi_Hit",
    HitCount: [
      {
        Level: 1,
        Count: 2,
      },
      {
        Level: 2,
        Count: 4,
      },
      {
        Level: 3,
        Count: 6,
      },
      {
        Level: 4,
        Count: 8,
      },
      {
        Level: 5,
        Count: 10,
      },
    ],
    CastCancel: true,
    CastTime: 5000,
    AfterCastActDelay: 1000,
    Duration1: 100,
    Cooldown: 5000,
    FixedCastTime: 1000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 60,
        },
        {
          Level: 2,
          Amount: 70,
        },
        {
          Level: 3,
          Amount: 80,
        },
        {
          Level: 4,
          Amount: 90,
        },
        {
          Level: 5,
          Amount: 100,
        },
      ],
    },
    Unit: {
      Id: "Gravitation",
      Range: 2,
      Interval: 5100,
      Target: "Enemy",
      Flag: {
        PathCheck: true,
        RemovedByFireRain: true,
      },
    },
    Status: "Gravitation",
  },
  {
    Id: 485,
    Name: "WS_CARTTERMINATION",
    Description: "Cart Termination",
    MaxLevel: 10,
    Type: "Weapon",
    TargetType: "Attack",
    Flags: {
      AllowOnMado: true,
    },
    Range: -2,
    Hit: "Single",
    HitCount: 1,
    Element: "Weapon",
    Duration2: 4500,
    Requires: {
      SpCost: 15,
      ZenyCost: [
        {
          Level: 1,
          Amount: 600,
        },
        {
          Level: 2,
          Amount: 700,
        },
        {
          Level: 3,
          Amount: 800,
        },
        {
          Level: 4,
          Amount: 900,
        },
        {
          Level: 5,
          Amount: 1000,
        },
        {
          Level: 6,
          Amount: 1100,
        },
        {
          Level: 7,
          Amount: 1200,
        },
        {
          Level: 8,
          Amount: 1300,
        },
        {
          Level: 9,
          Amount: 1400,
        },
        {
          Level: 10,
          Amount: 1500,
        },
      ],
      Weapon: {
        Fist: true,
        Dagger: true,
        "1hSword": true,
        "2hSword": true,
        "1hSpear": true,
        "2hSpear": true,
        "1hAxe": true,
        "2hAxe": true,
        Mace: true,
        "2hMace": true,
        Staff: true,
        Knuckle: true,
        Musical: true,
        Whip: true,
        Book: true,
        Katar: true,
        Revolver: true,
        Rifle: true,
        Gatling: true,
        Shotgun: true,
        Grenade: true,
        Huuma: true,
      },
      Status: {
        Cartboost: true,
      },
    },
    Status: "Stun",
  },
  {
    Id: 486,
    Name: "WS_OVERTHRUSTMAX",
    Description: "Maximum Power Thrust",
    MaxLevel: 5,
    Type: "Weapon",
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      AllowOnMado: true,
    },
    Hit: "Single",
    HitCount: 1,
    Duration1: 180000,
    Requires: {
      SpCost: 15,
      ZenyCost: [
        {
          Level: 1,
          Amount: 3000,
        },
        {
          Level: 2,
          Amount: 3500,
        },
        {
          Level: 3,
          Amount: 4000,
        },
        {
          Level: 4,
          Amount: 4500,
        },
        {
          Level: 5,
          Amount: 5000,
        },
      ],
      Weapon: {
        Fist: true,
        Dagger: true,
        "1hSword": true,
        "2hSword": true,
        "1hSpear": true,
        "2hSpear": true,
        "1hAxe": true,
        "2hAxe": true,
        Mace: true,
        "2hMace": true,
        Staff: true,
        Knuckle: true,
        Musical: true,
        Whip: true,
        Book: true,
        Katar: true,
        Revolver: true,
        Rifle: true,
        Gatling: true,
        Shotgun: true,
        Grenade: true,
        Huuma: true,
      },
    },
    Status: "MaxOverThrust",
  },
  {
    Id: 488,
    Name: "CG_HERMODE",
    Description: "Wand of Hermode",
    MaxLevel: 5,
    Type: "Misc",
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      IsSong: true,
      IgnoreLandProtector: true,
    },
    Hit: "Single",
    HitCount: 1,
    SplashArea: 3,
    Duration1: [
      {
        Level: 1,
        Time: 10000,
      },
      {
        Level: 2,
        Time: 15000,
      },
      {
        Level: 3,
        Time: 20000,
      },
      {
        Level: 4,
        Time: 25000,
      },
      {
        Level: 5,
        Time: 30000,
      },
    ],
    Duration2: [
      {
        Level: 1,
        Time: 10000,
      },
      {
        Level: 2,
        Time: 15000,
      },
      {
        Level: 3,
        Time: 20000,
      },
      {
        Level: 4,
        Time: 25000,
      },
      {
        Level: 5,
        Time: 30000,
      },
    ],
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 20,
        },
        {
          Level: 2,
          Amount: 30,
        },
        {
          Level: 3,
          Amount: 40,
        },
        {
          Level: 4,
          Amount: 50,
        },
        {
          Level: 5,
          Amount: 60,
        },
      ],
      Weapon: {
        Musical: true,
        Whip: true,
      },
    },
    Status: "Hermode",
  },
  {
    Id: 489,
    Name: "CG_TAROTCARD",
    Description: "Tarot Card of Fate",
    MaxLevel: 5,
    Type: "Misc",
    TargetType: "Attack",
    DamageFlags: {
      NoDamage: true,
      IgnoreFlee: true,
    },
    Range: 9,
    Hit: "Single",
    HitCount: 1,
    CastTime: 500,
    AfterCastActDelay: 3000,
    Duration2: 30000,
    FixedCastTime: 500,
    Requires: {
      SpCost: 40,
    },
    Status: "TarotCard",
  },
  {
    Id: 490,
    Name: "CR_ACIDDEMONSTRATION",
    Description: "Acid Demonstration",
    MaxLevel: 10,
    Type: "Weapon",
    TargetType: "Attack",
    Range: 9,
    Hit: "Multi_Hit",
    HitCount: [
      {
        Level: 1,
        Count: 1,
      },
      {
        Level: 2,
        Count: 2,
      },
      {
        Level: 3,
        Count: 3,
      },
      {
        Level: 4,
        Count: 4,
      },
      {
        Level: 5,
        Count: 5,
      },
      {
        Level: 6,
        Count: 6,
      },
      {
        Level: 7,
        Count: 7,
      },
      {
        Level: 8,
        Count: 8,
      },
      {
        Level: 9,
        Count: 9,
      },
      {
        Level: 10,
        Count: 10,
      },
    ],
    Element: "Weapon",
    CastCancel: true,
    AfterCastActDelay: 1000,
    Cooldown: 150,
    FixedCastTime: 1000,
    Requires: {
      SpCost: 50,
      ItemCost: [
        {
          Item: "Fire_Bottle",
          Amount: 1,
        },
        {
          Item: "Acid_Bottle",
          Amount: 1,
        },
      ],
    },
  },
  {
    Id: 491,
    Name: "CR_CULTIVATION",
    Description: "Plant Cultivation",
    MaxLevel: 2,
    TargetType: "Ground",
    DamageFlags: {
      NoDamage: true,
    },
    Range: 1,
    Hit: "Single",
    HitCount: 1,
    Duration1: 300000,
    Requires: {
      SpCost: 10,
      ItemCost: [
        {
          Item: "Mushroom_Spore",
          Amount: 1,
        },
        {
          Item: "Stem",
          Amount: 1,
        },
      ],
    },
  },
  {
    Id: 492,
    Name: "ITEM_ENCHANTARMS",
    Description: "Weapon Enchantment",
    MaxLevel: 10,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      IsNpc: true,
    },
    Hit: "Single",
    HitCount: 1,
    Element: [
      {
        Level: 1,
        Element: "Neutral",
      },
      {
        Level: 2,
        Element: "Water",
      },
      {
        Level: 3,
        Element: "Earth",
      },
      {
        Level: 4,
        Element: "Fire",
      },
      {
        Level: 5,
        Element: "Wind",
      },
      {
        Level: 6,
        Element: "Poison",
      },
      {
        Level: 7,
        Element: "Holy",
      },
      {
        Level: 8,
        Element: "Dark",
      },
      {
        Level: 9,
        Element: "Ghost",
      },
      {
        Level: 10,
        Element: "Undead",
      },
    ],
    Duration1: 1200000,
    Requires: {
      SpCost: 1,
    },
    Status: "EnchantArms",
  },
  {
    Id: 493,
    Name: "TK_MISSION",
    Description: "Taekwon Mission",
    MaxLevel: 1,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Hit: "Single",
    HitCount: 1,
    FixedCastTime: 1000,
    Requires: {
      SpCost: 10,
    },
  },
  {
    Id: 494,
    Name: "SL_HIGH",
    Description: "Spirit of Rebirth",
    MaxLevel: 5,
    Type: "Magic",
    TargetType: "Support",
    DamageFlags: {
      NoDamage: true,
    },
    Range: 9,
    Hit: "Single",
    HitCount: 1,
    CastCancel: true,
    Duration1: [
      {
        Level: 1,
        Time: 150000,
      },
      {
        Level: 2,
        Time: 200000,
      },
      {
        Level: 3,
        Time: 250000,
      },
      {
        Level: 4,
        Time: 300000,
      },
      {
        Level: 5,
        Time: 350000,
      },
    ],
    FixedCastTime: 1000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 460,
        },
        {
          Level: 2,
          Amount: 360,
        },
        {
          Level: 3,
          Amount: 260,
        },
        {
          Level: 4,
          Amount: 160,
        },
        {
          Level: 5,
          Amount: 60,
        },
      ],
    },
    Status: "Spirit",
  },
  {
    Id: 495,
    Name: "KN_ONEHAND",
    Description: "Onehand Quicken",
    MaxLevel: 1,
    Type: "Weapon",
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      IsSpirit: true,
    },
    Hit: "Single",
    HitCount: 1,
    Duration1: 300000,
    Requires: {
      SpCost: 100,
      Weapon: {
        "1hSword": true,
      },
    },
    Status: "OneHand",
  },
  {
    Id: 496,
    Name: "AM_TWILIGHT1",
    Description: "Twilight Alchemy 1",
    MaxLevel: 1,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      IsSpirit: true,
    },
    Hit: "Single",
    FixedCastTime: 3000,
    CastTimeFlags: {
      IgnoreDex: true,
    },
    Requires: {
      SpCost: 200,
      ItemCost: [
        {
          Item: "Medicine_Bowl",
          Amount: 200,
        },
      ],
    },
  },
  {
    Id: 497,
    Name: "AM_TWILIGHT2",
    Description: "Twilight Alchemy 2",
    MaxLevel: 1,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      IsSpirit: true,
    },
    Hit: "Single",
    FixedCastTime: 3000,
    CastTimeFlags: {
      IgnoreDex: true,
    },
    Requires: {
      SpCost: 200,
      ItemCost: [
        {
          Item: "Medicine_Bowl",
          Amount: 200,
        },
      ],
    },
  },
  {
    Id: 498,
    Name: "AM_TWILIGHT3",
    Description: "Twilight Alchemy 3",
    MaxLevel: 1,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      IsSpirit: true,
    },
    Hit: "Single",
    FixedCastTime: 3000,
    CastTimeFlags: {
      IgnoreDex: true,
    },
    Requires: {
      SpCost: 200,
      ItemCost: [
        {
          Item: "Medicine_Bowl",
          Amount: 200,
        },
      ],
    },
  },
  {
    Id: 499,
    Name: "HT_POWER",
    Description: "Beast Strafing",
    MaxLevel: 1,
    Type: "Weapon",
    TargetType: "Attack",
    Flags: {
      IsSpirit: true,
      AlterRangeVulture: true,
    },
    Range: -9,
    Hit: "Multi_Hit",
    HitCount: 2,
    Element: "Weapon",
    AfterCastActDelay: 100,
    Duration1: 100,
    Requires: {
      SpCost: 12,
      Weapon: {
        Bow: true,
      },
      Ammo: {
        Arrow: true,
      },
      AmmoAmount: 1,
    },
  },
  {
    Id: 500,
    Name: "GS_GLITTERING",
    Description: "Flip the Coin",
    MaxLevel: 5,
    Type: "Misc",
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
      IgnoreFlee: true,
    },
    Hit: "Single",
    HitCount: 1,
    Duration1: 600000,
    Requires: {
      SpCost: 2,
      ZenyCost: 1,
    },
  },
  {
    Id: 501,
    Name: "GS_FLING",
    Description: "Fling",
    MaxLevel: 1,
    Type: "Misc",
    TargetType: "Attack",
    DamageFlags: {
      IgnoreElement: true,
      IgnoreFlee: true,
    },
    Range: 9,
    Hit: "Single",
    HitCount: 1,
    Element: "Weapon",
    Duration1: 30000,
    Requires: {
      SpCost: 10,
      SpiritSphereCost: 5,
    },
    Status: "Fling",
  },
  {
    Id: 502,
    Name: "GS_TRIPLEACTION",
    Description: "Triple Action",
    MaxLevel: 1,
    Type: "Weapon",
    TargetType: "Attack",
    Range: -9,
    Hit: "Multi_Hit",
    HitCount: 3,
    Element: "Weapon",
    AfterCastActDelay: 1000,
    Requires: {
      SpCost: 20,
      Ammo: {
        Arrow: true,
        Dagger: true,
        Bullet: true,
        Shell: true,
        Grenade: true,
        Shuriken: true,
        Kunai: true,
        Cannonball: true,
        Throwweapon: true,
      },
      AmmoAmount: 1,
      SpiritSphereCost: 1,
    },
  },
  {
    Id: 503,
    Name: "GS_BULLSEYE",
    Description: "Bulls Eye",
    MaxLevel: 1,
    Type: "Weapon",
    TargetType: "Attack",
    DamageFlags: {
      IgnoreAtkCard: true,
    },
    Flags: {
      IgnoreAutoGuard: true,
      IgnoreCicada: true,
    },
    Range: -9,
    Hit: "Single",
    HitCount: 1,
    Element: "Weapon",
    CastTime: 800,
    AfterCastActDelay: 1000,
    FixedCastTime: 200,
    Requires: {
      SpCost: 30,
      Ammo: {
        Arrow: true,
        Dagger: true,
        Bullet: true,
        Shell: true,
        Grenade: true,
        Shuriken: true,
        Kunai: true,
        Cannonball: true,
        Throwweapon: true,
      },
      AmmoAmount: 1,
      SpiritSphereCost: 1,
    },
  },
  {
    Id: 504,
    Name: "GS_MADNESSCANCEL",
    Description: "Madness Canceller",
    MaxLevel: 1,
    Type: "Weapon",
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Hit: "Single",
    HitCount: 1,
    CastTime: 1600,
    AfterCastActDelay: 3000,
    Duration1: 15000,
    FixedCastTime: 400,
    Requires: {
      SpCost: 30,
      SpiritSphereCost: 1,
    },
    Status: "MadnessCancel",
  },
  {
    Id: 505,
    Name: "GS_ADJUSTMENT",
    Description: "Adjustment",
    MaxLevel: 1,
    Type: "Weapon",
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Hit: "Single",
    HitCount: 1,
    CastTime: 800,
    AfterCastActDelay: 2000,
    Duration1: 30000,
    FixedCastTime: 200,
    Requires: {
      SpCost: 15,
      SpiritSphereCost: 2,
    },
    Status: "Adjustment",
  },
  {
    Id: 506,
    Name: "GS_INCREASING",
    Description: "Increasing Accuracy",
    MaxLevel: 1,
    Type: "Weapon",
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Hit: "Single",
    HitCount: 1,
    AfterCastActDelay: 1000,
    Duration1: 60000,
    Requires: {
      SpCost: 30,
      SpiritSphereCost: 4,
    },
    Status: "Increasing",
  },
  {
    Id: 507,
    Name: "GS_MAGICALBULLET",
    Description: "Magical Bullet",
    MaxLevel: 1,
    Type: "Magic",
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Hit: "Single",
    HitCount: 1,
    AfterCastActDelay: 500,
    Duration1: 30000,
    Requires: {
      SpCost: 7,
      SpiritSphereCost: 1,
    },
    Status: "MagicalBullet",
  },
  {
    Id: 508,
    Name: "GS_CRACKER",
    Description: "Cracker",
    MaxLevel: 1,
    Type: "Weapon",
    TargetType: "Attack",
    DamageFlags: {
      NoDamage: true,
    },
    Range: -9,
    Hit: "Single",
    HitCount: 1,
    Element: "Weapon",
    AfterCastActDelay: 1000,
    Duration2: 4500,
    Requires: {
      SpCost: 10,
      Ammo: {
        Arrow: true,
        Dagger: true,
        Bullet: true,
        Shell: true,
        Grenade: true,
        Shuriken: true,
        Kunai: true,
        Cannonball: true,
        Throwweapon: true,
      },
      AmmoAmount: 1,
      SpiritSphereCost: 1,
    },
    Status: "Stun",
  },
  {
    Id: 509,
    Name: "GS_SINGLEACTION",
    Description: "Single Action",
    MaxLevel: 10,
  },
  {
    Id: 510,
    Name: "GS_SNAKEEYE",
    Description: "Snake Eye",
    MaxLevel: 10,
  },
  {
    Id: 511,
    Name: "GS_CHAINACTION",
    Description: "Chain Action",
    MaxLevel: 10,
    Type: "Weapon",
    DamageFlags: {
      Critical: true,
    },
    Range: -9,
    Hit: "Multi_Hit",
    HitCount: 2,
    Element: "Weapon",
  },
  {
    Id: 512,
    Name: "GS_TRACKING",
    Description: "Tracking",
    MaxLevel: 10,
    Type: "Weapon",
    TargetType: "Attack",
    Range: -9,
    Hit: "Single",
    HitCount: 1,
    Element: "Weapon",
    CastCancel: true,
    AfterCastActDelay: 1500,
    FixedCastTime: [
      {
        Level: 1,
        Time: 600,
      },
      {
        Level: 2,
        Time: 700,
      },
      {
        Level: 3,
        Time: 800,
      },
      {
        Level: 4,
        Time: 900,
      },
      {
        Level: 5,
        Time: 1000,
      },
      {
        Level: 6,
        Time: 1100,
      },
      {
        Level: 7,
        Time: 1200,
      },
      {
        Level: 8,
        Time: 1300,
      },
      {
        Level: 9,
        Time: 1400,
      },
      {
        Level: 10,
        Time: 1500,
      },
    ],
    CastTimeFlags: {
      IgnoreDex: true,
      IgnoreStatus: true,
    },
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 15,
        },
        {
          Level: 2,
          Amount: 20,
        },
        {
          Level: 3,
          Amount: 25,
        },
        {
          Level: 4,
          Amount: 30,
        },
        {
          Level: 5,
          Amount: 35,
        },
        {
          Level: 6,
          Amount: 40,
        },
        {
          Level: 7,
          Amount: 45,
        },
        {
          Level: 8,
          Amount: 50,
        },
        {
          Level: 9,
          Amount: 55,
        },
        {
          Level: 10,
          Amount: 60,
        },
      ],
      Weapon: {
        Revolver: true,
        Rifle: true,
      },
      Ammo: {
        Bullet: true,
      },
      AmmoAmount: 1,
    },
  },
  {
    Id: 513,
    Name: "GS_DISARM",
    Description: "Disarm",
    MaxLevel: 5,
    Type: "Weapon",
    TargetType: "Attack",
    Range: -9,
    Hit: "Single",
    HitCount: 1,
    Element: "Weapon",
    CastTime: 1600,
    AfterCastActDelay: 1000,
    Duration1: 30000,
    FixedCastTime: 400,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 15,
        },
        {
          Level: 2,
          Amount: 20,
        },
        {
          Level: 3,
          Amount: 25,
        },
        {
          Level: 4,
          Amount: 30,
        },
        {
          Level: 5,
          Amount: 35,
        },
      ],
      Weapon: {
        Revolver: true,
        Rifle: true,
      },
      Ammo: {
        Bullet: true,
      },
      AmmoAmount: 1,
    },
    Status: "StripWeapon",
  },
  {
    Id: 514,
    Name: "GS_PIERCINGSHOT",
    Description: "Piercing Shot",
    MaxLevel: 5,
    Type: "Weapon",
    TargetType: "Attack",
    DamageFlags: {
      IgnoreDefense: true,
    },
    Flags: {
      AlterRangeSnakeEye: true,
    },
    Range: -9,
    Hit: "Single",
    HitCount: 1,
    Element: "Weapon",
    CastTime: 1200,
    AfterCastActDelay: 500,
    Duration2: 108000,
    FixedCastTime: 300,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 11,
        },
        {
          Level: 2,
          Amount: 12,
        },
        {
          Level: 3,
          Amount: 13,
        },
        {
          Level: 4,
          Amount: 14,
        },
        {
          Level: 5,
          Amount: 15,
        },
      ],
      Weapon: {
        Revolver: true,
        Rifle: true,
      },
      Ammo: {
        Bullet: true,
      },
      AmmoAmount: 1,
    },
    Status: "Bleeding",
  },
  {
    Id: 515,
    Name: "GS_RAPIDSHOWER",
    Description: "Rapid Shower",
    MaxLevel: 10,
    Type: "Weapon",
    TargetType: "Attack",
    Flags: {
      AlterRangeSnakeEye: true,
    },
    Range: -9,
    Hit: "Multi_Hit",
    HitCount: -5,
    Element: "Weapon",
    AfterCastActDelay: 1500,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 22,
        },
        {
          Level: 2,
          Amount: 24,
        },
        {
          Level: 3,
          Amount: 26,
        },
        {
          Level: 4,
          Amount: 28,
        },
        {
          Level: 5,
          Amount: 30,
        },
        {
          Level: 6,
          Amount: 32,
        },
        {
          Level: 7,
          Amount: 34,
        },
        {
          Level: 8,
          Amount: 36,
        },
        {
          Level: 9,
          Amount: 38,
        },
        {
          Level: 10,
          Amount: 40,
        },
      ],
      Weapon: {
        Revolver: true,
      },
      Ammo: {
        Bullet: true,
      },
      AmmoAmount: 1,
    },
  },
  {
    Id: 516,
    Name: "GS_DESPERADO",
    Description: "Desperado",
    MaxLevel: 10,
    Type: "Weapon",
    TargetType: "Self",
    DamageFlags: {
      Splash: true,
    },
    Range: 5,
    Hit: "Multi_Hit",
    HitCount: 1,
    Element: "Weapon",
    SplashArea: 3,
    AfterCastActDelay: 1000,
    AfterCastWalkDelay: 1000,
    Duration1: 1000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 32,
        },
        {
          Level: 2,
          Amount: 34,
        },
        {
          Level: 3,
          Amount: 36,
        },
        {
          Level: 4,
          Amount: 38,
        },
        {
          Level: 5,
          Amount: 40,
        },
        {
          Level: 6,
          Amount: 42,
        },
        {
          Level: 7,
          Amount: 44,
        },
        {
          Level: 8,
          Amount: 46,
        },
        {
          Level: 9,
          Amount: 48,
        },
        {
          Level: 10,
          Amount: 50,
        },
      ],
      Weapon: {
        Revolver: true,
      },
      Ammo: {
        Bullet: true,
      },
      AmmoAmount: 10,
    },
    Unit: {
      Id: "Dummyskill",
      Layout: 3,
      Interval: 100,
      Target: "Enemy",
    },
  },
  {
    Id: 517,
    Name: "GS_GATLINGFEVER",
    Description: "Gatling Fever",
    MaxLevel: 10,
    Type: "Weapon",
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      Toggleable: true,
    },
    Hit: "Single",
    HitCount: 1,
    Element: "Weapon",
    CastTime: 800,
    AfterCastActDelay: 1000,
    Duration1: [
      {
        Level: 1,
        Time: 30000,
      },
      {
        Level: 2,
        Time: 45000,
      },
      {
        Level: 3,
        Time: 60000,
      },
      {
        Level: 4,
        Time: 75000,
      },
      {
        Level: 5,
        Time: 90000,
      },
      {
        Level: 6,
        Time: 105000,
      },
      {
        Level: 7,
        Time: 120000,
      },
      {
        Level: 8,
        Time: 135000,
      },
      {
        Level: 9,
        Time: 150000,
      },
      {
        Level: 10,
        Time: 165000,
      },
    ],
    FixedCastTime: 200,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 30,
        },
        {
          Level: 2,
          Amount: 32,
        },
        {
          Level: 3,
          Amount: 34,
        },
        {
          Level: 4,
          Amount: 36,
        },
        {
          Level: 5,
          Amount: 38,
        },
        {
          Level: 6,
          Amount: 40,
        },
        {
          Level: 7,
          Amount: 42,
        },
        {
          Level: 8,
          Amount: 44,
        },
        {
          Level: 9,
          Amount: 46,
        },
        {
          Level: 10,
          Amount: 48,
        },
      ],
      Weapon: {
        Gatling: true,
      },
    },
    Status: "GatlingFever",
  },
  {
    Id: 518,
    Name: "GS_DUST",
    Description: "Dust",
    MaxLevel: 10,
    Type: "Weapon",
    TargetType: "Attack",
    Range: 2,
    Hit: "Single",
    HitCount: 1,
    Element: "Weapon",
    Knockback: 5,
    AfterCastActDelay: 1000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 3,
        },
        {
          Level: 2,
          Amount: 6,
        },
        {
          Level: 3,
          Amount: 9,
        },
        {
          Level: 4,
          Amount: 12,
        },
        {
          Level: 5,
          Amount: 15,
        },
        {
          Level: 6,
          Amount: 18,
        },
        {
          Level: 7,
          Amount: 21,
        },
        {
          Level: 8,
          Amount: 24,
        },
        {
          Level: 9,
          Amount: 27,
        },
        {
          Level: 10,
          Amount: 30,
        },
      ],
      Weapon: {
        Shotgun: true,
      },
      Ammo: {
        Bullet: true,
      },
      AmmoAmount: 1,
    },
  },
  {
    Id: 519,
    Name: "GS_FULLBUSTER",
    Description: "Full Buster",
    MaxLevel: 10,
    Type: "Weapon",
    TargetType: "Attack",
    Flags: {
      AlterRangeSnakeEye: true,
    },
    Range: -9,
    Hit: "Single",
    HitCount: 1,
    Element: "Weapon",
    CastCancel: true,
    CastTime: 800,
    AfterCastActDelay: [
      {
        Level: 1,
        Time: 1200,
      },
      {
        Level: 2,
        Time: 1400,
      },
      {
        Level: 3,
        Time: 1600,
      },
      {
        Level: 4,
        Time: 1800,
      },
      {
        Level: 5,
        Time: 2000,
      },
      {
        Level: 6,
        Time: 2200,
      },
      {
        Level: 7,
        Time: 2400,
      },
      {
        Level: 8,
        Time: 2600,
      },
      {
        Level: 9,
        Time: 2800,
      },
      {
        Level: 10,
        Time: 3000,
      },
    ],
    Duration2: 10000,
    FixedCastTime: 200,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 20,
        },
        {
          Level: 2,
          Amount: 25,
        },
        {
          Level: 3,
          Amount: 30,
        },
        {
          Level: 4,
          Amount: 35,
        },
        {
          Level: 5,
          Amount: 40,
        },
        {
          Level: 6,
          Amount: 45,
        },
        {
          Level: 7,
          Amount: 50,
        },
        {
          Level: 8,
          Amount: 55,
        },
        {
          Level: 9,
          Amount: 60,
        },
        {
          Level: 10,
          Amount: 65,
        },
      ],
      Weapon: {
        Shotgun: true,
      },
      Ammo: {
        Bullet: true,
      },
      AmmoAmount: 2,
    },
  },
  {
    Id: 520,
    Name: "GS_SPREADATTACK",
    Description: "Spread Attack",
    MaxLevel: 10,
    Type: "Weapon",
    TargetType: "Attack",
    DamageFlags: {
      Splash: true,
    },
    Flags: {
      TargetTrap: true,
      AlterRangeSnakeEye: true,
    },
    Range: -9,
    Hit: "Single",
    HitCount: 1,
    Element: "Weapon",
    SplashArea: [
      {
        Level: 1,
        Area: 1,
      },
      {
        Level: 2,
        Area: 1,
      },
      {
        Level: 3,
        Area: 1,
      },
      {
        Level: 4,
        Area: 2,
      },
      {
        Level: 5,
        Area: 2,
      },
      {
        Level: 6,
        Area: 2,
      },
      {
        Level: 7,
        Area: 3,
      },
      {
        Level: 8,
        Area: 3,
      },
      {
        Level: 9,
        Area: 3,
      },
      {
        Level: 10,
        Area: 4,
      },
    ],
    AfterCastActDelay: 1000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 13,
        },
        {
          Level: 2,
          Amount: 16,
        },
        {
          Level: 3,
          Amount: 19,
        },
        {
          Level: 4,
          Amount: 22,
        },
        {
          Level: 5,
          Amount: 25,
        },
        {
          Level: 6,
          Amount: 28,
        },
        {
          Level: 7,
          Amount: 31,
        },
        {
          Level: 8,
          Amount: 34,
        },
        {
          Level: 9,
          Amount: 37,
        },
        {
          Level: 10,
          Amount: 40,
        },
      ],
      Weapon: {
        Shotgun: true,
        Grenade: true,
      },
      Ammo: {
        Bullet: true,
      },
      AmmoAmount: 5,
    },
  },
  {
    Id: 521,
    Name: "GS_GROUNDDRIFT",
    Description: "Ground Drift",
    MaxLevel: 10,
    Type: "Weapon",
    TargetType: "Ground",
    DamageFlags: {
      Splash: true,
    },
    Flags: {
      AlterRangeSnakeEye: true,
    },
    Range: -9,
    Hit: "Single",
    HitCount: 1,
    Element: "Weapon",
    SplashArea: 1,
    Knockback: 3,
    CastTime: 800,
    AfterCastActDelay: 1000,
    Duration1: [
      {
        Level: 1,
        Time: 3000,
      },
      {
        Level: 2,
        Time: 6000,
      },
      {
        Level: 3,
        Time: 9000,
      },
      {
        Level: 4,
        Time: 12000,
      },
      {
        Level: 5,
        Time: 15000,
      },
      {
        Level: 6,
        Time: 18000,
      },
      {
        Level: 7,
        Time: 21000,
      },
      {
        Level: 8,
        Time: 24000,
      },
      {
        Level: 9,
        Time: 27000,
      },
      {
        Level: 10,
        Time: 30000,
      },
    ],
    Duration2: [
      {
        Level: 1,
        Time: 5000,
      },
      {
        Level: 2,
        Time: 20000,
      },
      {
        Level: 3,
        Time: 20000,
      },
      {
        Level: 4,
        Time: 30000,
      },
    ],
    FixedCastTime: 200,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 3,
        },
        {
          Level: 2,
          Amount: 6,
        },
        {
          Level: 3,
          Amount: 9,
        },
        {
          Level: 4,
          Amount: 12,
        },
        {
          Level: 5,
          Amount: 15,
        },
        {
          Level: 6,
          Amount: 18,
        },
        {
          Level: 7,
          Amount: 21,
        },
        {
          Level: 8,
          Amount: 24,
        },
        {
          Level: 9,
          Amount: 27,
        },
        {
          Level: 10,
          Amount: 30,
        },
      ],
      Weapon: {
        Grenade: true,
      },
      Ammo: {
        Bullet: true,
      },
      AmmoAmount: 1,
    },
    Unit: {
      Id: "Grounddrift_Wind",
      Range: 1,
      Interval: 1000,
      Target: "Enemy",
    },
  },
  {
    Id: 522,
    Name: "NJ_TOBIDOUGU",
    Description: "Shuriken Training",
    MaxLevel: 10,
    Type: "Weapon",
    HitCount: 1,
  },
  {
    Id: 523,
    Name: "NJ_SYURIKEN",
    Description: "Throw Shuriken",
    MaxLevel: 10,
    Type: "Weapon",
    TargetType: "Attack",
    DamageFlags: {
      IgnoreFlee: true,
    },
    Range: 9,
    Hit: "Single",
    HitCount: 1,
    Element: "Weapon",
    Requires: {
      SpCost: 5,
      Ammo: {
        Shuriken: true,
      },
      AmmoAmount: 1,
    },
  },
  {
    Id: 524,
    Name: "NJ_KUNAI",
    Description: "Throw Kunai",
    MaxLevel: 5,
    Type: "Weapon",
    TargetType: "Attack",
    DamageFlags: {
      IgnoreFlee: true,
    },
    Range: 9,
    Hit: "Multi_Hit",
    HitCount: 3,
    Element: "Weapon",
    Cooldown: 200,
    Requires: {
      SpCost: 10,
      Ammo: {
        Kunai: true,
      },
      AmmoAmount: 1,
    },
  },
  {
    Id: 525,
    Name: "NJ_HUUMA",
    Description: "Throw Huuma Shuriken",
    MaxLevel: 5,
    Type: "Weapon",
    TargetType: "Attack",
    DamageFlags: {
      Splash: true,
    },
    Flags: {
      TargetTrap: true,
    },
    Range: 9,
    Hit: "Multi_Hit",
    HitCount: [
      {
        Level: 1,
        Count: -3,
      },
      {
        Level: 2,
        Count: -3,
      },
      {
        Level: 3,
        Count: -4,
      },
      {
        Level: 4,
        Count: -4,
      },
      {
        Level: 5,
        Count: -5,
      },
    ],
    Element: "Weapon",
    SplashArea: [
      {
        Level: 1,
        Area: 1,
      },
      {
        Level: 2,
        Area: 1,
      },
      {
        Level: 3,
        Area: 1,
      },
      {
        Level: 4,
        Area: 2,
      },
      {
        Level: 5,
        Area: 2,
      },
    ],
    CastTime: 1000,
    AfterCastActDelay: 500,
    Duration1: 100,
    FixedCastTime: 500,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 15,
        },
        {
          Level: 2,
          Amount: 20,
        },
        {
          Level: 3,
          Amount: 25,
        },
        {
          Level: 4,
          Amount: 30,
        },
        {
          Level: 5,
          Amount: 35,
        },
      ],
      Weapon: {
        Huuma: true,
      },
    },
  },
  {
    Id: 526,
    Name: "NJ_ZENYNAGE",
    Description: "Throw Zeny",
    MaxLevel: 10,
    Type: "Misc",
    TargetType: "Attack",
    DamageFlags: {
      IgnoreElement: true,
      IgnoreFlee: true,
    },
    Flags: {
      IgnoreBgReduction: true,
      IgnoreGvgReduction: true,
    },
    Range: 9,
    Hit: "Single",
    HitCount: 1,
    CopyFlags: {
      Skill: {
        Plagiarism: true,
        Reproduce: true,
      },
    },
    AfterCastActDelay: 5000,
    Requires: {
      SpCost: 50,
      ZenyCost: [
        {
          Level: 1,
          Amount: 500,
        },
        {
          Level: 2,
          Amount: 1000,
        },
        {
          Level: 3,
          Amount: 1500,
        },
        {
          Level: 4,
          Amount: 2000,
        },
        {
          Level: 5,
          Amount: 2500,
        },
        {
          Level: 6,
          Amount: 3000,
        },
        {
          Level: 7,
          Amount: 3500,
        },
        {
          Level: 8,
          Amount: 4000,
        },
        {
          Level: 9,
          Amount: 4500,
        },
        {
          Level: 10,
          Amount: 5000,
        },
      ],
    },
  },
  {
    Id: 527,
    Name: "NJ_TATAMIGAESHI",
    Description: "Improvised Defense",
    MaxLevel: 5,
    Type: "Weapon",
    TargetType: "Self",
    Hit: "Single",
    HitCount: 1,
    Element: "Weapon",
    Knockback: 4,
    CopyFlags: {
      Skill: {
        Plagiarism: true,
        Reproduce: true,
      },
    },
    AfterCastActDelay: 3000,
    Duration1: 3000,
    Duration2: 3000,
    Requires: {
      SpCost: 15,
    },
    Unit: {
      Id: "Tatamigaeshi",
      Layout: -1,
      Interval: 2000,
      Target: "Enemy",
      Flag: {
        NoOverlap: true,
        PathCheck: true,
      },
    },
    Status: "Tatamigaeshi",
  },
  {
    Id: 528,
    Name: "NJ_KASUMIKIRI",
    Description: "Vanishing Slash",
    MaxLevel: 10,
    Type: "Weapon",
    TargetType: "Attack",
    Range: -1,
    Hit: "Single",
    HitCount: -2,
    Element: "Weapon",
    CopyFlags: {
      Skill: {
        Plagiarism: true,
        Reproduce: true,
      },
    },
    Duration1: [
      {
        Level: 1,
        Time: 30000,
      },
      {
        Level: 2,
        Time: 60000,
      },
      {
        Level: 3,
        Time: 90000,
      },
      {
        Level: 4,
        Time: 120000,
      },
      {
        Level: 5,
        Time: 150000,
      },
      {
        Level: 6,
        Time: 180000,
      },
      {
        Level: 7,
        Time: 210000,
      },
      {
        Level: 8,
        Time: 240000,
      },
      {
        Level: 9,
        Time: 270000,
      },
      {
        Level: 10,
        Time: 300000,
      },
    ],
    Cooldown: 500,
    Requires: {
      SpCost: 8,
    },
  },
  {
    Id: 529,
    Name: "NJ_SHADOWJUMP",
    Description: "Shadow Leap",
    MaxLevel: 5,
    TargetType: "Ground",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      AllowWhenHidden: true,
    },
    Range: [
      {
        Level: 1,
        Size: 6,
      },
      {
        Level: 2,
        Size: 7,
      },
      {
        Level: 3,
        Size: 8,
      },
      {
        Level: 4,
        Size: 9,
      },
      {
        Level: 5,
        Size: 10,
      },
    ],
    Hit: "Single",
    HitCount: 1,
    CopyFlags: {
      Skill: {
        Plagiarism: true,
        Reproduce: true,
      },
    },
    AfterCastActDelay: 1000,
    Requires: {
      SpCost: 10,
      Status: {
        Hiding: true,
      },
    },
  },
  {
    Id: 530,
    Name: "NJ_KIRIKAGE",
    Description: "Shadow Slash",
    MaxLevel: 5,
    Type: "Weapon",
    TargetType: "Attack",
    DamageFlags: {
      Critical: true,
    },
    Flags: {
      AllowWhenHidden: true,
      AlterRangeShadowJump: true,
    },
    Range: [
      {
        Level: 1,
        Size: 6,
      },
      {
        Level: 2,
        Size: 7,
      },
      {
        Level: 3,
        Size: 8,
      },
      {
        Level: 4,
        Size: 9,
      },
      {
        Level: 5,
        Size: 10,
      },
    ],
    Hit: "Single",
    HitCount: -3,
    Element: "Weapon",
    CopyFlags: {
      Skill: {
        Plagiarism: true,
        Reproduce: true,
      },
    },
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 10,
        },
        {
          Level: 2,
          Amount: 11,
        },
        {
          Level: 3,
          Amount: 12,
        },
        {
          Level: 4,
          Amount: 13,
        },
        {
          Level: 5,
          Amount: 14,
        },
      ],
      Status: {
        Hiding: true,
      },
    },
  },
  {
    Id: 531,
    Name: "NJ_UTSUSEMI",
    Description: "Cicada Skin Sheeding",
    MaxLevel: 5,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Hit: "Single",
    HitCount: 1,
    Knockback: 7,
    CopyFlags: {
      Skill: {
        Plagiarism: true,
        Reproduce: true,
      },
    },
    AfterCastActDelay: 1000,
    Duration1: [
      {
        Level: 1,
        Time: 20000,
      },
      {
        Level: 2,
        Time: 30000,
      },
      {
        Level: 3,
        Time: 40000,
      },
      {
        Level: 4,
        Time: 50000,
      },
      {
        Level: 5,
        Time: 60000,
      },
    ],
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 12,
        },
        {
          Level: 2,
          Amount: 15,
        },
        {
          Level: 3,
          Amount: 18,
        },
        {
          Level: 4,
          Amount: 21,
        },
        {
          Level: 5,
          Amount: 24,
        },
      ],
    },
    Status: "Utsusemi",
  },
  {
    Id: 532,
    Name: "NJ_BUNSINJYUTSU",
    Description: "Mirror Image",
    MaxLevel: 10,
    Type: "Magic",
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Hit: "Single",
    HitCount: 1,
    CastCancel: true,
    CastTime: [
      {
        Level: 1,
        Time: 3200,
      },
      {
        Level: 2,
        Time: 2800,
      },
      {
        Level: 3,
        Time: 2400,
      },
      {
        Level: 4,
        Time: 2000,
      },
      {
        Level: 5,
        Time: 1600,
      },
      {
        Level: 6,
        Time: 1200,
      },
      {
        Level: 7,
        Time: 800,
      },
      {
        Level: 8,
        Time: 800,
      },
      {
        Level: 9,
        Time: 800,
      },
      {
        Level: 10,
        Time: 800,
      },
    ],
    AfterCastActDelay: 1000,
    Duration1: [
      {
        Level: 1,
        Time: 60000,
      },
      {
        Level: 2,
        Time: 80000,
      },
      {
        Level: 3,
        Time: 100000,
      },
      {
        Level: 4,
        Time: 120000,
      },
      {
        Level: 5,
        Time: 140000,
      },
      {
        Level: 6,
        Time: 160000,
      },
      {
        Level: 7,
        Time: 180000,
      },
      {
        Level: 8,
        Time: 200000,
      },
      {
        Level: 9,
        Time: 220000,
      },
      {
        Level: 10,
        Time: 240000,
      },
    ],
    FixedCastTime: [
      {
        Level: 1,
        Time: 800,
      },
      {
        Level: 2,
        Time: 700,
      },
      {
        Level: 3,
        Time: 600,
      },
      {
        Level: 4,
        Time: 500,
      },
      {
        Level: 5,
        Time: 400,
      },
      {
        Level: 6,
        Time: 300,
      },
      {
        Level: 7,
        Time: 200,
      },
      {
        Level: 8,
        Time: 200,
      },
      {
        Level: 9,
        Time: 200,
      },
      {
        Level: 10,
        Time: 200,
      },
    ],
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 30,
        },
        {
          Level: 2,
          Amount: 32,
        },
        {
          Level: 3,
          Amount: 34,
        },
        {
          Level: 4,
          Amount: 36,
        },
        {
          Level: 5,
          Amount: 38,
        },
        {
          Level: 6,
          Amount: 40,
        },
        {
          Level: 7,
          Amount: 42,
        },
        {
          Level: 8,
          Amount: 44,
        },
        {
          Level: 9,
          Amount: 46,
        },
        {
          Level: 10,
          Amount: 48,
        },
      ],
      ItemCost: [
        {
          Item: "Shadow_Orb",
          Amount: 1,
        },
      ],
    },
    Status: "Bunsinjyutsu",
  },
  {
    Id: 533,
    Name: "NJ_NINPOU",
    Description: "Spirit of the Blade",
    MaxLevel: 10,
  },
  {
    Id: 534,
    Name: "NJ_KOUENKA",
    Description: "Crimson Fire Petal",
    MaxLevel: 10,
    Type: "Magic",
    TargetType: "Attack",
    Range: 9,
    Hit: "Multi_Hit",
    HitCount: [
      {
        Level: 1,
        Count: 1,
      },
      {
        Level: 2,
        Count: 2,
      },
      {
        Level: 3,
        Count: 3,
      },
      {
        Level: 4,
        Count: 4,
      },
      {
        Level: 5,
        Count: 5,
      },
      {
        Level: 6,
        Count: 6,
      },
      {
        Level: 7,
        Count: 7,
      },
      {
        Level: 8,
        Count: 8,
      },
      {
        Level: 9,
        Count: 9,
      },
      {
        Level: 10,
        Count: 10,
      },
    ],
    Element: "Fire",
    CopyFlags: {
      Skill: {
        Plagiarism: true,
        Reproduce: true,
      },
    },
    CastCancel: true,
    CastTime: [
      {
        Level: 1,
        Time: 560,
      },
      {
        Level: 2,
        Time: 1120,
      },
      {
        Level: 3,
        Time: 1680,
      },
      {
        Level: 4,
        Time: 2240,
      },
      {
        Level: 5,
        Time: 2800,
      },
      {
        Level: 6,
        Time: 3360,
      },
      {
        Level: 7,
        Time: 3840,
      },
      {
        Level: 8,
        Time: 4480,
      },
      {
        Level: 9,
        Time: 5040,
      },
      {
        Level: 10,
        Time: 5600,
      },
    ],
    FixedCastTime: [
      {
        Level: 1,
        Time: 140,
      },
      {
        Level: 2,
        Time: 280,
      },
      {
        Level: 3,
        Time: 420,
      },
      {
        Level: 4,
        Time: 560,
      },
      {
        Level: 5,
        Time: 700,
      },
      {
        Level: 6,
        Time: 840,
      },
      {
        Level: 7,
        Time: 960,
      },
      {
        Level: 8,
        Time: 1120,
      },
      {
        Level: 9,
        Time: 1260,
      },
      {
        Level: 10,
        Time: 1400,
      },
    ],
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 18,
        },
        {
          Level: 2,
          Amount: 20,
        },
        {
          Level: 3,
          Amount: 22,
        },
        {
          Level: 4,
          Amount: 24,
        },
        {
          Level: 5,
          Amount: 26,
        },
        {
          Level: 6,
          Amount: 28,
        },
        {
          Level: 7,
          Amount: 30,
        },
        {
          Level: 8,
          Amount: 32,
        },
        {
          Level: 9,
          Amount: 34,
        },
        {
          Level: 10,
          Amount: 36,
        },
      ],
    },
  },
  {
    Id: 535,
    Name: "NJ_KAENSIN",
    Description: "Crimson Fire Formation",
    MaxLevel: 10,
    Type: "Magic",
    TargetType: "Self",
    Hit: "Multi_Hit",
    HitCount: 1,
    Element: "Fire",
    CopyFlags: {
      Skill: {
        Plagiarism: true,
        Reproduce: true,
      },
    },
    CastCancel: true,
    CastTime: [
      {
        Level: 1,
        Time: 4800,
      },
      {
        Level: 2,
        Time: 4400,
      },
      {
        Level: 3,
        Time: 4000,
      },
      {
        Level: 4,
        Time: 3600,
      },
      {
        Level: 5,
        Time: 3200,
      },
      {
        Level: 6,
        Time: 2800,
      },
      {
        Level: 7,
        Time: 2400,
      },
      {
        Level: 8,
        Time: 2000,
      },
      {
        Level: 9,
        Time: 1600,
      },
      {
        Level: 10,
        Time: 1200,
      },
    ],
    AfterCastActDelay: 1000,
    Duration1: 20000,
    FixedCastTime: [
      {
        Level: 1,
        Time: 1200,
      },
      {
        Level: 2,
        Time: 1100,
      },
      {
        Level: 3,
        Time: 1000,
      },
      {
        Level: 4,
        Time: 900,
      },
      {
        Level: 5,
        Time: 800,
      },
      {
        Level: 6,
        Time: 700,
      },
      {
        Level: 7,
        Time: 600,
      },
      {
        Level: 8,
        Time: 500,
      },
      {
        Level: 9,
        Time: 400,
      },
      {
        Level: 10,
        Time: 300,
      },
    ],
    Requires: {
      SpCost: 25,
      ItemCost: [
        {
          Item: "Flame_Stone",
          Amount: 1,
        },
      ],
    },
    Unit: {
      Id: "Kaen",
      Layout: -1,
      Interval: 100,
      Target: "Enemy",
      Flag: {
        PathCheck: true,
        RemovedByFireRain: true,
      },
    },
  },
  {
    Id: 536,
    Name: "NJ_BAKUENRYU",
    Description: "Raging Fire Dragon",
    MaxLevel: 5,
    Type: "Magic",
    TargetType: "Attack",
    Range: 9,
    Hit: "Multi_Hit",
    HitCount: -3,
    Element: "Fire",
    CopyFlags: {
      Skill: {
        Plagiarism: true,
        Reproduce: true,
      },
    },
    CastCancel: true,
    CastTime: 2000,
    AfterCastActDelay: 500,
    Duration1: 100,
    Cooldown: 300,
    FixedCastTime: 800,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 20,
        },
        {
          Level: 2,
          Amount: 25,
        },
        {
          Level: 3,
          Amount: 30,
        },
        {
          Level: 4,
          Amount: 35,
        },
        {
          Level: 5,
          Amount: 40,
        },
      ],
      ItemCost: [
        {
          Item: "Flame_Stone",
          Amount: 1,
        },
      ],
    },
    Unit: {
      Id: "Dummyskill",
      Layout: 2,
      Interval: 1000,
      Target: "Enemy",
      Flag: {
        PathCheck: true,
      },
    },
  },
  {
    Id: 537,
    Name: "NJ_HYOUSENSOU",
    Description: "Spear of Ice",
    MaxLevel: 10,
    Type: "Magic",
    TargetType: "Attack",
    Range: 9,
    Hit: "Multi_Hit",
    HitCount: [
      {
        Level: 1,
        Count: 3,
      },
      {
        Level: 2,
        Count: 4,
      },
      {
        Level: 3,
        Count: 5,
      },
      {
        Level: 4,
        Count: 6,
      },
      {
        Level: 5,
        Count: 7,
      },
      {
        Level: 6,
        Count: 8,
      },
      {
        Level: 7,
        Count: 9,
      },
      {
        Level: 8,
        Count: 10,
      },
      {
        Level: 9,
        Count: 11,
      },
      {
        Level: 10,
        Count: 12,
      },
    ],
    Element: "Water",
    CopyFlags: {
      Skill: {
        Plagiarism: true,
        Reproduce: true,
      },
    },
    CastCancel: true,
    CastTime: [
      {
        Level: 1,
        Time: 560,
      },
      {
        Level: 2,
        Time: 1120,
      },
      {
        Level: 3,
        Time: 1680,
      },
      {
        Level: 4,
        Time: 2240,
      },
      {
        Level: 5,
        Time: 2800,
      },
      {
        Level: 6,
        Time: 3360,
      },
      {
        Level: 7,
        Time: 3840,
      },
      {
        Level: 8,
        Time: 4480,
      },
      {
        Level: 9,
        Time: 5040,
      },
      {
        Level: 10,
        Time: 5600,
      },
    ],
    FixedCastTime: [
      {
        Level: 1,
        Time: 140,
      },
      {
        Level: 2,
        Time: 280,
      },
      {
        Level: 3,
        Time: 420,
      },
      {
        Level: 4,
        Time: 560,
      },
      {
        Level: 5,
        Time: 700,
      },
      {
        Level: 6,
        Time: 840,
      },
      {
        Level: 7,
        Time: 960,
      },
      {
        Level: 8,
        Time: 1120,
      },
      {
        Level: 9,
        Time: 1260,
      },
      {
        Level: 10,
        Time: 1400,
      },
    ],
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 15,
        },
        {
          Level: 2,
          Amount: 18,
        },
        {
          Level: 3,
          Amount: 21,
        },
        {
          Level: 4,
          Amount: 24,
        },
        {
          Level: 5,
          Amount: 27,
        },
        {
          Level: 6,
          Amount: 30,
        },
        {
          Level: 7,
          Amount: 33,
        },
        {
          Level: 8,
          Amount: 36,
        },
        {
          Level: 9,
          Amount: 39,
        },
        {
          Level: 10,
          Amount: 42,
        },
      ],
    },
  },
  {
    Id: 538,
    Name: "NJ_SUITON",
    Description: "Hidden Water",
    MaxLevel: 10,
    Type: "Magic",
    TargetType: "Ground",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      IgnoreHovering: true,
    },
    Range: 9,
    Hit: "Single",
    HitCount: 1,
    Element: "Water",
    CastCancel: true,
    CastTime: 2400,
    AfterCastActDelay: 2000,
    Duration1: [
      {
        Level: 1,
        Time: 15000,
      },
      {
        Level: 2,
        Time: 20000,
      },
      {
        Level: 3,
        Time: 25000,
      },
      {
        Level: 4,
        Time: 30000,
      },
      {
        Level: 5,
        Time: 35000,
      },
      {
        Level: 6,
        Time: 40000,
      },
      {
        Level: 7,
        Time: 45000,
      },
      {
        Level: 8,
        Time: 50000,
      },
      {
        Level: 9,
        Time: 55000,
      },
      {
        Level: 10,
        Time: 60000,
      },
    ],
    Duration2: [
      {
        Level: 1,
        Time: 15000,
      },
      {
        Level: 2,
        Time: 20000,
      },
      {
        Level: 3,
        Time: 25000,
      },
      {
        Level: 4,
        Time: 30000,
      },
      {
        Level: 5,
        Time: 35000,
      },
      {
        Level: 6,
        Time: 40000,
      },
      {
        Level: 7,
        Time: 45000,
      },
      {
        Level: 8,
        Time: 50000,
      },
      {
        Level: 9,
        Time: 55000,
      },
      {
        Level: 10,
        Time: 60000,
      },
    ],
    FixedCastTime: 600,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 15,
        },
        {
          Level: 2,
          Amount: 18,
        },
        {
          Level: 3,
          Amount: 21,
        },
        {
          Level: 4,
          Amount: 24,
        },
        {
          Level: 5,
          Amount: 27,
        },
        {
          Level: 6,
          Amount: 30,
        },
        {
          Level: 7,
          Amount: 33,
        },
        {
          Level: 8,
          Amount: 36,
        },
        {
          Level: 9,
          Amount: 39,
        },
        {
          Level: 10,
          Amount: 42,
        },
      ],
      ItemCost: [
        {
          Item: "Ice_Stone",
          Amount: 1,
        },
      ],
    },
    Unit: {
      Id: "Suiton",
      Layout: [
        {
          Level: 1,
          Size: 1,
        },
        {
          Level: 2,
          Size: 1,
        },
        {
          Level: 3,
          Size: 1,
        },
        {
          Level: 4,
          Size: 2,
        },
        {
          Level: 5,
          Size: 2,
        },
        {
          Level: 6,
          Size: 2,
        },
        {
          Level: 7,
          Size: 3,
        },
        {
          Level: 8,
          Size: 3,
        },
        {
          Level: 9,
          Size: 3,
        },
        {
          Level: 10,
          Size: 4,
        },
      ],
      Interval: -1,
      Flag: {
        PathCheck: true,
        RemovedByFireRain: true,
      },
    },
    Status: "Suiton",
  },
  {
    Id: 539,
    Name: "NJ_HYOUSYOURAKU",
    Description: "Ice Meteor",
    MaxLevel: 5,
    Type: "Magic",
    TargetType: "Self",
    Hit: "Single",
    HitCount: 1,
    Element: "Water",
    CopyFlags: {
      Skill: {
        Plagiarism: true,
        Reproduce: true,
      },
    },
    CastCancel: true,
    CastTime: [
      {
        Level: 1,
        Time: 1700,
      },
      {
        Level: 2,
        Time: 1900,
      },
      {
        Level: 3,
        Time: 2100,
      },
      {
        Level: 4,
        Time: 2300,
      },
      {
        Level: 5,
        Time: 2500,
      },
    ],
    AfterCastActDelay: 500,
    Duration1: 100,
    Duration2: [
      {
        Level: 1,
        Time: 5000,
      },
      {
        Level: 2,
        Time: 10000,
      },
      {
        Level: 3,
        Time: 15000,
      },
      {
        Level: 4,
        Time: 20000,
      },
      {
        Level: 5,
        Time: 25000,
      },
    ],
    Cooldown: 300,
    FixedCastTime: 800,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 40,
        },
        {
          Level: 2,
          Amount: 45,
        },
        {
          Level: 3,
          Amount: 50,
        },
        {
          Level: 4,
          Amount: 55,
        },
        {
          Level: 5,
          Amount: 60,
        },
      ],
      ItemCost: [
        {
          Item: "Ice_Stone",
          Amount: 1,
        },
      ],
    },
    Unit: {
      Id: "Dummyskill",
      Layout: 3,
      Interval: 1000,
      Target: "Enemy",
      Flag: {
        PathCheck: true,
      },
    },
    Status: "Freeze",
  },
  {
    Id: 540,
    Name: "NJ_HUUJIN",
    Description: "Wind Blade",
    MaxLevel: 10,
    Type: "Magic",
    TargetType: "Attack",
    Range: 9,
    Hit: "Multi_Hit",
    HitCount: [
      {
        Level: 1,
        Count: 1,
      },
      {
        Level: 2,
        Count: 2,
      },
      {
        Level: 3,
        Count: 2,
      },
      {
        Level: 4,
        Count: 3,
      },
      {
        Level: 5,
        Count: 3,
      },
      {
        Level: 6,
        Count: 4,
      },
      {
        Level: 7,
        Count: 4,
      },
      {
        Level: 8,
        Count: 5,
      },
      {
        Level: 9,
        Count: 5,
      },
      {
        Level: 10,
        Count: 6,
      },
    ],
    Element: "Wind",
    CopyFlags: {
      Skill: {
        Plagiarism: true,
        Reproduce: true,
      },
    },
    CastCancel: true,
    CastTime: [
      {
        Level: 1,
        Time: 800,
      },
      {
        Level: 2,
        Time: 1200,
      },
      {
        Level: 3,
        Time: 1600,
      },
      {
        Level: 4,
        Time: 2000,
      },
      {
        Level: 5,
        Time: 2400,
      },
      {
        Level: 6,
        Time: 2800,
      },
      {
        Level: 7,
        Time: 3200,
      },
      {
        Level: 8,
        Time: 3600,
      },
      {
        Level: 9,
        Time: 4000,
      },
      {
        Level: 10,
        Time: 4400,
      },
    ],
    FixedCastTime: [
      {
        Level: 1,
        Time: 200,
      },
      {
        Level: 2,
        Time: 300,
      },
      {
        Level: 3,
        Time: 400,
      },
      {
        Level: 4,
        Time: 500,
      },
      {
        Level: 5,
        Time: 600,
      },
      {
        Level: 6,
        Time: 700,
      },
      {
        Level: 7,
        Time: 800,
      },
      {
        Level: 8,
        Time: 900,
      },
      {
        Level: 9,
        Time: 1000,
      },
      {
        Level: 10,
        Time: 1100,
      },
    ],
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 12,
        },
        {
          Level: 2,
          Amount: 14,
        },
        {
          Level: 3,
          Amount: 16,
        },
        {
          Level: 4,
          Amount: 18,
        },
        {
          Level: 5,
          Amount: 20,
        },
        {
          Level: 6,
          Amount: 22,
        },
        {
          Level: 7,
          Amount: 24,
        },
        {
          Level: 8,
          Amount: 26,
        },
        {
          Level: 9,
          Amount: 28,
        },
        {
          Level: 10,
          Amount: 30,
        },
      ],
    },
  },
  {
    Id: 541,
    Name: "NJ_RAIGEKISAI",
    Description: "Lightning Strike of Destruction",
    MaxLevel: 5,
    Type: "Magic",
    TargetType: "Ground",
    Range: 9,
    Hit: "Single",
    HitCount: -3,
    Element: "Wind",
    CopyFlags: {
      Skill: {
        Plagiarism: true,
        Reproduce: true,
      },
    },
    CastCancel: true,
    CastTime: 1700,
    Duration1: 100,
    FixedCastTime: 300,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 16,
        },
        {
          Level: 2,
          Amount: 20,
        },
        {
          Level: 3,
          Amount: 24,
        },
        {
          Level: 4,
          Amount: 28,
        },
        {
          Level: 5,
          Amount: 32,
        },
      ],
      ItemCost: [
        {
          Item: "Wind_Stone",
          Amount: 1,
        },
      ],
    },
    Unit: {
      Id: "Dummyskill",
      Layout: [
        {
          Level: 1,
          Size: 1,
        },
        {
          Level: 2,
          Size: 1,
        },
        {
          Level: 3,
          Size: 2,
        },
        {
          Level: 4,
          Size: 2,
        },
        {
          Level: 5,
          Size: 3,
        },
      ],
      Interval: 1000,
      Target: "Enemy",
      Flag: {
        PathCheck: true,
      },
    },
  },
  {
    Id: 542,
    Name: "NJ_KAMAITACHI",
    Description: "Kamaitachi",
    MaxLevel: 5,
    Type: "Magic",
    TargetType: "Attack",
    Flags: {
      TargetTrap: true,
    },
    Range: [
      {
        Level: 1,
        Size: 5,
      },
      {
        Level: 2,
        Size: 6,
      },
      {
        Level: 3,
        Size: 7,
      },
      {
        Level: 4,
        Size: 8,
      },
      {
        Level: 5,
        Size: 9,
      },
    ],
    Hit: "Multi_Hit",
    HitCount: -5,
    Element: "Wind",
    SplashArea: 1,
    ActiveInstance: [
      {
        Level: 1,
        Max: 5,
      },
      {
        Level: 2,
        Max: 6,
      },
      {
        Level: 3,
        Max: 7,
      },
      {
        Level: 4,
        Max: 8,
      },
      {
        Level: 5,
        Max: 9,
      },
    ],
    CopyFlags: {
      Skill: {
        Plagiarism: true,
        Reproduce: true,
      },
    },
    CastCancel: true,
    CastTime: 1200,
    FixedCastTime: 300,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 24,
        },
        {
          Level: 2,
          Amount: 28,
        },
        {
          Level: 3,
          Amount: 32,
        },
        {
          Level: 4,
          Amount: 36,
        },
        {
          Level: 5,
          Amount: 40,
        },
      ],
      ItemCost: [
        {
          Item: "Wind_Stone",
          Amount: 1,
        },
      ],
    },
  },
  {
    Id: 543,
    Name: "NJ_NEN",
    Description: "Soul",
    MaxLevel: 5,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Hit: "Single",
    HitCount: 1,
    CastCancel: true,
    CastTime: [
      {
        Level: 1,
        Time: 4000,
      },
      {
        Level: 2,
        Time: 3200,
      },
      {
        Level: 3,
        Time: 2400,
      },
      {
        Level: 4,
        Time: 1600,
      },
      {
        Level: 5,
        Time: 800,
      },
    ],
    Duration1: [
      {
        Level: 1,
        Time: 30000,
      },
      {
        Level: 2,
        Time: 45000,
      },
      {
        Level: 3,
        Time: 60000,
      },
      {
        Level: 4,
        Time: 75000,
      },
      {
        Level: 5,
        Time: 90000,
      },
    ],
    FixedCastTime: [
      {
        Level: 1,
        Time: 1000,
      },
      {
        Level: 2,
        Time: 800,
      },
      {
        Level: 3,
        Time: 600,
      },
      {
        Level: 4,
        Time: 400,
      },
      {
        Level: 5,
        Time: 200,
      },
    ],
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 20,
        },
        {
          Level: 2,
          Amount: 30,
        },
        {
          Level: 3,
          Amount: 40,
        },
        {
          Level: 4,
          Amount: 50,
        },
        {
          Level: 5,
          Amount: 60,
        },
      ],
      HpRateCost: -5,
    },
    Status: "Nen",
  },
  {
    Id: 544,
    Name: "NJ_ISSEN",
    Description: "Final Strike",
    MaxLevel: 10,
    Type: "Misc",
    TargetType: "Attack",
    DamageFlags: {
      IgnoreFlee: true,
    },
    Range: -5,
    Hit: "Multi_Hit",
    HitCount: 1,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 55,
        },
        {
          Level: 2,
          Amount: 60,
        },
        {
          Level: 3,
          Amount: 65,
        },
        {
          Level: 4,
          Amount: 70,
        },
        {
          Level: 5,
          Amount: 75,
        },
        {
          Level: 6,
          Amount: 80,
        },
        {
          Level: 7,
          Amount: 85,
        },
        {
          Level: 8,
          Amount: 90,
        },
        {
          Level: 9,
          Amount: 95,
        },
        {
          Level: 10,
          Amount: 100,
        },
      ],
    },
  },
  {
    Id: 572,
    Name: "SL_DEATHKNIGHT",
    Description: "SL_DEATHKNIGHT",
    MaxLevel: 5,
    Duration1: [
      {
        Level: 1,
        Time: 150000,
      },
      {
        Level: 2,
        Time: 200000,
      },
      {
        Level: 3,
        Time: 250000,
      },
      {
        Level: 4,
        Time: 300000,
      },
      {
        Level: 5,
        Time: 350000,
      },
    ],
    FixedCastTime: 1000,
  },
  {
    Id: 573,
    Name: "SL_COLLECTOR",
    Description: "SL_COLLECTOR",
    MaxLevel: 5,
    Duration1: [
      {
        Level: 1,
        Time: 150000,
      },
      {
        Level: 2,
        Time: 200000,
      },
      {
        Level: 3,
        Time: 250000,
      },
      {
        Level: 4,
        Time: 300000,
      },
      {
        Level: 5,
        Time: 350000,
      },
    ],
    FixedCastTime: 1000,
  },
  {
    Id: 574,
    Name: "SL_NINJA",
    Description: "SL_NINJA",
    MaxLevel: 5,
    Duration1: [
      {
        Level: 1,
        Time: 150000,
      },
      {
        Level: 2,
        Time: 200000,
      },
      {
        Level: 3,
        Time: 250000,
      },
      {
        Level: 4,
        Time: 300000,
      },
      {
        Level: 5,
        Time: 350000,
      },
    ],
    FixedCastTime: 1000,
  },
  {
    Id: 575,
    Name: "SL_GUNNER",
    Description: "SL_GUNNER",
    MaxLevel: 5,
    Duration1: [
      {
        Level: 1,
        Time: 150000,
      },
      {
        Level: 2,
        Time: 200000,
      },
      {
        Level: 3,
        Time: 250000,
      },
      {
        Level: 4,
        Time: 300000,
      },
      {
        Level: 5,
        Time: 350000,
      },
    ],
    FixedCastTime: 1000,
  },
  {
    Id: 653,
    Name: "NPC_EARTHQUAKE",
    Description: "Earthquake",
    MaxLevel: 10,
    Type: "Magic",
    TargetType: "Self",
    DamageFlags: {
      Splash: true,
      SplashSplit: true,
      IgnoreDefense: true,
    },
    Flags: {
      IsNpc: true,
      TargetTrap: true,
      ShowScale: true,
      IgnoreLandProtector: true,
    },
    Hit: "Multi_Hit",
    HitCount: 1,
    SplashArea: [
      {
        Level: 1,
        Area: 5,
      },
      {
        Level: 2,
        Area: 7,
      },
      {
        Level: 3,
        Area: 9,
      },
      {
        Level: 4,
        Area: 11,
      },
      {
        Level: 5,
        Area: 13,
      },
      {
        Level: 6,
        Area: 5,
      },
      {
        Level: 7,
        Area: 7,
      },
      {
        Level: 8,
        Area: 9,
      },
      {
        Level: 9,
        Area: 11,
      },
      {
        Level: 10,
        Area: 13,
      },
    ],
    Duration1: 910,
    FixedCastTime: -1,
    Unit: {
      Id: "Earthquake",
      Range: [
        {
          Level: 1,
          Size: 5,
        },
        {
          Level: 2,
          Size: 7,
        },
        {
          Level: 3,
          Size: 9,
        },
        {
          Level: 4,
          Size: 11,
        },
        {
          Level: 5,
          Size: 13,
        },
        {
          Level: 6,
          Size: 5,
        },
        {
          Level: 7,
          Size: 7,
        },
        {
          Level: 8,
          Size: 9,
        },
        {
          Level: 9,
          Size: 11,
        },
        {
          Level: 10,
          Size: 13,
        },
      ],
      Interval: 300,
      Target: "Enemy",
      Flag: {
        PathCheck: true,
      },
    },
  },
  {
    Id: 654,
    Name: "NPC_FIREBREATH",
    Description: "Fire Breath",
    MaxLevel: 10,
    Type: "Weapon",
    TargetType: "Attack",
    Flags: {
      IsNpc: true,
    },
    Range: 6,
    Hit: "Single",
    HitCount: 1,
    Element: "Fire",
    SplashArea: 3,
    ActiveInstance: 14,
  },
  {
    Id: 655,
    Name: "NPC_ICEBREATH",
    Description: "Ice Breath",
    MaxLevel: 10,
    Type: "Weapon",
    TargetType: "Attack",
    Flags: {
      IsNpc: true,
    },
    Range: 6,
    Hit: "Single",
    HitCount: 1,
    Element: "Water",
    SplashArea: 3,
    ActiveInstance: 14,
    Duration2: 27000,
    Status: "Freeze",
  },
  {
    Id: 656,
    Name: "NPC_THUNDERBREATH",
    Description: "Thunder Breath",
    MaxLevel: 10,
    Type: "Weapon",
    TargetType: "Attack",
    Flags: {
      IsNpc: true,
    },
    Range: 6,
    Hit: "Single",
    HitCount: 1,
    Element: "Wind",
    SplashArea: 3,
    ActiveInstance: 14,
  },
  {
    Id: 657,
    Name: "NPC_ACIDBREATH",
    Description: "Acid Breath",
    MaxLevel: 10,
    Type: "Weapon",
    TargetType: "Attack",
    Flags: {
      IsNpc: true,
    },
    Range: 6,
    Hit: "Single",
    HitCount: 1,
    Element: "Poison",
    SplashArea: 3,
    ActiveInstance: 14,
    Duration2: 18000,
    Status: "Poison",
  },
  {
    Id: 658,
    Name: "NPC_DARKNESSBREATH",
    Description: "Darkness Breath",
    MaxLevel: 10,
    Type: "Weapon",
    TargetType: "Attack",
    Flags: {
      IsNpc: true,
    },
    Range: 6,
    Hit: "Single",
    HitCount: 1,
    Element: "Dark",
    SplashArea: 3,
    ActiveInstance: 14,
  },
  {
    Id: 659,
    Name: "NPC_DRAGONFEAR",
    Description: "Dragon Fear",
    MaxLevel: 5,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
      Splash: true,
    },
    Flags: {
      IsNpc: true,
      ShowScale: true,
    },
    Hit: "Single",
    HitCount: 1,
    SplashArea: [
      {
        Level: 1,
        Area: 2,
      },
      {
        Level: 2,
        Area: 5,
      },
      {
        Level: 3,
        Area: 8,
      },
      {
        Level: 4,
        Area: 11,
      },
      {
        Level: 5,
        Area: 14,
      },
    ],
    Duration2: [
      {
        Level: 1,
        Time: 5000,
      },
      {
        Level: 2,
        Time: 30000,
      },
      {
        Level: 3,
        Time: 30000,
      },
      {
        Level: 4,
        Time: 120000,
      },
    ],
  },
  {
    Id: 660,
    Name: "NPC_BLEEDING",
    Description: "Bleeding",
    MaxLevel: 5,
    Type: "Weapon",
    TargetType: "Attack",
    Flags: {
      IsNpc: true,
    },
    Range: -9,
    Hit: "Single",
    HitCount: 1,
    Element: "Weapon",
    Duration2: 108000,
    Status: "Bleeding",
  },
  {
    Id: 661,
    Name: "NPC_PULSESTRIKE",
    Description: "Pulse Strike",
    MaxLevel: 5,
    Type: "Weapon",
    TargetType: "Self",
    DamageFlags: {
      Splash: true,
    },
    Flags: {
      IsNpc: true,
      TargetTrap: true,
      ShowScale: true,
    },
    Hit: "Single",
    HitCount: 1,
    SplashArea: 7,
    Knockback: 7,
  },
  {
    Id: 662,
    Name: "NPC_HELLJUDGEMENT",
    Description: "Hell's Judgement",
    MaxLevel: 10,
    Type: "Weapon",
    TargetType: "Self",
    DamageFlags: {
      Splash: true,
    },
    Flags: {
      IsNpc: true,
      TargetTrap: true,
      ShowScale: true,
    },
    Hit: "Single",
    HitCount: 1,
    SplashArea: 14,
    Duration2: 18000,
    Status: "Curse",
  },
  {
    Id: 663,
    Name: "NPC_WIDESILENCE",
    Description: "Wide Silence",
    MaxLevel: 5,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
      Splash: true,
    },
    Flags: {
      IsNpc: true,
      ShowScale: true,
    },
    Hit: "Single",
    HitCount: 1,
    SplashArea: [
      {
        Level: 1,
        Area: 2,
      },
      {
        Level: 2,
        Area: 5,
      },
      {
        Level: 3,
        Area: 8,
      },
      {
        Level: 4,
        Area: 11,
      },
      {
        Level: 5,
        Area: 14,
      },
    ],
    Duration2: 18000,
    Status: "Silence",
  },
  {
    Id: 664,
    Name: "NPC_WIDEFREEZE",
    Description: "Wide Freeze",
    MaxLevel: 5,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
      Splash: true,
    },
    Flags: {
      IsNpc: true,
      ShowScale: true,
    },
    Hit: "Single",
    HitCount: 1,
    SplashArea: [
      {
        Level: 1,
        Area: 2,
      },
      {
        Level: 2,
        Area: 5,
      },
      {
        Level: 3,
        Area: 8,
      },
      {
        Level: 4,
        Area: 11,
      },
      {
        Level: 5,
        Area: 14,
      },
    ],
    Duration2: 27000,
    Status: "Freeze",
  },
  {
    Id: 665,
    Name: "NPC_WIDEBLEEDING",
    Description: "Wide Bleeding",
    MaxLevel: 5,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
      Splash: true,
    },
    Flags: {
      IsNpc: true,
      ShowScale: true,
    },
    Hit: "Single",
    HitCount: 1,
    SplashArea: [
      {
        Level: 1,
        Area: 2,
      },
      {
        Level: 2,
        Area: 5,
      },
      {
        Level: 3,
        Area: 8,
      },
      {
        Level: 4,
        Area: 11,
      },
      {
        Level: 5,
        Area: 14,
      },
    ],
    Duration2: 108000,
    Status: "Bleeding",
  },
  {
    Id: 666,
    Name: "NPC_WIDESTONE",
    Description: "Wide Petrify",
    MaxLevel: 5,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
      Splash: true,
    },
    Flags: {
      IsNpc: true,
      ShowScale: true,
    },
    Hit: "Single",
    HitCount: 1,
    SplashArea: [
      {
        Level: 1,
        Area: 2,
      },
      {
        Level: 2,
        Area: 5,
      },
      {
        Level: 3,
        Area: 8,
      },
      {
        Level: 4,
        Area: 11,
      },
      {
        Level: 5,
        Area: 14,
      },
    ],
    Duration1: 100,
    Duration2: 17000,
    Status: "StoneWait",
  },
  {
    Id: 667,
    Name: "NPC_WIDECONFUSE",
    Description: "Wide Confusion",
    MaxLevel: 5,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
      Splash: true,
    },
    Flags: {
      IsNpc: true,
      ShowScale: true,
    },
    Hit: "Single",
    HitCount: 1,
    SplashArea: [
      {
        Level: 1,
        Area: 2,
      },
      {
        Level: 2,
        Area: 5,
      },
      {
        Level: 3,
        Area: 8,
      },
      {
        Level: 4,
        Area: 11,
      },
      {
        Level: 5,
        Area: 14,
      },
    ],
    Duration2: 18000,
    Status: "Confusion",
  },
  {
    Id: 668,
    Name: "NPC_WIDESLEEP",
    Description: "Wide Sleep",
    MaxLevel: 5,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
      Splash: true,
    },
    Flags: {
      IsNpc: true,
      ShowScale: true,
    },
    Hit: "Single",
    HitCount: 1,
    SplashArea: [
      {
        Level: 1,
        Area: 2,
      },
      {
        Level: 2,
        Area: 5,
      },
      {
        Level: 3,
        Area: 8,
      },
      {
        Level: 4,
        Area: 11,
      },
      {
        Level: 5,
        Area: 14,
      },
    ],
    Duration2: 18000,
    Status: "Sleep",
  },
  {
    Id: 669,
    Name: "NPC_WIDESIGHT",
    Description: "Wide Sight",
    MaxLevel: 1,
    Type: "Magic",
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
      Splash: true,
    },
    Flags: {
      IsNpc: true,
      ShowScale: true,
    },
    Hit: "Single",
    HitCount: 1,
    Element: "Fire",
    SplashArea: 5,
    Duration1: 10000,
    Status: "Sight",
  },
  {
    Id: 670,
    Name: "NPC_EVILLAND",
    Description: "Evil Land",
    MaxLevel: 10,
    Type: "Magic",
    TargetType: "Ground",
    DamageFlags: {
      NoDamage: true,
      IgnoreElement: true,
      IgnoreFlee: true,
      IgnoreDefCard: true,
    },
    Flags: {
      IsNpc: true,
      ShowScale: true,
    },
    Range: 7,
    Hit: "Single",
    HitCount: 1,
    Element: "Dark",
    Duration1: [
      {
        Level: 1,
        Time: 3900,
      },
      {
        Level: 2,
        Time: 4900,
      },
      {
        Level: 3,
        Time: 5900,
      },
      {
        Level: 4,
        Time: 6900,
      },
      {
        Level: 5,
        Time: 7900,
      },
      {
        Level: 6,
        Time: 8900,
      },
      {
        Level: 7,
        Time: 9900,
      },
      {
        Level: 8,
        Time: 10900,
      },
      {
        Level: 9,
        Time: 11900,
      },
      {
        Level: 10,
        Time: 12900,
      },
    ],
    Duration2: 18000,
    Unit: {
      Id: "Evilland",
      Layout: 1,
      Range: [
        {
          Level: 1,
          Size: 5,
        },
        {
          Level: 2,
          Size: 5,
        },
        {
          Level: 3,
          Size: 5,
        },
        {
          Level: 4,
          Size: 5,
        },
        {
          Level: 5,
          Size: 5,
        },
        {
          Level: 6,
          Size: 5,
        },
        {
          Level: 7,
          Size: 5,
        },
        {
          Level: 8,
          Size: 5,
        },
        {
          Level: 9,
          Size: 5,
        },
        {
          Level: 10,
          Size: 13,
        },
      ],
      Interval: 1000,
      Flag: {
        NoOverlap: true,
      },
    },
    Status: "Blind",
  },
  {
    Id: 671,
    Name: "NPC_MAGICMIRROR",
    Description: "Magic Mirror",
    MaxLevel: 5,
    Type: "Magic",
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      IsNpc: true,
    },
    Hit: "Single",
    HitCount: 1,
    Duration1: [
      {
        Level: 1,
        Time: 30000,
      },
      {
        Level: 2,
        Time: 30000,
      },
      {
        Level: 3,
        Time: 30000,
      },
      {
        Level: 4,
        Time: 30000,
      },
      {
        Level: 5,
        Time: 30000,
      },
      {
        Level: 6,
        Time: 2000,
      },
      {
        Level: 7,
        Time: 2000,
      },
      {
        Level: 8,
        Time: 2000,
      },
      {
        Level: 9,
        Time: 2000,
      },
      {
        Level: 10,
        Time: 2000,
      },
    ],
    Status: "MagicMirror",
  },
  {
    Id: 672,
    Name: "NPC_SLOWCAST",
    Description: "Slow Cast",
    MaxLevel: 5,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
      Splash: true,
    },
    Flags: {
      IsNpc: true,
      ShowScale: true,
    },
    Hit: "Single",
    HitCount: 1,
    SplashArea: [
      {
        Level: 1,
        Area: 2,
      },
      {
        Level: 2,
        Area: 5,
      },
      {
        Level: 3,
        Area: 8,
      },
      {
        Level: 4,
        Area: 11,
      },
      {
        Level: 5,
        Area: 14,
      },
    ],
    Duration2: 30000,
    Status: "SlowCast",
  },
  {
    Id: 673,
    Name: "NPC_CRITICALWOUND",
    Description: "Critical Wounds",
    MaxLevel: 5,
    Type: "Weapon",
    TargetType: "Attack",
    Flags: {
      IsNpc: true,
    },
    Range: -7,
    Hit: "Single",
    HitCount: 1,
    Element: "Weapon",
    Duration2: 30000,
    Status: "CriticalWound",
  },
  {
    Id: 674,
    Name: "NPC_EXPULSION",
    Description: "Expulsion",
    MaxLevel: 1,
    TargetType: "Attack",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      IsNpc: true,
    },
    Range: -7,
    Hit: "Single",
    HitCount: 1,
    Element: "Weapon",
  },
  {
    Id: 675,
    Name: "NPC_STONESKIN",
    Description: "Stone Skin",
    MaxLevel: 5,
    Type: "Magic",
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      IsNpc: true,
    },
    Hit: "Single",
    HitCount: 1,
    Duration1: [
      {
        Level: 1,
        Time: 30000,
      },
      {
        Level: 2,
        Time: 30000,
      },
      {
        Level: 3,
        Time: 30000,
      },
      {
        Level: 4,
        Time: 30000,
      },
      {
        Level: 5,
        Time: 30000,
      },
      {
        Level: 6,
        Time: 2000,
      },
      {
        Level: 7,
        Time: 2000,
      },
      {
        Level: 8,
        Time: 2000,
      },
      {
        Level: 9,
        Time: 2000,
      },
      {
        Level: 10,
        Time: 2000,
      },
    ],
    Status: "ArmorChange",
  },
  {
    Id: 676,
    Name: "NPC_ANTIMAGIC",
    Description: "Anti Magic",
    MaxLevel: 5,
    Type: "Magic",
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      IsNpc: true,
    },
    Hit: "Single",
    HitCount: 1,
    Duration1: [
      {
        Level: 1,
        Time: 30000,
      },
      {
        Level: 2,
        Time: 30000,
      },
      {
        Level: 3,
        Time: 30000,
      },
      {
        Level: 4,
        Time: 30000,
      },
      {
        Level: 5,
        Time: 30000,
      },
      {
        Level: 6,
        Time: 2000,
      },
      {
        Level: 7,
        Time: 2000,
      },
      {
        Level: 8,
        Time: 2000,
      },
      {
        Level: 9,
        Time: 2000,
      },
      {
        Level: 10,
        Time: 2000,
      },
    ],
    Status: "ArmorChange",
  },
  {
    Id: 677,
    Name: "NPC_WIDECURSE",
    Description: "Wide Curse",
    MaxLevel: 5,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
      Splash: true,
    },
    Flags: {
      IsNpc: true,
      ShowScale: true,
    },
    Hit: "Single",
    HitCount: 1,
    SplashArea: [
      {
        Level: 1,
        Area: 2,
      },
      {
        Level: 2,
        Area: 5,
      },
      {
        Level: 3,
        Area: 8,
      },
      {
        Level: 4,
        Area: 11,
      },
      {
        Level: 5,
        Area: 14,
      },
    ],
    Duration2: 18000,
    Status: "Curse",
  },
  {
    Id: 678,
    Name: "NPC_WIDESTUN",
    Description: "Wide Stun",
    MaxLevel: 5,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
      Splash: true,
    },
    Flags: {
      IsNpc: true,
      ShowScale: true,
    },
    Hit: "Single",
    HitCount: 1,
    SplashArea: [
      {
        Level: 1,
        Area: 2,
      },
      {
        Level: 2,
        Area: 5,
      },
      {
        Level: 3,
        Area: 8,
      },
      {
        Level: 4,
        Area: 11,
      },
      {
        Level: 5,
        Area: 14,
      },
    ],
    Duration2: 4500,
    Status: "Stun",
  },
  {
    Id: 679,
    Name: "NPC_VAMPIRE_GIFT",
    Description: "Vampire Gift",
    MaxLevel: 10,
    Type: "Weapon",
    TargetType: "Self",
    DamageFlags: {
      Splash: true,
    },
    Flags: {
      IsNpc: true,
      ShowScale: true,
    },
    Hit: "Single",
    HitCount: 1,
    SplashArea: [
      {
        Level: 1,
        Area: 5,
      },
      {
        Level: 2,
        Area: 7,
      },
      {
        Level: 3,
        Area: 9,
      },
      {
        Level: 4,
        Area: 11,
      },
      {
        Level: 5,
        Area: 13,
      },
      {
        Level: 6,
        Area: 13,
      },
      {
        Level: 7,
        Area: 13,
      },
      {
        Level: 8,
        Area: 13,
      },
      {
        Level: 9,
        Area: 13,
      },
      {
        Level: 10,
        Area: 13,
      },
    ],
  },
  {
    Id: 680,
    Name: "NPC_WIDESOULDRAIN",
    Description: "Wide Soul Drain",
    MaxLevel: 10,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
      Splash: true,
    },
    Flags: {
      IsNpc: true,
      ShowScale: true,
    },
    Hit: "Single",
    HitCount: 1,
    SplashArea: [
      {
        Level: 1,
        Area: 5,
      },
      {
        Level: 2,
        Area: 7,
      },
      {
        Level: 3,
        Area: 9,
      },
      {
        Level: 4,
        Area: 11,
      },
      {
        Level: 5,
        Area: 13,
      },
      {
        Level: 6,
        Area: 13,
      },
      {
        Level: 7,
        Area: 13,
      },
      {
        Level: 8,
        Area: 13,
      },
      {
        Level: 9,
        Area: 13,
      },
      {
        Level: 10,
        Area: 13,
      },
    ],
  },
  {
    Id: 681,
    Name: "ALL_INCCARRY",
    Description: "Increase Weight Limit R",
    MaxLevel: 10,
    Flags: {
      IsQuest: true,
    },
  },
  {
    Id: 682,
    Name: "NPC_TALK",
    Description: "Talk",
    MaxLevel: 1,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      IsNpc: true,
    },
    HitCount: 1,
  },
  {
    Id: 683,
    Name: "NPC_HELLPOWER",
    Description: "Hell Power",
    MaxLevel: 5,
    TargetType: "Attack",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      IsNpc: true,
    },
    Range: -7,
    HitCount: 1,
    Duration2: 180000,
    Status: "HellPower",
  },
  {
    Id: 684,
    Name: "NPC_WIDEHELLDIGNITY",
    Description: "Hell Dignity",
    MaxLevel: 1,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
      Splash: true,
    },
    Flags: {
      IsNpc: true,
    },
    Hit: "Single",
    HitCount: 1,
    SplashArea: -1,
    Duration2: 180000,
    Status: "HellPower",
  },
  {
    Id: 685,
    Name: "NPC_INVINCIBLE",
    Description: "Invincible",
    MaxLevel: 1,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      IsNpc: true,
    },
    HitCount: 1,
    Duration1: -1,
    Status: "Invincible",
  },
  {
    Id: 686,
    Name: "NPC_INVINCIBLEOFF",
    Description: "Invincible off",
    MaxLevel: 1,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      IsNpc: true,
    },
    HitCount: 1,
    Duration1: 60000,
    Status: "InvincibleOff",
  },
  {
    Id: 687,
    Name: "NPC_ALLHEAL",
    Description: "Full Heal",
    MaxLevel: 1,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      IsNpc: true,
    },
    Hit: "Single",
    HitCount: 1,
    CastCancel: true,
  },
  {
    Id: 688,
    Name: "GM_SANDMAN",
    Description: "GM Sandman",
    MaxLevel: 10,
    TargetType: "Support",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      NoTargetSelf: true,
    },
    Range: 9,
    Hit: "Single",
    Requires: {
      SpCost: 1,
    },
  },
  {
    Id: 689,
    Name: "CASH_BLESSING",
    Description: "Party Blessing",
    MaxLevel: 10,
    Type: "Magic",
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
      Splash: true,
    },
    Flags: {
      IsNpc: true,
    },
    Hit: "Single",
    HitCount: 1,
    SplashArea: -1,
    CastCancel: true,
    Duration1: [
      {
        Level: 1,
        Time: 60000,
      },
      {
        Level: 2,
        Time: 80000,
      },
      {
        Level: 3,
        Time: 100000,
      },
      {
        Level: 4,
        Time: 120000,
      },
      {
        Level: 5,
        Time: 140000,
      },
      {
        Level: 6,
        Time: 160000,
      },
      {
        Level: 7,
        Time: 180000,
      },
      {
        Level: 8,
        Time: 200000,
      },
      {
        Level: 9,
        Time: 220000,
      },
      {
        Level: 10,
        Time: 240000,
      },
    ],
    Status: "Blessing",
  },
  {
    Id: 690,
    Name: "CASH_INCAGI",
    Description: "Party Increase AGI",
    MaxLevel: 10,
    Type: "Magic",
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
      Splash: true,
    },
    Flags: {
      IsNpc: true,
    },
    Hit: "Single",
    HitCount: 1,
    SplashArea: -1,
    CastCancel: true,
    Duration1: [
      {
        Level: 1,
        Time: 60000,
      },
      {
        Level: 2,
        Time: 80000,
      },
      {
        Level: 3,
        Time: 100000,
      },
      {
        Level: 4,
        Time: 120000,
      },
      {
        Level: 5,
        Time: 140000,
      },
      {
        Level: 6,
        Time: 160000,
      },
      {
        Level: 7,
        Time: 180000,
      },
      {
        Level: 8,
        Time: 200000,
      },
      {
        Level: 9,
        Time: 220000,
      },
      {
        Level: 10,
        Time: 240000,
      },
    ],
    Status: "IncreaseAgi",
  },
  {
    Id: 691,
    Name: "CASH_ASSUMPTIO",
    Description: "Party Assumptio",
    MaxLevel: 5,
    Type: "Magic",
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
      Splash: true,
    },
    Flags: {
      IsNpc: true,
    },
    Hit: "Single",
    HitCount: 1,
    SplashArea: -1,
    CastCancel: true,
    Duration1: [
      {
        Level: 1,
        Time: 20000,
      },
      {
        Level: 2,
        Time: 40000,
      },
      {
        Level: 3,
        Time: 60000,
      },
      {
        Level: 4,
        Time: 80000,
      },
      {
        Level: 5,
        Time: 100000,
      },
    ],
    Status: "Assumptio",
  },
  {
    Id: 692,
    Name: "ALL_CATCRY",
    Description: "Cat Cry",
    MaxLevel: 9,
    Flags: {
      IsNpc: true,
    },
    AfterCastActDelay: 5000,
  },
  {
    Id: 693,
    Name: "ALL_PARTYFLEE",
    Description: "Party Flee",
    MaxLevel: 1,
    Type: "Magic",
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
      Splash: true,
    },
    Flags: {
      IsNpc: true,
    },
    Hit: "Single",
    HitCount: 1,
    SplashArea: -1,
    CastCancel: true,
    Cooldown: 300000,
    Status: "PartyFlee",
  },
  {
    Id: 694,
    Name: "ALL_ANGEL_PROTECT",
    Description: "Angel's Protection",
    MaxLevel: 9,
    Flags: {
      IsNpc: true,
    },
    Duration1: 30000,
  },
  {
    Id: 695,
    Name: "ALL_DREAM_SUMMERNIGHT",
    Description: "Summer Night Dream",
    MaxLevel: 9,
    Flags: {
      IsNpc: true,
    },
    AfterCastActDelay: 12000,
  },
  {
    Id: 697,
    Name: "ALL_REVERSEORCISH",
    Description: "Reverse Orcish",
    MaxLevel: 1,
    Type: "Magic",
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      IsNpc: true,
    },
    Range: 9,
    Hit: "Single",
    HitCount: 1,
    CastCancel: true,
    Duration1: 1200000,
    Status: "Orcish",
  },
  {
    Id: 698,
    Name: "ALL_WEWISH",
    Description: "Christmas Carol",
    MaxLevel: 1,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      IsNpc: true,
    },
    Hit: "Single",
    HitCount: 1,
    AfterCastActDelay: 20000,
    Requires: {
      SpCost: 1,
    },
  },
  {
    Id: 706,
    Name: "NPC_VENOMFOG",
    Description: "Venom Fog",
    MaxLevel: 10,
    Type: "Magic",
    TargetType: "Self",
    Flags: {
      IsNpc: true,
      IgnoreLandProtector: true,
      ShowScale: true,
    },
    Hit: "Single",
    HitCount: 1,
    Element: "Poison",
    Duration1: 3000,
    Unit: {
      Id: "Venomfog",
      Layout: 2,
      Interval: 1000,
      Target: "Enemy",
      Flag: {
        NoOverlap: true,
        PathCheck: true,
      },
    },
  },
  {
    Id: 707,
    Name: "NPC_MILLENNIUMSHIELD",
    Description: "Millenium Shield 2",
    MaxLevel: 1,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      IsNpc: true,
    },
    Range: 1,
    Hit: "Single",
    HitCount: 1,
    Duration1: 900000,
    Status: "MillenniumShield",
  },
  {
    Id: 708,
    Name: "NPC_COMET",
    Description: "Comet 2",
    MaxLevel: 5,
    Type: "Magic",
    TargetType: "Ground",
    DamageFlags: {
      Splash: true,
    },
    Flags: {
      AlterRangeRadius: true,
      ShowScale: true,
    },
    Range: 11,
    Hit: "Multi_Hit",
    HitCount: -20,
    Duration1: 18000,
    SplashArea: 9,
    Knockback: 2,
    CastCancel: true,
    Unit: {
      Id: "Dummyskill",
      Range: 9,
      Interval: 1000,
      Target: "Enemy",
      Flag: {
        PathCheck: true,
      },
    },
    Status: "Burning",
  },
  {
    Id: 709,
    Name: "NPC_ICEMINE",
    Description: "Ice Mine",
    MaxLevel: 10,
    Type: "Magic",
    TargetType: "Self",
    DamageFlags: {
      IgnoreDefense: true,
      IgnoreDefCard: true,
    },
    Flags: {
      IsNpc: true,
      ShowScale: true,
    },
    Hit: "Single",
    HitCount: 1,
    Duration1: 10000,
    Unit: {
      Id: "Icemine",
      Range: 3,
      Interval: 1000,
      Target: "Enemy",
      Flag: {
        NoOverlap: true,
        PathCheck: true,
        RemovedByFireRain: true,
      },
    },
  },
  {
    Id: 711,
    Name: "NPC_FLAMECROSS",
    Description: "Flame Cross",
    MaxLevel: 5,
    Type: "Magic",
    TargetType: "Self",
    DamageFlags: {
      IgnoreDefCard: true,
    },
    Flags: {
      IsNpc: true,
      IgnoreLandProtector: true,
      ShowScale: true,
    },
    Hit: "Single",
    HitCount: 1,
    Knockback: 2,
    Duration1: 3000,
    Unit: {
      Id: "Flamecross",
      Layout: -1,
      Interval: 1000,
      Target: "Enemy",
      Flag: {
        NoOverlap: true,
        PathCheck: true,
        RemovedByFireRain: true,
      },
    },
  },
  {
    Id: 712,
    Name: "NPC_PULSESTRIKE2",
    Description: "Pulse Strike 2",
    MaxLevel: 1,
    Type: "Magic",
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
      Splash: true,
    },
    Flags: {
      IsNpc: true,
      TargetTrap: true,
      ShowScale: true,
    },
    Range: 1,
    Hit: "Single",
    HitCount: 1,
    Element: "Dark",
    SplashArea: 5,
    Knockback: 3,
    Duration1: 1000,
  },
  {
    Id: 713,
    Name: "NPC_DANCINGBLADE",
    Description: "Dancing Blade",
    MaxLevel: 1,
    Type: "None",
    TargetType: "Attack",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      IsNpc: true,
    },
    Range: 10,
    Hit: "Single",
    HitCount: 1,
    CastTime: 3500,
    AfterCastActDelay: 3000,
    Duration1: 100,
    FixedCastTime: 1000,
  },
  {
    Id: 714,
    Name: "NPC_DANCINGBLADE_ATK",
    Description: "Dancing Blade Attack",
    MaxLevel: 1,
    Type: "Weapon",
    TargetType: "Attack",
    Flags: {
      IsNpc: true,
    },
    Range: 10,
    Hit: "Single",
    HitCount: 1,
  },
  {
    Id: 715,
    Name: "NPC_DARKPIERCING",
    Description: "Dark Piercing",
    MaxLevel: 1,
    Type: "Weapon",
    TargetType: "Attack",
    DamageFlags: {
      Splash: true,
    },
    Flags: {
      IsNpc: true,
    },
    Range: 3,
    Hit: "Single",
    HitCount: 1,
    SplashArea: 2,
    ActiveInstance: 14,
    CastCancel: true,
    AfterCastActDelay: 2000,
  },
  {
    Id: 716,
    Name: "NPC_MAXPAIN",
    Description: "Max Pain",
    MaxLevel: 10,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      IsNpc: true,
    },
    Hit: "Single",
    Duration1: 10000,
    Status: "MaxPain",
  },
  {
    Id: 717,
    Name: "NPC_MAXPAIN_ATK",
    Description: "Max Pain Attack",
    MaxLevel: 10,
    Type: "Misc",
    TargetType: "Attack",
    DamageFlags: {
      Splash: true,
      IgnoreElement: true,
      IgnoreFlee: true,
      IgnoreDefCard: true,
    },
    Flags: {
      IsNpc: true,
    },
    Hit: "Single",
    HitCount: 1,
    SplashArea: 18,
  },
  {
    Id: 718,
    Name: "NPC_DEATHSUMMON",
    Description: "Death Summon",
    MaxLevel: 10,
    Type: "Magic",
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      IsNpc: true,
    },
    HitCount: 1,
  },
  {
    Id: 719,
    Name: "NPC_HELLBURNING",
    Description: "Hell Burning",
    MaxLevel: 1,
    Type: "Magic",
    TargetType: "Self",
    Flags: {
      IsNpc: true,
      IgnoreLandProtector: true,
    },
    Hit: "Single",
    HitCount: 1,
    Element: "Fire",
    Duration1: 3000,
    Unit: {
      Id: "Hellburning",
      Layout: 1,
      Interval: 20,
      Target: "Enemy",
      Flag: {
        NoOverlap: true,
        PathCheck: true,
        RangedSingleUnit: true,
      },
    },
  },
  {
    Id: 720,
    Name: "NPC_JACKFROST",
    Description: "Jack Frost 2",
    MaxLevel: 5,
    Type: "Magic",
    TargetType: "Self",
    DamageFlags: {
      Splash: true,
    },
    Flags: {
      ShowScale: true,
    },
    Hit: "Multi_Hit",
    HitCount: -5,
    Element: "Water",
    SplashArea: [
      {
        Level: 1,
        Area: 5,
      },
      {
        Level: 2,
        Area: 6,
      },
      {
        Level: 3,
        Area: 7,
      },
      {
        Level: 4,
        Area: 8,
      },
      {
        Level: 5,
        Area: 9,
      },
    ],
    Duration1: [
      {
        Level: 1,
        Time: 10000,
      },
      {
        Level: 2,
        Time: 15000,
      },
      {
        Level: 3,
        Time: 20000,
      },
      {
        Level: 4,
        Time: 25000,
      },
      {
        Level: 5,
        Time: 30000,
      },
    ],
    Status: "Freeze",
  },
  {
    Id: 721,
    Name: "NPC_WIDEWEB",
    Description: "Wide Web",
    MaxLevel: 1,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
      Splash: true,
    },
    Flags: {
      IsNpc: true,
      ShowScale: true,
    },
    Range: 1,
    Hit: "Single",
    HitCount: 1,
    SplashArea: 7,
    Duration2: 10000,
    Status: "WideWeb",
  },
  {
    Id: 722,
    Name: "NPC_WIDESUCK",
    Description: "Wide Suck",
    MaxLevel: 1,
    Type: "Misc",
    TargetType: "Ground",
    DamageFlags: {
      Splash: true,
      IgnoreFlee: true,
    },
    Flags: {
      IsNpc: true,
    },
    Range: 1,
    Hit: "Single",
    HitCount: 1,
    SplashArea: 13,
    Duration1: 3000,
  },
  {
    Id: 723,
    Name: "NPC_STORMGUST2",
    Description: "Storm Gust 2",
    MaxLevel: 3,
    Type: "Magic",
    TargetType: "Ground",
    Flags: {
      IsNpc: true,
      ShowScale: true,
    },
    Range: 9,
    Hit: "Single",
    HitCount: 1,
    Element: "Water",
    Duration1: 4500,
    Duration2: 27000,
    Unit: {
      Id: "Dummyskill",
      Layout: 5,
      Range: 1,
      Interval: 450,
      Target: "Enemy",
      Flag: {
        NoOverlap: true,
        PathCheck: true,
      },
    },
    Status: "Freeze",
  },
  {
    Id: 724,
    Name: "NPC_FIRESTORM",
    Description: "Fire Storm",
    MaxLevel: 3,
    Type: "Magic",
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
      Splash: true,
    },
    Flags: {
      IsNpc: true,
    },
    Range: 1,
    Hit: "Multi_Hit",
    HitCount: [
      {
        Level: 1,
        Count: 1,
      },
      {
        Level: 2,
        Count: 3,
      },
      {
        Level: 3,
        Count: 5,
      },
    ],
    Element: "Fire",
    SplashArea: 3,
    Knockback: 3,
    Duration1: 10000,
    Status: "Burnt",
  },
  {
    Id: 725,
    Name: "NPC_REVERBERATION",
    Description: "Reverberation 2",
    MaxLevel: 5,
    TargetType: "Ground",
    DamageFlags: {
      NoDamage: true,
      Splash: true,
    },
    Flags: {
      IsNpc: true,
      IsTrap: true,
      DisableNearNpc: true,
      ShowScale: true,
    },
    Range: 1,
    Hit: "Single",
    HitCount: 1,
    SplashArea: 2,
    Duration1: [
      {
        Level: 1,
        Time: 9000,
      },
      {
        Level: 2,
        Time: 10000,
      },
      {
        Level: 3,
        Time: 11000,
      },
      {
        Level: 4,
        Time: 12000,
      },
      {
        Level: 5,
        Time: 13000,
      },
    ],
    Unit: {
      Id: "Reverberation",
      Interval: 1000,
      Target: "Enemy",
      Flag: {
        NoKnockback: true,
      },
    },
  },
  {
    Id: 726,
    Name: "NPC_REVERBERATION_ATK",
    Description: "Reverberation Attack",
    MaxLevel: 5,
    Type: "Weapon",
    TargetType: "Attack",
    DamageFlags: {
      Splash: true,
      SplashSplit: true,
    },
    Flags: {
      IsNpc: true,
    },
    Range: 1,
    Hit: "Single",
    HitCount: 1,
    SplashArea: 2,
  },
  {
    Id: 727,
    Name: "NPC_LEX_AETERNA",
    Description: "Lex Aeterna 2",
    MaxLevel: 5,
    Type: "Magic",
    TargetType: "Ground",
    DamageFlags: {
      NoDamage: true,
      Splash: true,
    },
    Flags: {
      IsNpc: true,
      ShowScale: true,
    },
    Range: 9,
    Hit: "Single",
    SplashArea: [
      {
        Level: 1,
        Area: 2,
      },
      {
        Level: 2,
        Area: 5,
      },
      {
        Level: 3,
        Area: 8,
      },
      {
        Level: 4,
        Area: 11,
      },
      {
        Level: 5,
        Area: 14,
      },
    ],
    CastCancel: true,
  },
  {
    Id: 728,
    Name: "NPC_ARROWSTORM",
    Description: "NPC Arrow Storm",
    MaxLevel: 5,
    Type: "Weapon",
    TargetType: "Attack",
    DamageFlags: {
      Splash: true,
    },
    Flags: {
      IsNpc: true,
    },
    Range: 9,
    Hit: "Multi_Hit",
    HitCount: -3,
    SplashArea: [
      {
        Level: 1,
        Area: 3,
      },
      {
        Level: 2,
        Area: 5,
      },
      {
        Level: 3,
        Area: 7,
      },
      {
        Level: 4,
        Area: 11,
      },
      {
        Level: 5,
        Area: 13,
      },
    ],
  },
  {
    Id: 729,
    Name: "NPC_CHEAL",
    Description: "NPC Coluceo Heal",
    MaxLevel: 5,
    Type: "Magic",
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
      Splash: true,
    },
    Flags: {
      IsNpc: true,
      ShowScale: true,
    },
    Hit: "Single",
    HitCount: 1,
    Element: "Holy",
    SplashArea: [
      {
        Level: 1,
        Area: 3,
      },
      {
        Level: 2,
        Area: 5,
      },
      {
        Level: 3,
        Area: 7,
      },
      {
        Level: 4,
        Area: 9,
      },
      {
        Level: 5,
        Area: 11,
      },
    ],
  },
  {
    Id: 730,
    Name: "NPC_SR_CURSEDCIRCLE",
    Description: "Cursed Circle",
    MaxLevel: 5,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
      Splash: true,
    },
    Flags: {
      IsNpc: true,
      ShowScale: true,
    },
    Range: 1,
    Hit: "Single",
    HitCount: 1,
    SplashArea: [
      {
        Level: 1,
        Area: 1,
      },
      {
        Level: 2,
        Area: 2,
      },
      {
        Level: 3,
        Area: 3,
      },
      {
        Level: 4,
        Area: 4,
      },
      {
        Level: 5,
        Area: 5,
      },
    ],
    Duration1: 7000,
    Status: "CursedCircle_Target",
  },
  {
    Id: 731,
    Name: "NPC_DRAGONBREATH",
    Description: "NPC Dragon Breath",
    MaxLevel: 10,
    Type: "Weapon",
    TargetType: "Ground",
    DamageFlags: {
      Splash: true,
      IgnoreFlee: true,
    },
    Flags: {
      IsNpc: true,
      ShowScale: true,
    },
    Range: 3,
    Hit: "Single",
    HitCount: 1,
    Element: [
      {
        Level: 1,
        Element: "Fire",
      },
      {
        Level: 2,
        Element: "Fire",
      },
      {
        Level: 3,
        Element: "Fire",
      },
      {
        Level: 4,
        Element: "Fire",
      },
      {
        Level: 5,
        Element: "Fire",
      },
      {
        Level: 6,
        Element: "Water",
      },
      {
        Level: 7,
        Element: "Water",
      },
      {
        Level: 8,
        Element: "Water",
      },
      {
        Level: 9,
        Element: "Water",
      },
      {
        Level: 10,
        Element: "Water",
      },
    ],
    SplashArea: 4,
    Duration1: 10000,
  },
  {
    Id: 732,
    Name: "NPC_FATALMENACE",
    Description: "Fatal Menace",
    MaxLevel: 5,
    Type: "Weapon",
    TargetType: "Attack",
    DamageFlags: {
      Splash: true,
    },
    Flags: {
      IsNpc: true,
    },
    Range: 1,
    Hit: "Single",
    HitCount: 1,
    SplashArea: [
      {
        Level: 1,
        Area: 1,
      },
      {
        Level: 2,
        Area: 2,
      },
      {
        Level: 3,
        Area: 3,
      },
      {
        Level: 4,
        Area: 4,
      },
      {
        Level: 5,
        Area: 5,
      },
    ],
  },
  {
    Id: 733,
    Name: "NPC_MAGMA_ERUPTION",
    Description: "NPC Magma Eruption",
    MaxLevel: 5,
    Type: "Weapon",
    TargetType: "Ground",
    DamageFlags: {
      Splash: true,
    },
    Flags: {
      IsNpc: true,
      ShowScale: true,
    },
    Range: 1,
    Hit: "Single",
    HitCount: 1,
    Element: "Fire",
    SplashArea: 3,
    ActiveInstance: 3,
    Duration1: 2500,
    Unit: {
      Id: "Magma_Eruption",
      Range: 3,
      Interval: 500,
      Target: "Enemy",
      Flag: {
        NoOverlap: true,
        PathCheck: true,
      },
    },
    Status: "Stun",
  },
  {
    Id: 734,
    Name: "NPC_MAGMA_ERUPTION_DOTDAMAGE",
    Description: "NPC Magma Eruption Dot Damage",
    MaxLevel: 5,
    Type: "Misc",
    TargetType: "Attack",
    DamageFlags: {
      IgnoreFlee: true,
      IgnoreDefCard: true,
    },
    Flags: {
      IsNpc: true,
    },
    Range: 1,
    Hit: "Single",
    HitCount: 1,
  },
  {
    Id: 735,
    Name: "NPC_MANDRAGORA",
    Description: "NPC Howling of Mandragora",
    MaxLevel: 5,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
      Splash: true,
    },
    Flags: {
      IsNpc: true,
      ShowScale: true,
    },
    Range: 1,
    Hit: "Single",
    HitCount: 1,
    SplashArea: [
      {
        Level: 1,
        Area: 5,
      },
      {
        Level: 2,
        Area: 6,
      },
      {
        Level: 3,
        Area: 7,
      },
      {
        Level: 4,
        Area: 8,
      },
      {
        Level: 5,
        Area: 9,
      },
    ],
    Duration1: [
      {
        Level: 1,
        Time: 10000,
      },
      {
        Level: 2,
        Time: 15000,
      },
      {
        Level: 3,
        Time: 20000,
      },
      {
        Level: 4,
        Time: 25000,
      },
      {
        Level: 5,
        Time: 30000,
      },
    ],
    Status: "Mandragora",
  },
  {
    Id: 736,
    Name: "NPC_PSYCHIC_WAVE",
    Description: "Psychic Wave",
    MaxLevel: 10,
    Type: "Magic",
    TargetType: "Ground",
    Range: 9,
    Flags: {
      IsNpc: true,
      ShowScale: true,
    },
    Hit: "Single",
    HitCount: 1,
    Element: "Fire",
    Duration1: 3200,
    Unit: {
      Id: "Psychic_Wave",
      Range: [
        {
          Level: 1,
          Size: 3,
        },
        {
          Level: 2,
          Size: 4,
        },
        {
          Level: 3,
          Size: 5,
        },
        {
          Level: 4,
          Size: 5,
        },
        {
          Level: 5,
          Size: 5,
        },
        {
          Level: 6,
          Size: 5,
        },
        {
          Level: 7,
          Size: 5,
        },
        {
          Level: 8,
          Size: 5,
        },
        {
          Level: 9,
          Size: 5,
        },
        {
          Level: 10,
          Size: 5,
        },
      ],
      Interval: 500,
      Target: "Enemy",
      Flag: {
        NoOverlap: true,
        PathCheck: true,
      },
    },
  },
  {
    Id: 737,
    Name: "NPC_RAYOFGENESIS",
    Description: "NPC Ray of Genesis",
    MaxLevel: 10,
    Type: "Magic",
    TargetType: "Self",
    DamageFlags: {
      Splash: true,
    },
    Flags: {
      IsNpc: true,
      ShowScale: true,
    },
    Range: 1,
    Hit: "Multi_Hit",
    HitCount: -7,
    Element: "Holy",
    SplashArea: [
      {
        Level: 1,
        Area: 5,
      },
      {
        Level: 2,
        Area: 5,
      },
      {
        Level: 3,
        Area: 8,
      },
      {
        Level: 4,
        Area: 8,
      },
      {
        Level: 5,
        Area: 11,
      },
      {
        Level: 6,
        Area: 11,
      },
      {
        Level: 7,
        Area: 13,
      },
      {
        Level: 8,
        Area: 13,
      },
      {
        Level: 9,
        Area: 13,
      },
      {
        Level: 10,
        Area: 13,
      },
    ],
    Duration1: 10000,
  },
  {
    Id: 738,
    Name: "NPC_VENOMIMPRESS",
    Description: "NPC Venom Impress",
    MaxLevel: 5,
    TargetType: "Attack",
    Flags: {
      IsNpc: true,
    },
    Range: [
      {
        Level: 1,
        Size: 2,
      },
      {
        Level: 2,
        Size: 3,
      },
      {
        Level: 3,
        Size: 4,
      },
      {
        Level: 4,
        Size: 5,
      },
      {
        Level: 5,
        Size: 6,
      },
    ],
    Hit: "Single",
    HitCount: 1,
    Duration1: [
      {
        Level: 1,
        Time: 10000,
      },
      {
        Level: 2,
        Time: 20000,
      },
      {
        Level: 3,
        Time: 30000,
      },
      {
        Level: 4,
        Time: 40000,
      },
      {
        Level: 5,
        Time: 50000,
      },
    ],
  },
  {
    Id: 739,
    Name: "NPC_CLOUD_KILL",
    Description: "Cloud Kill",
    MaxLevel: 5,
    Type: "Magic",
    TargetType: "Ground",
    Range: 9,
    Flags: {
      IsNpc: true,
      ShowScale: true,
    },
    Hit: "Single",
    HitCount: 1,
    Element: "Poison",
    CastCancel: true,
    Duration1: [
      {
        Level: 1,
        Time: 8000,
      },
      {
        Level: 2,
        Time: 10000,
      },
      {
        Level: 3,
        Time: 12000,
      },
      {
        Level: 4,
        Time: 14000,
      },
      {
        Level: 5,
        Time: 16000,
      },
    ],
    Unit: {
      Id: "Cloud_Kill",
      Range: [
        {
          Level: 1,
          Size: 1,
        },
        {
          Level: 2,
          Size: 2,
        },
        {
          Level: 3,
          Size: 3,
        },
        {
          Level: 4,
          Size: 3,
        },
        {
          Level: 5,
          Size: 3,
        },
      ],
      Interval: 500,
      Target: "Enemy",
      Flag: {
        PathCheck: true,
        RemovedByFireRain: true,
      },
    },
    Status: "Poison",
  },
  {
    Id: 740,
    Name: "NPC_IGNITIONBREAK",
    Description: "Ignition Break",
    MaxLevel: 5,
    Type: "Weapon",
    TargetType: "Self",
    DamageFlags: {
      Splash: true,
    },
    Flags: {
      IsNpc: true,
      ShowScale: true,
    },
    Hit: "Single",
    HitCount: 1,
    Element: "Fire",
    SplashArea: 5,
  },
  {
    Id: 741,
    Name: "NPC_PHANTOMTHRUST",
    Description: "Phantom Thrust",
    MaxLevel: 5,
    Type: "Weapon",
    TargetType: "Attack",
    Flags: {
      IsNpc: true,
    },
    Range: [
      {
        Level: 1,
        Size: 7,
      },
      {
        Level: 2,
        Size: 9,
      },
      {
        Level: 3,
        Size: 11,
      },
      {
        Level: 4,
        Size: 13,
      },
      {
        Level: 5,
        Size: 15,
      },
    ],
    Hit: "Single",
    HitCount: 1,
    Element: "Neutral",
    CastCancel: true,
  },
  {
    Id: 742,
    Name: "NPC_POISON_BUSTER",
    Description: "Poison Buster",
    MaxLevel: 2,
    Type: "Magic",
    TargetType: "Attack",
    Flags: {
      IsNpc: true,
    },
    DamageFlags: {
      Splash: true,
    },
    Range: 9,
    Hit: "Single",
    HitCount: 1,
    Element: "Poison",
    CastCancel: true,
    SplashArea: 1,
  },
  {
    Id: 743,
    Name: "NPC_HALLUCINATIONWALK",
    Description: "Hallucination Walk",
    MaxLevel: 5,
    TargetType: "Self",
    Flags: {
      IsNpc: true,
    },
    DamageFlags: {
      NoDamage: true,
    },
    Hit: "Single",
    HitCount: 1,
    CastCancel: true,
    Duration1: 20000,
    Status: "Npc_HallucinationWalk",
  },
  {
    Id: 744,
    Name: "NPC_ELECTRICWALK",
    Description: "Electric Walk",
    MaxLevel: 5,
    Type: "Magic",
    TargetType: "Self",
    Flags: {
      IgnoreHovering: true,
      IsNpc: true,
    },
    Hit: "Single",
    HitCount: 1,
    Element: "Wind",
    ActiveInstance: [
      {
        Level: 1,
        Max: 8,
      },
      {
        Level: 2,
        Max: 10,
      },
      {
        Level: 3,
        Max: 12,
      },
      {
        Level: 4,
        Max: 14,
      },
      {
        Level: 5,
        Max: 16,
      },
    ],
    CastCancel: true,
    Duration1: 12000,
    Unit: {
      Id: "Electricwalk",
      Interval: 1000,
      Target: "Enemy",
      Flag: {
        NoReiteration: true,
        NoOverlap: true,
      },
    },
    Status: "PropertyWalk",
  },
  {
    Id: 745,
    Name: "NPC_FIREWALK",
    Description: "Fire Walk",
    MaxLevel: 5,
    Type: "Magic",
    TargetType: "Self",
    Flags: {
      IgnoreHovering: true,
      IsNpc: true,
    },
    Hit: "Single",
    HitCount: 1,
    Element: "Fire",
    ActiveInstance: [
      {
        Level: 1,
        Max: 8,
      },
      {
        Level: 2,
        Max: 10,
      },
      {
        Level: 3,
        Max: 12,
      },
      {
        Level: 4,
        Max: 14,
      },
      {
        Level: 5,
        Max: 16,
      },
    ],
    CastCancel: true,
    Duration1: 12000,
    Unit: {
      Id: "Firewalk",
      Interval: 1000,
      Target: "Enemy",
      Flag: {
        NoReiteration: true,
        NoOverlap: true,
      },
    },
    Status: "PropertyWalk",
  },
  {
    Id: 1001,
    Name: "KN_CHARGEATK",
    Description: "Charge Attack",
    MaxLevel: 1,
    Type: "Weapon",
    TargetType: "Attack",
    Flags: {
      IsQuest: true,
    },
    Range: 14,
    Hit: "Single",
    HitCount: 1,
    Knockback: 2,
    Element: "Weapon",
    CopyFlags: {
      Skill: {
        Plagiarism: true,
        Reproduce: true,
      },
    },
    Cooldown: 500,
    Requires: {
      SpCost: 40,
    },
  },
  {
    Id: 1002,
    Name: "CR_SHRINK",
    Description: "Shrink",
    MaxLevel: 1,
    Type: "Weapon",
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      IsQuest: true,
      Toggleable: true,
    },
    Hit: "Single",
    Duration1: 900000,
    Duration2: 5000,
    Requires: {
      SpCost: 100,
      State: "Shield",
    },
    Status: "Shrink",
  },
  {
    Id: 1003,
    Name: "AS_SONICACCEL",
    Description: "Sonic Acceleration",
    MaxLevel: 1,
    Type: "Weapon",
    Flags: {
      IsQuest: true,
    },
  },
  {
    Id: 1004,
    Name: "AS_VENOMKNIFE",
    Description: "Throw Venom Knife",
    MaxLevel: 1,
    Type: "Weapon",
    TargetType: "Attack",
    DamageFlags: {
      IgnoreAtkCard: true,
    },
    Flags: {
      IsQuest: true,
      IgnoreAutoGuard: true,
      IgnoreCicada: true,
    },
    Range: 9,
    Hit: "Multi_Hit",
    HitCount: 1,
    CopyFlags: {
      Skill: {
        Plagiarism: true,
        Reproduce: true,
      },
    },
    Duration2: [
      {
        Level: 1,
        Time: 15000,
      },
      {
        Level: 2,
        Time: 20000,
      },
      {
        Level: 3,
        Time: 25000,
      },
      {
        Level: 4,
        Time: 30000,
      },
      {
        Level: 5,
        Time: 35000,
      },
      {
        Level: 6,
        Time: 40000,
      },
      {
        Level: 7,
        Time: 45000,
      },
      {
        Level: 8,
        Time: 50000,
      },
      {
        Level: 9,
        Time: 55000,
      },
      {
        Level: 10,
        Time: 60000,
      },
    ],
    Requires: {
      SpCost: 35,
      Ammo: {
        Dagger: true,
      },
      AmmoAmount: 1,
    },
  },
  {
    Id: 1005,
    Name: "RG_CLOSECONFINE",
    Description: "Close Confine",
    MaxLevel: 1,
    Type: "Weapon",
    TargetType: "Attack",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      IsQuest: true,
    },
    Range: 1,
    Hit: "Single",
    HitCount: 1,
    Duration1: 10000,
    Requires: {
      SpCost: 40,
    },
    Status: "CloseConfine2",
  },
  {
    Id: 1006,
    Name: "WZ_SIGHTBLASTER",
    Description: "Sight Blaster",
    MaxLevel: 1,
    Type: "Magic",
    TargetType: "Self",
    Flags: {
      IsQuest: true,
      TargetTrap: true,
    },
    Hit: "Single",
    HitCount: 1,
    Element: "Fire",
    SplashArea: 1,
    Knockback: 3,
    CopyFlags: {
      Skill: {
        Plagiarism: true,
        Reproduce: true,
      },
    },
    CastCancel: true,
    CastTime: 1280,
    Duration1: 900000,
    FixedCastTime: 320,
    Requires: {
      SpCost: 80,
    },
    Status: "SightBlaster",
  },
  {
    Id: 1007,
    Name: "SA_CREATECON",
    Description: "Create Elemental Converter",
    MaxLevel: 1,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      IsQuest: true,
    },
    Hit: "Single",
    Requires: {
      SpCost: 30,
    },
  },
  {
    Id: 1008,
    Name: "SA_ELEMENTWATER",
    Description: "Elemental Change Water",
    MaxLevel: 1,
    Type: "Magic",
    TargetType: "Attack",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      IsQuest: true,
    },
    Range: 9,
    Hit: "Single",
    HitCount: 1,
    Element: "Water",
    CastCancel: true,
    AfterCastActDelay: 1000,
    Duration1: 1800000,
    FixedCastTime: 2000,
    Requires: {
      SpCost: 30,
      ItemCost: [
        {
          Item: "Elemental_Water",
          Amount: 1,
        },
      ],
    },
    Status: "ElementalChange",
  },
  {
    Id: 1009,
    Name: "HT_PHANTASMIC",
    Description: "Phantasmic Arrow",
    MaxLevel: 1,
    Type: "Weapon",
    TargetType: "Attack",
    Flags: {
      IsQuest: true,
    },
    Range: -9,
    Hit: "Single",
    HitCount: 1,
    Element: "Wind",
    Knockback: 3,
    CopyFlags: {
      Skill: {
        Plagiarism: true,
        Reproduce: true,
      },
    },
    Requires: {
      SpCost: 50,
      Weapon: {
        Bow: true,
      },
    },
  },
  {
    Id: 1010,
    Name: "BA_PANGVOICE",
    Description: "Pang Voice",
    MaxLevel: 1,
    Type: "Misc",
    TargetType: "Attack",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      IsQuest: true,
    },
    Range: 9,
    Hit: "Single",
    CastTime: 800,
    AfterCastActDelay: 2000,
    Duration1: 17000,
    Duration2: 120000,
    FixedCastTime: 200,
    Requires: {
      SpCost: 40,
    },
  },
  {
    Id: 1011,
    Name: "DC_WINKCHARM",
    Description: "Wink of Charm",
    MaxLevel: 1,
    Type: "Misc",
    TargetType: "Attack",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      IsQuest: true,
    },
    Range: 9,
    Hit: "Single",
    CastTime: 800,
    AfterCastActDelay: 2000,
    Duration1: 10000,
    Duration2: 17000,
    FixedCastTime: 200,
    Requires: {
      SpCost: 40,
    },
    Status: "WinkCharm",
  },
  {
    Id: 1012,
    Name: "BS_UNFAIRLYTRICK",
    Description: "Unfair Trick",
    MaxLevel: 1,
    Type: "Weapon",
    Flags: {
      IsQuest: true,
    },
  },
  {
    Id: 1013,
    Name: "BS_GREED",
    Description: "Greed",
    MaxLevel: 1,
    Type: "Weapon",
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
      Splash: true,
    },
    Flags: {
      IsQuest: true,
      AllowOnWarg: true,
      AllowOnMado: true,
    },
    Hit: "Single",
    SplashArea: 2,
    Requires: {
      SpCost: 10,
    },
  },
  {
    Id: 1014,
    Name: "PR_REDEMPTIO",
    Description: "Redemptio",
    MaxLevel: 1,
    Type: "Magic",
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
      Splash: true,
    },
    Flags: {
      IsQuest: true,
    },
    Hit: "Single",
    Element: "Holy",
    SplashArea: 14,
    CastCancel: true,
    CastTime: 3200,
    FixedCastTime: 800,
    CastTimeFlags: {
      IgnoreDex: true,
    },
    Requires: {
      SpCost: 800,
    },
  },
  {
    Id: 1015,
    Name: "MO_KITRANSLATION",
    Description: "Ki Translation",
    MaxLevel: 1,
    Type: "Weapon",
    TargetType: "Support",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      IsQuest: true,
      PartyOnly: true,
    },
    Range: 9,
    Hit: "Single",
    HitCount: 1,
    CopyFlags: {
      Skill: {
        Plagiarism: true,
        Reproduce: true,
      },
    },
    CastTime: 1000,
    AfterCastActDelay: 1000,
    Duration1: 600000,
    FixedCastTime: 1000,
    Requires: {
      SpCost: 40,
      SpiritSphereCost: 1,
    },
  },
  {
    Id: 1016,
    Name: "MO_BALKYOUNG",
    Description: "Ki Explosion",
    MaxLevel: 1,
    Type: "Weapon",
    TargetType: "Attack",
    DamageFlags: {
      Splash: true,
    },
    Flags: {
      IsQuest: true,
    },
    Range: -1,
    Hit: "Single",
    HitCount: 1,
    Element: "Weapon",
    SplashArea: 1,
    Knockback: 5,
    AfterCastActDelay: 2000,
    Duration2: 4500,
    Requires: {
      HpCost: 200,
      SpCost: 40,
    },
    Status: "Stun",
  },
  {
    Id: 1017,
    Name: "SA_ELEMENTGROUND",
    Description: "Elemental Change Earth",
    MaxLevel: 1,
    Type: "Magic",
    TargetType: "Attack",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      IsQuest: true,
    },
    Range: 9,
    Hit: "Single",
    HitCount: 1,
    Element: "Earth",
    CastCancel: true,
    AfterCastActDelay: 1000,
    Duration1: 1800000,
    FixedCastTime: 2000,
    Requires: {
      SpCost: 30,
      ItemCost: [
        {
          Item: "Elemental_Earth",
          Amount: 1,
        },
      ],
    },
    Status: "ElementalChange",
  },
  {
    Id: 1018,
    Name: "SA_ELEMENTFIRE",
    Description: "Elemental Change Fire",
    MaxLevel: 1,
    Type: "Magic",
    TargetType: "Attack",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      IsQuest: true,
    },
    Range: 9,
    Hit: "Single",
    HitCount: 1,
    Element: "Fire",
    CastCancel: true,
    AfterCastActDelay: 1000,
    Duration1: 1800000,
    FixedCastTime: 2000,
    Requires: {
      SpCost: 30,
      ItemCost: [
        {
          Item: "Elemental_Fire",
          Amount: 1,
        },
      ],
    },
    Status: "ElementalChange",
  },
  {
    Id: 1019,
    Name: "SA_ELEMENTWIND",
    Description: "Elemental Change Wind",
    MaxLevel: 1,
    Type: "Magic",
    TargetType: "Attack",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      IsQuest: true,
    },
    Range: 9,
    Hit: "Single",
    HitCount: 1,
    Element: "Wind",
    CastCancel: true,
    AfterCastActDelay: 1000,
    Duration1: 1800000,
    FixedCastTime: 2000,
    Requires: {
      SpCost: 30,
      ItemCost: [
        {
          Item: "Elemental_Wind",
          Amount: 1,
        },
      ],
    },
    Status: "ElementalChange",
  },
  {
    Id: 2001,
    Name: "RK_ENCHANTBLADE",
    Description: "Enchant Blade",
    MaxLevel: 10,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Range: 1,
    Hit: "Single",
    HitCount: 1,
    CastCancel: true,
    CastTime: 1000,
    Duration1: 300000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 34,
        },
        {
          Level: 2,
          Amount: 38,
        },
        {
          Level: 3,
          Amount: 42,
        },
        {
          Level: 4,
          Amount: 46,
        },
        {
          Level: 5,
          Amount: 50,
        },
        {
          Level: 6,
          Amount: 54,
        },
        {
          Level: 7,
          Amount: 58,
        },
        {
          Level: 8,
          Amount: 62,
        },
        {
          Level: 9,
          Amount: 66,
        },
        {
          Level: 10,
          Amount: 70,
        },
      ],
    },
    Status: "EnchantBlade",
  },
  {
    Id: 2002,
    Name: "RK_SONICWAVE",
    Description: "Sonic Wave",
    MaxLevel: 10,
    Type: "Weapon",
    TargetType: "Attack",
    DamageFlags: {
      Critical: true,
    },
    Range: [
      {
        Level: 1,
        Size: 7,
      },
      {
        Level: 2,
        Size: 7,
      },
      {
        Level: 3,
        Size: 8,
      },
      {
        Level: 4,
        Size: 8,
      },
      {
        Level: 5,
        Size: 9,
      },
      {
        Level: 6,
        Size: 9,
      },
      {
        Level: 7,
        Size: 10,
      },
      {
        Level: 8,
        Size: 10,
      },
      {
        Level: 9,
        Size: 11,
      },
      {
        Level: 10,
        Size: 11,
      },
    ],
    Hit: "Single",
    HitCount: 3,
    Element: "Weapon",
    CopyFlags: {
      Skill: {
        Reproduce: true,
      },
    },
    AfterCastActDelay: 500,
    Cooldown: 1750,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 33,
        },
        {
          Level: 2,
          Amount: 36,
        },
        {
          Level: 3,
          Amount: 39,
        },
        {
          Level: 4,
          Amount: 42,
        },
        {
          Level: 5,
          Amount: 45,
        },
        {
          Level: 6,
          Amount: 48,
        },
        {
          Level: 7,
          Amount: 51,
        },
        {
          Level: 8,
          Amount: 54,
        },
        {
          Level: 9,
          Amount: 57,
        },
        {
          Level: 10,
          Amount: 60,
        },
      ],
    },
  },
  {
    Id: 2003,
    Name: "RK_DEATHBOUND",
    Description: "Death Bound",
    MaxLevel: 10,
    Type: "Weapon",
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Hit: "Single",
    HitCount: 1,
    Knockback: 3,
    AfterCastActDelay: 2000,
    Duration1: 3000,
    Duration2: 2000,
    Cooldown: 3000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 50,
        },
        {
          Level: 2,
          Amount: 60,
        },
        {
          Level: 3,
          Amount: 65,
        },
        {
          Level: 4,
          Amount: 70,
        },
        {
          Level: 5,
          Amount: 75,
        },
        {
          Level: 6,
          Amount: 80,
        },
        {
          Level: 7,
          Amount: 85,
        },
        {
          Level: 8,
          Amount: 90,
        },
        {
          Level: 9,
          Amount: 95,
        },
        {
          Level: 10,
          Amount: 100,
        },
      ],
    },
    Status: "DeathBound",
  },
  {
    Id: 2004,
    Name: "RK_HUNDREDSPEAR",
    Description: "Hundred Spear",
    MaxLevel: 10,
    Type: "Weapon",
    TargetType: "Attack",
    DamageFlags: {
      Splash: true,
    },
    Range: 7,
    Hit: "Multi_Hit",
    HitCount: -5,
    Element: "Weapon",
    SplashArea: [
      {
        Level: 1,
        Area: 1,
      },
      {
        Level: 2,
        Area: 1,
      },
      {
        Level: 3,
        Area: 1,
      },
      {
        Level: 4,
        Area: 1,
      },
      {
        Level: 5,
        Area: 2,
      },
      {
        Level: 6,
        Area: 2,
      },
      {
        Level: 7,
        Area: 2,
      },
      {
        Level: 8,
        Area: 2,
      },
      {
        Level: 9,
        Area: 3,
      },
      {
        Level: 10,
        Area: 3,
      },
    ],
    CastTime: [
      {
        Level: 1,
        Time: 1000,
      },
      {
        Level: 2,
        Time: 900,
      },
      {
        Level: 3,
        Time: 800,
      },
      {
        Level: 4,
        Time: 700,
      },
      {
        Level: 5,
        Time: 600,
      },
      {
        Level: 6,
        Time: 500,
      },
      {
        Level: 7,
        Time: 400,
      },
      {
        Level: 8,
        Time: 300,
      },
      {
        Level: 9,
        Time: 200,
      },
      {
        Level: 10,
        Time: 100,
      },
    ],
    AfterCastActDelay: 500,
    Cooldown: 3000,
    Requires: {
      SpCost: 60,
      Weapon: {
        "1hSpear": true,
        "2hSpear": true,
      },
    },
  },
  {
    Id: 2005,
    Name: "RK_WINDCUTTER",
    Description: "Wind Cutter",
    MaxLevel: 5,
    Type: "Weapon",
    TargetType: "Self",
    DamageFlags: {
      Splash: true,
    },
    Hit: "Single",
    HitCount: 1,
    Element: "Weapon",
    SplashArea: [
      {
        Level: 1,
        Area: 1,
      },
      {
        Level: 2,
        Area: 1,
      },
      {
        Level: 3,
        Area: 2,
      },
      {
        Level: 4,
        Area: 2,
      },
      {
        Level: 5,
        Area: 3,
      },
    ],
    CopyFlags: {
      Skill: {
        Reproduce: true,
      },
    },
    AfterCastActDelay: 500,
    Cooldown: [
      {
        Level: 1,
        Time: 900,
      },
      {
        Level: 2,
        Time: 750,
      },
      {
        Level: 3,
        Time: 600,
      },
      {
        Level: 4,
        Time: 450,
      },
      {
        Level: 5,
        Time: 300,
      },
    ],
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 23,
        },
        {
          Level: 2,
          Amount: 26,
        },
        {
          Level: 3,
          Amount: 29,
        },
        {
          Level: 4,
          Amount: 32,
        },
        {
          Level: 5,
          Amount: 35,
        },
      ],
      Weapon: {
        Dagger: true,
        "1hSword": true,
        "2hSword": true,
        "1hSpear": true,
        "2hSpear": true,
      },
    },
  },
  {
    Id: 2006,
    Name: "RK_IGNITIONBREAK",
    Description: "Ignition Break",
    MaxLevel: 5,
    Type: "Weapon",
    TargetType: "Self",
    DamageFlags: {
      Splash: true,
      Critical: true,
    },
    Hit: "Single",
    HitCount: 1,
    Element: "Weapon",
    SplashArea: 4,
    CopyFlags: {
      Skill: {
        Reproduce: true,
      },
    },
    CastTime: 1000,
    Cooldown: 2000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 35,
        },
        {
          Level: 2,
          Amount: 40,
        },
        {
          Level: 3,
          Amount: 45,
        },
        {
          Level: 4,
          Amount: 50,
        },
        {
          Level: 5,
          Amount: 55,
        },
      ],
      Weapon: {
        Dagger: true,
        "1hSword": true,
        "2hSword": true,
        "1hSpear": true,
        "2hSpear": true,
      },
    },
  },
  {
    Id: 2007,
    Name: "RK_DRAGONTRAINING",
    Description: "Dragon Training",
    MaxLevel: 5,
  },
  {
    Id: 2008,
    Name: "RK_DRAGONBREATH",
    Description: "Dragon Breath",
    MaxLevel: 10,
    Type: "Weapon",
    TargetType: "Ground",
    DamageFlags: {
      Splash: true,
      IgnoreFlee: true,
    },
    Flags: {
      TargetTrap: true,
    },
    Range: 9,
    Hit: "Single",
    HitCount: 1,
    Element: "Fire",
    SplashArea: [
      {
        Level: 1,
        Area: 1,
      },
      {
        Level: 2,
        Area: 1,
      },
      {
        Level: 3,
        Area: 1,
      },
      {
        Level: 4,
        Area: 2,
      },
      {
        Level: 5,
        Area: 2,
      },
      {
        Level: 6,
        Area: 2,
      },
      {
        Level: 7,
        Area: 3,
      },
      {
        Level: 8,
        Area: 3,
      },
      {
        Level: 9,
        Area: 4,
      },
      {
        Level: 10,
        Area: 4,
      },
    ],
    CastTime: [
      {
        Level: 4,
        Time: 1000,
      },
      {
        Level: 5,
        Time: 1000,
      },
      {
        Level: 6,
        Time: 1000,
      },
      {
        Level: 7,
        Time: 1500,
      },
      {
        Level: 8,
        Time: 1500,
      },
      {
        Level: 9,
        Time: 2000,
      },
      {
        Level: 10,
        Time: 2000,
      },
    ],
    AfterCastActDelay: 2000,
    Duration1: 18000,
    FixedCastTime: 500,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 30,
        },
        {
          Level: 2,
          Amount: 35,
        },
        {
          Level: 3,
          Amount: 40,
        },
        {
          Level: 4,
          Amount: 45,
        },
        {
          Level: 5,
          Amount: 50,
        },
        {
          Level: 6,
          Amount: 55,
        },
        {
          Level: 7,
          Amount: 60,
        },
        {
          Level: 8,
          Amount: 65,
        },
        {
          Level: 9,
          Amount: 70,
        },
        {
          Level: 10,
          Amount: 75,
        },
      ],
      State: "Ridingdragon",
    },
    Status: "Burning",
  },
  {
    Id: 2009,
    Name: "RK_DRAGONHOWLING",
    Description: "Dragon Howling",
    MaxLevel: 5,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
      Splash: true,
    },
    Hit: "Single",
    HitCount: 1,
    SplashArea: [
      {
        Level: 1,
        Area: 3,
      },
      {
        Level: 2,
        Area: 4,
      },
      {
        Level: 3,
        Area: 5,
      },
      {
        Level: 4,
        Area: 6,
      },
      {
        Level: 5,
        Area: 7,
      },
    ],
    Duration1: 15000,
    Cooldown: 10000,
    Requires: {
      SpCost: 30,
      State: "Ridingdragon",
    },
    Status: "Fear",
  },
  {
    Id: 2010,
    Name: "RK_RUNEMASTERY",
    Description: "Rune Mastery",
    MaxLevel: 10,
  },
  {
    Id: 2011,
    Name: "RK_MILLENNIUMSHIELD",
    Description: "Millenium Shield",
    MaxLevel: 1,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Hit: "Single",
    HitCount: 1,
    AfterCastActDelay: 1000,
    Duration1: 900000,
    Duration2: 60000,
    Requires: {
      SpCost: 1,
    },
    Status: "MillenniumShield",
  },
  {
    Id: 2012,
    Name: "RK_CRUSHSTRIKE",
    Description: "Crush Strike",
    MaxLevel: 1,
    TargetType: "Self",
    Range: 1,
    Hit: "Single",
    HitCount: 1,
    Element: "Weapon",
    CastCancel: true,
    Duration1: 30000,
    Duration2: 30000,
    FixedCastTime: 1000,
    CastTimeFlags: {
      IgnoreDex: true,
      IgnoreStatus: true,
      IgnoreItemBonus: true,
    },
    Requires: {
      SpCost: 1,
    },
    Status: "CrushStrike",
  },
  {
    Id: 2013,
    Name: "RK_REFRESH",
    Description: "Refresh",
    MaxLevel: 1,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Hit: "Single",
    HitCount: 1,
    CastCancel: true,
    Duration1: 60000,
    Duration2: 120000,
    FixedCastTime: 1000,
    CastTimeFlags: {
      IgnoreDex: true,
      IgnoreStatus: true,
      IgnoreItemBonus: true,
    },
    Requires: {
      SpCost: 1,
    },
    Status: "Refresh",
  },
  {
    Id: 2014,
    Name: "RK_GIANTGROWTH",
    Description: "Giant Growth",
    MaxLevel: 1,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Hit: "Single",
    HitCount: 1,
    CastCancel: true,
    Duration1: 900000,
    FixedCastTime: 1000,
    CastTimeFlags: {
      IgnoreDex: true,
      IgnoreStatus: true,
      IgnoreItemBonus: true,
    },
    Requires: {
      SpCost: 1,
    },
    Status: "GiantGrowth",
  },
  {
    Id: 2015,
    Name: "RK_STONEHARDSKIN",
    Description: "Stone Hard Skin",
    MaxLevel: 1,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Hit: "Single",
    HitCount: 1,
    CastCancel: true,
    Duration1: 900000,
    Duration2: 10000,
    FixedCastTime: 2000,
    CastTimeFlags: {
      IgnoreDex: true,
      IgnoreStatus: true,
      IgnoreItemBonus: true,
    },
    Requires: {
      SpCost: 1,
    },
    Status: "StoneHardSkin",
  },
  {
    Id: 2016,
    Name: "RK_VITALITYACTIVATION",
    Description: "Vitality Activation",
    MaxLevel: 1,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Hit: "Single",
    HitCount: 1,
    CastCancel: true,
    Duration1: 900000,
    Requires: {
      SpCost: 1,
    },
    Status: "VitalityActivation",
  },
  {
    Id: 2017,
    Name: "RK_STORMBLAST",
    Description: "Storm Blast",
    MaxLevel: 1,
    Type: "Weapon",
    TargetType: "Self",
    DamageFlags: {
      Splash: true,
      Critical: true,
    },
    Flags: {
      TargetTrap: true,
    },
    Hit: "Single",
    HitCount: 1,
    Element: "Weapon",
    SplashArea: 3,
    CastTime: 2000,
    Requires: {
      SpCost: 1,
    },
  },
  {
    Id: 2018,
    Name: "RK_FIGHTINGSPIRIT",
    Description: "Fighting Spirit",
    MaxLevel: 1,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
      Splash: true,
    },
    Hit: "Single",
    HitCount: 1,
    CastCancel: true,
    Duration1: 900000,
    Requires: {
      SpCost: 1,
    },
    Status: "FightingSpirit",
  },
  {
    Id: 2019,
    Name: "RK_ABUNDANCE",
    Description: "Abundance",
    MaxLevel: 1,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Range: 9,
    Hit: "Single",
    HitCount: 1,
    Element: "Holy",
    CastCancel: true,
    Duration1: 900000,
    Requires: {
      SpCost: 1,
    },
    Status: "Abundance",
  },
  {
    Id: 2020,
    Name: "RK_PHANTOMTHRUST",
    Description: "Phantom Thrust",
    MaxLevel: 5,
    Type: "Weapon",
    TargetType: "Attack",
    Flags: {
      PartyOnly: true,
    },
    Range: [
      {
        Level: 1,
        Size: 5,
      },
      {
        Level: 2,
        Size: 6,
      },
      {
        Level: 3,
        Size: 7,
      },
      {
        Level: 4,
        Size: 8,
      },
      {
        Level: 5,
        Size: 9,
      },
    ],
    Hit: "Single",
    HitCount: 1,
    Element: "Weapon",
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 15,
        },
        {
          Level: 2,
          Amount: 18,
        },
        {
          Level: 3,
          Amount: 21,
        },
        {
          Level: 4,
          Amount: 24,
        },
        {
          Level: 5,
          Amount: 27,
        },
      ],
      Weapon: {
        "1hSpear": true,
        "2hSpear": true,
      },
    },
  },
  {
    Id: 2201,
    Name: "WL_WHITEIMPRISON",
    Description: "White Imprison",
    MaxLevel: 5,
    Type: "Magic",
    TargetType: "Support",
    Flags: {
      AlterRangeRadius: true,
    },
    Range: 11,
    Hit: "Single",
    HitCount: 1,
    CastCancel: true,
    Duration1: [
      {
        Level: 1,
        Time: 6000,
      },
      {
        Level: 2,
        Time: 8000,
      },
      {
        Level: 3,
        Time: 10000,
      },
      {
        Level: 4,
        Time: 12000,
      },
      {
        Level: 5,
        Time: 14000,
      },
    ],
    Duration2: 18000,
    Cooldown: 4000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 50,
        },
        {
          Level: 2,
          Amount: 55,
        },
        {
          Level: 3,
          Amount: 60,
        },
        {
          Level: 4,
          Amount: 65,
        },
        {
          Level: 5,
          Amount: 70,
        },
      ],
    },
    Status: "WhiteImprison",
  },
  {
    Id: 2202,
    Name: "WL_SOULEXPANSION",
    Description: "Soul Expansion",
    MaxLevel: 5,
    Type: "Magic",
    TargetType: "Attack",
    DamageFlags: {
      Splash: true,
    },
    Flags: {
      AlterRangeRadius: true,
    },
    Range: 11,
    Hit: "Multi_Hit",
    HitCount: -2,
    Element: "Ghost",
    SplashArea: [
      {
        Level: 1,
        Area: 1,
      },
      {
        Level: 2,
        Area: 1,
      },
      {
        Level: 3,
        Area: 1,
      },
      {
        Level: 4,
        Area: 2,
      },
      {
        Level: 5,
        Area: 2,
      },
    ],
    CopyFlags: {
      Skill: {
        Reproduce: true,
      },
    },
    CastCancel: true,
    CastTime: 2000,
    AfterCastActDelay: 500,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 30,
        },
        {
          Level: 2,
          Amount: 35,
        },
        {
          Level: 3,
          Amount: 40,
        },
        {
          Level: 4,
          Amount: 45,
        },
        {
          Level: 5,
          Amount: 50,
        },
      ],
    },
  },
  {
    Id: 2203,
    Name: "WL_FROSTMISTY",
    Description: "Frosty Misty",
    MaxLevel: 5,
    Type: "Magic",
    TargetType: "Ground",
    DamageFlags: {
      Splash: true,
    },
    Flags: {
      AlterRangeRadius: true,
    },
    Range: 11,
    Hit: "Multi_Hit",
    HitCount: [
      {
        Level: 1,
        Count: 1,
      },
      {
        Level: 2,
        Count: 2,
      },
      {
        Level: 3,
        Count: 3,
      },
      {
        Level: 4,
        Count: 4,
      },
      {
        Level: 5,
        Count: 5,
      },
    ],
    Element: "Water",
    SplashArea: [
      {
        Level: 1,
        Area: 3,
      },
      {
        Level: 2,
        Area: 3,
      },
      {
        Level: 3,
        Area: 4,
      },
      {
        Level: 4,
        Area: 4,
      },
      {
        Level: 5,
        Area: 5,
      },
    ],
    CopyFlags: {
      Skill: {
        Reproduce: true,
      },
    },
    CastCancel: true,
    CastTime: [
      {
        Level: 1,
        Time: 2000,
      },
      {
        Level: 2,
        Time: 2500,
      },
      {
        Level: 3,
        Time: 3000,
      },
      {
        Level: 4,
        Time: 3500,
      },
      {
        Level: 5,
        Time: 4000,
      },
    ],
    AfterCastActDelay: 1000,
    Duration1: 40000,
    Duration2: 10000,
    Cooldown: 4000,
    FixedCastTime: 500,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 40,
        },
        {
          Level: 2,
          Amount: 48,
        },
        {
          Level: 3,
          Amount: 56,
        },
        {
          Level: 4,
          Amount: 64,
        },
        {
          Level: 5,
          Amount: 72,
        },
      ],
    },
    Status: "Freezing",
  },
  {
    Id: 2204,
    Name: "WL_JACKFROST",
    Description: "Jack Frost",
    MaxLevel: 5,
    Type: "Magic",
    TargetType: "Attack",
    DamageFlags: {
      Splash: true,
    },
    Range: 11,
    Hit: "Multi_Hit",
    HitCount: -5,
    Element: "Water",
    SplashArea: [
      {
        Level: 1,
        Area: 3,
      },
      {
        Level: 2,
        Area: 3,
      },
      {
        Level: 3,
        Area: 4,
      },
      {
        Level: 4,
        Area: 4,
      },
      {
        Level: 5,
        Area: 5,
      },
    ],
    CopyFlags: {
      Skill: {
        Reproduce: true,
      },
    },
    CastCancel: true,
    CastTime: [
      {
        Level: 1,
        Time: 2000,
      },
      {
        Level: 2,
        Time: 2500,
      },
      {
        Level: 3,
        Time: 3000,
      },
      {
        Level: 4,
        Time: 3500,
      },
      {
        Level: 5,
        Time: 4000,
      },
    ],
    AfterCastActDelay: 1000,
    Duration1: [
      {
        Level: 1,
        Time: 12500,
      },
      {
        Level: 2,
        Time: 17500,
      },
      {
        Level: 3,
        Time: 22500,
      },
      {
        Level: 4,
        Time: 27500,
      },
      {
        Level: 5,
        Time: 32500,
      },
    ],
    Cooldown: 4000,
    FixedCastTime: 1000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 50,
        },
        {
          Level: 2,
          Amount: 60,
        },
        {
          Level: 3,
          Amount: 70,
        },
        {
          Level: 4,
          Amount: 80,
        },
        {
          Level: 5,
          Amount: 90,
        },
      ],
    },
  },
  {
    Id: 2205,
    Name: "WL_MARSHOFABYSS",
    Description: "Marsh of Abyss",
    MaxLevel: 5,
    Type: "Magic",
    TargetType: "Attack",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      AlterRangeRadius: true,
    },
    Range: 11,
    Hit: "Single",
    HitCount: 1,
    CastCancel: true,
    CastTime: 2500,
    AfterCastActDelay: 1000,
    Duration1: 30000,
    FixedCastTime: 500,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 40,
        },
        {
          Level: 2,
          Amount: 42,
        },
        {
          Level: 3,
          Amount: 44,
        },
        {
          Level: 4,
          Amount: 46,
        },
        {
          Level: 5,
          Amount: 48,
        },
      ],
    },
    Status: "MarshOfAbyss",
  },
  {
    Id: 2206,
    Name: "WL_RECOGNIZEDSPELL",
    Description: "Recognized Spell",
    MaxLevel: 5,
    Type: "Magic",
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Hit: "Single",
    HitCount: 1,
    CastCancel: true,
    CastTime: 1000,
    AfterCastActDelay: 1000,
    Duration1: [
      {
        Level: 1,
        Time: 60000,
      },
      {
        Level: 2,
        Time: 90000,
      },
      {
        Level: 3,
        Time: 120000,
      },
      {
        Level: 4,
        Time: 150000,
      },
      {
        Level: 5,
        Time: 180000,
      },
    ],
    Cooldown: [
      {
        Level: 1,
        Time: 50000,
      },
      {
        Level: 2,
        Time: 80000,
      },
      {
        Level: 3,
        Time: 110000,
      },
      {
        Level: 4,
        Time: 140000,
      },
      {
        Level: 5,
        Time: 170000,
      },
    ],
    FixedCastTime: 1000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 100,
        },
        {
          Level: 2,
          Amount: 120,
        },
        {
          Level: 3,
          Amount: 140,
        },
        {
          Level: 4,
          Amount: 160,
        },
        {
          Level: 5,
          Amount: 180,
        },
      ],
    },
    Status: "RecognizedSpell",
  },
  {
    Id: 2207,
    Name: "WL_SIENNAEXECRATE",
    Description: "Sienna Execrate",
    MaxLevel: 5,
    Type: "Magic",
    TargetType: "Attack",
    DamageFlags: {
      NoDamage: true,
      Splash: true,
    },
    Flags: {
      AlterRangeRadius: true,
    },
    Range: 7,
    Hit: "Single",
    HitCount: 1,
    Element: "Earth",
    SplashArea: [
      {
        Level: 1,
        Area: 1,
      },
      {
        Level: 2,
        Area: 2,
      },
      {
        Level: 3,
        Area: 2,
      },
      {
        Level: 4,
        Area: 3,
      },
      {
        Level: 5,
        Area: 3,
      },
    ],
    CastCancel: true,
    CastTime: 2000,
    AfterCastActDelay: 2000,
    Duration1: 100,
    Duration2: [
      {
        Level: 1,
        Time: 7000,
      },
      {
        Level: 2,
        Time: 9000,
      },
      {
        Level: 3,
        Time: 11000,
      },
      {
        Level: 4,
        Time: 13000,
      },
      {
        Level: 5,
        Time: 15000,
      },
    ],
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 32,
        },
        {
          Level: 2,
          Amount: 34,
        },
        {
          Level: 3,
          Amount: 36,
        },
        {
          Level: 4,
          Amount: 38,
        },
        {
          Level: 5,
          Amount: 40,
        },
      ],
      ItemCost: [
        {
          Item: "Red_Gemstone",
          Amount: 2,
        },
      ],
    },
    Status: "StoneWait",
  },
  {
    Id: 2208,
    Name: "WL_RADIUS",
    Description: "Radius",
    MaxLevel: 3,
  },
  {
    Id: 2209,
    Name: "WL_STASIS",
    Description: "Stasis",
    MaxLevel: 5,
    Type: "Magic",
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
      Splash: true,
    },
    Hit: "Single",
    HitCount: 1,
    SplashArea: [
      {
        Level: 1,
        Area: 9,
      },
      {
        Level: 2,
        Area: 10,
      },
      {
        Level: 3,
        Area: 11,
      },
      {
        Level: 4,
        Area: 12,
      },
      {
        Level: 5,
        Area: 13,
      },
    ],
    CastCancel: true,
    CastTime: 3000,
    AfterCastActDelay: 2000,
    Duration1: [
      {
        Level: 1,
        Time: 20000,
      },
      {
        Level: 2,
        Time: 30000,
      },
      {
        Level: 3,
        Time: 40000,
      },
      {
        Level: 4,
        Time: 50000,
      },
      {
        Level: 5,
        Time: 60000,
      },
    ],
    Cooldown: [
      {
        Level: 1,
        Time: 180000,
      },
      {
        Level: 2,
        Time: 190000,
      },
      {
        Level: 3,
        Time: 200000,
      },
      {
        Level: 4,
        Time: 210000,
      },
      {
        Level: 5,
        Time: 220000,
      },
    ],
    FixedCastTime: 1000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 50,
        },
        {
          Level: 2,
          Amount: 60,
        },
        {
          Level: 3,
          Amount: 70,
        },
        {
          Level: 4,
          Amount: 80,
        },
        {
          Level: 5,
          Amount: 90,
        },
      ],
    },
    Status: "Stasis",
  },
  {
    Id: 2210,
    Name: "WL_DRAINLIFE",
    Description: "Drain Life",
    MaxLevel: 5,
    Type: "Magic",
    TargetType: "Attack",
    Flags: {
      AlterRangeRadius: true,
    },
    Range: 11,
    Hit: "Single",
    HitCount: 1,
    CopyFlags: {
      Skill: {
        Reproduce: true,
      },
    },
    CastCancel: true,
    CastTime: 4000,
    Cooldown: 2000,
    FixedCastTime: 1000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 20,
        },
        {
          Level: 2,
          Amount: 24,
        },
        {
          Level: 3,
          Amount: 28,
        },
        {
          Level: 4,
          Amount: 32,
        },
        {
          Level: 5,
          Amount: 36,
        },
      ],
    },
  },
  {
    Id: 2211,
    Name: "WL_CRIMSONROCK",
    Description: "Crimson Rock",
    MaxLevel: 5,
    Type: "Magic",
    TargetType: "Attack",
    DamageFlags: {
      Splash: true,
    },
    Flags: {
      AlterRangeRadius: true,
    },
    Range: 11,
    Hit: "Multi_Hit",
    HitCount: -7,
    Element: "Fire",
    SplashArea: 3,
    Knockback: 3,
    CopyFlags: {
      Skill: {
        Reproduce: true,
      },
    },
    CastCancel: true,
    CastTime: 5000,
    AfterCastActDelay: 500,
    Duration1: 4500,
    Cooldown: 5000,
    FixedCastTime: 1000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 60,
        },
        {
          Level: 2,
          Amount: 70,
        },
        {
          Level: 3,
          Amount: 80,
        },
        {
          Level: 4,
          Amount: 90,
        },
        {
          Level: 5,
          Amount: 100,
        },
      ],
    },
    Status: "Stun",
  },
  {
    Id: 2212,
    Name: "WL_HELLINFERNO",
    Description: "Hell Inferno",
    MaxLevel: 5,
    Type: "Magic",
    TargetType: "Attack",
    DamageFlags: {
      Splash: true,
    },
    Flags: {
      AlterRangeRadius: true,
    },
    Range: 11,
    Hit: "Single",
    HitCount: 1,
    Element: "Fire",
    SplashArea: [
      {
        Level: 1,
        Area: 1,
      },
      {
        Level: 2,
        Area: 1,
      },
      {
        Level: 3,
        Area: 1,
      },
      {
        Level: 4,
        Area: 2,
      },
      {
        Level: 5,
        Area: 2,
      },
    ],
    CopyFlags: {
      Skill: {
        Reproduce: true,
      },
    },
    CastCancel: true,
    CastTime: 3000,
    AfterCastActDelay: 500,
    Cooldown: 3000,
    FixedCastTime: 1000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 64,
        },
        {
          Level: 2,
          Amount: 70,
        },
        {
          Level: 3,
          Amount: 76,
        },
        {
          Level: 4,
          Amount: 82,
        },
        {
          Level: 5,
          Amount: 88,
        },
      ],
    },
  },
  {
    Id: 2213,
    Name: "WL_COMET",
    Description: "Comet",
    MaxLevel: 5,
    Type: "Magic",
    TargetType: "Ground",
    DamageFlags: {
      Splash: true,
    },
    Flags: {
      AlterRangeRadius: true,
    },
    Range: 11,
    Hit: "Multi_Hit",
    HitCount: -10,
    SplashArea: 6,
    Knockback: 2,
    CopyFlags: {
      Skill: {
        Reproduce: true,
      },
    },
    CastCancel: true,
    CastTime: [
      {
        Level: 1,
        Time: 6000,
      },
      {
        Level: 2,
        Time: 7000,
      },
      {
        Level: 3,
        Time: 8000,
      },
      {
        Level: 4,
        Time: 9000,
      },
      {
        Level: 5,
        Time: 10000,
      },
    ],
    AfterCastActDelay: 1500,
    Duration1: 100,
    Duration2: 42000,
    Cooldown: 20000,
    FixedCastTime: 2000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 70,
        },
        {
          Level: 2,
          Amount: 90,
        },
        {
          Level: 3,
          Amount: 110,
        },
        {
          Level: 4,
          Amount: 130,
        },
        {
          Level: 5,
          Amount: 150,
        },
      ],
    },
    Unit: {
      Id: "Dummyskill",
      Range: 9,
      Interval: 1000,
      Target: "Enemy",
      Flag: {
        PathCheck: true,
      },
    },
    Status: "Magic_Poison",
  },
  {
    Id: 2214,
    Name: "WL_CHAINLIGHTNING",
    Description: "Chain Lightning",
    MaxLevel: 5,
    Type: "Magic",
    TargetType: "Attack",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      AlterRangeRadius: true,
    },
    Range: 11,
    Hit: "Single",
    HitCount: 1,
    CopyFlags: {
      Skill: {
        Reproduce: true,
      },
    },
    CastCancel: true,
    CastTime: [
      {
        Level: 1,
        Time: 3500,
      },
      {
        Level: 2,
        Time: 4000,
      },
      {
        Level: 3,
        Time: 4500,
      },
      {
        Level: 4,
        Time: 5000,
      },
      {
        Level: 5,
        Time: 5500,
      },
    ],
    AfterCastActDelay: 3000,
    Duration1: 100,
    FixedCastTime: 1000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 80,
        },
        {
          Level: 2,
          Amount: 90,
        },
        {
          Level: 3,
          Amount: 100,
        },
        {
          Level: 4,
          Amount: 110,
        },
        {
          Level: 5,
          Amount: 120,
        },
      ],
    },
  },
  {
    Id: 2215,
    Name: "WL_CHAINLIGHTNING_ATK",
    Description: "Chain Lightning Attack",
    MaxLevel: 5,
    Type: "Magic",
    TargetType: "Attack",
    Range: 11,
    Hit: "Single",
    HitCount: 1,
    Element: "Wind",
    CopyFlags: {
      Skill: {
        Reproduce: true,
      },
    },
    Requires: {
      SpCost: 1,
    },
  },
  {
    Id: 2216,
    Name: "WL_EARTHSTRAIN",
    Description: "Earth Strain",
    MaxLevel: 5,
    Type: "Magic",
    TargetType: "Ground",
    Flags: {
      TargetHidden: true,
    },
    Range: 6,
    Hit: "Multi_Hit",
    HitCount: [
      {
        Level: 1,
        Count: -6,
      },
      {
        Level: 2,
        Count: -7,
      },
      {
        Level: 3,
        Count: -8,
      },
      {
        Level: 4,
        Count: -9,
      },
      {
        Level: 5,
        Count: -10,
      },
    ],
    Element: "Earth",
    CopyFlags: {
      Skill: {
        Reproduce: true,
      },
    },
    CastCancel: true,
    CastTime: [
      {
        Level: 1,
        Time: 2000,
      },
      {
        Level: 2,
        Time: 3000,
      },
      {
        Level: 3,
        Time: 4000,
      },
      {
        Level: 4,
        Time: 5000,
      },
      {
        Level: 5,
        Time: 6000,
      },
    ],
    AfterCastActDelay: 500,
    Duration1: 100,
    Duration2: [
      {
        Level: 1,
        Time: 75000,
      },
      {
        Level: 2,
        Time: 90000,
      },
      {
        Level: 3,
        Time: 105000,
      },
      {
        Level: 4,
        Time: 120000,
      },
      {
        Level: 5,
        Time: 135000,
      },
    ],
    Cooldown: 7000,
    FixedCastTime: 2000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 70,
        },
        {
          Level: 2,
          Amount: 78,
        },
        {
          Level: 3,
          Amount: 86,
        },
        {
          Level: 4,
          Amount: 94,
        },
        {
          Level: 5,
          Amount: 102,
        },
      ],
    },
    Unit: {
      Id: "Earthstrain",
      Layout: -1,
      Range: 2,
      Interval: 2000,
      Target: "Enemy",
      Flag: {
        NoOverlap: true,
        PathCheck: true,
      },
    },
  },
  {
    Id: 2217,
    Name: "WL_TETRAVORTEX",
    Description: "Tetra Vortex",
    MaxLevel: 10,
    Type: "Magic",
    TargetType: "Attack",
    Flags: {
      AlterRangeRadius: true,
    },
    Range: 11,
    Hit: "Single",
    HitCount: 1,
    SplashArea: [
      {
        Level: 1,
        Area: 0,
      },
      {
        Level: 2,
        Area: 0,
      },
      {
        Level: 3,
        Area: 0,
      },
      {
        Level: 4,
        Area: 0,
      },
      {
        Level: 5,
        Area: 0,
      },
      {
        Level: 6,
        Area: 1,
      },
      {
        Level: 7,
        Area: 1,
      },
      {
        Level: 8,
        Area: 2,
      },
      {
        Level: 9,
        Area: 2,
      },
      {
        Level: 10,
        Area: 3,
      },
    ],
    CopyFlags: {
      Skill: {
        Reproduce: true,
      },
    },
    CastCancel: true,
    CastTime: [
      {
        Level: 1,
        Time: 5000,
      },
      {
        Level: 2,
        Time: 6000,
      },
      {
        Level: 3,
        Time: 7000,
      },
      {
        Level: 4,
        Time: 8000,
      },
      {
        Level: 5,
        Time: 9000,
      },
      {
        Level: 6,
        Time: 9000,
      },
      {
        Level: 7,
        Time: 9000,
      },
      {
        Level: 8,
        Time: 9000,
      },
      {
        Level: 9,
        Time: 9000,
      },
      {
        Level: 10,
        Time: 9000,
      },
    ],
    AfterCastActDelay: 2000,
    Cooldown: 15000,
    FixedCastTime: 2000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 120,
        },
        {
          Level: 2,
          Amount: 150,
        },
        {
          Level: 3,
          Amount: 180,
        },
        {
          Level: 4,
          Amount: 210,
        },
        {
          Level: 5,
          Amount: 240,
        },
        {
          Level: 6,
          Amount: 200,
        },
        {
          Level: 7,
          Amount: 240,
        },
        {
          Level: 8,
          Amount: 280,
        },
        {
          Level: 9,
          Amount: 320,
        },
        {
          Level: 10,
          Amount: 360,
        },
      ],
    },
  },
  {
    Id: 2218,
    Name: "WL_TETRAVORTEX_FIRE",
    Description: "Tetra Vortex Fire",
    MaxLevel: 5,
    Type: "Magic",
    TargetType: "Attack",
    Range: 11,
    Hit: "Single",
    HitCount: 1,
    Element: "Fire",
    CopyFlags: {
      Skill: {
        Reproduce: true,
      },
    },
    Requires: {
      SpCost: 1,
    },
  },
  {
    Id: 2219,
    Name: "WL_TETRAVORTEX_WATER",
    Description: "Tetra Vortex Water",
    MaxLevel: 5,
    Type: "Magic",
    TargetType: "Attack",
    Range: 11,
    Hit: "Single",
    HitCount: 1,
    Element: "Water",
    CopyFlags: {
      Skill: {
        Reproduce: true,
      },
    },
    Requires: {
      SpCost: 1,
    },
  },
  {
    Id: 2220,
    Name: "WL_TETRAVORTEX_WIND",
    Description: "Tetra Vortex Wind",
    MaxLevel: 5,
    Type: "Magic",
    TargetType: "Attack",
    Range: 11,
    Hit: "Single",
    HitCount: 1,
    Element: "Wind",
    CopyFlags: {
      Skill: {
        Reproduce: true,
      },
    },
    Requires: {
      SpCost: 1,
    },
  },
  {
    Id: 2221,
    Name: "WL_TETRAVORTEX_GROUND",
    Description: "Tetra Vortex Earth",
    MaxLevel: 5,
    Type: "Magic",
    TargetType: "Attack",
    Range: 11,
    Hit: "Single",
    HitCount: 1,
    Element: "Earth",
    CopyFlags: {
      Skill: {
        Reproduce: true,
      },
    },
    Requires: {
      SpCost: 1,
    },
  },
  {
    Id: 2222,
    Name: "WL_SUMMONFB",
    Description: "Summon Fire Ball",
    MaxLevel: 2,
    Type: "Magic",
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Hit: "Single",
    HitCount: 1,
    Element: "Fire",
    CopyFlags: {
      Skill: {
        Reproduce: true,
      },
    },
    CastCancel: true,
    CastTime: 2000,
    Duration1: [
      {
        Level: 1,
        Time: 120000,
      },
      {
        Level: 2,
        Time: 160000,
      },
      {
        Level: 3,
        Time: 200000,
      },
      {
        Level: 4,
        Time: 240000,
      },
      {
        Level: 5,
        Time: 280000,
      },
    ],
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 10,
        },
        {
          Level: 2,
          Amount: 12,
        },
        {
          Level: 3,
          Amount: 14,
        },
        {
          Level: 4,
          Amount: 16,
        },
        {
          Level: 5,
          Amount: 18,
        },
      ],
    },
  },
  {
    Id: 2223,
    Name: "WL_SUMMONBL",
    Description: "Summon Lightning Ball",
    MaxLevel: 2,
    Type: "Magic",
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Hit: "Single",
    HitCount: 1,
    Element: "Wind",
    CopyFlags: {
      Skill: {
        Reproduce: true,
      },
    },
    CastCancel: true,
    CastTime: 2000,
    Duration1: [
      {
        Level: 1,
        Time: 120000,
      },
      {
        Level: 2,
        Time: 160000,
      },
      {
        Level: 3,
        Time: 200000,
      },
      {
        Level: 4,
        Time: 240000,
      },
      {
        Level: 5,
        Time: 280000,
      },
    ],
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 10,
        },
        {
          Level: 2,
          Amount: 12,
        },
        {
          Level: 3,
          Amount: 14,
        },
        {
          Level: 4,
          Amount: 16,
        },
        {
          Level: 5,
          Amount: 18,
        },
      ],
    },
  },
  {
    Id: 2224,
    Name: "WL_SUMMONWB",
    Description: "Summon Water Ball",
    MaxLevel: 2,
    Type: "Magic",
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Hit: "Single",
    HitCount: 1,
    Element: "Water",
    CopyFlags: {
      Skill: {
        Reproduce: true,
      },
    },
    CastCancel: true,
    CastTime: 2000,
    Duration1: [
      {
        Level: 1,
        Time: 120000,
      },
      {
        Level: 2,
        Time: 160000,
      },
      {
        Level: 3,
        Time: 200000,
      },
      {
        Level: 4,
        Time: 240000,
      },
      {
        Level: 5,
        Time: 280000,
      },
    ],
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 10,
        },
        {
          Level: 2,
          Amount: 12,
        },
        {
          Level: 3,
          Amount: 14,
        },
        {
          Level: 4,
          Amount: 16,
        },
        {
          Level: 5,
          Amount: 18,
        },
      ],
    },
  },
  {
    Id: 2225,
    Name: "WL_SUMMON_ATK_FIRE",
    Description: "Summon Attack Fire",
    MaxLevel: 5,
    Type: "Magic",
    TargetType: "Attack",
    Range: 11,
    Hit: "Single",
    HitCount: 1,
    Element: "Fire",
    ActiveInstance: 1,
    CopyFlags: {
      Skill: {
        Reproduce: true,
      },
    },
    Requires: {
      SpCost: 1,
    },
  },
  {
    Id: 2226,
    Name: "WL_SUMMON_ATK_WIND",
    Description: "Summon Attack Wind",
    MaxLevel: 5,
    Type: "Magic",
    TargetType: "Attack",
    Range: 11,
    Hit: "Single",
    HitCount: 1,
    Element: "Wind",
    ActiveInstance: 1,
    CopyFlags: {
      Skill: {
        Reproduce: true,
      },
    },
    Requires: {
      SpCost: 1,
    },
  },
  {
    Id: 2227,
    Name: "WL_SUMMON_ATK_WATER",
    Description: "Summon Attack Water",
    MaxLevel: 5,
    Type: "Magic",
    TargetType: "Attack",
    Range: 11,
    Hit: "Single",
    HitCount: 1,
    Element: "Water",
    ActiveInstance: 1,
    CopyFlags: {
      Skill: {
        Reproduce: true,
      },
    },
    Requires: {
      SpCost: 1,
    },
  },
  {
    Id: 2228,
    Name: "WL_SUMMON_ATK_GROUND",
    Description: "Summon Attack Earth",
    MaxLevel: 5,
    Type: "Magic",
    TargetType: "Attack",
    Range: 11,
    Hit: "Single",
    HitCount: 1,
    Element: "Earth",
    ActiveInstance: 1,
    CopyFlags: {
      Skill: {
        Reproduce: true,
      },
    },
    Requires: {
      SpCost: 1,
    },
  },
  {
    Id: 2229,
    Name: "WL_SUMMONSTONE",
    Description: "Summon Stone",
    MaxLevel: 2,
    Type: "Magic",
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Hit: "Single",
    HitCount: 1,
    Element: "Earth",
    CopyFlags: {
      Skill: {
        Reproduce: true,
      },
    },
    CastCancel: true,
    CastTime: 2000,
    Duration1: [
      {
        Level: 1,
        Time: 120000,
      },
      {
        Level: 2,
        Time: 160000,
      },
      {
        Level: 3,
        Time: 200000,
      },
      {
        Level: 4,
        Time: 240000,
      },
      {
        Level: 5,
        Time: 280000,
      },
    ],
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 10,
        },
        {
          Level: 2,
          Amount: 12,
        },
        {
          Level: 3,
          Amount: 14,
        },
        {
          Level: 4,
          Amount: 16,
        },
        {
          Level: 5,
          Amount: 18,
        },
      ],
    },
  },
  {
    Id: 2230,
    Name: "WL_RELEASE",
    Description: "Release",
    MaxLevel: 2,
    Type: "Magic",
    TargetType: "Attack",
    Flags: {
      AlterRangeRadius: true,
    },
    Range: 11,
    Hit: "Multi_Hit",
    HitCount: 1,
    CastCancel: true,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 3,
        },
        {
          Level: 2,
          Amount: 20,
        },
      ],
    },
  },
  {
    Id: 2231,
    Name: "WL_READING_SB",
    Description: "Reading Spellbook",
    MaxLevel: 1,
    Duration1: 30000,
  },
  {
    Id: 2232,
    Name: "WL_FREEZE_SP",
    Description: "Freeze Spell",
    MaxLevel: 10,
  },
  {
    Id: 2021,
    Name: "GC_VENOMIMPRESS",
    Description: "Venom Impress",
    MaxLevel: 5,
    TargetType: "Attack",
    DamageFlags: {
      NoDamage: true,
    },
    Range: 10,
    Hit: "Single",
    HitCount: 1,
    AfterCastActDelay: [
      {
        Level: 1,
        Time: 3000,
      },
      {
        Level: 2,
        Time: 2500,
      },
      {
        Level: 3,
        Time: 2000,
      },
      {
        Level: 4,
        Time: 1500,
      },
      {
        Level: 5,
        Time: 1000,
      },
    ],
    Duration1: [
      {
        Level: 1,
        Time: 10000,
      },
      {
        Level: 2,
        Time: 20000,
      },
      {
        Level: 3,
        Time: 30000,
      },
      {
        Level: 4,
        Time: 40000,
      },
      {
        Level: 5,
        Time: 50000,
      },
    ],
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 12,
        },
        {
          Level: 2,
          Amount: 16,
        },
        {
          Level: 3,
          Amount: 20,
        },
        {
          Level: 4,
          Amount: 24,
        },
        {
          Level: 5,
          Amount: 28,
        },
      ],
    },
    Status: "VenomImpress",
  },
  {
    Id: 2022,
    Name: "GC_CROSSIMPACT",
    Description: "Cross Impact",
    MaxLevel: 5,
    Type: "Weapon",
    TargetType: "Attack",
    DamageFlags: {
      Critical: true,
    },
    Range: 7,
    Hit: "Multi_Hit",
    HitCount: -7,
    Element: "Weapon",
    CopyFlags: {
      Skill: {
        Reproduce: true,
      },
    },
    AfterCastActDelay: [
      {
        Level: 1,
        Time: 2500,
      },
      {
        Level: 2,
        Time: 2000,
      },
      {
        Level: 3,
        Time: 1500,
      },
      {
        Level: 4,
        Time: 1000,
      },
      {
        Level: 5,
        Time: 500,
      },
    ],
    Cooldown: [
      {
        Level: 1,
        Time: 150,
      },
      {
        Level: 1,
        Time: 200,
      },
      {
        Level: 1,
        Time: 250,
      },
      {
        Level: 1,
        Time: 300,
      },
      {
        Level: 1,
        Time: 350,
      },
    ],
    CastDelayFlags: {
      IgnoreStatus: true,
    },
    Requires: {
      SpCost: 40,
      State: "Move_Enable",
    },
  },
  {
    Id: 2023,
    Name: "GC_DARKILLUSION",
    Description: "Dark Illusion",
    MaxLevel: 5,
    Type: "Weapon",
    TargetType: "Attack",
    Range: [
      {
        Level: 1,
        Size: 5,
      },
      {
        Level: 2,
        Size: 6,
      },
      {
        Level: 3,
        Size: 7,
      },
      {
        Level: 4,
        Size: 8,
      },
      {
        Level: 5,
        Size: 9,
      },
    ],
    Hit: "Single",
    HitCount: 1,
    Element: "Weapon",
    CopyFlags: {
      Skill: {
        Reproduce: true,
      },
    },
    AfterCastActDelay: 1500,
    Requires: {
      SpCost: 40,
    },
  },
  {
    Id: 2024,
    Name: "GC_RESEARCHNEWPOISON",
    Description: "Research New Poison",
    MaxLevel: 10,
  },
  {
    Id: 2025,
    Name: "GC_CREATENEWPOISON",
    Description: "Create New Poison",
    MaxLevel: 1,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Hit: "Single",
    HitCount: 1,
    AfterCastActDelay: 500,
    Requires: {
      SpCost: 10,
    },
  },
  {
    Id: 2026,
    Name: "GC_ANTIDOTE",
    Description: "Antidote",
    MaxLevel: 1,
    TargetType: "Support",
    DamageFlags: {
      NoDamage: true,
    },
    Range: 5,
    Hit: "Single",
    HitCount: 1,
    Requires: {
      SpCost: 10,
      ItemCost: [
        {
          Item: "Guillotine_Antidote",
          Amount: 1,
        },
      ],
    },
  },
  {
    Id: 2027,
    Name: "GC_POISONINGWEAPON",
    Description: "Poisoning Weapon",
    MaxLevel: 5,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Hit: "Single",
    HitCount: 1,
    AfterCastActDelay: 1000,
    Duration1: [
      {
        Level: 1,
        Time: 60000,
      },
      {
        Level: 2,
        Time: 120000,
      },
      {
        Level: 3,
        Time: 180000,
      },
      {
        Level: 4,
        Time: 240000,
      },
      {
        Level: 5,
        Time: 300000,
      },
    ],
    Duration2: [
      {
        Level: 1,
        Time: 15000,
      },
      {
        Level: 2,
        Time: 300000,
      },
    ],
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 20,
        },
        {
          Level: 2,
          Amount: 24,
        },
        {
          Level: 3,
          Amount: 28,
        },
        {
          Level: 4,
          Amount: 32,
        },
        {
          Level: 5,
          Amount: 36,
        },
      ],
      Weapon: {
        Dagger: true,
        Katar: true,
      },
    },
    Status: "PoisoningWeapon",
  },
  {
    Id: 2028,
    Name: "GC_WEAPONBLOCKING",
    Description: "Weapon Blocking",
    MaxLevel: 5,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Hit: "Single",
    HitCount: 1,
    AfterCastActDelay: 2000,
    Duration1: 180000,
    Duration2: 10000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 40,
        },
        {
          Level: 2,
          Amount: 36,
        },
        {
          Level: 3,
          Amount: 32,
        },
        {
          Level: 4,
          Amount: 28,
        },
        {
          Level: 5,
          Amount: 24,
        },
      ],
    },
    Status: "WeaponBlocking",
  },
  {
    Id: 2029,
    Name: "GC_COUNTERSLASH",
    Description: "Counter Slash",
    MaxLevel: 10,
    Type: "Weapon",
    TargetType: "Self",
    DamageFlags: {
      Splash: true,
      IgnoreDefense: true,
    },
    Hit: "Single",
    HitCount: 1,
    Element: "Weapon",
    SplashArea: [
      {
        Level: 1,
        Area: 1,
      },
      {
        Level: 2,
        Area: 1,
      },
      {
        Level: 3,
        Area: 1,
      },
      {
        Level: 4,
        Area: 1,
      },
      {
        Level: 5,
        Area: 1,
      },
      {
        Level: 6,
        Area: 2,
      },
      {
        Level: 7,
        Area: 2,
      },
      {
        Level: 8,
        Area: 2,
      },
      {
        Level: 9,
        Area: 2,
      },
      {
        Level: 10,
        Area: 2,
      },
    ],
    AfterCastActDelay: 2000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 5,
        },
        {
          Level: 2,
          Amount: 8,
        },
        {
          Level: 3,
          Amount: 11,
        },
        {
          Level: 4,
          Amount: 14,
        },
        {
          Level: 5,
          Amount: 17,
        },
        {
          Level: 6,
          Amount: 19,
        },
        {
          Level: 7,
          Amount: 21,
        },
        {
          Level: 8,
          Amount: 23,
        },
        {
          Level: 9,
          Amount: 25,
        },
        {
          Level: 10,
          Amount: 27,
        },
      ],
      Status: {
        Weaponblock_On: true,
      },
    },
  },
  {
    Id: 2030,
    Name: "GC_WEAPONCRUSH",
    Description: "Weapon Crush",
    MaxLevel: 5,
    Type: "Weapon",
    TargetType: "Self",
    Flags: {
      NoTargetSelf: true,
    },
    Range: -2,
    Hit: "Single",
    HitCount: 1,
    Element: "Weapon",
    AfterCastActDelay: 1000,
    Duration1: 60000,
    Requires: {
      SpCost: 20,
      Status: {
        Weaponblock_On: true,
      },
    },
  },
  {
    Id: 2031,
    Name: "GC_VENOMPRESSURE",
    Description: "Venom Pressure",
    MaxLevel: 5,
    Type: "Weapon",
    TargetType: "Attack",
    Range: 1,
    Hit: "Single",
    HitCount: 1,
    Element: "Weapon",
    AfterCastActDelay: 1000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 30,
        },
        {
          Level: 2,
          Amount: 40,
        },
        {
          Level: 3,
          Amount: 50,
        },
        {
          Level: 4,
          Amount: 60,
        },
        {
          Level: 5,
          Amount: 70,
        },
      ],
      Status: {
        Poisoningweapon: true,
      },
    },
  },
  {
    Id: 2032,
    Name: "GC_POISONSMOKE",
    Description: "Poison Smoke",
    MaxLevel: 5,
    TargetType: "Ground",
    DamageFlags: {
      NoDamage: true,
    },
    Range: 5,
    Hit: "Single",
    HitCount: 1,
    ActiveInstance: 1,
    CastCancel: true,
    AfterCastActDelay: 2000,
    Duration1: [
      {
        Level: 1,
        Time: 10000,
      },
      {
        Level: 2,
        Time: 12000,
      },
      {
        Level: 3,
        Time: 14000,
      },
      {
        Level: 4,
        Time: 16000,
      },
      {
        Level: 5,
        Time: 18000,
      },
    ],
    FixedCastTime: 2000,
    CastTimeFlags: {
      IgnoreDex: true,
      IgnoreStatus: true,
      IgnoreItemBonus: true,
    },
    Requires: {
      SpCost: 40,
      Status: {
        Poisoningweapon: true,
      },
    },
    Unit: {
      Id: "Poisonsmoke",
      Layout: 2,
      Interval: 2000,
      Target: "Enemy",
      Flag: {
        NoOverlap: true,
        PathCheck: true,
        RemovedByFireRain: true,
      },
    },
  },
  {
    Id: 2033,
    Name: "GC_CLOAKINGEXCEED",
    Description: "Cloaking Exceed",
    MaxLevel: 5,
    Type: "Weapon",
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      IgnoreKagehumi: true,
      IgnoreWugBite: true,
      Toggleable: true,
    },
    Hit: "Single",
    HitCount: 1,
    AfterCastActDelay: 2000,
    Requires: {
      SpCost: 45,
    },
    Status: "CloakingExceed",
  },
  {
    Id: 2034,
    Name: "GC_PHANTOMMENACE",
    Description: "Phantom Menace",
    MaxLevel: 1,
    Type: "Weapon",
    TargetType: "Self",
    DamageFlags: {
      Splash: true,
    },
    Hit: "Single",
    HitCount: 1,
    Element: "Weapon",
    SplashArea: 3,
    CopyFlags: {
      Skill: {
        Reproduce: true,
      },
    },
    AfterCastActDelay: 1000,
    Requires: {
      SpCost: 30,
    },
  },
  {
    Id: 2035,
    Name: "GC_HALLUCINATIONWALK",
    Description: "Hallucination Walk",
    MaxLevel: 5,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Hit: "Single",
    HitCount: 1,
    Duration1: [
      {
        Level: 1,
        Time: 30000,
      },
      {
        Level: 2,
        Time: 35000,
      },
      {
        Level: 3,
        Time: 40000,
      },
      {
        Level: 4,
        Time: 45000,
      },
      {
        Level: 5,
        Time: 50000,
      },
    ],
    Duration2: 25000,
    Cooldown: 300000,
    Requires: {
      SpCost: 100,
      HpRateCost: 10,
    },
    Status: "HallucinationWalk",
  },
  {
    Id: 2036,
    Name: "GC_ROLLINGCUTTER",
    Description: "Rolling Cutter",
    MaxLevel: 5,
    Type: "Weapon",
    TargetType: "Self",
    DamageFlags: {
      Splash: true,
    },
    Hit: "Single",
    HitCount: 1,
    Element: "Weapon",
    SplashArea: [
      {
        Level: 1,
        Area: 1,
      },
      {
        Level: 2,
        Area: 1,
      },
      {
        Level: 3,
        Area: 2,
      },
      {
        Level: 4,
        Area: 2,
      },
      {
        Level: 5,
        Area: 3,
      },
    ],
    AfterCastActDelay: 200,
    Duration1: 10000,
    Requires: {
      SpCost: 5,
      Weapon: {
        Katar: true,
      },
    },
    Status: "RollingCutter",
  },
  {
    Id: 2037,
    Name: "GC_CROSSRIPPERSLASHER",
    Description: "Cross Ripper Slasher",
    MaxLevel: 5,
    Type: "Weapon",
    TargetType: "Attack",
    Range: [
      {
        Level: 1,
        Size: 9,
      },
      {
        Level: 2,
        Size: 10,
      },
      {
        Level: 3,
        Size: 11,
      },
      {
        Level: 4,
        Size: 12,
      },
      {
        Level: 5,
        Size: 13,
      },
    ],
    Hit: "Single",
    HitCount: 1,
    Element: "Weapon",
    AfterCastActDelay: 300,
    Cooldown: [
      {
        Level: 1,
        Time: 0,
      },
      {
        Level: 1,
        Time: 50,
      },
      {
        Level: 1,
        Time: 100,
      },
      {
        Level: 1,
        Time: 150,
      },
      {
        Level: 1,
        Time: 200,
      },
    ],
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 20,
        },
        {
          Level: 2,
          Amount: 24,
        },
        {
          Level: 3,
          Amount: 28,
        },
        {
          Level: 4,
          Amount: 32,
        },
        {
          Level: 5,
          Amount: 36,
        },
      ],
      Weapon: {
        Katar: true,
      },
      Status: {
        Rollingcutter: true,
      },
    },
  },
  {
    Id: 2038,
    Name: "AB_JUDEX",
    Description: "Judex",
    MaxLevel: 10,
    Type: "Magic",
    TargetType: "Attack",
    DamageFlags: {
      Splash: true,
    },
    Range: 11,
    Hit: "Multi_Hit",
    HitCount: -3,
    Element: "Holy",
    SplashArea: 1,
    CopyFlags: {
      Skill: {
        Reproduce: true,
      },
    },
    CastCancel: true,
    CastTime: 2000,
    AfterCastActDelay: 500,
    FixedCastTime: 500,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 20,
        },
        {
          Level: 2,
          Amount: 23,
        },
        {
          Level: 3,
          Amount: 26,
        },
        {
          Level: 4,
          Amount: 29,
        },
        {
          Level: 5,
          Amount: 32,
        },
        {
          Level: 6,
          Amount: 34,
        },
        {
          Level: 7,
          Amount: 36,
        },
        {
          Level: 8,
          Amount: 38,
        },
        {
          Level: 9,
          Amount: 40,
        },
        {
          Level: 10,
          Amount: 42,
        },
      ],
    },
  },
  {
    Id: 2039,
    Name: "AB_ANCILLA",
    Description: "Ancilla",
    MaxLevel: 1,
    Type: "Magic",
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Hit: "Single",
    HitCount: 1,
    CastCancel: true,
    CastTime: 1000,
    AfterCastActDelay: 1000,
    Requires: {
      SpCost: 30,
      SpRateCost: -10,
      ItemCost: [
        {
          Item: "Blue_Gemstone",
          Amount: 0,
        },
      ],
    },
  },
  {
    Id: 2040,
    Name: "AB_ADORAMUS",
    Description: "Adoramus",
    MaxLevel: 10,
    Type: "Magic",
    TargetType: "Attack",
    DamageFlags: {
      Splash: true,
    },
    Range: 11,
    Hit: "Multi_Hit",
    HitCount: -10,
    Element: "Holy",
    SplashArea: [
      {
        Level: 1,
        Area: 3,
      },
      {
        Level: 2,
        Area: 3,
      },
      {
        Level: 3,
        Area: 3,
      },
      {
        Level: 4,
        Area: 3,
      },
      {
        Level: 5,
        Area: 3,
      },
      {
        Level: 6,
        Area: 3,
      },
      {
        Level: 7,
        Area: 5,
      },
      {
        Level: 8,
        Area: 5,
      },
      {
        Level: 9,
        Area: 5,
      },
      {
        Level: 10,
        Area: 5,
      },
    ],
    CopyFlags: {
      Skill: {
        Reproduce: true,
      },
    },
    CastCancel: true,
    CastTime: 2000,
    AfterCastActDelay: 500,
    Duration1: [
      {
        Level: 1,
        Time: 8000,
      },
      {
        Level: 2,
        Time: 9000,
      },
      {
        Level: 3,
        Time: 10000,
      },
      {
        Level: 4,
        Time: 11000,
      },
      {
        Level: 5,
        Time: 12000,
      },
      {
        Level: 6,
        Time: 13000,
      },
      {
        Level: 7,
        Time: 14000,
      },
      {
        Level: 8,
        Time: 15000,
      },
      {
        Level: 9,
        Time: 16000,
      },
      {
        Level: 10,
        Time: 17000,
      },
    ],
    Duration2: [
      {
        Level: 1,
        Time: 15000,
      },
      {
        Level: 2,
        Time: 20000,
      },
      {
        Level: 3,
        Time: 25000,
      },
      {
        Level: 4,
        Time: 30000,
      },
      {
        Level: 5,
        Time: 35000,
      },
      {
        Level: 6,
        Time: 40000,
      },
      {
        Level: 7,
        Time: 45000,
      },
      {
        Level: 8,
        Time: 50000,
      },
      {
        Level: 9,
        Time: 55000,
      },
      {
        Level: 10,
        Time: 60000,
      },
    ],
    Cooldown: 2500,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 22,
        },
        {
          Level: 2,
          Amount: 28,
        },
        {
          Level: 3,
          Amount: 34,
        },
        {
          Level: 4,
          Amount: 40,
        },
        {
          Level: 5,
          Amount: 46,
        },
        {
          Level: 6,
          Amount: 52,
        },
        {
          Level: 7,
          Amount: 58,
        },
        {
          Level: 8,
          Amount: 64,
        },
        {
          Level: 9,
          Amount: 70,
        },
        {
          Level: 10,
          Amount: 76,
        },
      ],
      ItemCost: [
        {
          Item: "Blue_Gemstone",
          Amount: 1,
        },
      ],
    },
    Status: "Adoramus",
  },
  {
    Id: 2041,
    Name: "AB_CLEMENTIA",
    Description: "Crementia",
    MaxLevel: 3,
    Type: "Magic",
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
      Splash: true,
    },
    Hit: "Single",
    HitCount: 1,
    SplashArea: [
      {
        Level: 1,
        Area: 3,
      },
      {
        Level: 2,
        Area: 7,
      },
      {
        Level: 3,
        Area: 15,
      },
    ],
    CastCancel: true,
    CastTime: 3000,
    Duration1: [
      {
        Level: 1,
        Time: 120000,
      },
      {
        Level: 2,
        Time: 180000,
      },
      {
        Level: 3,
        Time: 240000,
      },
    ],
    FixedCastTime: 1000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 280,
        },
        {
          Level: 2,
          Amount: 320,
        },
        {
          Level: 3,
          Amount: 360,
        },
      ],
    },
    Status: "Blessing",
  },
  {
    Id: 2042,
    Name: "AB_CANTO",
    Description: "Canto Candidus",
    MaxLevel: 3,
    Type: "Magic",
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
      Splash: true,
    },
    Hit: "Single",
    HitCount: 1,
    SplashArea: [
      {
        Level: 1,
        Area: 3,
      },
      {
        Level: 2,
        Area: 7,
      },
      {
        Level: 3,
        Area: 15,
      },
    ],
    CastCancel: true,
    CastTime: 3000,
    Duration1: [
      {
        Level: 1,
        Time: 120000,
      },
      {
        Level: 2,
        Time: 180000,
      },
      {
        Level: 3,
        Time: 240000,
      },
    ],
    FixedCastTime: 1000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 200,
        },
        {
          Level: 2,
          Amount: 220,
        },
        {
          Level: 3,
          Amount: 240,
        },
      ],
    },
    Status: "IncreaseAgi",
  },
  {
    Id: 2043,
    Name: "AB_CHEAL",
    Description: "Coluceo Heal",
    MaxLevel: 3,
    Type: "Magic",
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
      Splash: true,
    },
    Hit: "Single",
    HitCount: 1,
    Element: "Holy",
    SplashArea: [
      {
        Level: 1,
        Area: 3,
      },
      {
        Level: 2,
        Area: 7,
      },
      {
        Level: 3,
        Area: 15,
      },
    ],
    CastCancel: true,
    CastTime: 3000,
    Cooldown: 2000,
    FixedCastTime: [
      {
        Level: 1,
        Time: 1000,
      },
      {
        Level: 2,
        Time: 500,
      },
      {
        Level: 3,
        Time: 0,
      },
    ],
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 200,
        },
        {
          Level: 2,
          Amount: 220,
        },
        {
          Level: 3,
          Amount: 240,
        },
      ],
    },
  },
  {
    Id: 2044,
    Name: "AB_EPICLESIS",
    Description: "Epiclesis",
    MaxLevel: 5,
    Type: "Magic",
    TargetType: "Ground",
    DamageFlags: {
      NoDamage: true,
    },
    Range: 11,
    Hit: "Single",
    HitCount: 1,
    Element: "Holy",
    SplashArea: 2,
    ActiveInstance: 1,
    CastCancel: true,
    CastTime: [
      {
        Level: 1,
        Time: 2000,
      },
      {
        Level: 2,
        Time: 2500,
      },
      {
        Level: 3,
        Time: 3000,
      },
      {
        Level: 4,
        Time: 3500,
      },
      {
        Level: 5,
        Time: 4000,
      },
    ],
    AfterCastActDelay: 2000,
    Duration1: [
      {
        Level: 1,
        Time: 18000,
      },
      {
        Level: 2,
        Time: 21000,
      },
      {
        Level: 3,
        Time: 24000,
      },
      {
        Level: 4,
        Time: 27000,
      },
      {
        Level: 5,
        Time: 30000,
      },
    ],
    Cooldown: 60000,
    FixedCastTime: 2000,
    Requires: {
      SpCost: 300,
      ItemCost: [
        {
          Item: "Ansila",
          Amount: 1,
        },
        {
          Item: "Holy_Water",
          Amount: 1,
        },
      ],
    },
    Unit: {
      Id: "Epiclesis",
      Range: 2,
      Interval: 1000,
      Flag: {
        NoOverlap: true,
        PathCheck: true,
      },
    },
    Status: "Epiclesis",
  },
  {
    Id: 2045,
    Name: "AB_PRAEFATIO",
    Description: "Praefatio",
    MaxLevel: 10,
    Type: "Magic",
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
      Splash: true,
    },
    Hit: "Single",
    HitCount: 1,
    SplashArea: 15,
    CastCancel: true,
    CastTime: 2000,
    Duration1: 120000,
    Cooldown: [
      {
        Level: 1,
        Time: 13000,
      },
      {
        Level: 2,
        Time: 16000,
      },
      {
        Level: 3,
        Time: 19000,
      },
      {
        Level: 4,
        Time: 22000,
      },
      {
        Level: 5,
        Time: 25000,
      },
      {
        Level: 6,
        Time: 28000,
      },
      {
        Level: 7,
        Time: 31000,
      },
      {
        Level: 8,
        Time: 34000,
      },
      {
        Level: 9,
        Time: 37000,
      },
      {
        Level: 10,
        Time: 40000,
      },
    ],
    FixedCastTime: 1000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 90,
        },
        {
          Level: 2,
          Amount: 100,
        },
        {
          Level: 3,
          Amount: 110,
        },
        {
          Level: 4,
          Amount: 120,
        },
        {
          Level: 5,
          Amount: 130,
        },
        {
          Level: 6,
          Amount: 140,
        },
        {
          Level: 7,
          Amount: 150,
        },
        {
          Level: 8,
          Amount: 160,
        },
        {
          Level: 9,
          Amount: 170,
        },
        {
          Level: 10,
          Amount: 180,
        },
      ],
    },
    Status: "Kyrie",
  },
  {
    Id: 2046,
    Name: "AB_ORATIO",
    Description: "Oratio",
    MaxLevel: 10,
    Type: "Magic",
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
      Splash: true,
    },
    Hit: "Single",
    HitCount: 1,
    Element: "Holy",
    SplashArea: 15,
    CastCancel: true,
    CastTime: 4000,
    Duration1: 30000,
    Cooldown: 2000,
    FixedCastTime: 1000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 35,
        },
        {
          Level: 2,
          Amount: 38,
        },
        {
          Level: 3,
          Amount: 41,
        },
        {
          Level: 4,
          Amount: 44,
        },
        {
          Level: 5,
          Amount: 47,
        },
        {
          Level: 6,
          Amount: 50,
        },
        {
          Level: 7,
          Amount: 53,
        },
        {
          Level: 8,
          Amount: 56,
        },
        {
          Level: 9,
          Amount: 59,
        },
        {
          Level: 10,
          Amount: 62,
        },
      ],
    },
    Status: "Oratio",
  },
  {
    Id: 2047,
    Name: "AB_LAUDAAGNUS",
    Description: "Lauda Agnus",
    MaxLevel: 4,
    Type: "Magic",
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
      Splash: true,
    },
    Hit: "Single",
    HitCount: 1,
    Element: "Holy",
    SplashArea: 15,
    CastCancel: true,
    CastTime: 1000,
    Duration1: 60000,
    Cooldown: 3000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 50,
        },
        {
          Level: 2,
          Amount: 60,
        },
        {
          Level: 3,
          Amount: 70,
        },
        {
          Level: 4,
          Amount: 80,
        },
      ],
    },
    Status: "LaudaAgnus",
  },
  {
    Id: 2048,
    Name: "AB_LAUDARAMUS",
    Description: "Lauda Ramus",
    MaxLevel: 4,
    Type: "Magic",
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
      Splash: true,
    },
    Hit: "Single",
    HitCount: 1,
    Element: "Holy",
    SplashArea: 15,
    CastCancel: true,
    CastTime: 1000,
    Duration1: 60000,
    Cooldown: 3000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 50,
        },
        {
          Level: 2,
          Amount: 60,
        },
        {
          Level: 3,
          Amount: 70,
        },
        {
          Level: 4,
          Amount: 80,
        },
      ],
    },
    Status: "LaudaRamus",
  },
  {
    Id: 2049,
    Name: "AB_EUCHARISTICA",
    Description: "Eucharistica",
    MaxLevel: 10,
  },
  {
    Id: 2050,
    Name: "AB_RENOVATIO",
    Description: "Renovatio",
    MaxLevel: 4,
    Type: "Magic",
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Range: 11,
    Hit: "Single",
    HitCount: 1,
    Element: "Holy",
    SplashArea: 15,
    CopyFlags: {
      Skill: {
        Reproduce: true,
      },
    },
    CastCancel: true,
    CastTime: 3000,
    Duration1: [
      {
        Level: 1,
        Time: 90000,
      },
      {
        Level: 2,
        Time: 120000,
      },
      {
        Level: 3,
        Time: 150000,
      },
      {
        Level: 4,
        Time: 180000,
      },
    ],
    FixedCastTime: 2000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 240,
        },
        {
          Level: 2,
          Amount: 280,
        },
        {
          Level: 3,
          Amount: 320,
        },
        {
          Level: 4,
          Amount: 360,
        },
      ],
    },
    Status: "Renovatio",
  },
  {
    Id: 2051,
    Name: "AB_HIGHNESSHEAL",
    Description: "Highness Heal",
    MaxLevel: 5,
    Type: "Magic",
    TargetType: "Support",
    DamageFlags: {
      NoDamage: true,
      IgnoreDefense: true,
    },
    Range: 11,
    Hit: "Single",
    HitCount: 1,
    Element: "Holy",
    CopyFlags: {
      Skill: {
        Reproduce: true,
      },
    },
    CastCancel: true,
    CastTime: 1000,
    AfterCastActDelay: 1000,
    Cooldown: 3000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 70,
        },
        {
          Level: 2,
          Amount: 100,
        },
        {
          Level: 3,
          Amount: 130,
        },
        {
          Level: 4,
          Amount: 160,
        },
        {
          Level: 5,
          Amount: 190,
        },
      ],
    },
  },
  {
    Id: 2052,
    Name: "AB_CLEARANCE",
    Description: "Clearance",
    MaxLevel: 5,
    Type: "Magic",
    TargetType: "Attack",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      PartyOnly: true,
      TargetHidden: true,
    },
    Range: 11,
    Hit: "Single",
    HitCount: 1,
    CastCancel: true,
    CastTime: 4000,
    Cooldown: 10000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 54,
        },
        {
          Level: 2,
          Amount: 60,
        },
        {
          Level: 3,
          Amount: 66,
        },
        {
          Level: 4,
          Amount: 72,
        },
        {
          Level: 5,
          Amount: 78,
        },
      ],
    },
  },
  {
    Id: 2053,
    Name: "AB_EXPIATIO",
    Description: "Expiatio",
    MaxLevel: 5,
    Type: "Magic",
    TargetType: "Support",
    DamageFlags: {
      NoDamage: true,
    },
    Range: 11,
    Hit: "Single",
    HitCount: 1,
    CastCancel: true,
    CastTime: 1000,
    Duration1: [
      {
        Level: 1,
        Time: 150000,
      },
      {
        Level: 2,
        Time: 180000,
      },
      {
        Level: 3,
        Time: 210000,
      },
      {
        Level: 4,
        Time: 240000,
      },
      {
        Level: 5,
        Time: 270000,
      },
    ],
    FixedCastTime: 1000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 35,
        },
        {
          Level: 2,
          Amount: 40,
        },
        {
          Level: 3,
          Amount: 45,
        },
        {
          Level: 4,
          Amount: 50,
        },
        {
          Level: 5,
          Amount: 55,
        },
      ],
    },
    Status: "Expiatio",
  },
  {
    Id: 2054,
    Name: "AB_DUPLELIGHT",
    Description: "Duple Light",
    MaxLevel: 10,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Hit: "Single",
    HitCount: 1,
    Element: "Holy",
    CopyFlags: {
      Skill: {
        Reproduce: true,
      },
    },
    CastCancel: true,
    CastTime: 2000,
    AfterCastActDelay: 1000,
    Duration1: [
      {
        Level: 1,
        Time: 90000,
      },
      {
        Level: 2,
        Time: 120000,
      },
      {
        Level: 3,
        Time: 150000,
      },
      {
        Level: 4,
        Time: 180000,
      },
      {
        Level: 5,
        Time: 210000,
      },
      {
        Level: 6,
        Time: 240000,
      },
      {
        Level: 7,
        Time: 270000,
      },
      {
        Level: 8,
        Time: 300000,
      },
      {
        Level: 9,
        Time: 330000,
      },
      {
        Level: 10,
        Time: 360000,
      },
    ],
    FixedCastTime: 2000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 55,
        },
        {
          Level: 2,
          Amount: 60,
        },
        {
          Level: 3,
          Amount: 65,
        },
        {
          Level: 4,
          Amount: 70,
        },
        {
          Level: 5,
          Amount: 75,
        },
        {
          Level: 6,
          Amount: 80,
        },
        {
          Level: 7,
          Amount: 85,
        },
        {
          Level: 8,
          Amount: 90,
        },
        {
          Level: 9,
          Amount: 95,
        },
        {
          Level: 10,
          Amount: 100,
        },
      ],
    },
    Status: "DupleLight",
  },
  {
    Id: 2055,
    Name: "AB_DUPLELIGHT_MELEE",
    Description: "Duple Light Melee",
    MaxLevel: 10,
    Type: "Weapon",
    TargetType: "Attack",
    Range: -1,
    Hit: "Single",
    HitCount: 1,
    Element: "Weapon",
    CopyFlags: {
      Skill: {
        Reproduce: true,
      },
    },
    Requires: {
      SpCost: 1,
    },
  },
  {
    Id: 2056,
    Name: "AB_DUPLELIGHT_MAGIC",
    Description: "Duple Light Magic",
    MaxLevel: 10,
    Type: "Magic",
    TargetType: "Attack",
    Range: -1,
    Hit: "Single",
    HitCount: 1,
    CopyFlags: {
      Skill: {
        Reproduce: true,
      },
    },
    Requires: {
      SpCost: 1,
    },
  },
  {
    Id: 2057,
    Name: "AB_SILENTIUM",
    Description: "Silentium",
    MaxLevel: 5,
    Type: "Magic",
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
      Splash: true,
    },
    Hit: "Single",
    HitCount: 1,
    Element: "Holy",
    SplashArea: [
      {
        Level: 1,
        Area: 4,
      },
      {
        Level: 2,
        Area: 5,
      },
      {
        Level: 3,
        Area: 6,
      },
      {
        Level: 4,
        Area: 7,
      },
      {
        Level: 5,
        Area: 8,
      },
    ],
    CastCancel: true,
    CastTime: 4000,
    Duration1: [
      {
        Level: 1,
        Time: 20000,
      },
      {
        Level: 2,
        Time: 30000,
      },
      {
        Level: 3,
        Time: 40000,
      },
      {
        Level: 4,
        Time: 50000,
      },
      {
        Level: 5,
        Time: 60000,
      },
    ],
    Cooldown: 15000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 64,
        },
        {
          Level: 2,
          Amount: 68,
        },
        {
          Level: 3,
          Amount: 72,
        },
        {
          Level: 4,
          Amount: 76,
        },
        {
          Level: 5,
          Amount: 80,
        },
      ],
    },
  },
  {
    Id: 2515,
    Name: "AB_SECRAMENT",
    Description: "Secrament",
    MaxLevel: 5,
    Type: "Magic",
    TargetType: "Support",
    DamageFlags: {
      NoDamage: true,
    },
    Range: 11,
    Hit: "Single",
    HitCount: 1,
    CastCancel: true,
    CastTime: 1000,
    AfterCastActDelay: 500,
    Duration1: [
      {
        Level: 1,
        Time: 60000,
      },
      {
        Level: 2,
        Time: 90000,
      },
      {
        Level: 3,
        Time: 120000,
      },
      {
        Level: 4,
        Time: 150000,
      },
      {
        Level: 5,
        Time: 180000,
      },
    ],
    FixedCastTime: 1000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 100,
        },
        {
          Level: 2,
          Amount: 120,
        },
        {
          Level: 3,
          Amount: 140,
        },
        {
          Level: 4,
          Amount: 160,
        },
        {
          Level: 5,
          Amount: 180,
        },
      ],
    },
    Status: "Secrament",
  },
  {
    Id: 2233,
    Name: "RA_ARROWSTORM",
    Description: "Arrow Storm",
    MaxLevel: 10,
    Type: "Weapon",
    TargetType: "Attack",
    DamageFlags: {
      Splash: true,
    },
    Flags: {
      AlterRangeVulture: true,
    },
    Range: 9,
    Hit: "Multi_Hit",
    HitCount: -3,
    Element: "Weapon",
    SplashArea: [
      {
        Level: 1,
        Area: 2,
      },
      {
        Level: 2,
        Area: 2,
      },
      {
        Level: 3,
        Area: 2,
      },
      {
        Level: 4,
        Area: 2,
      },
      {
        Level: 5,
        Area: 2,
      },
      {
        Level: 6,
        Area: 3,
      },
      {
        Level: 7,
        Area: 3,
      },
      {
        Level: 8,
        Area: 3,
      },
      {
        Level: 9,
        Area: 3,
      },
      {
        Level: 10,
        Area: 4,
      },
    ],
    CopyFlags: {
      Skill: {
        Reproduce: true,
      },
    },
    CastCancel: true,
    CastTime: 2000,
    Cooldown: 3200,
    FixedCastTime: 300,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 24,
        },
        {
          Level: 2,
          Amount: 28,
        },
        {
          Level: 3,
          Amount: 32,
        },
        {
          Level: 4,
          Amount: 36,
        },
        {
          Level: 5,
          Amount: 40,
        },
        {
          Level: 6,
          Amount: 44,
        },
        {
          Level: 7,
          Amount: 48,
        },
        {
          Level: 8,
          Amount: 52,
        },
        {
          Level: 9,
          Amount: 56,
        },
        {
          Level: 10,
          Amount: 60,
        },
      ],
      Weapon: {
        Bow: true,
      },
      Ammo: {
        Arrow: true,
      },
      AmmoAmount: 5,
    },
  },
  {
    Id: 2234,
    Name: "RA_FEARBREEZE",
    Description: "Fear Breeze",
    MaxLevel: 5,
    TargetType: "Self",
    DamageFlags: {
      Critical: true,
    },
    Hit: "Single",
    HitCount: 1,
    CastCancel: true,
    Duration1: [
      {
        Level: 1,
        Time: 60000,
      },
      {
        Level: 2,
        Time: 90000,
      },
      {
        Level: 3,
        Time: 120000,
      },
      {
        Level: 4,
        Time: 150000,
      },
      {
        Level: 5,
        Time: 180000,
      },
    ],
    FixedCastTime: 2000,
    CastTimeFlags: {
      IgnoreDex: true,
      IgnoreStatus: true,
      IgnoreItemBonus: true,
    },
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 55,
        },
        {
          Level: 2,
          Amount: 60,
        },
        {
          Level: 3,
          Amount: 65,
        },
        {
          Level: 4,
          Amount: 70,
        },
        {
          Level: 5,
          Amount: 75,
        },
      ],
      Weapon: {
        Bow: true,
      },
    },
    Status: "FearBreeze",
  },
  {
    Id: 2235,
    Name: "RA_RANGERMAIN",
    Description: "Ranger Main",
    MaxLevel: 10,
  },
  {
    Id: 2236,
    Name: "RA_AIMEDBOLT",
    Description: "Aimed Bolt",
    MaxLevel: 10,
    Type: "Weapon",
    TargetType: "Attack",
    Flags: {
      AlterRangeVulture: true,
    },
    Range: 9,
    Hit: "Multi_Hit",
    HitCount: 5,
    Element: "Weapon",
    CopyFlags: {
      Skill: {
        Reproduce: true,
      },
    },
    CastCancel: true,
    CastTime: 4000,
    AfterCastActDelay: 500,
    Cooldown: 1000,
    FixedCastTime: 1000,
    Requires: {
      SpCost: 40,
      Weapon: {
        Bow: true,
      },
      Ammo: {
        Arrow: true,
      },
      AmmoAmount: 3,
    },
  },
  {
    Id: 2237,
    Name: "RA_DETONATOR",
    Description: "Detonator",
    MaxLevel: 1,
    TargetType: "Ground",
    DamageFlags: {
      NoDamage: true,
      Splash: true,
    },
    Flags: {
      TargetTrap: true,
      AllowOnWarg: true,
    },
    Range: 9,
    Hit: "Single",
    HitCount: 1,
    SplashArea: 3,
    Duration1: 1000,
    Requires: {
      SpCost: 15,
    },
  },
  {
    Id: 2238,
    Name: "RA_ELECTRICSHOCKER",
    Description: "Electric Shocker",
    MaxLevel: 5,
    Type: "Misc",
    TargetType: "Ground",
    DamageFlags: {
      NoDamage: true,
      Splash: true,
    },
    Flags: {
      IsTrap: true,
      AllowOnWarg: true,
    },
    Range: 3,
    Hit: "Single",
    HitCount: 1,
    SplashArea: 2,
    ActiveInstance: 3,
    Duration1: 15000,
    Duration2: [
      {
        Level: 1,
        Time: 20000,
      },
      {
        Level: 2,
        Time: 22000,
      },
      {
        Level: 3,
        Time: 24000,
      },
      {
        Level: 4,
        Time: 26000,
      },
      {
        Level: 5,
        Time: 28000,
      },
    ],
    Requires: {
      SpCost: 35,
      ItemCost: [
        {
          Item: "Special_Alloy_Trap",
          Amount: 1,
        },
      ],
    },
    Unit: {
      Id: "Electricshocker",
      Range: 1,
      Interval: 1000,
      Target: "Enemy",
      Flag: {
        NoReiteration: true,
        NoFootSet: true,
        RemovedByFireRain: true,
      },
    },
    Status: "ElectricShocker",
  },
  {
    Id: 2239,
    Name: "RA_CLUSTERBOMB",
    Description: "Cluster Bomb",
    MaxLevel: 5,
    Type: "Misc",
    TargetType: "Ground",
    DamageFlags: {
      Splash: true,
      IgnoreFlee: true,
    },
    Flags: {
      IsTrap: true,
      AlterRangeResearchTrap: true,
      AllowOnWarg: true,
    },
    Range: 3,
    Hit: "Single",
    HitCount: 1,
    SplashArea: 3,
    ActiveInstance: 3,
    CopyFlags: {
      Skill: {
        Reproduce: true,
      },
    },
    Duration1: 15000,
    Requires: {
      SpCost: 20,
      ItemCost: [
        {
          Item: "Special_Alloy_Trap",
          Amount: 1,
        },
      ],
    },
    Unit: {
      Id: "Clusterbomb",
      Range: 1,
      Interval: 1000,
      Target: "Enemy",
      Flag: {
        NoReiteration: true,
        NoFootSet: true,
        RemovedByFireRain: true,
      },
    },
  },
  {
    Id: 2240,
    Name: "RA_WUGMASTERY",
    Description: "Warg Mastery",
    MaxLevel: 1,
    TargetType: "Self",
    Hit: "Single",
    HitCount: 1,
    AfterCastActDelay: 1000,
    Requires: {
      SpCost: 5,
      ItemCost: [
        {
          Item: "Wolf's_Flute",
          Amount: 0,
        },
      ],
    },
  },
  {
    Id: 2241,
    Name: "RA_WUGRIDER",
    Description: "Warg Rider",
    MaxLevel: 3,
    TargetType: "Self",
    Flags: {
      AllowOnWarg: true,
    },
    Hit: "Single",
    HitCount: 1,
    AfterCastActDelay: 500,
    Requires: {
      SpCost: 2,
    },
  },
  {
    Id: 2242,
    Name: "RA_WUGDASH",
    Description: "Warg Dash",
    MaxLevel: 1,
    Type: "Weapon",
    TargetType: "Self",
    DamageFlags: {
      Splash: true,
      IgnoreFlee: true,
    },
    Flags: {
      AllowOnWarg: true,
      IncreaseDanceWithWugDamage: true,
      Toggleable: true,
    },
    Hit: "Single",
    HitCount: 1,
    Element: "Weapon",
    SplashArea: 1,
    Requires: {
      SpCost: 4,
      State: "Move_Enable",
    },
    Status: "WugDash",
  },
  {
    Id: 2243,
    Name: "RA_WUGSTRIKE",
    Description: "Warg Strike",
    MaxLevel: 5,
    Type: "Weapon",
    TargetType: "Attack",
    DamageFlags: {
      IgnoreAtkCard: true,
      IgnoreElement: true,
      IgnoreDefCard: true,
    },
    Flags: {
      AllowOnWarg: true,
      IgnoreAutoGuard: true,
      IgnoreCicada: true,
      IncreaseDanceWithWugDamage: true,
    },
    Range: 9,
    Hit: "Single",
    HitCount: 1,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 20,
        },
        {
          Level: 2,
          Amount: 22,
        },
        {
          Level: 3,
          Amount: 24,
        },
        {
          Level: 4,
          Amount: 26,
        },
        {
          Level: 5,
          Amount: 28,
        },
      ],
    },
  },
  {
    Id: 2244,
    Name: "RA_WUGBITE",
    Description: "Warg Bite",
    MaxLevel: 5,
    Type: "Weapon",
    TargetType: "Attack",
    DamageFlags: {
      IgnoreAtkCard: true,
      IgnoreElement: true,
      IgnoreDefCard: true,
    },
    Flags: {
      AlterRangeVulture: true,
      IgnoreAutoGuard: true,
      IgnoreCicada: true,
      IncreaseDanceWithWugDamage: true,
    },
    Range: 9,
    Hit: "Single",
    HitCount: 1,
    AfterCastActDelay: 2000,
    Duration1: [
      {
        Level: 1,
        Time: 1000,
      },
      {
        Level: 2,
        Time: 2000,
      },
      {
        Level: 3,
        Time: 3000,
      },
      {
        Level: 4,
        Time: 4000,
      },
      {
        Level: 5,
        Time: 5000,
      },
    ],
    Cooldown: [
      {
        Level: 1,
        Time: 4000,
      },
      {
        Level: 2,
        Time: 6000,
      },
      {
        Level: 3,
        Time: 8000,
      },
      {
        Level: 4,
        Time: 10000,
      },
      {
        Level: 5,
        Time: 12000,
      },
    ],
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 40,
        },
        {
          Level: 2,
          Amount: 42,
        },
        {
          Level: 3,
          Amount: 44,
        },
        {
          Level: 4,
          Amount: 46,
        },
        {
          Level: 5,
          Amount: 48,
        },
      ],
      State: "Wug",
    },
    Status: "Bite",
  },
  {
    Id: 2245,
    Name: "RA_TOOTHOFWUG",
    Description: "Tooth of Warg",
    MaxLevel: 10,
  },
  {
    Id: 2246,
    Name: "RA_SENSITIVEKEEN",
    Description: "Sensitive Keen",
    MaxLevel: 5,
    Type: "Weapon",
    TargetType: "Self",
    DamageFlags: {
      Splash: true,
    },
    Flags: {
      TargetTrap: true,
    },
    Hit: "Single",
    HitCount: 1,
    SplashArea: [
      {
        Level: 1,
        Area: 3,
      },
      {
        Level: 2,
        Area: 4,
      },
      {
        Level: 3,
        Area: 5,
      },
      {
        Level: 4,
        Area: 6,
      },
      {
        Level: 5,
        Area: 7,
      },
    ],
    AfterCastActDelay: 3000,
    Requires: {
      SpCost: 12,
      State: "Wug",
    },
  },
  {
    Id: 2247,
    Name: "RA_CAMOUFLAGE",
    Description: "Camouflage",
    MaxLevel: 5,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      IgnoreKagehumi: true,
      IgnoreWugBite: true,
      Toggleable: true,
    },
    Hit: "Single",
    HitCount: 1,
    Duration1: 10000,
    Requires: {
      SpCost: 40,
    },
    Status: "Camouflage",
  },
  {
    Id: 2248,
    Name: "RA_RESEARCHTRAP",
    Description: "Research Trap",
    MaxLevel: 10,
  },
  {
    Id: 2249,
    Name: "RA_MAGENTATRAP",
    Description: "Magenta Trap",
    MaxLevel: 1,
    Type: "Misc",
    TargetType: "Ground",
    DamageFlags: {
      NoDamage: true,
      Splash: true,
      IgnoreFlee: true,
    },
    Flags: {
      IsTrap: true,
      AllowOnWarg: true,
    },
    Range: 3,
    Hit: "Single",
    HitCount: 1,
    Element: "Fire",
    SplashArea: 2,
    ActiveInstance: 1,
    AfterCastActDelay: 2000,
    Duration1: 15000,
    Requires: {
      SpCost: 10,
      ItemCost: [
        {
          Item: "Special_Alloy_Trap",
          Amount: 1,
        },
        {
          Item: "Scarlet_Pts",
          Amount: 1,
        },
      ],
    },
    Unit: {
      Id: "Magentatrap",
      Range: 1,
      Interval: 1000,
      Target: "Enemy",
      Flag: {
        NoReiteration: true,
        NoPc: true,
        RemovedByFireRain: true,
      },
    },
    Status: "ElementalChange",
  },
  {
    Id: 2250,
    Name: "RA_COBALTTRAP",
    Description: "Cobalt Trap",
    MaxLevel: 1,
    Type: "Misc",
    TargetType: "Ground",
    DamageFlags: {
      NoDamage: true,
      Splash: true,
      IgnoreFlee: true,
    },
    Flags: {
      IsTrap: true,
      AllowOnWarg: true,
    },
    Range: 3,
    Hit: "Single",
    HitCount: 1,
    Element: "Water",
    SplashArea: 2,
    ActiveInstance: 1,
    AfterCastActDelay: 2000,
    Duration1: 15000,
    Requires: {
      SpCost: 10,
      ItemCost: [
        {
          Item: "Special_Alloy_Trap",
          Amount: 1,
        },
        {
          Item: "Indigo_Pts",
          Amount: 1,
        },
      ],
    },
    Unit: {
      Id: "Cobalttrap",
      Range: 1,
      Interval: 1000,
      Target: "Enemy",
      Flag: {
        NoReiteration: true,
        NoPc: true,
        RemovedByFireRain: true,
      },
    },
    Status: "ElementalChange",
  },
  {
    Id: 2251,
    Name: "RA_MAIZETRAP",
    Description: "Maize Trap",
    MaxLevel: 1,
    Type: "Misc",
    TargetType: "Ground",
    DamageFlags: {
      NoDamage: true,
      Splash: true,
      IgnoreFlee: true,
    },
    Flags: {
      IsTrap: true,
      AllowOnWarg: true,
    },
    Range: 3,
    Hit: "Single",
    HitCount: 1,
    Element: "Earth",
    SplashArea: 2,
    ActiveInstance: 1,
    AfterCastActDelay: 2000,
    Duration1: 15000,
    Requires: {
      SpCost: 10,
      ItemCost: [
        {
          Item: "Special_Alloy_Trap",
          Amount: 1,
        },
        {
          Item: "Lime_Green_Pts",
          Amount: 1,
        },
      ],
    },
    Unit: {
      Id: "Maizetrap",
      Range: 1,
      Interval: 1000,
      Target: "Enemy",
      Flag: {
        NoReiteration: true,
        NoPc: true,
        RemovedByFireRain: true,
      },
    },
    Status: "ElementalChange",
  },
  {
    Id: 2252,
    Name: "RA_VERDURETRAP",
    Description: "Verdure Trap",
    MaxLevel: 1,
    Type: "Misc",
    TargetType: "Ground",
    DamageFlags: {
      NoDamage: true,
      Splash: true,
      IgnoreFlee: true,
    },
    Flags: {
      IsTrap: true,
      AllowOnWarg: true,
    },
    Range: 3,
    Hit: "Single",
    HitCount: 1,
    Element: "Wind",
    SplashArea: 2,
    ActiveInstance: 1,
    AfterCastActDelay: 2000,
    Duration1: 15000,
    Requires: {
      SpCost: 10,
      ItemCost: [
        {
          Item: "Special_Alloy_Trap",
          Amount: 1,
        },
        {
          Item: "Yellow_Wish_Pts",
          Amount: 1,
        },
      ],
    },
    Unit: {
      Id: "Verduretrap",
      Range: 1,
      Interval: 1000,
      Target: "Enemy",
      Flag: {
        NoReiteration: true,
        NoPc: true,
        RemovedByFireRain: true,
      },
    },
    Status: "ElementalChange",
  },
  {
    Id: 2253,
    Name: "RA_FIRINGTRAP",
    Description: "Firing Trap",
    MaxLevel: 5,
    Type: "Misc",
    TargetType: "Ground",
    DamageFlags: {
      Splash: true,
      IgnoreFlee: true,
    },
    Flags: {
      IsTrap: true,
      TargetTrap: true,
      AlterRangeResearchTrap: true,
      AllowOnWarg: true,
    },
    Range: 3,
    Hit: "Single",
    HitCount: 1,
    Element: "Fire",
    SplashArea: 2,
    ActiveInstance: 2,
    CopyFlags: {
      Skill: {
        Reproduce: true,
      },
    },
    Duration1: 15000,
    Duration2: 13000,
    Requires: {
      SpCost: 10,
      ItemCost: [
        {
          Item: "Special_Alloy_Trap",
          Amount: 1,
        },
      ],
    },
    Unit: {
      Id: "Firingtrap",
      Range: 1,
      Interval: 1000,
      Target: "Enemy",
      Flag: {
        NoReiteration: true,
        RemovedByFireRain: true,
      },
    },
    Status: "Burning",
  },
  {
    Id: 2254,
    Name: "RA_ICEBOUNDTRAP",
    Description: "Icebound Trap",
    MaxLevel: 5,
    Type: "Misc",
    TargetType: "Ground",
    DamageFlags: {
      Splash: true,
      IgnoreFlee: true,
    },
    Flags: {
      IsTrap: true,
      TargetTrap: true,
      AlterRangeResearchTrap: true,
      AllowOnWarg: true,
    },
    Range: 3,
    Hit: "Single",
    HitCount: 1,
    Element: "Water",
    SplashArea: 2,
    ActiveInstance: 2,
    CopyFlags: {
      Skill: {
        Reproduce: true,
      },
    },
    Duration1: 15000,
    Duration2: 20000,
    Requires: {
      SpCost: 10,
      ItemCost: [
        {
          Item: "Special_Alloy_Trap",
          Amount: 1,
        },
      ],
    },
    Unit: {
      Id: "Iceboundtrap",
      Range: 1,
      Interval: 1000,
      Target: "Enemy",
      Flag: {
        NoReiteration: true,
        RemovedByFireRain: true,
      },
    },
    Status: "Freezing",
  },
  {
    Id: 2255,
    Name: "NC_MADOLICENCE",
    Description: "Mado License",
    MaxLevel: 5,
  },
  {
    Id: 2256,
    Name: "NC_BOOSTKNUCKLE",
    Description: "Boost Knuckle",
    MaxLevel: 5,
    Type: "Weapon",
    TargetType: "Attack",
    Flags: {
      AllowOnMado: true,
    },
    Range: 11,
    Hit: "Multi_Hit",
    HitCount: 1,
    Element: "Weapon",
    CastTime: [
      {
        Level: 1,
        Time: 100,
      },
      {
        Level: 2,
        Time: 200,
      },
      {
        Level: 3,
        Time: 300,
      },
      {
        Level: 4,
        Time: 400,
      },
      {
        Level: 5,
        Time: 500,
      },
    ],
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 5,
        },
        {
          Level: 2,
          Amount: 10,
        },
        {
          Level: 3,
          Amount: 15,
        },
        {
          Level: 4,
          Amount: 20,
        },
        {
          Level: 5,
          Amount: 25,
        },
      ],
      State: "Mado",
    },
  },
  {
    Id: 2257,
    Name: "NC_PILEBUNKER",
    Description: "Pile Bunker",
    MaxLevel: 3,
    Type: "Weapon",
    TargetType: "Attack",
    Flags: {
      AllowOnMado: true,
    },
    Range: 3,
    Hit: "Single",
    HitCount: 1,
    Element: "Weapon",
    AfterCastActDelay: 2000,
    Cooldown: 5000,
    Requires: {
      SpCost: 50,
      State: "Mado",
      Equipment: {
        Pilebuncker: true,
        Pilebuncker_S: true,
        Pilebuncker_P: true,
        Pilebuncker_T: true,
      },
    },
  },
  {
    Id: 2258,
    Name: "NC_VULCANARM",
    Description: "Vulcan Arm",
    MaxLevel: 3,
    Type: "Weapon",
    TargetType: "Attack",
    DamageFlags: {
      Splash: true,
    },
    Flags: {
      TargetTrap: true,
      AllowOnMado: true,
    },
    Range: 13,
    Hit: "Multi_Hit",
    HitCount: 1,
    Element: "Weapon",
    SplashArea: 2,
    CastTime: 200,
    AfterCastActDelay: 100,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 9,
        },
        {
          Level: 2,
          Amount: 12,
        },
        {
          Level: 3,
          Amount: 15,
        },
      ],
      State: "Mado",
      ItemCost: [
        {
          Item: "Vulcan_Bullet",
          Amount: 1,
        },
      ],
    },
  },
  {
    Id: 2259,
    Name: "NC_FLAMELAUNCHER",
    Description: "Flame Launcher",
    MaxLevel: 3,
    Type: "Weapon",
    TargetType: "Attack",
    Flags: {
      AllowOnMado: true,
    },
    Range: 5,
    Hit: "Single",
    HitCount: 1,
    Element: "Fire",
    SplashArea: 1,
    ActiveInstance: 5,
    CastTime: [
      {
        Level: 1,
        Time: 500,
      },
      {
        Level: 2,
        Time: 1000,
      },
      {
        Level: 3,
        Time: 1500,
      },
    ],
    AfterCastActDelay: [
      {
        Level: 1,
        Time: 1500,
      },
      {
        Level: 2,
        Time: 1000,
      },
      {
        Level: 3,
        Time: 500,
      },
    ],
    Duration1: [
      {
        Level: 1,
        Time: 7000,
      },
      {
        Level: 2,
        Time: 14000,
      },
      {
        Level: 3,
        Time: 21000,
      },
    ],
    FixedCastTime: 500,
    Requires: {
      SpCost: 20,
      State: "Mado",
      ItemCost: [
        {
          Item: "Flame_Thrower",
          Amount: 0,
        },
        {
          Item: "Magic_Gear_Fuel",
          Amount: 1,
        },
      ],
    },
  },
  {
    Id: 2260,
    Name: "NC_COLDSLOWER",
    Description: "Cold Slower",
    MaxLevel: 3,
    Type: "Weapon",
    TargetType: "Ground",
    DamageFlags: {
      Splash: true,
    },
    Flags: {
      TargetTrap: true,
      AllowOnMado: true,
    },
    Range: 7,
    Hit: "Single",
    HitCount: 1,
    Element: "Water",
    SplashArea: [
      {
        Level: 1,
        Area: 2,
      },
      {
        Level: 2,
        Area: 3,
      },
      {
        Level: 3,
        Area: 4,
      },
    ],
    CastTime: 1000,
    AfterCastActDelay: [
      {
        Level: 1,
        Time: 1000,
      },
      {
        Level: 2,
        Time: 2000,
      },
      {
        Level: 3,
        Time: 3000,
      },
    ],
    Duration1: [
      {
        Level: 1,
        Time: 7000,
      },
      {
        Level: 2,
        Time: 14000,
      },
      {
        Level: 3,
        Time: 21000,
      },
    ],
    Duration2: 40000,
    Requires: {
      SpCost: 20,
      State: "Mado",
      ItemCost: [
        {
          Item: "Magic_Gear_Fuel",
          Amount: 1,
        },
        {
          Item: "Liquid_Condensed_Bullet",
          Amount: 1,
        },
      ],
    },
  },
  {
    Id: 2261,
    Name: "NC_ARMSCANNON",
    Description: "Arm Cannon",
    MaxLevel: 5,
    Type: "Weapon",
    TargetType: "Attack",
    DamageFlags: {
      Splash: true,
      IgnoreFlee: true,
    },
    Flags: {
      AllowOnMado: true,
    },
    Range: 9,
    Hit: "Multi_Hit",
    HitCount: 1,
    Element: "Weapon",
    SplashArea: [
      {
        Level: 1,
        Area: 1,
      },
      {
        Level: 2,
        Area: 1,
      },
      {
        Level: 3,
        Area: 1,
      },
      {
        Level: 4,
        Area: 2,
      },
      {
        Level: 5,
        Area: 2,
      },
    ],
    CastTime: [
      {
        Level: 1,
        Time: 1000,
      },
      {
        Level: 2,
        Time: 1200,
      },
      {
        Level: 3,
        Time: 1600,
      },
      {
        Level: 4,
        Time: 1800,
      },
      {
        Level: 5,
        Time: 2000,
      },
    ],
    AfterCastActDelay: 1000,
    Cooldown: [
      {
        Level: 1,
        Time: 100,
      },
      {
        Level: 2,
        Time: 150,
      },
      {
        Level: 3,
        Time: 200,
      },
      {
        Level: 4,
        Time: 250,
      },
      {
        Level: 5,
        Time: 300,
      },
    ],
    FixedCastTime: [
      {
        Level: 1,
        Time: 500,
      },
      {
        Level: 2,
        Time: 400,
      },
      {
        Level: 3,
        Time: 300,
      },
      {
        Level: 4,
        Time: 200,
      },
      {
        Level: 5,
        Time: 100,
      },
    ],
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 40,
        },
        {
          Level: 2,
          Amount: 45,
        },
        {
          Level: 3,
          Amount: 50,
        },
        {
          Level: 4,
          Amount: 55,
        },
        {
          Level: 5,
          Amount: 60,
        },
      ],
      Ammo: {
        Cannonball: true,
      },
      AmmoAmount: 1,
      State: "Mado",
      ItemCost: [
        {
          Item: "Magic_Gear_Fuel",
          Amount: 1,
        },
      ],
    },
  },
  {
    Id: 2262,
    Name: "NC_ACCELERATION",
    Description: "Acceleration",
    MaxLevel: 3,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      AllowOnMado: true,
    },
    Hit: "Single",
    HitCount: 1,
    Duration1: [
      {
        Level: 1,
        Time: 60000,
      },
      {
        Level: 2,
        Time: 90000,
      },
      {
        Level: 3,
        Time: 120000,
      },
    ],
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 20,
        },
        {
          Level: 2,
          Amount: 40,
        },
        {
          Level: 3,
          Amount: 60,
        },
      ],
      State: "Mado",
      ItemCost: [
        {
          Item: "Magic_Gear_Fuel",
          Amount: 1,
        },
      ],
      Equipment: {
        Accelerator: true,
      },
    },
    Status: "Acceleration",
  },
  {
    Id: 2263,
    Name: "NC_HOVERING",
    Description: "Hovering",
    MaxLevel: 1,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      AllowOnMado: true,
    },
    Hit: "Single",
    HitCount: 1,
    Duration1: 90000,
    Requires: {
      SpCost: 25,
      State: "Mado",
      ItemCost: [
        {
          Item: "Magic_Gear_Fuel",
          Amount: 1,
        },
      ],
      Equipment: {
        Hovering_Booster: true,
      },
    },
    Status: "Hovering",
  },
  {
    Id: 2264,
    Name: "NC_F_SIDESLIDE",
    Description: "Front-Side Slide",
    MaxLevel: 1,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      AllowOnMado: true,
    },
    Hit: "Single",
    HitCount: 1,
    Knockback: 7,
    AfterCastActDelay: 500,
    Requires: {
      SpCost: 5,
      State: "Mado",
      ItemCost: [
        {
          Item: "Magic_Gear_Fuel",
          Amount: 1,
        },
      ],
    },
  },
  {
    Id: 2265,
    Name: "NC_B_SIDESLIDE",
    Description: "Back-Side Slide",
    MaxLevel: 1,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      AllowOnMado: true,
    },
    Hit: "Single",
    HitCount: 1,
    Knockback: 7,
    AfterCastActDelay: 500,
    Requires: {
      SpCost: 5,
      State: "Mado",
      ItemCost: [
        {
          Item: "Magic_Gear_Fuel",
          Amount: 1,
        },
      ],
    },
  },
  {
    Id: 2266,
    Name: "NC_MAINFRAME",
    Description: "Mainframe Restructure",
    MaxLevel: 4,
  },
  {
    Id: 2267,
    Name: "NC_SELFDESTRUCTION",
    Description: "Self Destruction",
    MaxLevel: 3,
    Type: "Weapon",
    TargetType: "Self",
    DamageFlags: {
      Splash: true,
      IgnoreAtkCard: true,
      IgnoreFlee: true,
      IgnoreDefCard: true,
    },
    Flags: {
      TargetTrap: true,
      AllowOnMado: true,
      IgnoreAutoGuard: true,
      IgnoreCicada: true,
    },
    Hit: "Single",
    HitCount: 1,
    SplashArea: [
      {
        Level: 1,
        Area: 2,
      },
      {
        Level: 2,
        Area: 3,
      },
      {
        Level: 3,
        Area: 4,
      },
    ],
    Knockback: 5,
    CastTime: [
      {
        Level: 1,
        Time: 2000,
      },
      {
        Level: 2,
        Time: 1500,
      },
      {
        Level: 3,
        Time: 1000,
      },
    ],
    Cooldown: 300000,
    FixedCastTime: 500,
    Requires: {
      SpCost: 200,
      State: "Mado",
      ItemCost: [
        {
          Item: "Magic_Gear_Fuel",
          Amount: 3,
        },
      ],
      Equipment: {
        Suicidal_Device: true,
      },
    },
  },
  {
    Id: 2268,
    Name: "NC_SHAPESHIFT",
    Description: "Shape Shift",
    MaxLevel: 4,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      AllowOnMado: true,
    },
    Hit: "Single",
    HitCount: 1,
    CastCancel: true,
    AfterCastActDelay: 2000,
    Duration1: 300000,
    FixedCastTime: 2000,
    CastTimeFlags: {
      IgnoreDex: true,
      IgnoreStatus: true,
      IgnoreItemBonus: true,
    },
    Requires: {
      SpCost: 100,
      State: "Mado",
      ItemCost: [
        {
          Item: "Scarlet_Pts",
          Amount: 3,
          Level: 1,
        },
        {
          Item: "Lime_Green_Pts",
          Amount: 3,
          Level: 2,
        },
        {
          Item: "Yellow_Wish_Pts",
          Amount: 3,
          Level: 3,
        },
        {
          Item: "Indigo_Pts",
          Amount: 3,
          Level: 4,
        },
        {
          Item: "Magic_Gear_Fuel",
          Amount: 2,
        },
      ],
      Equipment: {
        Shape_Shifter: true,
      },
    },
    Status: "ShapeShift",
  },
  {
    Id: 2269,
    Name: "NC_EMERGENCYCOOL",
    Description: "Emergency Cool",
    MaxLevel: 1,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      AllowOnMado: true,
    },
    Hit: "Single",
    HitCount: 1,
    AfterCastActDelay: 500,
    Cooldown: 5000,
    Requires: {
      SpCost: 20,
      State: "Mado",
      ItemCost: [
        {
          Item: "Magic_Gear_Fuel",
          Amount: 1,
        },
      ],
      Equipment: {
        Cooling_Device: true,
        High_Quality_Cooler: true,
        Special_Cooler: true,
      },
    },
  },
  {
    Id: 2270,
    Name: "NC_INFRAREDSCAN",
    Description: "Infrared Scan",
    MaxLevel: 1,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
      Splash: true,
    },
    Flags: {
      AllowOnMado: true,
    },
    Hit: "Single",
    HitCount: 1,
    SplashArea: 7,
    CastCancel: true,
    AfterCastActDelay: 500,
    Duration1: 3000,
    Cooldown: 3000,
    Requires: {
      SpCost: 45,
      State: "Mado",
    },
    Status: "InfraredScan",
  },
  {
    Id: 2271,
    Name: "NC_ANALYZE",
    Description: "Analyze",
    MaxLevel: 3,
    TargetType: "Attack",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      AllowOnMado: true,
    },
    Range: 9,
    Hit: "Single",
    HitCount: 1,
    CastCancel: true,
    AfterCastActDelay: 1000,
    Duration1: 20000,
    FixedCastTime: 1000,
    CastTimeFlags: {
      IgnoreDex: true,
      IgnoreStatus: true,
      IgnoreItemBonus: true,
    },
    Requires: {
      SpCost: 30,
      State: "Mado",
      ItemCost: [
        {
          Item: "Magic_Gear_Fuel",
          Amount: 1,
        },
      ],
    },
    Status: "Analyze",
  },
  {
    Id: 2272,
    Name: "NC_MAGNETICFIELD",
    Description: "Magnetic Field",
    MaxLevel: 3,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
      Splash: true,
    },
    Flags: {
      AllowOnMado: true,
    },
    Hit: "Single",
    HitCount: 1,
    SplashArea: 2,
    Duration1: [
      {
        Level: 1,
        Time: 4000,
      },
      {
        Level: 2,
        Time: 6000,
      },
      {
        Level: 3,
        Time: 8000,
      },
    ],
    Cooldown: [
      {
        Level: 1,
        Time: 20000,
      },
      {
        Level: 2,
        Time: 15000,
      },
      {
        Level: 3,
        Time: 10000,
      },
    ],
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 60,
        },
        {
          Level: 2,
          Amount: 70,
        },
        {
          Level: 3,
          Amount: 80,
        },
      ],
      State: "Mado",
      ItemCost: [
        {
          Item: "Magic_Gear_Fuel",
          Amount: 2,
        },
      ],
      Equipment: {
        Mag_Field_Generator: true,
      },
    },
    Status: "MagneticField",
  },
  {
    Id: 2273,
    Name: "NC_NEUTRALBARRIER",
    Description: "Neutral Barrier",
    MaxLevel: 3,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      AllowOnMado: true,
    },
    Hit: "Single",
    HitCount: 1,
    Duration1: [
      {
        Level: 1,
        Time: 30000,
      },
      {
        Level: 2,
        Time: 45000,
      },
      {
        Level: 3,
        Time: 60000,
      },
    ],
    Cooldown: [
      {
        Level: 1,
        Time: 20000,
      },
      {
        Level: 2,
        Time: 15000,
      },
      {
        Level: 3,
        Time: 10000,
      },
    ],
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 80,
        },
        {
          Level: 2,
          Amount: 90,
        },
        {
          Level: 3,
          Amount: 100,
        },
      ],
      State: "Mado",
      ItemCost: [
        {
          Item: "Magic_Gear_Fuel",
          Amount: 1,
        },
      ],
      Equipment: {
        Barrier_Builder: true,
      },
    },
    Unit: {
      Id: "Neutralbarrier",
      Layout: 2,
      Interval: -1,
    },
    Status: "NeutralBarrier",
  },
  {
    Id: 2274,
    Name: "NC_STEALTHFIELD",
    Description: "Stealth Field",
    MaxLevel: 3,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      AllowOnMado: true,
    },
    Hit: "Single",
    HitCount: 1,
    Duration1: [
      {
        Level: 1,
        Time: 15000,
      },
      {
        Level: 2,
        Time: 20000,
      },
      {
        Level: 3,
        Time: 25000,
      },
    ],
    Cooldown: [
      {
        Level: 1,
        Time: 20000,
      },
      {
        Level: 2,
        Time: 15000,
      },
      {
        Level: 3,
        Time: 10000,
      },
    ],
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 80,
        },
        {
          Level: 2,
          Amount: 100,
        },
        {
          Level: 3,
          Amount: 120,
        },
      ],
      State: "Mado",
      ItemCost: [
        {
          Item: "Magic_Gear_Fuel",
          Amount: 2,
        },
      ],
      Equipment: {
        Camouflage_Generator: true,
      },
    },
    Unit: {
      Id: "Stealthfield",
      Layout: 2,
      Interval: -1,
    },
    Status: "StealthField",
  },
  {
    Id: 2275,
    Name: "NC_REPAIR",
    Description: "Repair",
    MaxLevel: 5,
    Type: "Magic",
    TargetType: "Support",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      AllowOnMado: true,
    },
    Range: [
      {
        Level: 1,
        Size: 5,
      },
      {
        Level: 2,
        Size: 6,
      },
      {
        Level: 3,
        Size: 7,
      },
      {
        Level: 4,
        Size: 8,
      },
      {
        Level: 5,
        Size: 9,
      },
    ],
    Hit: "Single",
    HitCount: 1,
    CastCancel: true,
    CastTime: [
      {
        Level: 1,
        Time: 200,
      },
      {
        Level: 2,
        Time: 300,
      },
      {
        Level: 3,
        Time: 400,
      },
      {
        Level: 4,
        Time: 500,
      },
      {
        Level: 5,
        Time: 600,
      },
    ],
    AfterCastActDelay: 1000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 25,
        },
        {
          Level: 2,
          Amount: 30,
        },
        {
          Level: 3,
          Amount: 35,
        },
        {
          Level: 4,
          Amount: 40,
        },
        {
          Level: 5,
          Amount: 45,
        },
      ],
      State: "Mado",
      ItemCost: [
        {
          Item: "RepairA",
          Amount: 1,
          Level: 1,
        },
        {
          Item: "RepairA",
          Amount: 1,
          Level: 2,
        },
        {
          Item: "RepairB",
          Amount: 1,
          Level: 3,
        },
        {
          Item: "RepairB",
          Amount: 1,
          Level: 4,
        },
        {
          Item: "RepairC",
          Amount: 1,
          Level: 5,
        },
        {
          Item: "Repair_Kit",
          Amount: 0,
        },
      ],
    },
  },
  {
    Id: 2276,
    Name: "NC_TRAININGAXE",
    Description: "Axe Training",
    MaxLevel: 10,
  },
  {
    Id: 2277,
    Name: "NC_RESEARCHFE",
    Description: "Research Fire/Earth",
    MaxLevel: 5,
  },
  {
    Id: 2278,
    Name: "NC_AXEBOOMERANG",
    Description: "Axe Boomerang",
    MaxLevel: 5,
    Type: "Weapon",
    TargetType: "Attack",
    Flags: {
      AllowOnMado: true,
    },
    Range: [
      {
        Level: 1,
        Size: 5,
      },
      {
        Level: 2,
        Size: 6,
      },
      {
        Level: 3,
        Size: 7,
      },
      {
        Level: 4,
        Size: 8,
      },
      {
        Level: 5,
        Size: 9,
      },
    ],
    Hit: "Single",
    HitCount: 1,
    Element: "Weapon",
    Knockback: [
      {
        Level: 1,
        Amount: 2,
      },
      {
        Level: 2,
        Amount: 3,
      },
      {
        Level: 3,
        Amount: 4,
      },
      {
        Level: 4,
        Amount: 5,
      },
      {
        Level: 5,
        Amount: 6,
      },
    ],
    Cooldown: [
      {
        Level: 1,
        Time: 5000,
      },
      {
        Level: 2,
        Time: 4500,
      },
      {
        Level: 3,
        Time: 4000,
      },
      {
        Level: 4,
        Time: 3500,
      },
      {
        Level: 5,
        Time: 3000,
      },
    ],
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 25,
        },
        {
          Level: 2,
          Amount: 30,
        },
        {
          Level: 3,
          Amount: 35,
        },
        {
          Level: 4,
          Amount: 40,
        },
        {
          Level: 5,
          Amount: 45,
        },
      ],
      Weapon: {
        "1hAxe": true,
        "2hAxe": true,
      },
    },
  },
  {
    Id: 2279,
    Name: "NC_POWERSWING",
    Description: "Power Swing",
    MaxLevel: 10,
    Type: "Weapon",
    TargetType: "Attack",
    Flags: {
      AllowOnMado: true,
    },
    Range: 1,
    Hit: "Multi_Hit",
    HitCount: 1,
    Element: "Weapon",
    AfterCastActDelay: [
      {
        Level: 1,
        Time: 1000,
      },
      {
        Level: 2,
        Time: 1000,
      },
      {
        Level: 3,
        Time: 1000,
      },
      {
        Level: 4,
        Time: 1000,
      },
      {
        Level: 5,
        Time: 1000,
      },
      {
        Level: 6,
        Time: 500,
      },
      {
        Level: 7,
        Time: 500,
      },
      {
        Level: 8,
        Time: 500,
      },
      {
        Level: 9,
        Time: 500,
      },
      {
        Level: 10,
        Time: 500,
      },
    ],
    Duration1: 2000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 20,
        },
        {
          Level: 2,
          Amount: 22,
        },
        {
          Level: 3,
          Amount: 24,
        },
        {
          Level: 4,
          Amount: 26,
        },
        {
          Level: 5,
          Amount: 28,
        },
        {
          Level: 6,
          Amount: 30,
        },
        {
          Level: 7,
          Amount: 32,
        },
        {
          Level: 8,
          Amount: 34,
        },
        {
          Level: 9,
          Amount: 36,
        },
        {
          Level: 10,
          Amount: 38,
        },
      ],
    },
  },
  {
    Id: 2280,
    Name: "NC_AXETORNADO",
    Description: "Axe Tornado",
    MaxLevel: 5,
    Type: "Weapon",
    TargetType: "Self",
    DamageFlags: {
      Splash: true,
    },
    Flags: {
      TargetTrap: true,
      AllowOnMado: true,
    },
    Hit: "Multi_Hit",
    HitCount: -6,
    Element: "Weapon",
    SplashArea: [
      {
        Level: 1,
        Area: 2,
      },
      {
        Level: 2,
        Area: 2,
      },
      {
        Level: 3,
        Area: 3,
      },
      {
        Level: 4,
        Area: 3,
      },
      {
        Level: 5,
        Area: 3,
      },
    ],
    AfterCastActDelay: 500,
    Cooldown: [
      {
        Level: 1,
        Time: 4000,
      },
      {
        Level: 2,
        Time: 3500,
      },
      {
        Level: 3,
        Time: 3000,
      },
      {
        Level: 4,
        Time: 2500,
      },
      {
        Level: 5,
        Time: 2000,
      },
    ],
    Requires: {
      SpCost: 45,
      Weapon: {
        "1hAxe": true,
        "2hAxe": true,
      },
    },
  },
  {
    Id: 2281,
    Name: "NC_SILVERSNIPER",
    Description: "FAW - Silver Sniper",
    MaxLevel: 5,
    TargetType: "Ground",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      AllowOnMado: true,
    },
    Range: 2,
    Hit: "Single",
    HitCount: 1,
    ActiveInstance: 2,
    CastCancel: true,
    Duration1: [
      {
        Level: 1,
        Time: 20000,
      },
      {
        Level: 2,
        Time: 30000,
      },
      {
        Level: 3,
        Time: 40000,
      },
      {
        Level: 4,
        Time: 50000,
      },
      {
        Level: 5,
        Time: 60000,
      },
    ],
    FixedCastTime: [
      {
        Level: 1,
        Time: 1800,
      },
      {
        Level: 2,
        Time: 1600,
      },
      {
        Level: 3,
        Time: 1400,
      },
      {
        Level: 4,
        Time: 1200,
      },
      {
        Level: 5,
        Time: 1000,
      },
    ],
    CastTimeFlags: {
      IgnoreDex: true,
      IgnoreStatus: true,
      IgnoreItemBonus: true,
    },
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 25,
        },
        {
          Level: 2,
          Amount: 30,
        },
        {
          Level: 3,
          Amount: 35,
        },
        {
          Level: 4,
          Amount: 40,
        },
        {
          Level: 5,
          Amount: 45,
        },
      ],
      ItemCost: [
        {
          Item: "Portable_Furnace",
          Amount: 0,
        },
        {
          Item: "Oridecon_Hammer",
          Amount: 0,
        },
        {
          Item: "Iron",
          Amount: 1,
        },
        {
          Item: "Steel",
          Amount: 2,
        },
      ],
    },
  },
  {
    Id: 2282,
    Name: "NC_MAGICDECOY",
    Description: "FAW - Magic Decoy",
    MaxLevel: 5,
    TargetType: "Ground",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      AllowOnMado: true,
    },
    Range: 2,
    Hit: "Single",
    HitCount: 1,
    ActiveInstance: 2,
    CastCancel: true,
    Duration1: [
      {
        Level: 1,
        Time: 20000,
      },
      {
        Level: 2,
        Time: 30000,
      },
      {
        Level: 3,
        Time: 40000,
      },
      {
        Level: 4,
        Time: 50000,
      },
      {
        Level: 5,
        Time: 60000,
      },
    ],
    FixedCastTime: [
      {
        Level: 1,
        Time: 1800,
      },
      {
        Level: 2,
        Time: 1600,
      },
      {
        Level: 3,
        Time: 1400,
      },
      {
        Level: 4,
        Time: 1200,
      },
      {
        Level: 5,
        Time: 1000,
      },
    ],
    CastTimeFlags: {
      IgnoreDex: true,
      IgnoreStatus: true,
      IgnoreItemBonus: true,
    },
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 40,
        },
        {
          Level: 2,
          Amount: 45,
        },
        {
          Level: 3,
          Amount: 50,
        },
        {
          Level: 4,
          Amount: 55,
        },
        {
          Level: 5,
          Amount: 60,
        },
      ],
      ItemCost: [
        {
          Item: "Portable_Furnace",
          Amount: 0,
        },
        {
          Item: "Oridecon_Hammer",
          Amount: 0,
        },
        {
          Item: "Iron",
          Amount: 2,
        },
        {
          Item: "Brigan",
          Amount: 1,
        },
      ],
    },
  },
  {
    Id: 2283,
    Name: "NC_DISJOINT",
    Description: "FAW Removal",
    MaxLevel: 1,
    TargetType: "Attack",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      AllowOnMado: true,
    },
    Range: 5,
    Hit: "Single",
    HitCount: 1,
    CastTime: 2000,
    Requires: {
      SpCost: 15,
      ItemCost: [
        {
          Item: "Monkey_Wrench",
          Amount: 1,
        },
      ],
    },
  },
  {
    Id: 2284,
    Name: "SC_FATALMENACE",
    Description: "Fatal Menace",
    MaxLevel: 10,
    Type: "Weapon",
    TargetType: "Attack",
    DamageFlags: {
      Splash: true,
    },
    Range: 1,
    Hit: "Single",
    HitCount: 1,
    Element: "Weapon",
    SplashArea: [
      {
        Level: 1,
        Area: 1,
      },
      {
        Level: 2,
        Area: 1,
      },
      {
        Level: 3,
        Area: 1,
      },
      {
        Level: 4,
        Area: 1,
      },
      {
        Level: 5,
        Area: 1,
      },
      {
        Level: 6,
        Area: 2,
      },
      {
        Level: 7,
        Area: 2,
      },
      {
        Level: 8,
        Area: 2,
      },
      {
        Level: 9,
        Area: 2,
      },
      {
        Level: 10,
        Area: 2,
      },
    ],
    CopyFlags: {
      Skill: {
        Reproduce: true,
      },
    },
    AfterCastActDelay: 500,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 10,
        },
        {
          Level: 2,
          Amount: 14,
        },
        {
          Level: 3,
          Amount: 18,
        },
        {
          Level: 4,
          Amount: 22,
        },
        {
          Level: 5,
          Amount: 26,
        },
        {
          Level: 6,
          Amount: 30,
        },
        {
          Level: 7,
          Amount: 34,
        },
        {
          Level: 8,
          Amount: 38,
        },
        {
          Level: 9,
          Amount: 42,
        },
        {
          Level: 10,
          Amount: 46,
        },
      ],
    },
  },
  {
    Id: 2285,
    Name: "SC_REPRODUCE",
    Description: "Reproduce",
    MaxLevel: 10,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Hit: "Single",
    HitCount: 1,
    AfterCastActDelay: 1000,
    Duration1: 300000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 40,
        },
        {
          Level: 2,
          Amount: 45,
        },
        {
          Level: 3,
          Amount: 50,
        },
        {
          Level: 4,
          Amount: 55,
        },
        {
          Level: 5,
          Amount: 60,
        },
        {
          Level: 6,
          Amount: 65,
        },
        {
          Level: 7,
          Amount: 70,
        },
        {
          Level: 8,
          Amount: 75,
        },
        {
          Level: 9,
          Amount: 80,
        },
        {
          Level: 10,
          Amount: 85,
        },
      ],
    },
    Status: "_Reproduce",
  },
  {
    Id: 2286,
    Name: "SC_AUTOSHADOWSPELL",
    Description: "Auto Shadow Spell",
    MaxLevel: 10,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Hit: "Single",
    HitCount: 1,
    CastCancel: true,
    CastTime: [
      {
        Level: 1,
        Time: 4000,
      },
      {
        Level: 2,
        Time: 3600,
      },
      {
        Level: 3,
        Time: 3200,
      },
      {
        Level: 4,
        Time: 2800,
      },
      {
        Level: 5,
        Time: 2400,
      },
      {
        Level: 6,
        Time: 2000,
      },
      {
        Level: 7,
        Time: 1600,
      },
      {
        Level: 8,
        Time: 1200,
      },
      {
        Level: 9,
        Time: 800,
      },
      {
        Level: 10,
        Time: 400,
      },
    ],
    Duration1: [
      {
        Level: 1,
        Time: 60000,
      },
      {
        Level: 2,
        Time: 80000,
      },
      {
        Level: 3,
        Time: 100000,
      },
      {
        Level: 4,
        Time: 120000,
      },
      {
        Level: 5,
        Time: 140000,
      },
      {
        Level: 6,
        Time: 160000,
      },
      {
        Level: 7,
        Time: 180000,
      },
      {
        Level: 8,
        Time: 200000,
      },
      {
        Level: 9,
        Time: 220000,
      },
      {
        Level: 10,
        Time: 300000,
      },
    ],
    FixedCastTime: 2000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 40,
        },
        {
          Level: 2,
          Amount: 45,
        },
        {
          Level: 3,
          Amount: 50,
        },
        {
          Level: 4,
          Amount: 55,
        },
        {
          Level: 5,
          Amount: 60,
        },
        {
          Level: 6,
          Amount: 65,
        },
        {
          Level: 7,
          Amount: 70,
        },
        {
          Level: 8,
          Amount: 75,
        },
        {
          Level: 9,
          Amount: 80,
        },
        {
          Level: 10,
          Amount: 85,
        },
      ],
    },
    Status: "_AutoShadowSpell",
  },
  {
    Id: 2287,
    Name: "SC_SHADOWFORM",
    Description: "Shadow Form",
    MaxLevel: 5,
    TargetType: "Attack",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      IgnoreKagehumi: true,
      TargetManHole: true,
    },
    Range: 5,
    Hit: "Single",
    HitCount: 1,
    AfterCastActDelay: 1000,
    Duration1: [
      {
        Level: 1,
        Time: 30000,
      },
      {
        Level: 2,
        Time: 40000,
      },
      {
        Level: 3,
        Time: 50000,
      },
      {
        Level: 4,
        Time: 60000,
      },
      {
        Level: 5,
        Time: 70000,
      },
    ],
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 40,
        },
        {
          Level: 2,
          Amount: 50,
        },
        {
          Level: 3,
          Amount: 60,
        },
        {
          Level: 4,
          Amount: 70,
        },
        {
          Level: 5,
          Amount: 80,
        },
      ],
    },
    Status: "_ShadowForm",
  },
  {
    Id: 2288,
    Name: "SC_TRIANGLESHOT",
    Description: "Triangle Shot",
    MaxLevel: 10,
    Type: "Weapon",
    TargetType: "Attack",
    Range: [
      {
        Level: 1,
        Size: 7,
      },
      {
        Level: 2,
        Size: 7,
      },
      {
        Level: 3,
        Size: 7,
      },
      {
        Level: 4,
        Size: 9,
      },
      {
        Level: 5,
        Size: 9,
      },
      {
        Level: 6,
        Size: 9,
      },
      {
        Level: 7,
        Size: 9,
      },
      {
        Level: 8,
        Size: 11,
      },
      {
        Level: 9,
        Size: 11,
      },
      {
        Level: 10,
        Size: 11,
      },
    ],
    Hit: "Multi_Hit",
    HitCount: -3,
    Element: "Weapon",
    CopyFlags: {
      Skill: {
        Reproduce: true,
      },
    },
    CastCancel: true,
    AfterCastActDelay: 350,
    Cooldown: 200,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 22,
        },
        {
          Level: 2,
          Amount: 24,
        },
        {
          Level: 3,
          Amount: 26,
        },
        {
          Level: 4,
          Amount: 28,
        },
        {
          Level: 5,
          Amount: 30,
        },
        {
          Level: 6,
          Amount: 32,
        },
        {
          Level: 7,
          Amount: 34,
        },
        {
          Level: 8,
          Amount: 36,
        },
        {
          Level: 9,
          Amount: 38,
        },
        {
          Level: 10,
          Amount: 40,
        },
      ],
      Weapon: {
        Bow: true,
      },
      Ammo: {
        Arrow: true,
      },
      AmmoAmount: 3,
    },
  },
  {
    Id: 2289,
    Name: "SC_BODYPAINT",
    Description: "Body Painting",
    MaxLevel: 5,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
      Splash: true,
    },
    Hit: "Single",
    HitCount: 1,
    SplashArea: 2,
    AfterCastActDelay: 1000,
    Duration1: [
      {
        Level: 1,
        Time: 5000,
      },
      {
        Level: 2,
        Time: 7000,
      },
      {
        Level: 3,
        Time: 9000,
      },
      {
        Level: 4,
        Time: 11000,
      },
      {
        Level: 5,
        Time: 13000,
      },
    ],
    Duration2: 10000,
    Cooldown: 2000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 10,
        },
        {
          Level: 2,
          Amount: 15,
        },
        {
          Level: 3,
          Amount: 20,
        },
        {
          Level: 4,
          Amount: 25,
        },
        {
          Level: 5,
          Amount: 30,
        },
      ],
      ItemCost: [
        {
          Item: "Paint_Brush",
          Amount: 0,
        },
        {
          Item: "Surface_Paint",
          Amount: 1,
        },
      ],
    },
    Status: "_BodyPaint",
  },
  {
    Id: 2290,
    Name: "SC_INVISIBILITY",
    Description: "Invisibility",
    MaxLevel: 5,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Hit: "Single",
    HitCount: 1,
    CastCancel: true,
    CastTime: 1000,
    AfterCastActDelay: 1000,
    Cooldown: [
      {
        Level: 1,
        Time: 20000,
      },
      {
        Level: 2,
        Time: 30000,
      },
      {
        Level: 3,
        Time: 40000,
      },
      {
        Level: 4,
        Time: 50000,
      },
      {
        Level: 5,
        Time: 60000,
      },
    ],
    Requires: {
      SpCost: 100,
    },
    Status: "_Invisibility",
  },
  {
    Id: 2291,
    Name: "SC_DEADLYINFECT",
    Description: "Deadly Infect",
    MaxLevel: 5,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Hit: "Single",
    HitCount: 1,
    AfterCastActDelay: 1000,
    Duration1: [
      {
        Level: 1,
        Time: 10000,
      },
      {
        Level: 2,
        Time: 15000,
      },
      {
        Level: 3,
        Time: 20000,
      },
      {
        Level: 4,
        Time: 25000,
      },
      {
        Level: 5,
        Time: 30000,
      },
    ],
    Cooldown: 2000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 40,
        },
        {
          Level: 2,
          Amount: 44,
        },
        {
          Level: 3,
          Amount: 48,
        },
        {
          Level: 4,
          Amount: 52,
        },
        {
          Level: 5,
          Amount: 56,
        },
      ],
    },
    Status: "_DeadlyInfect",
  },
  {
    Id: 2292,
    Name: "SC_ENERVATION",
    Description: "Masquerade - Enervation",
    MaxLevel: 3,
    TargetType: "Attack",
    DamageFlags: {
      NoDamage: true,
    },
    Range: 3,
    Hit: "Single",
    HitCount: 1,
    CastCancel: true,
    CastTime: 2000,
    AfterCastActDelay: 1000,
    Duration1: [
      {
        Level: 1,
        Time: 10000,
      },
      {
        Level: 2,
        Time: 15000,
      },
      {
        Level: 3,
        Time: 20000,
      },
    ],
    Cooldown: 2000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 30,
        },
        {
          Level: 2,
          Amount: 40,
        },
        {
          Level: 3,
          Amount: 50,
        },
      ],
      ItemCost: [
        {
          Item: "Face_Paint",
          Amount: 1,
        },
        {
          Item: "Makeover_Brush",
          Amount: 0,
        },
      ],
    },
    Status: "_Enervation",
  },
  {
    Id: 2293,
    Name: "SC_GROOMY",
    Description: "Masquerade - Gloomy",
    MaxLevel: 3,
    TargetType: "Attack",
    DamageFlags: {
      NoDamage: true,
    },
    Range: 3,
    Hit: "Single",
    HitCount: 1,
    CastCancel: true,
    CastTime: 2000,
    AfterCastActDelay: 1000,
    Duration1: [
      {
        Level: 1,
        Time: 10000,
      },
      {
        Level: 2,
        Time: 15000,
      },
      {
        Level: 3,
        Time: 20000,
      },
    ],
    Cooldown: 2000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 30,
        },
        {
          Level: 2,
          Amount: 40,
        },
        {
          Level: 3,
          Amount: 50,
        },
      ],
      ItemCost: [
        {
          Item: "Face_Paint",
          Amount: 1,
        },
        {
          Item: "Makeover_Brush",
          Amount: 0,
        },
      ],
    },
    Status: "_Groomy",
  },
  {
    Id: 2294,
    Name: "SC_IGNORANCE",
    Description: "Masquerade - Ignorance",
    MaxLevel: 3,
    TargetType: "Attack",
    DamageFlags: {
      NoDamage: true,
    },
    Range: 3,
    Hit: "Single",
    HitCount: 1,
    CastCancel: true,
    CastTime: 2000,
    AfterCastActDelay: 1000,
    Duration1: [
      {
        Level: 1,
        Time: 10000,
      },
      {
        Level: 2,
        Time: 15000,
      },
      {
        Level: 3,
        Time: 20000,
      },
    ],
    Cooldown: 2000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 30,
        },
        {
          Level: 2,
          Amount: 40,
        },
        {
          Level: 3,
          Amount: 50,
        },
      ],
      ItemCost: [
        {
          Item: "Face_Paint",
          Amount: 1,
        },
        {
          Item: "Makeover_Brush",
          Amount: 0,
        },
      ],
    },
    Status: "_Ignorance",
  },
  {
    Id: 2295,
    Name: "SC_LAZINESS",
    Description: "Masquerade - Laziness",
    MaxLevel: 3,
    TargetType: "Attack",
    DamageFlags: {
      NoDamage: true,
    },
    Range: 3,
    Hit: "Single",
    HitCount: 1,
    CastCancel: true,
    CastTime: 2000,
    AfterCastActDelay: 1000,
    Duration1: [
      {
        Level: 1,
        Time: 10000,
      },
      {
        Level: 2,
        Time: 15000,
      },
      {
        Level: 3,
        Time: 20000,
      },
    ],
    Cooldown: 2000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 30,
        },
        {
          Level: 2,
          Amount: 40,
        },
        {
          Level: 3,
          Amount: 50,
        },
      ],
      ItemCost: [
        {
          Item: "Face_Paint",
          Amount: 1,
        },
        {
          Item: "Makeover_Brush",
          Amount: 0,
        },
      ],
    },
    Status: "_Laziness",
  },
  {
    Id: 2296,
    Name: "SC_UNLUCKY",
    Description: "Masquerade - Unlucky",
    MaxLevel: 3,
    TargetType: "Attack",
    DamageFlags: {
      NoDamage: true,
    },
    Range: 3,
    Hit: "Single",
    HitCount: 1,
    CastCancel: true,
    CastTime: 2000,
    AfterCastActDelay: 1000,
    Duration1: [
      {
        Level: 1,
        Time: 10000,
      },
      {
        Level: 2,
        Time: 15000,
      },
      {
        Level: 3,
        Time: 20000,
      },
    ],
    Cooldown: 2000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 30,
        },
        {
          Level: 2,
          Amount: 40,
        },
        {
          Level: 3,
          Amount: 50,
        },
      ],
      ItemCost: [
        {
          Item: "Face_Paint",
          Amount: 1,
        },
        {
          Item: "Makeover_Brush",
          Amount: 0,
        },
      ],
    },
    Status: "_Unlucky",
  },
  {
    Id: 2297,
    Name: "SC_WEAKNESS",
    Description: "Masquerade - Weakness",
    MaxLevel: 3,
    TargetType: "Attack",
    DamageFlags: {
      NoDamage: true,
    },
    Range: 3,
    Hit: "Single",
    HitCount: 1,
    CastCancel: true,
    CastTime: 2000,
    AfterCastActDelay: 1000,
    Duration1: [
      {
        Level: 1,
        Time: 10000,
      },
      {
        Level: 2,
        Time: 15000,
      },
      {
        Level: 3,
        Time: 20000,
      },
    ],
    Cooldown: 2000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 30,
        },
        {
          Level: 2,
          Amount: 40,
        },
        {
          Level: 3,
          Amount: 50,
        },
      ],
      ItemCost: [
        {
          Item: "Face_Paint",
          Amount: 1,
        },
        {
          Item: "Makeover_Brush",
          Amount: 0,
        },
      ],
    },
    Status: "_Weakness",
  },
  {
    Id: 2298,
    Name: "SC_STRIPACCESSARY",
    Description: "Strip Accessory",
    MaxLevel: 5,
    TargetType: "Attack",
    DamageFlags: {
      NoDamage: true,
    },
    Range: 3,
    Hit: "Single",
    HitCount: 1,
    CastCancel: true,
    CastTime: 1000,
    AfterCastActDelay: 1000,
    Duration1: [
      {
        Level: 1,
        Time: 60000,
      },
      {
        Level: 2,
        Time: 70000,
      },
      {
        Level: 3,
        Time: 80000,
      },
      {
        Level: 4,
        Time: 90000,
      },
      {
        Level: 5,
        Time: 100000,
      },
    ],
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 15,
        },
        {
          Level: 2,
          Amount: 18,
        },
        {
          Level: 3,
          Amount: 21,
        },
        {
          Level: 4,
          Amount: 24,
        },
        {
          Level: 5,
          Amount: 27,
        },
      ],
    },
    Status: "_StripAccessory",
  },
  {
    Id: 2299,
    Name: "SC_MANHOLE",
    Description: "Man Hole",
    MaxLevel: 3,
    Type: "Magic",
    TargetType: "Ground",
    DamageFlags: {
      NoDamage: true,
    },
    Range: 7,
    Hit: "Single",
    HitCount: 1,
    ActiveInstance: 3,
    CastCancel: true,
    CastTime: 1000,
    AfterCastActDelay: 2000,
    Duration1: [
      {
        Level: 1,
        Time: 5000,
      },
      {
        Level: 2,
        Time: 10000,
      },
      {
        Level: 3,
        Time: 15000,
      },
    ],
    Duration2: [
      {
        Level: 1,
        Time: 5000,
      },
      {
        Level: 2,
        Time: 10000,
      },
      {
        Level: 3,
        Time: 15000,
      },
    ],
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 20,
        },
        {
          Level: 2,
          Amount: 25,
        },
        {
          Level: 3,
          Amount: 30,
        },
      ],
      ItemCost: [
        {
          Item: "Paint_Brush",
          Amount: 0,
        },
        {
          Item: "Surface_Paint",
          Amount: 1,
        },
      ],
    },
    Unit: {
      Id: "Manhole",
      Range: 1,
      Interval: 1000,
      Flag: {
        NoReiteration: true,
        NoFootSet: true,
        RemovedByFireRain: true,
      },
    },
    Status: "_ManHole",
  },
  {
    Id: 2300,
    Name: "SC_DIMENSIONDOOR",
    Description: "Dimension Door",
    MaxLevel: 3,
    Type: "Magic",
    TargetType: "Ground",
    DamageFlags: {
      NoDamage: true,
    },
    Range: 7,
    Hit: "Single",
    HitCount: 1,
    ActiveInstance: 1,
    CastCancel: true,
    CastTime: 1000,
    AfterCastActDelay: 2000,
    Duration1: [
      {
        Level: 1,
        Time: 4000,
      },
      {
        Level: 2,
        Time: 8000,
      },
      {
        Level: 3,
        Time: 12000,
      },
    ],
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 30,
        },
        {
          Level: 2,
          Amount: 36,
        },
        {
          Level: 3,
          Amount: 42,
        },
      ],
      ItemCost: [
        {
          Item: "Paint_Brush",
          Amount: 0,
        },
        {
          Item: "Surface_Paint",
          Amount: 1,
        },
      ],
    },
    Unit: {
      Id: "Dimensiondoor",
      Interval: 1000,
      Flag: {
        NoReiteration: true,
        NoFootSet: true,
        RemovedByFireRain: true,
      },
    },
  },
  {
    Id: 2301,
    Name: "SC_CHAOSPANIC",
    Description: "Chaos Panic",
    MaxLevel: 3,
    Type: "Magic",
    TargetType: "Ground",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      DisableNearNpc: true,
    },
    Range: 7,
    Hit: "Single",
    HitCount: 1,
    NoNearNPC: {
      Type: {
        WarpPortal: true,
      },
    },
    CastCancel: true,
    CastTime: 2000,
    AfterCastActDelay: 2000,
    Duration1: [
      {
        Level: 1,
        Time: 5000,
      },
      {
        Level: 2,
        Time: 10000,
      },
      {
        Level: 3,
        Time: 15000,
      },
    ],
    Duration2: [
      {
        Level: 1,
        Time: 4000,
      },
      {
        Level: 2,
        Time: 8000,
      },
      {
        Level: 3,
        Time: 12000,
      },
    ],
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 30,
        },
        {
          Level: 2,
          Amount: 36,
        },
        {
          Level: 3,
          Amount: 42,
        },
      ],
      ItemCost: [
        {
          Item: "Paint_Brush",
          Amount: 0,
        },
        {
          Item: "Surface_Paint",
          Amount: 2,
        },
      ],
    },
    Unit: {
      Id: "Chaospanic",
      Layout: 2,
      Interval: 1000,
      Flag: {
        NoReiteration: true,
        NoFootSet: true,
        NoOverlap: true,
        RangedSingleUnit: true,
        RemovedByFireRain: true,
      },
    },
    Status: "Confusion",
  },
  {
    Id: 2302,
    Name: "SC_MAELSTROM",
    Description: "Maelstrom",
    MaxLevel: 3,
    Type: "Magic",
    TargetType: "Ground",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      DisableNearNpc: true,
    },
    Range: 7,
    Hit: "Single",
    HitCount: 1,
    ActiveInstance: 1,
    NoNearNPC: {
      Type: {
        WarpPortal: true,
      },
    },
    CastCancel: true,
    CastTime: 2000,
    AfterCastActDelay: 2000,
    Duration1: [
      {
        Level: 1,
        Time: 7000,
      },
      {
        Level: 2,
        Time: 14000,
      },
      {
        Level: 3,
        Time: 21000,
      },
    ],
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 50,
        },
        {
          Level: 2,
          Amount: 55,
        },
        {
          Level: 3,
          Amount: 60,
        },
      ],
      ItemCost: [
        {
          Item: "Paint_Brush",
          Amount: 0,
        },
        {
          Item: "Surface_Paint",
          Amount: 2,
        },
      ],
    },
    Unit: {
      Id: "Maelstrom",
      Layout: 2,
      Interval: -1,
      Flag: {
        NoReiteration: true,
        RangedSingleUnit: true,
        RemovedByFireRain: true,
      },
    },
  },
  {
    Id: 2303,
    Name: "SC_BLOODYLUST",
    Description: "Bloody Lust",
    MaxLevel: 3,
    TargetType: "Ground",
    DamageFlags: {
      NoDamage: true,
    },
    Range: 7,
    Hit: "Single",
    HitCount: 1,
    CastCancel: true,
    CastTime: 2000,
    AfterCastActDelay: 2000,
    Duration1: [
      {
        Level: 1,
        Time: 10000,
      },
      {
        Level: 2,
        Time: 20000,
      },
      {
        Level: 3,
        Time: 30000,
      },
    ],
    Cooldown: 180000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 60,
        },
        {
          Level: 2,
          Amount: 70,
        },
        {
          Level: 3,
          Amount: 80,
        },
      ],
      ItemCost: [
        {
          Item: "Paint_Brush",
          Amount: 0,
        },
        {
          Item: "Surface_Paint",
          Amount: 2,
        },
      ],
    },
    Unit: {
      Id: "Bloodylust",
      Layout: 3,
      Interval: -1,
      Flag: {
        NoOverlap: true,
        PathCheck: true,
        NoMob: true,
        RangedSingleUnit: true,
        RemovedByFireRain: true,
      },
    },
    Status: "Berserk",
  },
  {
    Id: 2304,
    Name: "SC_FEINTBOMB",
    Description: "Feint Bomb",
    MaxLevel: 10,
    Type: "Weapon",
    TargetType: "Self",
    Flags: {
      TargetTrap: true,
    },
    Hit: "Single",
    HitCount: 1,
    Element: "Weapon",
    Knockback: [
      {
        Level: 1,
        Amount: 1,
      },
      {
        Level: 2,
        Amount: 2,
      },
      {
        Level: 3,
        Amount: 3,
      },
      {
        Level: 4,
        Amount: 4,
      },
      {
        Level: 5,
        Amount: 5,
      },
      {
        Level: 6,
        Amount: 6,
      },
      {
        Level: 7,
        Amount: 7,
      },
      {
        Level: 8,
        Amount: 8,
      },
      {
        Level: 9,
        Amount: 9,
      },
      {
        Level: 10,
        Amount: 10,
      },
    ],
    CopyFlags: {
      Skill: {
        Reproduce: true,
      },
    },
    CastTime: 1000,
    Duration1: 1500,
    Cooldown: 5000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 24,
        },
        {
          Level: 2,
          Amount: 28,
        },
        {
          Level: 3,
          Amount: 32,
        },
        {
          Level: 4,
          Amount: 36,
        },
        {
          Level: 5,
          Amount: 40,
        },
        {
          Level: 6,
          Amount: 44,
        },
        {
          Level: 7,
          Amount: 48,
        },
        {
          Level: 8,
          Amount: 52,
        },
        {
          Level: 9,
          Amount: 56,
        },
        {
          Level: 10,
          Amount: 60,
        },
      ],
      ItemCost: [
        {
          Item: "Paint_Brush",
          Amount: 0,
        },
        {
          Item: "Surface_Paint",
          Amount: 1,
        },
      ],
    },
    Unit: {
      Id: "Feintbomb",
      Range: 2,
      Interval: -1,
      Target: "Enemy",
      Flag: {
        NoOverlap: true,
        PathCheck: true,
      },
    },
    Status: "_FeintBomb",
  },
  {
    Id: 2307,
    Name: "LG_CANNONSPEAR",
    Description: "Cannon Spear",
    MaxLevel: 5,
    Type: "Weapon",
    TargetType: "Attack",
    DamageFlags: {
      Splash: true,
      Critical: true,
    },
    Range: 7,
    Hit: "Multi_Hit",
    HitCount: 1,
    Element: "Weapon",
    SplashArea: [
      {
        Level: 1,
        Area: 1,
      },
      {
        Level: 2,
        Area: 1,
      },
      {
        Level: 3,
        Area: 1,
      },
      {
        Level: 4,
        Area: 2,
      },
      {
        Level: 5,
        Area: 2,
      },
    ],
    ActiveInstance: 11,
    Cooldown: 2000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 30,
        },
        {
          Level: 2,
          Amount: 35,
        },
        {
          Level: 3,
          Amount: 40,
        },
        {
          Level: 4,
          Amount: 45,
        },
        {
          Level: 5,
          Amount: 50,
        },
      ],
      Weapon: {
        "1hSpear": true,
        "2hSpear": true,
      },
    },
  },
  {
    Id: 2308,
    Name: "LG_BANISHINGPOINT",
    Description: "Banishing Point",
    MaxLevel: 10,
    Type: "Weapon",
    TargetType: "Attack",
    Range: 7,
    Hit: "Single",
    HitCount: 1,
    Element: "Weapon",
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 20,
        },
        {
          Level: 2,
          Amount: 20,
        },
        {
          Level: 3,
          Amount: 20,
        },
        {
          Level: 4,
          Amount: 20,
        },
        {
          Level: 5,
          Amount: 20,
        },
        {
          Level: 6,
          Amount: 25,
        },
        {
          Level: 7,
          Amount: 25,
        },
        {
          Level: 8,
          Amount: 25,
        },
        {
          Level: 9,
          Amount: 25,
        },
        {
          Level: 10,
          Amount: 25,
        },
      ],
      Weapon: {
        "1hSpear": true,
        "2hSpear": true,
      },
    },
  },
  {
    Id: 2309,
    Name: "LG_TRAMPLE",
    Description: "Trample",
    MaxLevel: 3,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
      Splash: true,
    },
    Hit: "Single",
    HitCount: 1,
    SplashArea: 2,
    AfterCastActDelay: 1000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 30,
        },
        {
          Level: 2,
          Amount: 45,
        },
        {
          Level: 3,
          Amount: 60,
        },
      ],
    },
  },
  {
    Id: 2310,
    Name: "LG_SHIELDPRESS",
    Description: "Shield Press",
    MaxLevel: 10,
    Type: "Weapon",
    TargetType: "Attack",
    Range: 1,
    Hit: "Single",
    HitCount: 5,
    CopyFlags: {
      Skill: {
        Reproduce: true,
      },
    },
    Cooldown: 2000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 10,
        },
        {
          Level: 2,
          Amount: 12,
        },
        {
          Level: 3,
          Amount: 14,
        },
        {
          Level: 4,
          Amount: 16,
        },
        {
          Level: 5,
          Amount: 18,
        },
        {
          Level: 6,
          Amount: 20,
        },
        {
          Level: 7,
          Amount: 22,
        },
        {
          Level: 8,
          Amount: 24,
        },
        {
          Level: 9,
          Amount: 26,
        },
        {
          Level: 10,
          Amount: 28,
        },
      ],
      State: "Shield",
    },
  },
  {
    Id: 2311,
    Name: "LG_REFLECTDAMAGE",
    Description: "Reflect Damage Reduction",
    MaxLevel: 5,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
      Splash: true,
    },
    Hit: "Single",
    HitCount: 1,
    SplashArea: 3,
    Duration1: 300000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 60,
        },
        {
          Level: 2,
          Amount: 70,
        },
        {
          Level: 3,
          Amount: 80,
        },
        {
          Level: 4,
          Amount: 90,
        },
        {
          Level: 5,
          Amount: 100,
        },
      ],
      State: "Shield",
    },
    Status: "ReflectDamage",
  },
  {
    Id: 2312,
    Name: "LG_PINPOINTATTACK",
    Description: "Pinpoint Attack",
    MaxLevel: 5,
    Type: "Weapon",
    TargetType: "Attack",
    DamageFlags: {
      Critical: true,
    },
    Range: 5,
    Hit: "Single",
    HitCount: 1,
    Element: "Weapon",
    AfterCastActDelay: 1000,
    Duration1: 12000,
    Cooldown: 5000,
    Requires: {
      SpCost: 50,
      Weapon: {
        "1hSpear": true,
        "2hSpear": true,
      },
    },
  },
  {
    Id: 2313,
    Name: "LG_FORCEOFVANGUARD",
    Description: "Force of Vanguard",
    MaxLevel: 5,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Hit: "Single",
    HitCount: 1,
    CastCancel: true,
    AfterCastActDelay: 1000,
    Duration1: 300000,
    FixedCastTime: 1000,
    CastTimeFlags: {
      IgnoreDex: true,
      IgnoreStatus: true,
      IgnoreItemBonus: true,
    },
    Requires: {
      SpCost: 30,
    },
    Status: "ForceOfVanguard",
  },
  {
    Id: 2314,
    Name: "LG_RAGEBURST",
    Description: "Rage Burst",
    MaxLevel: 1,
    Type: "Weapon",
    TargetType: "Attack",
    Range: 1,
    Hit: "Single",
    HitCount: 1,
    Element: "Weapon",
    AfterCastActDelay: 3000,
    Requires: {
      SpCost: 150,
    },
  },
  {
    Id: 2315,
    Name: "LG_SHIELDSPELL",
    Description: "Shield Spell",
    MaxLevel: 3,
    TargetType: "Self",
    CastCancel: true,
    CastTime: 1000,
    AfterCastActDelay: 1000,
    Duration1: 90000,
    Cooldown: 2000,
    Requires: {
      SpCost: 50,
      State: "Shield",
    },
  },
  {
    Id: 2316,
    Name: "LG_EXEEDBREAK",
    Description: "Exceed Break",
    MaxLevel: 5,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Hit: "Single",
    HitCount: 1,
    CopyFlags: {
      Skill: {
        Reproduce: true,
      },
    },
    CastCancel: true,
    CastTime: [
      {
        Level: 1,
        Time: 5000,
      },
      {
        Level: 2,
        Time: 5500,
      },
      {
        Level: 3,
        Time: 6000,
      },
      {
        Level: 4,
        Time: 6500,
      },
      {
        Level: 5,
        Time: 7000,
      },
    ],
    AfterCastActDelay: 1000,
    Duration1: 300000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 20,
        },
        {
          Level: 2,
          Amount: 32,
        },
        {
          Level: 3,
          Amount: 44,
        },
        {
          Level: 4,
          Amount: 56,
        },
        {
          Level: 5,
          Amount: 68,
        },
      ],
    },
    Status: "ExeedBreak",
  },
  {
    Id: 2317,
    Name: "LG_OVERBRAND",
    Description: "Over Brand",
    MaxLevel: 5,
    Type: "Weapon",
    TargetType: "Self",
    DamageFlags: {
      Splash: true,
    },
    Range: 2,
    Hit: "Multi_Hit",
    HitCount: 3,
    Element: "Weapon",
    SplashArea: 3,
    CastCancel: true,
    AfterCastActDelay: 2000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 20,
        },
        {
          Level: 2,
          Amount: 30,
        },
        {
          Level: 3,
          Amount: 40,
        },
        {
          Level: 4,
          Amount: 50,
        },
        {
          Level: 5,
          Amount: 60,
        },
      ],
      Weapon: {
        "1hSpear": true,
        "2hSpear": true,
      },
    },
  },
  {
    Id: 2318,
    Name: "LG_PRESTIGE",
    Description: "Prestige",
    MaxLevel: 5,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Hit: "Single",
    HitCount: 1,
    CastCancel: true,
    CastTime: 1000,
    Duration1: [
      {
        Level: 1,
        Time: 30000,
      },
      {
        Level: 2,
        Time: 45000,
      },
      {
        Level: 3,
        Time: 60000,
      },
      {
        Level: 4,
        Time: 75000,
      },
      {
        Level: 5,
        Time: 90000,
      },
    ],
    Cooldown: 60000,
    FixedCastTime: 2000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 75,
        },
        {
          Level: 2,
          Amount: 80,
        },
        {
          Level: 3,
          Amount: 85,
        },
        {
          Level: 4,
          Amount: 90,
        },
        {
          Level: 5,
          Amount: 95,
        },
      ],
    },
    Status: "Prestige",
  },
  {
    Id: 2319,
    Name: "LG_BANDING",
    Description: "Banding",
    MaxLevel: 5,
    Type: "Weapon",
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
      Splash: true,
    },
    Hit: "Single",
    HitCount: 1,
    SplashArea: 5,
    Duration1: -1,
    Duration2: [
      {
        Level: 1,
        Time: 60000,
      },
      {
        Level: 2,
        Time: 90000,
      },
      {
        Level: 3,
        Time: 120000,
      },
      {
        Level: 4,
        Time: 150000,
      },
      {
        Level: 5,
        Time: 180000,
      },
    ],
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 30,
        },
        {
          Level: 2,
          Amount: 36,
        },
        {
          Level: 3,
          Amount: 42,
        },
        {
          Level: 4,
          Amount: 48,
        },
        {
          Level: 5,
          Amount: 54,
        },
      ],
    },
    Unit: {
      Id: "Banding",
      Range: 3,
      Interval: 5000,
    },
    Status: "Banding",
  },
  {
    Id: 2320,
    Name: "LG_MOONSLASHER",
    Description: "Moon Slasher",
    MaxLevel: 5,
    Type: "Weapon",
    TargetType: "Self",
    DamageFlags: {
      Splash: true,
    },
    Flags: {
      IgnoreHovering: true,
    },
    Hit: "Single",
    HitCount: 1,
    Element: "Weapon",
    SplashArea: 3,
    CopyFlags: {
      Skill: {
        Reproduce: true,
      },
    },
    CastCancel: true,
    CastTime: 1000,
    AfterCastActDelay: 1000,
    Duration1: 1000,
    Duration2: [
      {
        Level: 1,
        Time: 2000,
      },
      {
        Level: 2,
        Time: 4000,
      },
      {
        Level: 3,
        Time: 6000,
      },
      {
        Level: 4,
        Time: 8000,
      },
      {
        Level: 5,
        Time: 10000,
      },
    ],
    Cooldown: [
      {
        Level: 1,
        Time: 6000,
      },
      {
        Level: 2,
        Time: 5000,
      },
      {
        Level: 3,
        Time: 4000,
      },
      {
        Level: 4,
        Time: 3000,
      },
      {
        Level: 5,
        Time: 2000,
      },
    ],
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 20,
        },
        {
          Level: 2,
          Amount: 24,
        },
        {
          Level: 3,
          Amount: 28,
        },
        {
          Level: 4,
          Amount: 32,
        },
        {
          Level: 5,
          Amount: 36,
        },
      ],
      Weapon: {
        "1hSpear": true,
        "2hSpear": true,
      },
    },
    Status: "OverBrandReady",
  },
  {
    Id: 2321,
    Name: "LG_RAYOFGENESIS",
    Description: "Ray of Genesis",
    MaxLevel: 10,
    Type: "Magic",
    TargetType: "Self",
    DamageFlags: {
      Splash: true,
    },
    Range: 1,
    Hit: "Multi_Hit",
    HitCount: -7,
    Element: "Holy",
    SplashArea: 5,
    CastCancel: true,
    CastTime: [
      {
        Level: 1,
        Time: 1000,
      },
      {
        Level: 2,
        Time: 1500,
      },
      {
        Level: 3,
        Time: 2000,
      },
      {
        Level: 4,
        Time: 2500,
      },
      {
        Level: 5,
        Time: 3000,
      },
      {
        Level: 6,
        Time: 3500,
      },
      {
        Level: 7,
        Time: 4000,
      },
      {
        Level: 8,
        Time: 4500,
      },
      {
        Level: 9,
        Time: 5000,
      },
      {
        Level: 10,
        Time: 5500,
      },
    ],
    AfterCastActDelay: 2000,
    Duration1: 10000,
    Cooldown: 2000,
    FixedCastTime: 500,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 30,
        },
        {
          Level: 2,
          Amount: 40,
        },
        {
          Level: 3,
          Amount: 50,
        },
        {
          Level: 4,
          Amount: 60,
        },
        {
          Level: 5,
          Amount: 70,
        },
        {
          Level: 6,
          Amount: 80,
        },
        {
          Level: 7,
          Amount: 90,
        },
        {
          Level: 8,
          Amount: 100,
        },
        {
          Level: 9,
          Amount: 110,
        },
        {
          Level: 10,
          Amount: 120,
        },
      ],
    },
  },
  {
    Id: 2322,
    Name: "LG_PIETY",
    Description: "Piety",
    MaxLevel: 5,
    TargetType: "Support",
    DamageFlags: {
      NoDamage: true,
      Splash: true,
    },
    Hit: "Single",
    HitCount: 1,
    SplashArea: 1,
    CastCancel: true,
    CastTime: [
      {
        Level: 1,
        Time: 3000,
      },
      {
        Level: 2,
        Time: 2500,
      },
      {
        Level: 3,
        Time: 2000,
      },
      {
        Level: 4,
        Time: 1500,
      },
      {
        Level: 5,
        Time: 1000,
      },
    ],
    Duration1: [
      {
        Level: 1,
        Time: 60000,
      },
      {
        Level: 2,
        Time: 80000,
      },
      {
        Level: 3,
        Time: 100000,
      },
      {
        Level: 4,
        Time: 120000,
      },
      {
        Level: 5,
        Time: 140000,
      },
    ],
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 40,
        },
        {
          Level: 2,
          Amount: 45,
        },
        {
          Level: 3,
          Amount: 50,
        },
        {
          Level: 4,
          Amount: 55,
        },
        {
          Level: 5,
          Amount: 60,
        },
      ],
      ItemCost: [
        {
          Item: "Holy_Water",
          Amount: 2,
        },
      ],
    },
    Status: "Benedictio",
  },
  {
    Id: 2323,
    Name: "LG_EARTHDRIVE",
    Description: "Earth Drive",
    MaxLevel: 5,
    Type: "Weapon",
    TargetType: "Self",
    DamageFlags: {
      Splash: true,
    },
    Flags: {
      TargetHidden: true,
    },
    Hit: "Multi_Hit",
    HitCount: -5,
    Element: "Weapon",
    SplashArea: [
      {
        Level: 1,
        Area: 1,
      },
      {
        Level: 2,
        Area: 1,
      },
      {
        Level: 3,
        Area: 2,
      },
      {
        Level: 4,
        Area: 2,
      },
      {
        Level: 5,
        Area: 3,
      },
    ],
    CopyFlags: {
      Skill: {
        Reproduce: true,
      },
    },
    CastCancel: true,
    CastTime: 1000,
    AfterCastActDelay: 1000,
    Duration1: [
      {
        Level: 1,
        Time: 3000,
      },
      {
        Level: 2,
        Time: 6000,
      },
      {
        Level: 3,
        Time: 9000,
      },
      {
        Level: 4,
        Time: 12000,
      },
      {
        Level: 5,
        Time: 15000,
      },
    ],
    Cooldown: [
      {
        Level: 1,
        Time: 7000,
      },
      {
        Level: 2,
        Time: 6000,
      },
      {
        Level: 3,
        Time: 5000,
      },
      {
        Level: 4,
        Time: 4000,
      },
      {
        Level: 5,
        Time: 3000,
      },
    ],
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 52,
        },
        {
          Level: 2,
          Amount: 60,
        },
        {
          Level: 3,
          Amount: 68,
        },
        {
          Level: 4,
          Amount: 76,
        },
        {
          Level: 5,
          Amount: 84,
        },
      ],
      State: "Shield",
    },
  },
  {
    Id: 2324,
    Name: "LG_HESPERUSLIT",
    Description: "Hesperus Lit",
    MaxLevel: 5,
    Type: "Weapon",
    TargetType: "Attack",
    Range: 3,
    Hit: "Multi_Hit",
    HitCount: 3,
    Element: "Weapon",
    CastCancel: true,
    CastTime: 1000,
    AfterCastActDelay: 3000,
    Cooldown: 20000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 37,
        },
        {
          Level: 2,
          Amount: 44,
        },
        {
          Level: 3,
          Amount: 51,
        },
        {
          Level: 4,
          Amount: 58,
        },
        {
          Level: 5,
          Amount: 65,
        },
      ],
      Weapon: {
        "1hSpear": true,
        "2hSpear": true,
      },
    },
  },
  {
    Id: 2325,
    Name: "LG_INSPIRATION",
    Description: "Inspiration",
    MaxLevel: 5,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Hit: "Single",
    HitCount: 1,
    CastCancel: true,
    CastTime: 2000,
    AfterCastActDelay: 2000,
    Duration1: [
      {
        Level: 1,
        Time: 60000,
      },
      {
        Level: 2,
        Time: 90000,
      },
      {
        Level: 3,
        Time: 120000,
      },
      {
        Level: 4,
        Time: 150000,
      },
      {
        Level: 5,
        Time: 180000,
      },
    ],
    Cooldown: [
      {
        Level: 1,
        Time: 60000,
      },
      {
        Level: 2,
        Time: 90000,
      },
      {
        Level: 3,
        Time: 120000,
      },
      {
        Level: 4,
        Time: 150000,
      },
      {
        Level: 5,
        Time: 180000,
      },
    ],
    FixedCastTime: 1000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 80,
        },
        {
          Level: 2,
          Amount: 90,
        },
        {
          Level: 3,
          Amount: 100,
        },
        {
          Level: 4,
          Amount: 110,
        },
        {
          Level: 5,
          Amount: 120,
        },
      ],
    },
    Status: "Inspiration",
  },
  {
    Id: 2519,
    Name: "LG_OVERBRAND_BRANDISH",
    Description: "Overbrand Brandish",
    MaxLevel: 5,
    Type: "Weapon",
    TargetType: "Attack",
    DamageFlags: {
      Splash: true,
    },
    Range: 1,
    Hit: "Single",
    HitCount: 1,
    Element: "Weapon",
    CopyFlags: {
      Skill: {
        Reproduce: true,
      },
    },
    CastCancel: true,
  },
  {
    Id: 2520,
    Name: "LG_OVERBRAND_PLUSATK",
    Description: "Overbrand Plus Attack",
    MaxLevel: 5,
    Type: "Weapon",
    TargetType: "Attack",
    DamageFlags: {
      IgnoreFlee: true,
    },
    Range: 1,
    Hit: "Single",
    HitCount: 1,
    Element: "Weapon",
    CopyFlags: {
      Skill: {
        Reproduce: true,
      },
    },
  },
  {
    Id: 2326,
    Name: "SR_DRAGONCOMBO",
    Description: "Dragon Combo",
    MaxLevel: 10,
    Type: "Weapon",
    TargetType: "Attack",
    Range: 2,
    Hit: "Multi_Hit",
    HitCount: -2,
    Element: "Weapon",
    CopyFlags: {
      Skill: {
        Reproduce: true,
      },
    },
    Duration1: 4500,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 3,
        },
        {
          Level: 2,
          Amount: 4,
        },
        {
          Level: 3,
          Amount: 5,
        },
        {
          Level: 4,
          Amount: 6,
        },
        {
          Level: 5,
          Amount: 7,
        },
        {
          Level: 6,
          Amount: 8,
        },
        {
          Level: 7,
          Amount: 9,
        },
        {
          Level: 8,
          Amount: 10,
        },
        {
          Level: 9,
          Amount: 11,
        },
        {
          Level: 10,
          Amount: 12,
        },
      ],
    },
    Status: "Stun",
  },
  {
    Id: 2327,
    Name: "SR_SKYNETBLOW",
    Description: "Sky Net Blow",
    MaxLevel: 5,
    Type: "Weapon",
    TargetType: "Self",
    DamageFlags: {
      Splash: true,
    },
    Flags: {
      TargetTrap: true,
    },
    Range: 1,
    Hit: "Multi_Hit",
    HitCount: -3,
    Element: "Weapon",
    SplashArea: 2,
    CopyFlags: {
      Skill: {
        Reproduce: true,
      },
    },
    AfterCastActDelay: 500,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 12,
        },
        {
          Level: 2,
          Amount: 14,
        },
        {
          Level: 3,
          Amount: 16,
        },
        {
          Level: 4,
          Amount: 18,
        },
        {
          Level: 5,
          Amount: 20,
        },
      ],
    },
  },
  {
    Id: 2328,
    Name: "SR_EARTHSHAKER",
    Description: "Earth Shaker",
    MaxLevel: 5,
    Type: "Weapon",
    TargetType: "Self",
    DamageFlags: {
      Splash: true,
    },
    Flags: {
      TargetTrap: true,
    },
    Range: 1,
    Hit: "Single",
    HitCount: 1,
    Element: "Weapon",
    SplashArea: [
      {
        Level: 1,
        Area: 1,
      },
      {
        Level: 2,
        Area: 2,
      },
      {
        Level: 3,
        Area: 3,
      },
      {
        Level: 4,
        Area: 4,
      },
      {
        Level: 5,
        Area: 5,
      },
    ],
    CopyFlags: {
      Skill: {
        Reproduce: true,
      },
    },
    Duration1: [
      {
        Level: 1,
        Time: 1000,
      },
      {
        Level: 2,
        Time: 2000,
      },
      {
        Level: 3,
        Time: 2000,
      },
      {
        Level: 4,
        Time: 3000,
      },
      {
        Level: 5,
        Time: 3000,
      },
    ],
    Duration2: 4500,
    Cooldown: 3000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 36,
        },
        {
          Level: 2,
          Amount: 40,
        },
        {
          Level: 3,
          Amount: 44,
        },
        {
          Level: 4,
          Amount: 48,
        },
        {
          Level: 5,
          Amount: 52,
        },
      ],
    },
    Status: "Stun",
  },
  {
    Id: 2329,
    Name: "SR_FALLENEMPIRE",
    Description: "Fallen Empire",
    MaxLevel: 10,
    Type: "Weapon",
    TargetType: "Self",
    Flags: {
      NoTargetSelf: true,
    },
    Range: 2,
    Hit: "Multi_Hit",
    HitCount: -2,
    Element: "Weapon",
    Duration1: [
      {
        Level: 1,
        Time: 500,
      },
      {
        Level: 2,
        Time: 500,
      },
      {
        Level: 3,
        Time: 1000,
      },
      {
        Level: 4,
        Time: 1000,
      },
      {
        Level: 5,
        Time: 1500,
      },
      {
        Level: 6,
        Time: 1500,
      },
      {
        Level: 7,
        Time: 2000,
      },
      {
        Level: 8,
        Time: 2000,
      },
      {
        Level: 9,
        Time: 2500,
      },
      {
        Level: 10,
        Time: 2500,
      },
    ],
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 18,
        },
        {
          Level: 2,
          Amount: 21,
        },
        {
          Level: 3,
          Amount: 24,
        },
        {
          Level: 4,
          Amount: 27,
        },
        {
          Level: 5,
          Amount: 30,
        },
        {
          Level: 6,
          Amount: 33,
        },
        {
          Level: 7,
          Amount: 36,
        },
        {
          Level: 8,
          Amount: 39,
        },
        {
          Level: 9,
          Amount: 42,
        },
        {
          Level: 10,
          Amount: 45,
        },
      ],
      SpiritSphereCost: [
        {
          Level: 1,
          Amount: 2,
        },
        {
          Level: 2,
          Amount: 2,
        },
        {
          Level: 3,
          Amount: 2,
        },
        {
          Level: 4,
          Amount: 2,
        },
        {
          Level: 5,
          Amount: 2,
        },
        {
          Level: 6,
          Amount: 1,
        },
        {
          Level: 7,
          Amount: 1,
        },
        {
          Level: 8,
          Amount: 1,
        },
        {
          Level: 9,
          Amount: 1,
        },
        {
          Level: 10,
          Amount: 1,
        },
      ],
    },
  },
  {
    Id: 2330,
    Name: "SR_TIGERCANNON",
    Description: "Tiger Cannon",
    MaxLevel: 10,
    Type: "Weapon",
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
      Splash: true,
      IgnoreFlee: true,
    },
    Flags: {
      TargetTrap: true,
    },
    Range: 1,
    Hit: "Single",
    HitCount: 1,
    Element: "Weapon",
    SplashArea: [
      {
        Level: 1,
        Area: 2,
      },
      {
        Level: 2,
        Area: 2,
      },
      {
        Level: 3,
        Area: 2,
      },
      {
        Level: 4,
        Area: 2,
      },
      {
        Level: 5,
        Area: 2,
      },
      {
        Level: 6,
        Area: 3,
      },
      {
        Level: 7,
        Area: 3,
      },
      {
        Level: 8,
        Area: 3,
      },
      {
        Level: 9,
        Area: 3,
      },
      {
        Level: 10,
        Area: 3,
      },
    ],
    CopyFlags: {
      Skill: {
        Reproduce: true,
      },
    },
    CastCancel: true,
    CastTime: [
      {
        Level: 1,
        Time: 1100,
      },
      {
        Level: 2,
        Time: 1200,
      },
      {
        Level: 3,
        Time: 1300,
      },
      {
        Level: 4,
        Time: 1400,
      },
      {
        Level: 5,
        Time: 1500,
      },
      {
        Level: 6,
        Time: 1600,
      },
      {
        Level: 7,
        Time: 1700,
      },
      {
        Level: 8,
        Time: 1800,
      },
      {
        Level: 9,
        Time: 1900,
      },
      {
        Level: 10,
        Time: 2000,
      },
    ],
    AfterCastActDelay: 1000,
    Cooldown: 3000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 30,
        },
        {
          Level: 2,
          Amount: 35,
        },
        {
          Level: 3,
          Amount: 40,
        },
        {
          Level: 4,
          Amount: 45,
        },
        {
          Level: 5,
          Amount: 50,
        },
        {
          Level: 6,
          Amount: 55,
        },
        {
          Level: 7,
          Amount: 60,
        },
        {
          Level: 8,
          Amount: 65,
        },
        {
          Level: 9,
          Amount: 70,
        },
        {
          Level: 10,
          Amount: 75,
        },
      ],
      Status: {
        Explosionspirits: true,
      },
      SpiritSphereCost: 2,
    },
  },
  {
    Id: 2331,
    Name: "SR_HELLGATE",
    Description: "Hell Gate",
    MaxLevel: 10,
    Requires: {
      SpCost: 1,
      SpRateCost: [
        {
          Level: 1,
          Amount: -11,
        },
        {
          Level: 2,
          Amount: -12,
        },
        {
          Level: 3,
          Amount: -13,
        },
        {
          Level: 4,
          Amount: -14,
        },
        {
          Level: 5,
          Amount: -15,
        },
        {
          Level: 6,
          Amount: -16,
        },
        {
          Level: 7,
          Amount: -17,
        },
        {
          Level: 8,
          Amount: -18,
        },
        {
          Level: 9,
          Amount: -19,
        },
        {
          Level: 10,
          Amount: -20,
        },
      ],
      SpiritSphereCost: 5,
    },
  },
  {
    Id: 2332,
    Name: "SR_RAMPAGEBLASTER",
    Description: "Rampage Blaster",
    MaxLevel: 5,
    Type: "Weapon",
    TargetType: "Self",
    DamageFlags: {
      Splash: true,
    },
    Flags: {
      TargetTrap: true,
    },
    Range: 1,
    Hit: "Single",
    HitCount: 1,
    Element: "Weapon",
    SplashArea: 3,
    CopyFlags: {
      Skill: {
        Reproduce: true,
      },
    },
    AfterCastActDelay: 1000,
    Cooldown: 10000,
    Requires: {
      SpCost: 100,
      Status: {
        Explosionspirits: true,
      },
      SpiritSphereCost: 3,
    },
  },
  {
    Id: 2333,
    Name: "SR_CRESCENTELBOW",
    Description: "Crescent Elbow",
    MaxLevel: 5,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Range: 1,
    Hit: "Single",
    HitCount: 1,
    AfterCastActDelay: 1000,
    Duration1: [
      {
        Level: 1,
        Time: 3000,
      },
      {
        Level: 2,
        Time: 4000,
      },
      {
        Level: 3,
        Time: 5000,
      },
      {
        Level: 4,
        Time: 6000,
      },
      {
        Level: 5,
        Time: 7000,
      },
    ],
    Cooldown: 5000,
    Requires: {
      SpCost: 80,
      SpiritSphereCost: 2,
    },
    Status: "CrescentElbow",
  },
  {
    Id: 2334,
    Name: "SR_CURSEDCIRCLE",
    Description: "Cursed Circle",
    MaxLevel: 5,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
      Splash: true,
    },
    Range: 1,
    Hit: "Single",
    HitCount: 1,
    SplashArea: [
      {
        Level: 1,
        Area: 1,
      },
      {
        Level: 2,
        Area: 1,
      },
      {
        Level: 3,
        Area: 2,
      },
      {
        Level: 4,
        Area: 2,
      },
      {
        Level: 5,
        Area: 3,
      },
    ],
    AfterCastActDelay: 1000,
    Duration1: [
      {
        Level: 1,
        Time: 3000,
      },
      {
        Level: 2,
        Time: 4000,
      },
      {
        Level: 3,
        Time: 5000,
      },
      {
        Level: 4,
        Time: 6000,
      },
      {
        Level: 5,
        Time: 7000,
      },
    ],
    Cooldown: 10000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 40,
        },
        {
          Level: 2,
          Amount: 60,
        },
        {
          Level: 3,
          Amount: 80,
        },
        {
          Level: 4,
          Amount: 100,
        },
        {
          Level: 5,
          Amount: 120,
        },
      ],
      HpRateCost: [
        {
          Level: 1,
          Amount: -1,
        },
        {
          Level: 2,
          Amount: -2,
        },
        {
          Level: 3,
          Amount: -3,
        },
        {
          Level: 4,
          Amount: -4,
        },
        {
          Level: 5,
          Amount: -5,
        },
      ],
    },
    Status: "CursedCircle_Target",
  },
  {
    Id: 2335,
    Name: "SR_LIGHTNINGWALK",
    Description: "Lightning Walk",
    MaxLevel: 5,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Range: 1,
    Hit: "Single",
    HitCount: 1,
    AfterCastActDelay: 1000,
    Duration1: [
      {
        Level: 1,
        Time: 5000,
      },
      {
        Level: 2,
        Time: 6000,
      },
      {
        Level: 3,
        Time: 7000,
      },
      {
        Level: 4,
        Time: 8000,
      },
      {
        Level: 5,
        Time: 9000,
      },
    ],
    Cooldown: 5000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 80,
        },
        {
          Level: 2,
          Amount: 70,
        },
        {
          Level: 3,
          Amount: 60,
        },
        {
          Level: 4,
          Amount: 50,
        },
        {
          Level: 5,
          Amount: 40,
        },
      ],
      HpRateCost: [
        {
          Level: 1,
          Amount: -5,
        },
        {
          Level: 2,
          Amount: -4,
        },
        {
          Level: 3,
          Amount: -3,
        },
        {
          Level: 4,
          Amount: -2,
        },
        {
          Level: 5,
          Amount: -1,
        },
      ],
    },
    Status: "LightningWalk",
  },
  {
    Id: 2336,
    Name: "SR_KNUCKLEARROW",
    Description: "Knuckle Arrow",
    MaxLevel: 10,
    Type: "Weapon",
    TargetType: "Attack",
    Range: [
      {
        Level: 1,
        Size: 7,
      },
      {
        Level: 2,
        Size: 7,
      },
      {
        Level: 3,
        Size: 8,
      },
      {
        Level: 4,
        Size: 8,
      },
      {
        Level: 5,
        Size: 9,
      },
      {
        Level: 6,
        Size: 9,
      },
      {
        Level: 7,
        Size: 10,
      },
      {
        Level: 8,
        Size: 10,
      },
      {
        Level: 9,
        Size: 11,
      },
      {
        Level: 10,
        Size: 11,
      },
    ],
    Hit: "Single",
    HitCount: 1,
    Element: "Weapon",
    Knockback: [
      {
        Level: 1,
        Amount: 2,
      },
      {
        Level: 2,
        Amount: 3,
      },
      {
        Level: 3,
        Amount: 4,
      },
      {
        Level: 4,
        Amount: 5,
      },
      {
        Level: 5,
        Amount: 6,
      },
    ],
    CopyFlags: {
      Skill: {
        Reproduce: true,
      },
    },
    AfterCastActDelay: 1000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 12,
        },
        {
          Level: 2,
          Amount: 14,
        },
        {
          Level: 3,
          Amount: 16,
        },
        {
          Level: 4,
          Amount: 18,
        },
        {
          Level: 5,
          Amount: 20,
        },
        {
          Level: 6,
          Amount: 22,
        },
        {
          Level: 7,
          Amount: 24,
        },
        {
          Level: 8,
          Amount: 26,
        },
        {
          Level: 9,
          Amount: 28,
        },
        {
          Level: 10,
          Amount: 30,
        },
      ],
      SpiritSphereCost: [
        {
          Level: 1,
          Amount: 1,
        },
        {
          Level: 2,
          Amount: 1,
        },
        {
          Level: 3,
          Amount: 1,
        },
        {
          Level: 4,
          Amount: 1,
        },
        {
          Level: 5,
          Amount: 1,
        },
        {
          Level: 6,
          Amount: 0,
        },
        {
          Level: 7,
          Amount: 0,
        },
        {
          Level: 8,
          Amount: 0,
        },
        {
          Level: 9,
          Amount: 0,
        },
        {
          Level: 10,
          Amount: 0,
        },
      ],
    },
  },
  {
    Id: 2337,
    Name: "SR_WINDMILL",
    Description: "Windmill",
    MaxLevel: 1,
    Type: "Weapon",
    TargetType: "Self",
    DamageFlags: {
      Splash: true,
    },
    Flags: {
      IgnoreHovering: true,
    },
    Range: 1,
    Hit: "Single",
    HitCount: 1,
    Element: "Weapon",
    SplashArea: 2,
    CopyFlags: {
      Skill: {
        Reproduce: true,
      },
    },
    CastCancel: true,
    CastTime: 1000,
    AfterCastActDelay: 500,
    Cooldown: 3000,
    Requires: {
      SpCost: 45,
    },
  },
  {
    Id: 2338,
    Name: "SR_RAISINGDRAGON",
    Description: "Raising Dragon",
    MaxLevel: 10,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Range: 1,
    Hit: "Single",
    HitCount: 1,
    AfterCastActDelay: 1000,
    Duration1: [
      {
        Level: 1,
        Time: 120000,
      },
      {
        Level: 2,
        Time: 140000,
      },
      {
        Level: 3,
        Time: 160000,
      },
      {
        Level: 4,
        Time: 180000,
      },
      {
        Level: 5,
        Time: 200000,
      },
      {
        Level: 6,
        Time: 220000,
      },
      {
        Level: 7,
        Time: 240000,
      },
      {
        Level: 8,
        Time: 260000,
      },
      {
        Level: 9,
        Time: 280000,
      },
      {
        Level: 10,
        Time: 300000,
      },
    ],
    Cooldown: 30000,
    Requires: {
      SpCost: 120,
    },
    Status: "RaisingDragon",
  },
  {
    Id: 2339,
    Name: "SR_GENTLETOUCH",
    Description: "Gentle Touch",
    MaxLevel: 5,
    HitCount: 1,
    Requires: {
      SpCost: 1,
    },
  },
  {
    Id: 2340,
    Name: "SR_ASSIMILATEPOWER",
    Description: "Assimilate Power",
    MaxLevel: 1,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
      Splash: true,
    },
    Range: 1,
    Hit: "Single",
    HitCount: 1,
    SplashArea: 2,
    AfterCastActDelay: 1000,
    Cooldown: 5000,
    Requires: {
      SpCost: 10,
    },
  },
  {
    Id: 2341,
    Name: "SR_POWERVELOCITY",
    Description: "Power Velocity",
    MaxLevel: 1,
    TargetType: "Support",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      NoTargetSelf: true,
    },
    Range: 3,
    Hit: "Single",
    HitCount: 1,
    CastCancel: true,
    CastTime: 1500,
    FixedCastTime: 500,
    Requires: {
      SpCost: 50,
      SpiritSphereCost: 5,
    },
  },
  {
    Id: 2342,
    Name: "SR_CRESCENTELBOW_AUTOSPELL",
    Description: "Crescent Elbow Autospell",
    MaxLevel: 5,
    Type: "Weapon",
    TargetType: "Attack",
    DamageFlags: {
      IgnoreDefense: true,
    },
    Range: 1,
    Hit: "Single",
    HitCount: 1,
    Element: "Weapon",
    Knockback: 7,
    Requires: {
      SpCost: 1,
    },
  },
  {
    Id: 2343,
    Name: "SR_GATEOFHELL",
    Description: "Gate of Hell",
    MaxLevel: 10,
    Type: "Weapon",
    TargetType: "Attack",
    DamageFlags: {
      IgnoreLongCard: true,
    },
    Range: 7,
    Hit: "Multi_Hit",
    HitCount: -7,
    Element: "Weapon",
    CopyFlags: {
      Skill: {
        Reproduce: true,
      },
    },
    CastCancel: true,
    CastTime: [
      {
        Level: 1,
        Time: 1000,
      },
      {
        Level: 2,
        Time: 1200,
      },
      {
        Level: 3,
        Time: 1400,
      },
      {
        Level: 4,
        Time: 1600,
      },
      {
        Level: 5,
        Time: 1800,
      },
      {
        Level: 6,
        Time: 2000,
      },
      {
        Level: 7,
        Time: 2200,
      },
      {
        Level: 8,
        Time: 2400,
      },
      {
        Level: 9,
        Time: 2600,
      },
      {
        Level: 10,
        Time: 2800,
      },
    ],
    AfterCastActDelay: [
      {
        Level: 1,
        Time: 100,
      },
      {
        Level: 2,
        Time: 200,
      },
      {
        Level: 3,
        Time: 300,
      },
      {
        Level: 4,
        Time: 400,
      },
      {
        Level: 5,
        Time: 500,
      },
      {
        Level: 6,
        Time: 600,
      },
      {
        Level: 7,
        Time: 700,
      },
      {
        Level: 8,
        Time: 800,
      },
      {
        Level: 9,
        Time: 900,
      },
      {
        Level: 10,
        Time: 1000,
      },
    ],
    Requires: {
      SpCost: 100,
      SpiritSphereCost: 2,
    },
  },
  {
    Id: 2344,
    Name: "SR_GENTLETOUCH_QUIET",
    Description: "Gentle Touch - Quiet",
    MaxLevel: 5,
    Type: "Weapon",
    TargetType: "Attack",
    Range: 2,
    Hit: "Single",
    HitCount: 1,
    Element: "Weapon",
    CopyFlags: {
      Skill: {
        Reproduce: true,
      },
    },
    Duration1: [
      {
        Level: 1,
        Time: 5000,
      },
      {
        Level: 2,
        Time: 7000,
      },
      {
        Level: 3,
        Time: 9000,
      },
      {
        Level: 4,
        Time: 11000,
      },
      {
        Level: 5,
        Time: 13000,
      },
    ],
    Cooldown: [
      {
        Level: 1,
        Time: 1000,
      },
      {
        Level: 2,
        Time: 1500,
      },
      {
        Level: 3,
        Time: 2000,
      },
      {
        Level: 4,
        Time: 2500,
      },
      {
        Level: 5,
        Time: 3000,
      },
    ],
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 20,
        },
        {
          Level: 2,
          Amount: 25,
        },
        {
          Level: 3,
          Amount: 30,
        },
        {
          Level: 4,
          Amount: 35,
        },
        {
          Level: 5,
          Amount: 40,
        },
      ],
    },
  },
  {
    Id: 2345,
    Name: "SR_GENTLETOUCH_CURE",
    Description: "Gentle Touch - Cure",
    MaxLevel: 5,
    TargetType: "Support",
    DamageFlags: {
      NoDamage: true,
    },
    Range: 2,
    Hit: "Single",
    HitCount: 1,
    AfterCastActDelay: 1000,
    Cooldown: [
      {
        Level: 1,
        Time: 1000,
      },
      {
        Level: 2,
        Time: 1500,
      },
      {
        Level: 3,
        Time: 2000,
      },
      {
        Level: 4,
        Time: 2500,
      },
      {
        Level: 5,
        Time: 3000,
      },
    ],
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 40,
        },
        {
          Level: 2,
          Amount: 50,
        },
        {
          Level: 3,
          Amount: 60,
        },
        {
          Level: 4,
          Amount: 70,
        },
        {
          Level: 5,
          Amount: 80,
        },
      ],
      SpiritSphereCost: 1,
    },
  },
  {
    Id: 2346,
    Name: "SR_GENTLETOUCH_ENERGYGAIN",
    Description: "Gentle Touch - Energy Gain",
    MaxLevel: 5,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Range: 1,
    Hit: "Single",
    HitCount: 1,
    CastCancel: true,
    CastTime: 1000,
    AfterCastActDelay: 1000,
    Duration1: 240000,
    Duration2: 600000,
    Cooldown: 1000,
    FixedCastTime: [
      {
        Level: 1,
        Time: 1000,
      },
      {
        Level: 2,
        Time: 1500,
      },
      {
        Level: 3,
        Time: 2000,
      },
      {
        Level: 4,
        Time: 2500,
      },
      {
        Level: 5,
        Time: 3000,
      },
    ],
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 40,
        },
        {
          Level: 2,
          Amount: 50,
        },
        {
          Level: 3,
          Amount: 60,
        },
        {
          Level: 4,
          Amount: 70,
        },
        {
          Level: 5,
          Amount: 80,
        },
      ],
      HpRateCost: [
        {
          Level: 1,
          Amount: -1,
        },
        {
          Level: 2,
          Amount: -2,
        },
        {
          Level: 3,
          Amount: -3,
        },
        {
          Level: 4,
          Amount: -4,
        },
        {
          Level: 5,
          Amount: -5,
        },
      ],
    },
    Status: "Gt_EnergyGain",
  },
  {
    Id: 2347,
    Name: "SR_GENTLETOUCH_CHANGE",
    Description: "Gentle Touch - Change",
    MaxLevel: 5,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Range: 2,
    Hit: "Single",
    HitCount: 1,
    CastCancel: true,
    CastTime: 1000,
    AfterCastActDelay: 1000,
    Duration1: 240000,
    Cooldown: 1000,
    FixedCastTime: 1000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 40,
        },
        {
          Level: 2,
          Amount: 50,
        },
        {
          Level: 3,
          Amount: 60,
        },
        {
          Level: 4,
          Amount: 70,
        },
        {
          Level: 5,
          Amount: 80,
        },
      ],
      HpRateCost: [
        {
          Level: 1,
          Amount: -2,
        },
        {
          Level: 2,
          Amount: -4,
        },
        {
          Level: 3,
          Amount: -6,
        },
        {
          Level: 4,
          Amount: -8,
        },
        {
          Level: 5,
          Amount: -10,
        },
      ],
      SpiritSphereCost: 1,
    },
    Status: "Gt_Change",
  },
  {
    Id: 2348,
    Name: "SR_GENTLETOUCH_REVITALIZE",
    Description: "Gentle Touch - Revitalize",
    MaxLevel: 5,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Range: 2,
    Hit: "Single",
    HitCount: 1,
    CastCancel: true,
    CastTime: 1000,
    AfterCastActDelay: 1000,
    Duration1: 240000,
    Cooldown: 1000,
    FixedCastTime: 1000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 40,
        },
        {
          Level: 2,
          Amount: 50,
        },
        {
          Level: 3,
          Amount: 60,
        },
        {
          Level: 4,
          Amount: 70,
        },
        {
          Level: 5,
          Amount: 80,
        },
      ],
      SpiritSphereCost: 1,
    },
    Status: "Gt_Revitalize",
  },
  {
    Id: 2517,
    Name: "SR_HOWLINGOFLION",
    Description: "Howling of Lion",
    MaxLevel: 5,
    Type: "Weapon",
    TargetType: "Self",
    DamageFlags: {
      Splash: true,
    },
    Hit: "Single",
    HitCount: 1,
    Element: "Weapon",
    SplashArea: [
      {
        Level: 1,
        Area: 2,
      },
      {
        Level: 2,
        Area: 2,
      },
      {
        Level: 3,
        Area: 3,
      },
      {
        Level: 4,
        Area: 3,
      },
      {
        Level: 5,
        Area: 4,
      },
    ],
    CopyFlags: {
      Skill: {
        Reproduce: true,
      },
    },
    CastTime: 1000,
    Cooldown: 10000,
    FixedCastTime: 500,
    Requires: {
      SpCost: 70,
      SpiritSphereCost: 3,
    },
  },
  {
    Id: 2518,
    Name: "SR_RIDEINLIGHTNING",
    Description: "Ride In Lightening",
    MaxLevel: 5,
    Type: "Weapon",
    TargetType: "Ground",
    DamageFlags: {
      Splash: true,
    },
    Range: 11,
    Hit: "Single",
    HitCount: 1,
    Element: "Weapon",
    SplashArea: [
      {
        Level: 1,
        Area: 1,
      },
      {
        Level: 2,
        Area: 1,
      },
      {
        Level: 3,
        Area: 2,
      },
      {
        Level: 4,
        Area: 2,
      },
      {
        Level: 5,
        Area: 3,
      },
    ],
    CopyFlags: {
      Skill: {
        Reproduce: true,
      },
    },
    CastTime: [
      {
        Level: 1,
        Time: 200,
      },
      {
        Level: 2,
        Time: 400,
      },
      {
        Level: 3,
        Time: 600,
      },
      {
        Level: 4,
        Time: 800,
      },
      {
        Level: 5,
        Time: 1000,
      },
    ],
    Cooldown: 500,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 25,
        },
        {
          Level: 2,
          Amount: 30,
        },
        {
          Level: 3,
          Amount: 35,
        },
        {
          Level: 4,
          Amount: 40,
        },
        {
          Level: 5,
          Amount: 45,
        },
      ],
      SpiritSphereCost: 2,
    },
  },
  {
    Id: 2350,
    Name: "WA_SWING_DANCE",
    Description: "Swing Dance",
    MaxLevel: 5,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
      Splash: true,
    },
    Hit: "Single",
    HitCount: 1,
    SplashArea: -1,
    CastCancel: true,
    CastTime: 1000,
    AfterCastActDelay: 2000,
    Duration1: 180000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 96,
        },
        {
          Level: 2,
          Amount: 112,
        },
        {
          Level: 3,
          Amount: 128,
        },
        {
          Level: 4,
          Amount: 144,
        },
        {
          Level: 5,
          Amount: 160,
        },
      ],
      Weapon: {
        Musical: true,
        Whip: true,
      },
    },
    Status: "SwingDance",
  },
  {
    Id: 2351,
    Name: "WA_SYMPHONY_OF_LOVER",
    Description: "Symphony of Lovers",
    MaxLevel: 5,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
      Splash: true,
    },
    Hit: "Single",
    HitCount: 1,
    SplashArea: -1,
    CastCancel: true,
    CastTime: 1000,
    AfterCastActDelay: 2000,
    Duration1: 180000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 60,
        },
        {
          Level: 2,
          Amount: 69,
        },
        {
          Level: 3,
          Amount: 78,
        },
        {
          Level: 4,
          Amount: 87,
        },
        {
          Level: 5,
          Amount: 96,
        },
      ],
      Weapon: {
        Musical: true,
        Whip: true,
      },
    },
    Status: "SymphonyOfLover",
  },
  {
    Id: 2352,
    Name: "WA_MOONLIT_SERENADE",
    Description: "Moonlit Serenade",
    MaxLevel: 5,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
      Splash: true,
    },
    Hit: "Single",
    HitCount: 1,
    SplashArea: -1,
    CastCancel: true,
    CastTime: 1000,
    AfterCastActDelay: 2000,
    Duration1: 180000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 84,
        },
        {
          Level: 2,
          Amount: 96,
        },
        {
          Level: 3,
          Amount: 108,
        },
        {
          Level: 4,
          Amount: 120,
        },
        {
          Level: 5,
          Amount: 134,
        },
      ],
      Weapon: {
        Musical: true,
        Whip: true,
      },
    },
    Status: "MoonlitSerenade",
  },
  {
    Id: 2381,
    Name: "MI_RUSH_WINDMILL",
    Description: "Windmill Rush Attack",
    MaxLevel: 5,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
      Splash: true,
    },
    Hit: "Single",
    HitCount: 1,
    SplashArea: -1,
    CastCancel: true,
    CastTime: 1000,
    AfterCastActDelay: 2000,
    Duration1: 180000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 82,
        },
        {
          Level: 2,
          Amount: 88,
        },
        {
          Level: 3,
          Amount: 94,
        },
        {
          Level: 4,
          Amount: 100,
        },
        {
          Level: 5,
          Amount: 106,
        },
      ],
      Weapon: {
        Musical: true,
        Whip: true,
      },
    },
    Status: "RushWindmill",
  },
  {
    Id: 2382,
    Name: "MI_ECHOSONG",
    Description: "Echo Song",
    MaxLevel: 5,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
      Splash: true,
    },
    Hit: "Single",
    HitCount: 1,
    SplashArea: [
      {
        Level: 1,
        Area: 7,
      },
      {
        Level: 2,
        Area: 8,
      },
      {
        Level: 3,
        Area: 9,
      },
      {
        Level: 4,
        Area: 10,
      },
      {
        Level: 5,
        Area: 11,
      },
    ],
    CastCancel: true,
    CastTime: 1000,
    AfterCastActDelay: 2000,
    Duration1: 180000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 86,
        },
        {
          Level: 2,
          Amount: 92,
        },
        {
          Level: 3,
          Amount: 98,
        },
        {
          Level: 4,
          Amount: 104,
        },
        {
          Level: 5,
          Amount: 110,
        },
      ],
      Weapon: {
        Musical: true,
        Whip: true,
      },
    },
    Status: "EchoSong",
  },
  {
    Id: 2383,
    Name: "MI_HARMONIZE",
    Description: "Harmonize",
    MaxLevel: 5,
    TargetType: "Support",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      IgnoreKagehumi: true,
    },
    Range: 9,
    Hit: "Single",
    HitCount: 1,
    CastCancel: true,
    CastTime: 1000,
    AfterCastActDelay: 1000,
    Duration1: 60000,
    Cooldown: 5000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 70,
        },
        {
          Level: 2,
          Amount: 75,
        },
        {
          Level: 3,
          Amount: 80,
        },
        {
          Level: 4,
          Amount: 85,
        },
        {
          Level: 5,
          Amount: 90,
        },
      ],
      Weapon: {
        Musical: true,
        Whip: true,
      },
    },
    Status: "Harmonize",
  },
  {
    Id: 2412,
    Name: "WM_LESSON",
    Description: "Lesson",
    MaxLevel: 10,
  },
  {
    Id: 2413,
    Name: "WM_METALICSOUND",
    Description: "Metallic Sound",
    MaxLevel: 10,
    Type: "Magic",
    TargetType: "Attack",
    Range: 9,
    Hit: "Multi_Hit",
    HitCount: 2,
    Element: "Weapon",
    CopyFlags: {
      Skill: {
        Reproduce: true,
      },
    },
    CastCancel: true,
    CastTime: [
      {
        Level: 1,
        Time: 1000,
      },
      {
        Level: 2,
        Time: 1500,
      },
      {
        Level: 3,
        Time: 2000,
      },
      {
        Level: 4,
        Time: 2500,
      },
      {
        Level: 5,
        Time: 3000,
      },
      {
        Level: 6,
        Time: 3500,
      },
      {
        Level: 7,
        Time: 4000,
      },
      {
        Level: 8,
        Time: 4500,
      },
      {
        Level: 9,
        Time: 5000,
      },
      {
        Level: 10,
        Time: 5500,
      },
    ],
    AfterCastActDelay: 500,
    Cooldown: 2500,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 62,
        },
        {
          Level: 2,
          Amount: 64,
        },
        {
          Level: 3,
          Amount: 66,
        },
        {
          Level: 4,
          Amount: 68,
        },
        {
          Level: 5,
          Amount: 70,
        },
        {
          Level: 6,
          Amount: 72,
        },
        {
          Level: 7,
          Amount: 74,
        },
        {
          Level: 8,
          Amount: 76,
        },
        {
          Level: 9,
          Amount: 78,
        },
        {
          Level: 10,
          Amount: 80,
        },
      ],
    },
  },
  {
    Id: 2414,
    Name: "WM_REVERBERATION",
    Description: "Reverberation",
    MaxLevel: 5,
    Type: "Magic",
    TargetType: "Attack",
    DamageFlags: {
      Splash: true,
    },
    Flags: {
      IsTrap: true,
    },
    Range: 9,
    Hit: "Multi_Hit",
    HitCount: -10,
    SplashArea: 2,
    CopyFlags: {
      Skill: {
        Reproduce: true,
      },
    },
    CastCancel: true,
    CastTime: 1000,
    AfterCastActDelay: 500,
    Cooldown: 150,
    FixedCastTime: 500,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 56,
        },
        {
          Level: 2,
          Amount: 62,
        },
        {
          Level: 3,
          Amount: 68,
        },
        {
          Level: 4,
          Amount: 74,
        },
        {
          Level: 5,
          Amount: 80,
        },
      ],
      Ammo: {
        Arrow: true,
      },
      AmmoAmount: 5,
    },
  },
  {
    Id: 2415,
    Name: "WM_REVERBERATION_MELEE",
    Description: "Reverberation Melee",
    MaxLevel: 5,
    Type: "Weapon",
    TargetType: "Attack",
    DamageFlags: {
      Splash: true,
    },
    Hit: "Single",
    HitCount: 1,
    Element: "Weapon",
    SplashArea: 2,
    CopyFlags: {
      Skill: {
        Reproduce: true,
      },
    },
    Requires: {
      SpCost: 1,
    },
  },
  {
    Id: 2416,
    Name: "WM_REVERBERATION_MAGIC",
    Description: "Reverberation Magic",
    MaxLevel: 5,
    Type: "Magic",
    TargetType: "Attack",
    Hit: "Multi_Hit",
    HitCount: 10,
    CopyFlags: {
      Skill: {
        Reproduce: true,
      },
    },
  },
  {
    Id: 2417,
    Name: "WM_DOMINION_IMPULSE",
    Description: "Dominion Impulse",
    MaxLevel: 1,
    TargetType: "Ground",
    DamageFlags: {
      NoDamage: true,
      Splash: true,
    },
    Range: 11,
    Hit: "Single",
    HitCount: 1,
    SplashArea: 5,
    AfterCastActDelay: 1000,
    Requires: {
      SpCost: 10,
    },
  },
  {
    Id: 2418,
    Name: "WM_SEVERE_RAINSTORM",
    Description: "Severe Rainstorm",
    MaxLevel: 5,
    TargetType: "Ground",
    DamageFlags: {
      NoDamage: true,
    },
    Range: 9,
    Hit: "Single",
    HitCount: 1,
    CopyFlags: {
      Skill: {
        Reproduce: true,
      },
    },
    CastCancel: true,
    CastTime: [
      {
        Level: 1,
        Time: 1500,
      },
      {
        Level: 2,
        Time: 2000,
      },
      {
        Level: 3,
        Time: 2500,
      },
      {
        Level: 4,
        Time: 3000,
      },
      {
        Level: 5,
        Time: 3500,
      },
    ],
    AfterCastActDelay: 1000,
    Duration1: 3400,
    Cooldown: [
      {
        Level: 1,
        Time: 5000,
      },
      {
        Level: 2,
        Time: 5500,
      },
      {
        Level: 3,
        Time: 6000,
      },
      {
        Level: 4,
        Time: 6500,
      },
      {
        Level: 5,
        Time: 7000,
      },
    ],
    FixedCastTime: 500,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 80,
        },
        {
          Level: 2,
          Amount: 90,
        },
        {
          Level: 3,
          Amount: 100,
        },
        {
          Level: 4,
          Amount: 110,
        },
        {
          Level: 5,
          Amount: 120,
        },
      ],
      Weapon: {
        Bow: true,
        Musical: true,
        Whip: true,
      },
      Ammo: {
        Arrow: true,
      },
      AmmoAmount: 10,
    },
    Unit: {
      Id: "Severe_Rainstorm",
      Range: 5,
      Interval: 300,
      Target: "Enemy",
      Flag: {
        DualMode: true,
      },
    },
  },
  {
    Id: 2419,
    Name: "WM_POEMOFNETHERWORLD",
    Description: "Poem of The Netherworld",
    MaxLevel: 5,
    TargetType: "Ground",
    DamageFlags: {
      NoDamage: true,
      Splash: true,
    },
    Flags: {
      IsTrap: true,
    },
    Range: 9,
    Hit: "Single",
    HitCount: 1,
    SplashArea: 1,
    ActiveInstance: 5,
    CastCancel: true,
    CastTime: 3000,
    Duration1: [
      {
        Level: 1,
        Time: 9000,
      },
      {
        Level: 2,
        Time: 11000,
      },
      {
        Level: 3,
        Time: 13000,
      },
      {
        Level: 4,
        Time: 15000,
      },
      {
        Level: 5,
        Time: 17000,
      },
    ],
    Duration2: [
      {
        Level: 1,
        Time: 8000,
      },
      {
        Level: 2,
        Time: 10000,
      },
      {
        Level: 3,
        Time: 12000,
      },
      {
        Level: 4,
        Time: 14000,
      },
      {
        Level: 5,
        Time: 16000,
      },
    ],
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 12,
        },
        {
          Level: 2,
          Amount: 16,
        },
        {
          Level: 3,
          Amount: 20,
        },
        {
          Level: 4,
          Amount: 24,
        },
        {
          Level: 5,
          Amount: 28,
        },
      ],
      Weapon: {
        Musical: true,
        Whip: true,
      },
      ItemCost: [
        {
          Item: "Protect_Neck_Candy",
          Amount: 2,
        },
      ],
    },
    Unit: {
      Id: "Netherworld",
      Range: 1,
      Interval: 1000,
      Target: "Enemy",
      Flag: {
        NoFootSet: true,
        PathCheck: true,
        NoKnockback: true,
      },
    },
    Status: "Netherworld",
  },
  {
    Id: 2420,
    Name: "WM_VOICEOFSIREN",
    Description: "Voice of Siren",
    MaxLevel: 5,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
      Splash: true,
    },
    Hit: "Single",
    HitCount: 1,
    SplashArea: [
      {
        Level: 1,
        Area: 2,
      },
      {
        Level: 2,
        Area: 3,
      },
      {
        Level: 3,
        Area: 4,
      },
      {
        Level: 4,
        Area: 5,
      },
      {
        Level: 5,
        Area: 6,
      },
    ],
    CastCancel: true,
    CastTime: [
      {
        Level: 1,
        Time: 2000,
      },
      {
        Level: 2,
        Time: 2200,
      },
      {
        Level: 3,
        Time: 2400,
      },
      {
        Level: 4,
        Time: 2600,
      },
      {
        Level: 5,
        Time: 2800,
      },
    ],
    AfterCastActDelay: 1000,
    Duration1: [
      {
        Level: 1,
        Time: 15000,
      },
      {
        Level: 2,
        Time: 18000,
      },
      {
        Level: 3,
        Time: 21000,
      },
      {
        Level: 4,
        Time: 24000,
      },
      {
        Level: 5,
        Time: 27000,
      },
    ],
    Cooldown: 5000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 48,
        },
        {
          Level: 2,
          Amount: 56,
        },
        {
          Level: 3,
          Amount: 64,
        },
        {
          Level: 4,
          Amount: 72,
        },
        {
          Level: 5,
          Amount: 80,
        },
      ],
      Weapon: {
        Musical: true,
        Whip: true,
      },
    },
    Status: "VoiceOfSiren",
  },
  {
    Id: 2421,
    Name: "WM_DEADHILLHERE",
    Description: "Valley of Death",
    MaxLevel: 5,
    TargetType: "Support",
    DamageFlags: {
      NoDamage: true,
    },
    Range: 7,
    Hit: "Single",
    HitCount: 1,
    CastCancel: true,
    CastTime: [
      {
        Level: 1,
        Time: 3000,
      },
      {
        Level: 2,
        Time: 2500,
      },
      {
        Level: 3,
        Time: 2000,
      },
      {
        Level: 4,
        Time: 1500,
      },
      {
        Level: 5,
        Time: 1000,
      },
    ],
    AfterCastActDelay: 1000,
    FixedCastTime: 1000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 50,
        },
        {
          Level: 2,
          Amount: 53,
        },
        {
          Level: 3,
          Amount: 56,
        },
        {
          Level: 4,
          Amount: 59,
        },
        {
          Level: 5,
          Amount: 62,
        },
      ],
      Weapon: {
        Musical: true,
        Whip: true,
      },
      ItemCost: [
        {
          Item: "Heartbroken_Tears",
          Amount: 1,
        },
      ],
    },
  },
  {
    Id: 2422,
    Name: "WM_LULLABY_DEEPSLEEP",
    Description: "Deep Sleep Lullaby",
    MaxLevel: 5,
    TargetType: "Attack",
    DamageFlags: {
      NoDamage: true,
      Splash: true,
    },
    Hit: "Single",
    HitCount: 1,
    SplashArea: [
      {
        Level: 1,
        Area: 1,
      },
      {
        Level: 2,
        Area: 1,
      },
      {
        Level: 3,
        Area: 1,
      },
      {
        Level: 4,
        Area: 2,
      },
      {
        Level: 5,
        Area: 2,
      },
    ],
    CastCancel: true,
    CastTime: 2000,
    AfterCastActDelay: 1000,
    Duration1: [
      {
        Level: 1,
        Time: 12000,
      },
      {
        Level: 2,
        Time: 14000,
      },
      {
        Level: 3,
        Time: 16000,
      },
      {
        Level: 4,
        Time: 18000,
      },
      {
        Level: 5,
        Time: 20000,
      },
    ],
    Cooldown: 10000,
    FixedCastTime: 1000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 80,
        },
        {
          Level: 2,
          Amount: 90,
        },
        {
          Level: 3,
          Amount: 100,
        },
        {
          Level: 4,
          Amount: 110,
        },
        {
          Level: 5,
          Amount: 120,
        },
      ],
      Weapon: {
        Musical: true,
        Whip: true,
      },
      ItemCost: [
        {
          Item: "Protect_Neck_Candy",
          Amount: 2,
        },
      ],
    },
    Status: "DeepSleep",
  },
  {
    Id: 2423,
    Name: "WM_SIRCLEOFNATURE",
    Description: "Circle of Nature's Sound",
    MaxLevel: 5,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
      Splash: true,
    },
    Hit: "Single",
    HitCount: 1,
    SplashArea: -1,
    CastCancel: true,
    CastTime: 2000,
    AfterCastActDelay: 1000,
    Duration1: 180000,
    Cooldown: 15000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 42,
        },
        {
          Level: 2,
          Amount: 46,
        },
        {
          Level: 3,
          Amount: 50,
        },
        {
          Level: 4,
          Amount: 54,
        },
        {
          Level: 5,
          Amount: 58,
        },
      ],
      Weapon: {
        Musical: true,
        Whip: true,
      },
    },
    Status: "SircleOfNature",
  },
  {
    Id: 2424,
    Name: "WM_RANDOMIZESPELL",
    Description: "Improvised Song",
    MaxLevel: 5,
    Type: "Magic",
    TargetType: "Attack",
    DamageFlags: {
      NoDamage: true,
    },
    Range: 9,
    Hit: "Single",
    HitCount: 1,
    CastCancel: true,
    AfterCastActDelay: 1000,
    Cooldown: 3000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 40,
        },
        {
          Level: 2,
          Amount: 45,
        },
        {
          Level: 3,
          Amount: 50,
        },
        {
          Level: 4,
          Amount: 55,
        },
        {
          Level: 5,
          Amount: 60,
        },
      ],
      Weapon: {
        Musical: true,
        Whip: true,
      },
    },
  },
  {
    Id: 2425,
    Name: "WM_GLOOMYDAY",
    Description: "Gloomy Day",
    MaxLevel: 5,
    TargetType: "Support",
    DamageFlags: {
      NoDamage: true,
    },
    Range: 9,
    Hit: "Single",
    HitCount: 1,
    CastCancel: true,
    CastTime: 1000,
    AfterCastActDelay: 1000,
    Duration1: 60000,
    Cooldown: 10000,
    FixedCastTime: 500,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 60,
        },
        {
          Level: 2,
          Amount: 75,
        },
        {
          Level: 3,
          Amount: 90,
        },
        {
          Level: 4,
          Amount: 105,
        },
        {
          Level: 5,
          Amount: 120,
        },
      ],
      Weapon: {
        Musical: true,
        Whip: true,
      },
    },
    Status: "GloomyDay",
  },
  {
    Id: 2426,
    Name: "WM_GREAT_ECHO",
    Description: "Great Echo",
    MaxLevel: 5,
    Type: "Weapon",
    TargetType: "Ground",
    DamageFlags: {
      Splash: true,
    },
    Flags: {
      IsChorus: true,
    },
    Range: 9,
    Hit: "Single",
    HitCount: 1,
    SplashArea: [
      {
        Level: 1,
        Area: 2,
      },
      {
        Level: 2,
        Area: 3,
      },
      {
        Level: 3,
        Area: 3,
      },
      {
        Level: 4,
        Area: 4,
      },
      {
        Level: 5,
        Area: 4,
      },
    ],
    CastCancel: true,
    CastTime: [
      {
        Level: 1,
        Time: 2000,
      },
      {
        Level: 2,
        Time: 2200,
      },
      {
        Level: 3,
        Time: 2400,
      },
      {
        Level: 4,
        Time: 2600,
      },
      {
        Level: 5,
        Time: 2800,
      },
    ],
    AfterCastActDelay: 1000,
    Cooldown: 10000,
    FixedCastTime: 500,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 80,
        },
        {
          Level: 2,
          Amount: 90,
        },
        {
          Level: 3,
          Amount: 100,
        },
        {
          Level: 4,
          Amount: 110,
        },
        {
          Level: 5,
          Amount: 120,
        },
      ],
      ItemCost: [
        {
          Item: "Protect_Neck_Candy",
          Amount: 2,
        },
      ],
    },
  },
  {
    Id: 2427,
    Name: "WM_SONG_OF_MANA",
    Description: "Song of Mana",
    MaxLevel: 5,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
      Splash: true,
    },
    Flags: {
      IsChorus: true,
    },
    Hit: "Single",
    HitCount: 1,
    SplashArea: [
      {
        Level: 1,
        Area: 5,
      },
      {
        Level: 2,
        Area: 6,
      },
      {
        Level: 3,
        Area: 7,
      },
      {
        Level: 4,
        Area: 8,
      },
      {
        Level: 5,
        Area: 9,
      },
    ],
    CastCancel: true,
    CastTime: 1000,
    AfterCastActDelay: 1000,
    Duration1: 120000,
    Cooldown: 90000,
    FixedCastTime: 500,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 120,
        },
        {
          Level: 2,
          Amount: 140,
        },
        {
          Level: 3,
          Amount: 160,
        },
        {
          Level: 4,
          Amount: 180,
        },
        {
          Level: 5,
          Amount: 200,
        },
      ],
      Weapon: {
        Musical: true,
        Whip: true,
      },
      ItemCost: [
        {
          Item: "Protect_Neck_Candy",
          Amount: 1,
        },
      ],
    },
    Status: "SongOfMana",
  },
  {
    Id: 2428,
    Name: "WM_DANCE_WITH_WUG",
    Description: "Dance With A Warg",
    MaxLevel: 5,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
      Splash: true,
    },
    Flags: {
      IsChorus: true,
    },
    Hit: "Single",
    HitCount: 1,
    SplashArea: [
      {
        Level: 1,
        Area: 5,
      },
      {
        Level: 2,
        Area: 6,
      },
      {
        Level: 3,
        Area: 7,
      },
      {
        Level: 4,
        Area: 8,
      },
      {
        Level: 5,
        Area: 9,
      },
    ],
    CastCancel: true,
    CastTime: [
      {
        Level: 1,
        Time: 1500,
      },
      {
        Level: 2,
        Time: 2000,
      },
      {
        Level: 3,
        Time: 2500,
      },
      {
        Level: 4,
        Time: 3000,
      },
      {
        Level: 5,
        Time: 3500,
      },
    ],
    AfterCastActDelay: 1000,
    Duration1: 120000,
    Cooldown: 90000,
    FixedCastTime: 500,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 120,
        },
        {
          Level: 2,
          Amount: 140,
        },
        {
          Level: 3,
          Amount: 160,
        },
        {
          Level: 4,
          Amount: 180,
        },
        {
          Level: 5,
          Amount: 200,
        },
      ],
      Weapon: {
        Musical: true,
        Whip: true,
      },
      ItemCost: [
        {
          Item: "Protect_Neck_Candy",
          Amount: 1,
        },
      ],
    },
    Status: "DanceWithWug",
  },
  {
    Id: 2429,
    Name: "WM_SOUND_OF_DESTRUCTION",
    Description: "Sound of Destruction",
    MaxLevel: 5,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
      Splash: true,
    },
    Flags: {
      IsChorus: true,
    },
    Hit: "Single",
    HitCount: 1,
    SplashArea: [
      {
        Level: 1,
        Area: 5,
      },
      {
        Level: 2,
        Area: 5,
      },
      {
        Level: 3,
        Area: 6,
      },
      {
        Level: 4,
        Area: 6,
      },
      {
        Level: 5,
        Area: 7,
      },
    ],
    CastCancel: true,
    CastTime: [
      {
        Level: 2,
        Time: 500,
      },
      {
        Level: 3,
        Time: 1000,
      },
      {
        Level: 4,
        Time: 1500,
      },
      {
        Level: 5,
        Time: 2000,
      },
    ],
    AfterCastActDelay: 1000,
    Duration1: 10000,
    Cooldown: 60000,
    FixedCastTime: 500,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 50,
        },
        {
          Level: 2,
          Amount: 60,
        },
        {
          Level: 3,
          Amount: 70,
        },
        {
          Level: 4,
          Amount: 80,
        },
        {
          Level: 5,
          Amount: 90,
        },
      ],
      Weapon: {
        Musical: true,
        Whip: true,
      },
      ItemCost: [
        {
          Item: "Protect_Neck_Candy",
          Amount: 10,
        },
      ],
    },
    Status: "SoundOfDestruction",
  },
  {
    Id: 2430,
    Name: "WM_SATURDAY_NIGHT_FEVER",
    Description: "Saturday Night Fever",
    MaxLevel: 5,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
      Splash: true,
    },
    Flags: {
      IsChorus: true,
    },
    Hit: "Single",
    HitCount: 1,
    SplashArea: [
      {
        Level: 1,
        Area: 3,
      },
      {
        Level: 2,
        Area: 4,
      },
      {
        Level: 3,
        Area: 5,
      },
      {
        Level: 4,
        Area: 6,
      },
      {
        Level: 5,
        Area: 7,
      },
    ],
    CastCancel: true,
    CastTime: [
      {
        Level: 1,
        Time: 1000,
      },
      {
        Level: 2,
        Time: 2000,
      },
      {
        Level: 3,
        Time: 3000,
      },
      {
        Level: 4,
        Time: 4000,
      },
      {
        Level: 5,
        Time: 5000,
      },
    ],
    AfterCastActDelay: 1000,
    Duration1: [
      {
        Level: 1,
        Time: 10000,
      },
      {
        Level: 2,
        Time: 15000,
      },
      {
        Level: 3,
        Time: 20000,
      },
      {
        Level: 4,
        Time: 25000,
      },
      {
        Level: 5,
        Time: 30000,
      },
    ],
    Duration2: [
      {
        Level: 1,
        Time: 10000,
      },
      {
        Level: 2,
        Time: 8000,
      },
      {
        Level: 3,
        Time: 6000,
      },
      {
        Level: 4,
        Time: 4000,
      },
      {
        Level: 5,
        Time: 2000,
      },
    ],
    Cooldown: 60000,
    FixedCastTime: 1000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 150,
        },
        {
          Level: 2,
          Amount: 160,
        },
        {
          Level: 3,
          Amount: 170,
        },
        {
          Level: 4,
          Amount: 180,
        },
        {
          Level: 5,
          Amount: 190,
        },
      ],
      Weapon: {
        Musical: true,
        Whip: true,
      },
      ItemCost: [
        {
          Item: "Protect_Neck_Candy",
          Amount: 5,
        },
      ],
    },
    Status: "SaturdayNightFever",
  },
  {
    Id: 2431,
    Name: "WM_LERADS_DEW",
    Description: "Lerad's Dew",
    MaxLevel: 5,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
      Splash: true,
    },
    Flags: {
      IsChorus: true,
    },
    Hit: "Single",
    HitCount: 1,
    SplashArea: [
      {
        Level: 1,
        Area: 5,
      },
      {
        Level: 2,
        Area: 5,
      },
      {
        Level: 3,
        Area: 6,
      },
      {
        Level: 4,
        Area: 6,
      },
      {
        Level: 5,
        Area: 7,
      },
    ],
    CastCancel: true,
    CastTime: 1000,
    AfterCastActDelay: 1000,
    Duration1: 120000,
    Cooldown: 180000,
    FixedCastTime: 500,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 120,
        },
        {
          Level: 2,
          Amount: 130,
        },
        {
          Level: 3,
          Amount: 140,
        },
        {
          Level: 4,
          Amount: 150,
        },
        {
          Level: 5,
          Amount: 160,
        },
      ],
      Weapon: {
        Musical: true,
        Whip: true,
      },
      ItemCost: [
        {
          Item: "Protect_Neck_Candy",
          Amount: 1,
        },
      ],
    },
    Status: "LeradsDew",
  },
  {
    Id: 2432,
    Name: "WM_MELODYOFSINK",
    Description: "Melody of Sink",
    MaxLevel: 5,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
      Splash: true,
    },
    Flags: {
      IsChorus: true,
    },
    Hit: "Single",
    HitCount: 1,
    SplashArea: [
      {
        Level: 1,
        Area: 5,
      },
      {
        Level: 2,
        Area: 5,
      },
      {
        Level: 3,
        Area: 6,
      },
      {
        Level: 4,
        Area: 6,
      },
      {
        Level: 5,
        Area: 7,
      },
    ],
    CastCancel: true,
    CastTime: 1000,
    AfterCastActDelay: 1000,
    Duration1: [
      {
        Level: 1,
        Time: 20000,
      },
      {
        Level: 2,
        Time: 30000,
      },
      {
        Level: 3,
        Time: 40000,
      },
      {
        Level: 4,
        Time: 50000,
      },
      {
        Level: 5,
        Time: 60000,
      },
    ],
    Cooldown: 20000,
    FixedCastTime: 500,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 120,
        },
        {
          Level: 2,
          Amount: 130,
        },
        {
          Level: 3,
          Amount: 140,
        },
        {
          Level: 4,
          Amount: 150,
        },
        {
          Level: 5,
          Amount: 160,
        },
      ],
      Weapon: {
        Musical: true,
        Whip: true,
      },
      ItemCost: [
        {
          Item: "Protect_Neck_Candy",
          Amount: 2,
        },
      ],
    },
    Status: "MelodyOfSink",
  },
  {
    Id: 2433,
    Name: "WM_BEYOND_OF_WARCRY",
    Description: "Warcry of Beyond",
    MaxLevel: 5,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
      Splash: true,
    },
    Flags: {
      IsChorus: true,
    },
    Hit: "Single",
    HitCount: 1,
    SplashArea: [
      {
        Level: 1,
        Area: 5,
      },
      {
        Level: 2,
        Area: 5,
      },
      {
        Level: 3,
        Area: 6,
      },
      {
        Level: 4,
        Area: 6,
      },
      {
        Level: 5,
        Area: 7,
      },
    ],
    CastCancel: true,
    CastTime: 1000,
    AfterCastActDelay: 1000,
    Duration1: [
      {
        Level: 1,
        Time: 20000,
      },
      {
        Level: 2,
        Time: 30000,
      },
      {
        Level: 3,
        Time: 40000,
      },
      {
        Level: 4,
        Time: 50000,
      },
      {
        Level: 5,
        Time: 60000,
      },
    ],
    Cooldown: 20000,
    FixedCastTime: 500,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 120,
        },
        {
          Level: 2,
          Amount: 130,
        },
        {
          Level: 3,
          Amount: 140,
        },
        {
          Level: 4,
          Amount: 150,
        },
        {
          Level: 5,
          Amount: 160,
        },
      ],
      Weapon: {
        Musical: true,
        Whip: true,
      },
      ItemCost: [
        {
          Item: "Protect_Neck_Candy",
          Amount: 2,
        },
      ],
    },
    Status: "BeyondOfWarcry",
  },
  {
    Id: 2434,
    Name: "WM_UNLIMITED_HUMMING_VOICE",
    Description: "Unlimited Humming Voice",
    MaxLevel: 5,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
      Splash: true,
    },
    Flags: {
      IsChorus: true,
    },
    Hit: "Single",
    HitCount: 1,
    SplashArea: [
      {
        Level: 1,
        Area: 5,
      },
      {
        Level: 2,
        Area: 5,
      },
      {
        Level: 3,
        Area: 6,
      },
      {
        Level: 4,
        Area: 6,
      },
      {
        Level: 5,
        Area: 7,
      },
    ],
    CastCancel: true,
    CastTime: 1000,
    AfterCastActDelay: 1000,
    Duration1: [
      {
        Level: 1,
        Time: 60000,
      },
      {
        Level: 2,
        Time: 90000,
      },
      {
        Level: 3,
        Time: 120000,
      },
      {
        Level: 4,
        Time: 150000,
      },
      {
        Level: 5,
        Time: 180000,
      },
    ],
    Cooldown: [
      {
        Level: 1,
        Time: 110000,
      },
      {
        Level: 2,
        Time: 120000,
      },
      {
        Level: 3,
        Time: 130000,
      },
      {
        Level: 4,
        Time: 140000,
      },
      {
        Level: 5,
        Time: 150000,
      },
    ],
    FixedCastTime: 500,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 120,
        },
        {
          Level: 2,
          Amount: 130,
        },
        {
          Level: 3,
          Amount: 140,
        },
        {
          Level: 4,
          Amount: 150,
        },
        {
          Level: 5,
          Amount: 160,
        },
      ],
      Weapon: {
        Musical: true,
        Whip: true,
      },
      ItemCost: [
        {
          Item: "Protect_Neck_Candy",
          Amount: 5,
        },
      ],
    },
    Status: "UnlimitedHummingVoice",
  },
  {
    Id: 2516,
    Name: "WM_SEVERE_RAINSTORM_MELEE",
    Description: "Severe Rainstorm Melee",
    MaxLevel: 5,
    Type: "Weapon",
    TargetType: "Attack",
    DamageFlags: {
      Splash: true,
    },
    Range: 11,
    Hit: "Single",
    HitCount: 1,
    Element: "Weapon",
    SplashArea: 5,
    CopyFlags: {
      Skill: {
        Reproduce: true,
      },
    },
  },
  {
    Id: 2443,
    Name: "SO_FIREWALK",
    Description: "Fire Walk",
    MaxLevel: 5,
    Type: "Magic",
    TargetType: "Self",
    Flags: {
      IgnoreHovering: true,
    },
    Hit: "Single",
    HitCount: 1,
    Element: "Fire",
    ActiveInstance: [
      {
        Level: 1,
        Max: 8,
      },
      {
        Level: 2,
        Max: 10,
      },
      {
        Level: 3,
        Max: 12,
      },
      {
        Level: 4,
        Max: 14,
      },
      {
        Level: 5,
        Max: 16,
      },
    ],
    CopyFlags: {
      Skill: {
        Reproduce: true,
      },
    },
    CastCancel: true,
    CastTime: 1000,
    AfterCastActDelay: 1000,
    Duration1: 30000,
    Duration2: 12000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 30,
        },
        {
          Level: 2,
          Amount: 34,
        },
        {
          Level: 3,
          Amount: 38,
        },
        {
          Level: 4,
          Amount: 42,
        },
        {
          Level: 5,
          Amount: 46,
        },
      ],
    },
    Unit: {
      Id: "Firewalk",
      Interval: 1000,
      Target: "Enemy",
      Flag: {
        NoReiteration: true,
        NoOverlap: true,
      },
    },
    Status: "PropertyWalk",
  },
  {
    Id: 2444,
    Name: "SO_ELECTRICWALK",
    Description: "Electric Walk",
    MaxLevel: 5,
    Type: "Magic",
    TargetType: "Self",
    Flags: {
      IgnoreHovering: true,
    },
    Hit: "Single",
    HitCount: 1,
    Element: "Wind",
    ActiveInstance: [
      {
        Level: 1,
        Max: 8,
      },
      {
        Level: 2,
        Max: 10,
      },
      {
        Level: 3,
        Max: 12,
      },
      {
        Level: 4,
        Max: 14,
      },
      {
        Level: 5,
        Max: 16,
      },
    ],
    CopyFlags: {
      Skill: {
        Reproduce: true,
      },
    },
    CastCancel: true,
    CastTime: 1000,
    AfterCastActDelay: 1000,
    Duration1: 30000,
    Duration2: 12000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 30,
        },
        {
          Level: 2,
          Amount: 34,
        },
        {
          Level: 3,
          Amount: 38,
        },
        {
          Level: 4,
          Amount: 42,
        },
        {
          Level: 5,
          Amount: 46,
        },
      ],
    },
    Unit: {
      Id: "Electricwalk",
      Interval: 1000,
      Target: "Enemy",
      Flag: {
        NoReiteration: true,
        NoOverlap: true,
      },
    },
    Status: "PropertyWalk",
  },
  {
    Id: 2445,
    Name: "SO_SPELLFIST",
    Description: "Spell Fist",
    MaxLevel: 10,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Range: 1,
    Hit: "Single",
    HitCount: 1,
    AfterCastActDelay: 1000,
    Duration1: [
      {
        Level: 1,
        Time: 45000,
      },
      {
        Level: 2,
        Time: 60000,
      },
      {
        Level: 3,
        Time: 75000,
      },
      {
        Level: 4,
        Time: 90000,
      },
      {
        Level: 5,
        Time: 105000,
      },
      {
        Level: 6,
        Time: 120000,
      },
      {
        Level: 7,
        Time: 135000,
      },
      {
        Level: 8,
        Time: 150000,
      },
      {
        Level: 9,
        Time: 165000,
      },
      {
        Level: 10,
        Time: 180000,
      },
    ],
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 40,
        },
        {
          Level: 2,
          Amount: 44,
        },
        {
          Level: 3,
          Amount: 48,
        },
        {
          Level: 4,
          Amount: 52,
        },
        {
          Level: 5,
          Amount: 56,
        },
        {
          Level: 6,
          Amount: 60,
        },
        {
          Level: 7,
          Amount: 64,
        },
        {
          Level: 8,
          Amount: 68,
        },
        {
          Level: 9,
          Amount: 72,
        },
        {
          Level: 10,
          Amount: 76,
        },
      ],
    },
    Status: "SpellFist",
  },
  {
    Id: 2446,
    Name: "SO_EARTHGRAVE",
    Description: "Earth Grave",
    MaxLevel: 5,
    Type: "Magic",
    TargetType: "Ground",
    Flags: {
      TargetHidden: true,
    },
    Range: 9,
    Hit: "Single",
    HitCount: -3,
    Element: "Earth",
    CopyFlags: {
      Skill: {
        Reproduce: true,
      },
    },
    CastCancel: true,
    CastTime: [
      {
        Level: 1,
        Time: 2200,
      },
      {
        Level: 2,
        Time: 2400,
      },
      {
        Level: 3,
        Time: 2600,
      },
      {
        Level: 4,
        Time: 2800,
      },
      {
        Level: 5,
        Time: 3000,
      },
    ],
    AfterCastActDelay: 1000,
    Duration1: 500,
    Duration2: [
      {
        Level: 1,
        Time: 8000,
      },
      {
        Level: 2,
        Time: 11000,
      },
      {
        Level: 3,
        Time: 14000,
      },
      {
        Level: 4,
        Time: 17000,
      },
      {
        Level: 5,
        Time: 20000,
      },
    ],
    Cooldown: 5000,
    FixedCastTime: [
      {
        Level: 1,
        Time: 1800,
      },
      {
        Level: 2,
        Time: 1600,
      },
      {
        Level: 3,
        Time: 1400,
      },
      {
        Level: 4,
        Time: 1200,
      },
      {
        Level: 5,
        Time: 1000,
      },
    ],
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 62,
        },
        {
          Level: 2,
          Amount: 70,
        },
        {
          Level: 3,
          Amount: 78,
        },
        {
          Level: 4,
          Amount: 86,
        },
        {
          Level: 5,
          Amount: 94,
        },
      ],
    },
    Unit: {
      Id: "Dummyskill",
      Range: [
        {
          Level: 1,
          Size: 3,
        },
        {
          Level: 2,
          Size: 3,
        },
        {
          Level: 3,
          Size: 3,
        },
        {
          Level: 4,
          Size: 4,
        },
        {
          Level: 5,
          Size: 4,
        },
      ],
      Interval: 1000,
      Target: "Enemy",
      Flag: {
        NoOverlap: true,
        PathCheck: true,
      },
    },
  },
  {
    Id: 2447,
    Name: "SO_DIAMONDDUST",
    Description: "Diamond Dust",
    MaxLevel: 5,
    Type: "Magic",
    TargetType: "Ground",
    Range: 9,
    Hit: "Single",
    HitCount: -5,
    Element: "Water",
    CopyFlags: {
      Skill: {
        Reproduce: true,
      },
    },
    CastCancel: true,
    CastTime: [
      {
        Level: 1,
        Time: 5000,
      },
      {
        Level: 2,
        Time: 5500,
      },
      {
        Level: 3,
        Time: 6000,
      },
      {
        Level: 4,
        Time: 6500,
      },
      {
        Level: 5,
        Time: 7000,
      },
    ],
    AfterCastActDelay: 1000,
    Duration1: 500,
    Duration2: [
      {
        Level: 1,
        Time: 12000,
      },
      {
        Level: 2,
        Time: 14000,
      },
      {
        Level: 3,
        Time: 16000,
      },
      {
        Level: 4,
        Time: 18000,
      },
      {
        Level: 5,
        Time: 20000,
      },
    ],
    Cooldown: 5000,
    FixedCastTime: [
      {
        Level: 1,
        Time: 800,
      },
      {
        Level: 2,
        Time: 600,
      },
      {
        Level: 3,
        Time: 400,
      },
      {
        Level: 4,
        Time: 200,
      },
      {
        Level: 5,
        Time: 0,
      },
    ],
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 50,
        },
        {
          Level: 2,
          Amount: 56,
        },
        {
          Level: 3,
          Amount: 62,
        },
        {
          Level: 4,
          Amount: 68,
        },
        {
          Level: 5,
          Amount: 74,
        },
      ],
    },
    Unit: {
      Id: "Dummyskill",
      Range: [
        {
          Level: 1,
          Size: 3,
        },
        {
          Level: 2,
          Size: 3,
        },
        {
          Level: 3,
          Size: 3,
        },
        {
          Level: 4,
          Size: 4,
        },
        {
          Level: 5,
          Size: 4,
        },
      ],
      Interval: 1000,
      Target: "Enemy",
      Flag: {
        PathCheck: true,
      },
    },
    Status: "Crystalize",
  },
  {
    Id: 2448,
    Name: "SO_POISON_BUSTER",
    Description: "Poison Buster",
    MaxLevel: 5,
    Type: "Magic",
    TargetType: "Attack",
    DamageFlags: {
      Splash: true,
    },
    Range: 9,
    Hit: "Single",
    HitCount: 1,
    Element: "Poison",
    SplashArea: 3,
    CopyFlags: {
      Skill: {
        Reproduce: true,
      },
    },
    CastCancel: true,
    CastTime: [
      {
        Level: 1,
        Time: 2200,
      },
      {
        Level: 2,
        Time: 3400,
      },
      {
        Level: 3,
        Time: 4600,
      },
      {
        Level: 4,
        Time: 5800,
      },
      {
        Level: 5,
        Time: 6000,
      },
    ],
    AfterCastActDelay: 1000,
    Duration1: 18000,
    Cooldown: 2000,
    FixedCastTime: [
      {
        Level: 1,
        Time: 800,
      },
      {
        Level: 2,
        Time: 600,
      },
      {
        Level: 3,
        Time: 400,
      },
      {
        Level: 4,
        Time: 200,
      },
      {
        Level: 5,
        Time: 0,
      },
    ],
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 70,
        },
        {
          Level: 2,
          Amount: 90,
        },
        {
          Level: 3,
          Amount: 110,
        },
        {
          Level: 4,
          Amount: 130,
        },
        {
          Level: 5,
          Amount: 150,
        },
      ],
    },
    Status: "Poison",
  },
  {
    Id: 2449,
    Name: "SO_PSYCHIC_WAVE",
    Description: "Psychic Wave",
    MaxLevel: 5,
    Type: "Magic",
    TargetType: "Ground",
    Range: 9,
    Hit: "Single",
    HitCount: 1,
    CopyFlags: {
      Skill: {
        Reproduce: true,
      },
    },
    CastCancel: true,
    CastTime: [
      {
        Level: 1,
        Time: 8000,
      },
      {
        Level: 2,
        Time: 9000,
      },
      {
        Level: 3,
        Time: 10000,
      },
      {
        Level: 4,
        Time: 11000,
      },
      {
        Level: 5,
        Time: 12000,
      },
    ],
    AfterCastActDelay: 1000,
    Duration1: [
      {
        Level: 1,
        Time: 1200,
      },
      {
        Level: 2,
        Time: 1700,
      },
      {
        Level: 3,
        Time: 2200,
      },
      {
        Level: 4,
        Time: 2700,
      },
      {
        Level: 5,
        Time: 3200,
      },
    ],
    Cooldown: 5000,
    FixedCastTime: [
      {
        Level: 1,
        Time: 1000,
      },
      {
        Level: 2,
        Time: 900,
      },
      {
        Level: 3,
        Time: 800,
      },
      {
        Level: 4,
        Time: 700,
      },
      {
        Level: 5,
        Time: 600,
      },
    ],
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 48,
        },
        {
          Level: 2,
          Amount: 56,
        },
        {
          Level: 3,
          Amount: 64,
        },
        {
          Level: 4,
          Amount: 70,
        },
        {
          Level: 5,
          Amount: 78,
        },
      ],
    },
    Unit: {
      Id: "Psychic_Wave",
      Range: [
        {
          Level: 1,
          Size: 3,
        },
        {
          Level: 2,
          Size: 3,
        },
        {
          Level: 3,
          Size: 4,
        },
        {
          Level: 4,
          Size: 4,
        },
        {
          Level: 5,
          Size: 5,
        },
      ],
      Interval: 500,
      Target: "Enemy",
      Flag: {
        NoOverlap: true,
        PathCheck: true,
      },
    },
  },
  {
    Id: 2450,
    Name: "SO_CLOUD_KILL",
    Description: "Cloud Kill",
    MaxLevel: 5,
    Type: "Magic",
    TargetType: "Ground",
    Range: 9,
    Hit: "Single",
    HitCount: 1,
    Element: "Poison",
    CopyFlags: {
      Skill: {
        Reproduce: true,
      },
    },
    CastCancel: true,
    CastTime: [
      {
        Level: 1,
        Time: 2300,
      },
      {
        Level: 2,
        Time: 2500,
      },
      {
        Level: 3,
        Time: 2700,
      },
      {
        Level: 4,
        Time: 2900,
      },
      {
        Level: 5,
        Time: 3100,
      },
    ],
    AfterCastActDelay: 1000,
    Duration1: 5000,
    Cooldown: 5000,
    FixedCastTime: [
      {
        Level: 1,
        Time: 700,
      },
      {
        Level: 2,
        Time: 500,
      },
      {
        Level: 3,
        Time: 300,
      },
      {
        Level: 4,
        Time: 100,
      },
      {
        Level: 5,
        Time: 0,
      },
    ],
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 48,
        },
        {
          Level: 2,
          Amount: 56,
        },
        {
          Level: 3,
          Amount: 64,
        },
        {
          Level: 4,
          Amount: 70,
        },
        {
          Level: 5,
          Amount: 78,
        },
      ],
    },
    Unit: {
      Id: "Cloud_Kill",
      Range: 3,
      Interval: 500,
      Target: "Enemy",
      Flag: {
        PathCheck: true,
        RemovedByFireRain: true,
      },
    },
    Status: "Cloud_Poison",
  },
  {
    Id: 2451,
    Name: "SO_STRIKING",
    Description: "Striking",
    MaxLevel: 5,
    TargetType: "Support",
    DamageFlags: {
      NoDamage: true,
    },
    Range: 9,
    Hit: "Single",
    HitCount: 1,
    CastCancel: true,
    CastTime: 1000,
    AfterCastActDelay: 1000,
    Duration1: 90000,
    Cooldown: 2000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 50,
        },
        {
          Level: 2,
          Amount: 55,
        },
        {
          Level: 3,
          Amount: 60,
        },
        {
          Level: 4,
          Amount: 65,
        },
        {
          Level: 5,
          Amount: 70,
        },
      ],
    },
    Status: "Striking",
  },
  {
    Id: 2452,
    Name: "SO_WARMER",
    Description: "Warmer",
    MaxLevel: 5,
    Type: "Magic",
    TargetType: "Ground",
    DamageFlags: {
      NoDamage: true,
    },
    Range: 9,
    Hit: "Single",
    HitCount: 1,
    Element: "Fire",
    CastCancel: true,
    CastTime: [
      {
        Level: 1,
        Time: 2200,
      },
      {
        Level: 2,
        Time: 2400,
      },
      {
        Level: 3,
        Time: 2600,
      },
      {
        Level: 4,
        Time: 2800,
      },
      {
        Level: 5,
        Time: 3000,
      },
    ],
    AfterCastActDelay: 1000,
    Duration1: [
      {
        Level: 1,
        Time: 40000,
      },
      {
        Level: 2,
        Time: 45000,
      },
      {
        Level: 3,
        Time: 50000,
      },
      {
        Level: 4,
        Time: 55000,
      },
      {
        Level: 5,
        Time: 60000,
      },
    ],
    Cooldown: [
      {
        Level: 1,
        Time: 35000,
      },
      {
        Level: 2,
        Time: 40000,
      },
      {
        Level: 3,
        Time: 45000,
      },
      {
        Level: 4,
        Time: 50000,
      },
      {
        Level: 5,
        Time: 55000,
      },
    ],
    FixedCastTime: [
      {
        Level: 1,
        Time: 1800,
      },
      {
        Level: 2,
        Time: 1600,
      },
      {
        Level: 3,
        Time: 1400,
      },
      {
        Level: 4,
        Time: 1200,
      },
      {
        Level: 5,
        Time: 1000,
      },
    ],
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 40,
        },
        {
          Level: 2,
          Amount: 52,
        },
        {
          Level: 3,
          Amount: 64,
        },
        {
          Level: 4,
          Amount: 76,
        },
        {
          Level: 5,
          Amount: 88,
        },
      ],
    },
    Unit: {
      Id: "Warmer",
      Layout: 3,
      Interval: -1,
      Flag: {
        PathCheck: true,
        RangedSingleUnit: true,
        RemovedByFireRain: true,
      },
    },
    Status: "Warmer",
  },
  {
    Id: 2453,
    Name: "SO_VACUUM_EXTREME",
    Description: "Vacuum Extreme",
    MaxLevel: 5,
    Type: "Magic",
    TargetType: "Ground",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      IgnoreHovering: true,
    },
    Range: 9,
    Hit: "Single",
    HitCount: 1,
    CastCancel: true,
    CastTime: [
      {
        Level: 1,
        Time: 1000,
      },
      {
        Level: 2,
        Time: 1500,
      },
      {
        Level: 3,
        Time: 2000,
      },
      {
        Level: 4,
        Time: 2500,
      },
      {
        Level: 5,
        Time: 3000,
      },
    ],
    AfterCastActDelay: 1000,
    Duration1: [
      {
        Level: 1,
        Time: 4000,
      },
      {
        Level: 2,
        Time: 6000,
      },
      {
        Level: 3,
        Time: 8000,
      },
      {
        Level: 4,
        Time: 10000,
      },
      {
        Level: 5,
        Time: 12000,
      },
    ],
    Duration2: 2000,
    Cooldown: 5000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 34,
        },
        {
          Level: 2,
          Amount: 42,
        },
        {
          Level: 3,
          Amount: 50,
        },
        {
          Level: 4,
          Amount: 58,
        },
        {
          Level: 5,
          Amount: 66,
        },
      ],
    },
    Unit: {
      Id: "Vacuum_Extreme",
      Range: [
        {
          Level: 1,
          Size: 1,
        },
        {
          Level: 2,
          Size: 1,
        },
        {
          Level: 3,
          Size: 2,
        },
        {
          Level: 4,
          Size: 2,
        },
        {
          Level: 5,
          Size: 3,
        },
      ],
      Interval: 500,
      Target: "Enemy",
      Flag: {
        PathCheck: true,
        RemovedByFireRain: true,
      },
    },
    Status: "Vacuum_Extreme",
  },
  {
    Id: 2454,
    Name: "SO_VARETYR_SPEAR",
    Description: "Varetyr Spear",
    MaxLevel: 10,
    Type: "Magic",
    TargetType: "Attack",
    DamageFlags: {
      Splash: true,
    },
    Range: 9,
    Hit: "Single",
    HitCount: -3,
    Element: "Wind",
    SplashArea: [
      {
        Level: 1,
        Area: 1,
      },
      {
        Level: 2,
        Area: 1,
      },
      {
        Level: 3,
        Area: 1,
      },
      {
        Level: 4,
        Area: 2,
      },
      {
        Level: 5,
        Area: 2,
      },
      {
        Level: 6,
        Area: 2,
      },
      {
        Level: 7,
        Area: 3,
      },
      {
        Level: 8,
        Area: 3,
      },
      {
        Level: 9,
        Area: 3,
      },
      {
        Level: 10,
        Area: 4,
      },
    ],
    CopyFlags: {
      Skill: {
        Reproduce: true,
      },
    },
    CastCancel: true,
    CastTime: [
      {
        Level: 1,
        Time: 1800,
      },
      {
        Level: 2,
        Time: 2000,
      },
      {
        Level: 3,
        Time: 2200,
      },
      {
        Level: 4,
        Time: 2400,
      },
      {
        Level: 5,
        Time: 2600,
      },
      {
        Level: 6,
        Time: 2800,
      },
      {
        Level: 7,
        Time: 3000,
      },
      {
        Level: 8,
        Time: 3200,
      },
      {
        Level: 9,
        Time: 3400,
      },
      {
        Level: 10,
        Time: 3600,
      },
    ],
    AfterCastActDelay: 1000,
    Duration1: [
      {
        Level: 1,
        Time: 1800,
      },
      {
        Level: 2,
        Time: 2000,
      },
      {
        Level: 3,
        Time: 2200,
      },
      {
        Level: 4,
        Time: 2400,
      },
      {
        Level: 5,
        Time: 2600,
      },
      {
        Level: 6,
        Time: 2800,
      },
      {
        Level: 7,
        Time: 3000,
      },
      {
        Level: 8,
        Time: 3200,
      },
      {
        Level: 9,
        Time: 3400,
      },
      {
        Level: 10,
        Time: 3600,
      },
    ],
    Cooldown: 5000,
    FixedCastTime: [
      {
        Level: 1,
        Time: 2000,
      },
      {
        Level: 2,
        Time: 1800,
      },
      {
        Level: 3,
        Time: 1600,
      },
      {
        Level: 4,
        Time: 1400,
      },
      {
        Level: 5,
        Time: 1200,
      },
      {
        Level: 6,
        Time: 1000,
      },
      {
        Level: 7,
        Time: 800,
      },
      {
        Level: 8,
        Time: 600,
      },
      {
        Level: 9,
        Time: 400,
      },
      {
        Level: 10,
        Time: 200,
      },
    ],
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 65,
        },
        {
          Level: 2,
          Amount: 70,
        },
        {
          Level: 3,
          Amount: 75,
        },
        {
          Level: 4,
          Amount: 80,
        },
        {
          Level: 5,
          Amount: 85,
        },
        {
          Level: 6,
          Amount: 90,
        },
        {
          Level: 7,
          Amount: 95,
        },
        {
          Level: 8,
          Amount: 100,
        },
        {
          Level: 9,
          Amount: 105,
        },
        {
          Level: 10,
          Amount: 110,
        },
      ],
    },
  },
  {
    Id: 2455,
    Name: "SO_ARRULLO",
    Description: "Arrullo",
    MaxLevel: 5,
    Type: "Magic",
    TargetType: "Ground",
    DamageFlags: {
      NoDamage: true,
      Splash: true,
    },
    Range: [
      {
        Level: 1,
        Size: 7,
      },
      {
        Level: 2,
        Size: 7,
      },
      {
        Level: 3,
        Size: 7,
      },
      {
        Level: 4,
        Size: 7,
      },
      {
        Level: 5,
        Size: 9,
      },
    ],
    Hit: "Single",
    HitCount: 1,
    SplashArea: [
      {
        Level: 1,
        Area: 1,
      },
      {
        Level: 2,
        Area: 1,
      },
      {
        Level: 3,
        Area: 2,
      },
      {
        Level: 4,
        Area: 2,
      },
      {
        Level: 5,
        Area: 3,
      },
    ],
    CastCancel: true,
    CastTime: [
      {
        Level: 1,
        Time: 2200,
      },
      {
        Level: 2,
        Time: 2400,
      },
      {
        Level: 3,
        Time: 2600,
      },
      {
        Level: 4,
        Time: 2800,
      },
      {
        Level: 5,
        Time: 3000,
      },
    ],
    AfterCastActDelay: 1000,
    Duration1: [
      {
        Level: 1,
        Time: 8000,
      },
      {
        Level: 2,
        Time: 10000,
      },
      {
        Level: 3,
        Time: 12000,
      },
      {
        Level: 4,
        Time: 14000,
      },
      {
        Level: 5,
        Time: 16000,
      },
    ],
    Cooldown: [
      {
        Level: 1,
        Time: 5000,
      },
      {
        Level: 2,
        Time: 6000,
      },
      {
        Level: 3,
        Time: 7000,
      },
      {
        Level: 4,
        Time: 8000,
      },
      {
        Level: 5,
        Time: 9000,
      },
    ],
    FixedCastTime: [
      {
        Level: 1,
        Time: 800,
      },
      {
        Level: 2,
        Time: 600,
      },
      {
        Level: 3,
        Time: 400,
      },
      {
        Level: 4,
        Time: 200,
      },
      {
        Level: 5,
        Time: 0,
      },
    ],
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 30,
        },
        {
          Level: 2,
          Amount: 35,
        },
        {
          Level: 3,
          Amount: 40,
        },
        {
          Level: 4,
          Amount: 45,
        },
        {
          Level: 5,
          Amount: 50,
        },
      ],
      ItemCost: [
        {
          Item: "Yellow_Gemstone",
          Amount: 1,
        },
      ],
    },
    Status: "DeepSleep",
  },
  {
    Id: 2456,
    Name: "SO_EL_CONTROL",
    Description: "Spirit Control",
    MaxLevel: 4,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Hit: "Single",
    HitCount: 1,
    CastCancel: true,
    CastTime: 2000,
    Cooldown: 5000,
    Requires: {
      SpCost: 10,
      State: "Elementalspirit",
    },
  },
  {
    Id: 2457,
    Name: "SO_SUMMON_AGNI",
    Description: "Summon Fire Spirit Agni",
    MaxLevel: 3,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Hit: "Single",
    HitCount: 1,
    Element: "Fire",
    CastCancel: true,
    CastTime: [
      {
        Level: 1,
        Time: 1000,
      },
      {
        Level: 2,
        Time: 2000,
      },
      {
        Level: 3,
        Time: 3000,
      },
    ],
    Duration1: [
      {
        Level: 1,
        Time: 600000,
      },
      {
        Level: 2,
        Time: 900000,
      },
      {
        Level: 3,
        Time: 1200000,
      },
    ],
    Cooldown: 60000,
    FixedCastTime: 2000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 100,
        },
        {
          Level: 2,
          Amount: 150,
        },
        {
          Level: 3,
          Amount: 200,
        },
      ],
      ItemCost: [
        {
          Item: "Boody_Red",
          Amount: 3,
          Level: 1,
        },
        {
          Item: "Boody_Red",
          Amount: 6,
          Level: 2,
        },
        {
          Item: "Flame_Heart",
          Amount: 1,
          Level: 3,
        },
      ],
    },
  },
  {
    Id: 2458,
    Name: "SO_SUMMON_AQUA",
    Description: "Summon Water Spirit Aqua",
    MaxLevel: 3,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Hit: "Single",
    HitCount: 1,
    Element: "Water",
    CastCancel: true,
    CastTime: [
      {
        Level: 1,
        Time: 1000,
      },
      {
        Level: 2,
        Time: 2000,
      },
      {
        Level: 3,
        Time: 3000,
      },
    ],
    Duration1: [
      {
        Level: 1,
        Time: 600000,
      },
      {
        Level: 2,
        Time: 900000,
      },
      {
        Level: 3,
        Time: 1200000,
      },
    ],
    Cooldown: 60000,
    FixedCastTime: 2000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 100,
        },
        {
          Level: 2,
          Amount: 150,
        },
        {
          Level: 3,
          Amount: 200,
        },
      ],
      ItemCost: [
        {
          Item: "Crystal_Blue",
          Amount: 3,
          Level: 1,
        },
        {
          Item: "Crystal_Blue",
          Amount: 6,
          Level: 2,
        },
        {
          Item: "Mistic_Frozen",
          Amount: 1,
          Level: 3,
        },
      ],
    },
  },
  {
    Id: 2459,
    Name: "SO_SUMMON_VENTUS",
    Description: "Summon Wind Spirit Ventus",
    MaxLevel: 3,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Hit: "Single",
    HitCount: 1,
    Element: "Wind",
    CastCancel: true,
    CastTime: [
      {
        Level: 1,
        Time: 1000,
      },
      {
        Level: 2,
        Time: 2000,
      },
      {
        Level: 3,
        Time: 3000,
      },
    ],
    Duration1: [
      {
        Level: 1,
        Time: 600000,
      },
      {
        Level: 2,
        Time: 900000,
      },
      {
        Level: 3,
        Time: 1200000,
      },
    ],
    Cooldown: 60000,
    FixedCastTime: 2000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 100,
        },
        {
          Level: 2,
          Amount: 150,
        },
        {
          Level: 3,
          Amount: 200,
        },
      ],
      ItemCost: [
        {
          Item: "Wind_Of_Verdure",
          Amount: 3,
          Level: 1,
        },
        {
          Item: "Wind_Of_Verdure",
          Amount: 6,
          Level: 2,
        },
        {
          Item: "Rough_Wind",
          Amount: 1,
          Level: 3,
        },
      ],
    },
  },
  {
    Id: 2460,
    Name: "SO_SUMMON_TERA",
    Description: "Summon Earth Spirit Tera",
    MaxLevel: 3,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Hit: "Single",
    HitCount: 1,
    Element: "Earth",
    CastCancel: true,
    CastTime: [
      {
        Level: 1,
        Time: 1000,
      },
      {
        Level: 2,
        Time: 2000,
      },
      {
        Level: 3,
        Time: 3000,
      },
    ],
    Duration1: [
      {
        Level: 1,
        Time: 600000,
      },
      {
        Level: 2,
        Time: 900000,
      },
      {
        Level: 3,
        Time: 1200000,
      },
    ],
    Cooldown: 60000,
    FixedCastTime: 2000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 100,
        },
        {
          Level: 2,
          Amount: 150,
        },
        {
          Level: 3,
          Amount: 200,
        },
      ],
      ItemCost: [
        {
          Item: "Yellow_Live",
          Amount: 3,
          Level: 1,
        },
        {
          Item: "Yellow_Live",
          Amount: 6,
          Level: 2,
        },
        {
          Item: "Great_Nature",
          Amount: 1,
          Level: 3,
        },
      ],
    },
  },
  {
    Id: 2461,
    Name: "SO_EL_ACTION",
    Description: "Elemental Action",
    MaxLevel: 1,
    TargetType: "Attack",
    DamageFlags: {
      NoDamage: true,
    },
    Range: 5,
    Hit: "Single",
    HitCount: 1,
    Cooldown: 5000,
    Requires: {
      SpCost: 50,
      State: "Elementalspirit",
    },
  },
  {
    Id: 2462,
    Name: "SO_EL_ANALYSIS",
    Description: "Four Spirit Analysis",
    MaxLevel: 2,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Hit: "Single",
    HitCount: 1,
    CastCancel: true,
    FixedCastTime: 2000,
    CastTimeFlags: {
      IgnoreDex: true,
      IgnoreStatus: true,
      IgnoreItemBonus: true,
    },
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 10,
        },
        {
          Level: 2,
          Amount: 20,
        },
      ],
    },
  },
  {
    Id: 2463,
    Name: "SO_EL_SYMPATHY",
    Description: "Spirit Sympathy",
    MaxLevel: 5,
  },
  {
    Id: 2464,
    Name: "SO_EL_CURE",
    Description: "Spirit Recovery",
    MaxLevel: 1,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Hit: "Single",
    HitCount: 1,
    CastCancel: true,
    CastTime: 2000,
    AfterCastActDelay: 1000,
    Requires: {
      SpCost: 10,
      State: "Elementalspirit",
    },
  },
  {
    Id: 2465,
    Name: "SO_FIRE_INSIGNIA",
    Description: "Fire Insignia",
    MaxLevel: 3,
    Type: "Magic",
    TargetType: "Ground",
    DamageFlags: {
      NoDamage: true,
    },
    Range: 9,
    Hit: "Single",
    HitCount: 1,
    Element: "Fire",
    ActiveInstance: 1,
    CastCancel: true,
    CastTime: 1000,
    Duration1: 60000,
    Cooldown: 60000,
    FixedCastTime: 1000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 22,
        },
        {
          Level: 2,
          Amount: 30,
        },
        {
          Level: 3,
          Amount: 38,
        },
      ],
      ItemCost: [
        {
          Item: "Scarlet_Pts",
          Amount: 1,
          Level: 1,
        },
        {
          Item: "Scarlet_Pts",
          Amount: 2,
          Level: 2,
        },
        {
          Item: "Scarlet_Pts",
          Amount: 3,
          Level: 3,
        },
      ],
    },
    Unit: {
      Id: "Fire_Insignia",
      Layout: 1,
      Interval: -1,
      Flag: {
        PathCheck: true,
        RangedSingleUnit: true,
      },
    },
    Status: "Fire_Insignia",
  },
  {
    Id: 2466,
    Name: "SO_WATER_INSIGNIA",
    Description: "Water Insignia",
    MaxLevel: 3,
    Type: "Magic",
    TargetType: "Ground",
    DamageFlags: {
      NoDamage: true,
    },
    Range: 9,
    Hit: "Single",
    HitCount: 1,
    Element: "Water",
    ActiveInstance: 1,
    CastCancel: true,
    CastTime: 1000,
    Duration1: 60000,
    Cooldown: 60000,
    FixedCastTime: 1000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 22,
        },
        {
          Level: 2,
          Amount: 30,
        },
        {
          Level: 3,
          Amount: 38,
        },
      ],
      ItemCost: [
        {
          Item: "Indigo_Pts",
          Amount: 1,
          Level: 1,
        },
        {
          Item: "Indigo_Pts",
          Amount: 2,
          Level: 2,
        },
        {
          Item: "Indigo_Pts",
          Amount: 3,
          Level: 3,
        },
      ],
    },
    Unit: {
      Id: "Water_Insignia",
      Layout: 1,
      Interval: -1,
      Flag: {
        PathCheck: true,
        RangedSingleUnit: true,
      },
    },
    Status: "Water_Insignia",
  },
  {
    Id: 2467,
    Name: "SO_WIND_INSIGNIA",
    Description: "Wind Insignia",
    MaxLevel: 3,
    Type: "Magic",
    TargetType: "Ground",
    DamageFlags: {
      NoDamage: true,
    },
    Range: 9,
    Hit: "Single",
    HitCount: 1,
    Element: "Wind",
    ActiveInstance: 1,
    CastCancel: true,
    CastTime: 1000,
    Duration1: 60000,
    Cooldown: 60000,
    FixedCastTime: 1000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 22,
        },
        {
          Level: 2,
          Amount: 30,
        },
        {
          Level: 3,
          Amount: 38,
        },
      ],
      ItemCost: [
        {
          Item: "Yellow_Wish_Pts",
          Amount: 1,
          Level: 1,
        },
        {
          Item: "Yellow_Wish_Pts",
          Amount: 2,
          Level: 2,
        },
        {
          Item: "Yellow_Wish_Pts",
          Amount: 3,
          Level: 3,
        },
      ],
    },
    Unit: {
      Id: "Wind_Insignia",
      Layout: 1,
      Interval: -1,
      Flag: {
        PathCheck: true,
        RangedSingleUnit: true,
      },
    },
    Status: "Wind_Insignia",
  },
  {
    Id: 2468,
    Name: "SO_EARTH_INSIGNIA",
    Description: "Earth Insignia",
    MaxLevel: 3,
    Type: "Magic",
    TargetType: "Ground",
    DamageFlags: {
      NoDamage: true,
    },
    Range: 9,
    Hit: "Single",
    HitCount: 1,
    Element: "Earth",
    ActiveInstance: 1,
    CastCancel: true,
    CastTime: 1000,
    Duration1: 60000,
    Cooldown: 60000,
    FixedCastTime: 1000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 22,
        },
        {
          Level: 2,
          Amount: 30,
        },
        {
          Level: 3,
          Amount: 38,
        },
      ],
      ItemCost: [
        {
          Item: "Lime_Green_Pts",
          Amount: 1,
          Level: 1,
        },
        {
          Item: "Lime_Green_Pts",
          Amount: 2,
          Level: 2,
        },
        {
          Item: "Lime_Green_Pts",
          Amount: 3,
          Level: 3,
        },
      ],
    },
    Unit: {
      Id: "Earth_Insignia",
      Layout: 1,
      Interval: -1,
      Flag: {
        PathCheck: true,
        RangedSingleUnit: true,
      },
    },
    Status: "Earth_Insignia",
  },
  {
    Id: 2474,
    Name: "GN_TRAINING_SWORD",
    Description: "Sword Training",
    MaxLevel: 5,
  },
  {
    Id: 2475,
    Name: "GN_REMODELING_CART",
    Description: "Cart Remodeling",
    MaxLevel: 5,
  },
  {
    Id: 2476,
    Name: "GN_CART_TORNADO",
    Description: "Cart Tornado",
    MaxLevel: 10,
    Type: "Weapon",
    TargetType: "Self",
    DamageFlags: {
      Splash: true,
    },
    Range: 1,
    Hit: "Single",
    HitCount: 3,
    Element: "Weapon",
    SplashArea: 2,
    Knockback: 2,
    AfterCastActDelay: 1000,
    Duration1: 5000,
    Cooldown: 2000,
    Requires: {
      SpCost: 30,
      State: "Cart",
    },
  },
  {
    Id: 2477,
    Name: "GN_CARTCANNON",
    Description: "Cart Cannon",
    MaxLevel: 5,
    Type: "Weapon",
    TargetType: "Attack",
    DamageFlags: {
      Splash: true,
      IgnoreFlee: true,
    },
    Range: [
      {
        Level: 1,
        Size: 7,
      },
      {
        Level: 2,
        Size: 8,
      },
      {
        Level: 3,
        Size: 9,
      },
      {
        Level: 4,
        Size: 10,
      },
      {
        Level: 5,
        Size: 11,
      },
    ],
    Hit: "Multi_Hit",
    HitCount: 1,
    Element: "Weapon",
    SplashArea: [
      {
        Level: 1,
        Area: 1,
      },
      {
        Level: 2,
        Area: 1,
      },
      {
        Level: 3,
        Area: 2,
      },
      {
        Level: 4,
        Area: 2,
      },
      {
        Level: 5,
        Area: 3,
      },
    ],
    CastCancel: true,
    CastTime: [
      {
        Level: 1,
        Time: 1000,
      },
      {
        Level: 2,
        Time: 1500,
      },
      {
        Level: 3,
        Time: 2000,
      },
      {
        Level: 4,
        Time: 2500,
      },
      {
        Level: 5,
        Time: 3000,
      },
    ],
    AfterCastActDelay: 500,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 40,
        },
        {
          Level: 2,
          Amount: 42,
        },
        {
          Level: 3,
          Amount: 46,
        },
        {
          Level: 4,
          Amount: 48,
        },
        {
          Level: 5,
          Amount: 50,
        },
      ],
      Ammo: {
        Cannonball: true,
      },
      AmmoAmount: 1,
      State: "Cart",
    },
  },
  {
    Id: 2478,
    Name: "GN_CARTBOOST",
    Description: "Cart Boost",
    MaxLevel: 5,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Hit: "Single",
    HitCount: 1,
    CastCancel: true,
    CastTime: 1500,
    AfterCastActDelay: 500,
    Duration1: 90000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 20,
        },
        {
          Level: 2,
          Amount: 24,
        },
        {
          Level: 3,
          Amount: 28,
        },
        {
          Level: 4,
          Amount: 32,
        },
        {
          Level: 5,
          Amount: 36,
        },
      ],
      State: "Cart",
    },
    Status: "Gn_CartBoost",
  },
  {
    Id: 2479,
    Name: "GN_THORNS_TRAP",
    Description: "Thorn Trap",
    MaxLevel: 5,
    Type: "Misc",
    TargetType: "Ground",
    Flags: {
      IsTrap: true,
    },
    Range: 9,
    Hit: "Single",
    HitCount: 1,
    ActiveInstance: 3,
    CopyFlags: {
      Skill: {
        Reproduce: true,
      },
    },
    CastCancel: true,
    CastTime: 1500,
    AfterCastActDelay: 500,
    Duration1: [
      {
        Level: 1,
        Time: 10000,
      },
      {
        Level: 2,
        Time: 12000,
      },
      {
        Level: 3,
        Time: 14000,
      },
      {
        Level: 4,
        Time: 16000,
      },
      {
        Level: 5,
        Time: 18000,
      },
    ],
    Duration2: 20000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 22,
        },
        {
          Level: 2,
          Amount: 26,
        },
        {
          Level: 3,
          Amount: 30,
        },
        {
          Level: 4,
          Amount: 34,
        },
        {
          Level: 5,
          Amount: 38,
        },
      ],
      ItemCost: [
        {
          Item: "Seed_Of_Horny_Plant",
          Amount: 1,
        },
      ],
    },
    Unit: {
      Id: "Thorns_Trap",
      Range: 1,
      Interval: 1000,
      Target: "Enemy",
      Flag: {
        NoReiteration: true,
        NoFootSet: true,
        RemovedByFireRain: true,
      },
    },
    Status: "ThornsTrap",
  },
  {
    Id: 2480,
    Name: "GN_BLOOD_SUCKER",
    Description: "Blood Sucker",
    MaxLevel: 5,
    Type: "Misc",
    TargetType: "Support",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      PartyOnly: true,
    },
    Range: 11,
    Hit: "Single",
    HitCount: 1,
    ActiveInstance: 3,
    CopyFlags: {
      Skill: {
        Reproduce: true,
      },
    },
    CastCancel: true,
    CastTime: 1500,
    AfterCastActDelay: 500,
    Duration1: [
      {
        Level: 1,
        Time: 40000,
      },
      {
        Level: 2,
        Time: 100000,
      },
      {
        Level: 3,
        Time: 160000,
      },
      {
        Level: 4,
        Time: 220000,
      },
      {
        Level: 5,
        Time: 280000,
      },
    ],
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 50,
        },
        {
          Level: 2,
          Amount: 55,
        },
        {
          Level: 3,
          Amount: 60,
        },
        {
          Level: 4,
          Amount: 65,
        },
        {
          Level: 5,
          Amount: 70,
        },
      ],
      ItemCost: [
        {
          Item: "Bloodsuck_Plant_Seed",
          Amount: 5,
        },
      ],
    },
    Status: "BloodSucker",
  },
  {
    Id: 2481,
    Name: "GN_SPORE_EXPLOSION",
    Description: "Spore Explosion",
    MaxLevel: 10,
    Type: "Weapon",
    TargetType: "Attack",
    DamageFlags: {
      Splash: true,
    },
    Range: 11,
    Hit: "Multi_Hit",
    HitCount: 2,
    Element: "Weapon",
    SplashArea: [
      {
        Level: 1,
        Area: 1,
      },
      {
        Level: 2,
        Area: 1,
      },
      {
        Level: 3,
        Area: 2,
      },
      {
        Level: 4,
        Area: 2,
      },
      {
        Level: 5,
        Area: 3,
      },
      {
        Level: 6,
        Area: 3,
      },
      {
        Level: 7,
        Area: 4,
      },
      {
        Level: 8,
        Area: 4,
      },
      {
        Level: 9,
        Area: 5,
      },
      {
        Level: 10,
        Area: 5,
      },
    ],
    CopyFlags: {
      Skill: {
        Reproduce: true,
      },
    },
    CastCancel: true,
    CastTime: 1500,
    AfterCastActDelay: 500,
    Duration1: 5000,
    Cooldown: 5000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 48,
        },
        {
          Level: 2,
          Amount: 52,
        },
        {
          Level: 3,
          Amount: 56,
        },
        {
          Level: 4,
          Amount: 60,
        },
        {
          Level: 5,
          Amount: 64,
        },
        {
          Level: 6,
          Amount: 68,
        },
        {
          Level: 7,
          Amount: 72,
        },
        {
          Level: 8,
          Amount: 76,
        },
        {
          Level: 9,
          Amount: 80,
        },
        {
          Level: 10,
          Amount: 84,
        },
      ],
      ItemCost: [
        {
          Item: "Bomb_Mushroom_Spore",
          Amount: 1,
        },
      ],
    },
    Status: "Spore_Explosion",
  },
  {
    Id: 2482,
    Name: "GN_WALLOFTHORN",
    Description: "Wall of Thorns",
    MaxLevel: 5,
    Type: "Weapon",
    TargetType: "Ground",
    DamageFlags: {
      IgnoreAtkCard: true,
    },
    Flags: {
      IgnoreAutoGuard: true,
      IgnoreCicada: true,
    },
    Range: 11,
    Hit: "Single",
    HitCount: 1,
    ActiveInstance: 1,
    Knockback: 1,
    CopyFlags: {
      Skill: {
        Reproduce: true,
      },
    },
    CastCancel: true,
    CastTime: 1500,
    AfterCastActDelay: 500,
    Duration1: [
      {
        Level: 1,
        Time: 10000,
      },
      {
        Level: 2,
        Time: 11000,
      },
      {
        Level: 3,
        Time: 12000,
      },
      {
        Level: 4,
        Time: 13000,
      },
      {
        Level: 5,
        Time: 14000,
      },
    ],
    Cooldown: 5000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 40,
        },
        {
          Level: 2,
          Amount: 50,
        },
        {
          Level: 3,
          Amount: 60,
        },
        {
          Level: 4,
          Amount: 70,
        },
        {
          Level: 5,
          Amount: 80,
        },
      ],
      ItemCost: [
        {
          Item: "Seed_Of_Horny_Plant",
          Amount: 1,
        },
      ],
    },
    Unit: {
      Id: "Wallofthorn",
      AlternateId: "Firewall",
      Layout: -1,
      Range: 1,
      Interval: 300,
      Target: "Enemy",
      Flag: {
        RemovedByFireRain: true,
      },
    },
  },
  {
    Id: 2483,
    Name: "GN_CRAZYWEED",
    Description: "Crazy Weed",
    MaxLevel: 10,
    Type: "Weapon",
    TargetType: "Ground",
    DamageFlags: {
      NoDamage: true,
      Splash: true,
    },
    Flags: {
      IgnoreLandProtector: true,
    },
    Range: 11,
    Hit: "Single",
    HitCount: 1,
    SplashArea: 4,
    CopyFlags: {
      Skill: {
        Reproduce: true,
      },
    },
    CastCancel: true,
    CastTime: [
      {
        Level: 1,
        Time: 3000,
      },
      {
        Level: 2,
        Time: 3500,
      },
      {
        Level: 3,
        Time: 4000,
      },
      {
        Level: 4,
        Time: 4500,
      },
      {
        Level: 5,
        Time: 5000,
      },
      {
        Level: 6,
        Time: 5500,
      },
      {
        Level: 7,
        Time: 6000,
      },
      {
        Level: 8,
        Time: 6500,
      },
      {
        Level: 9,
        Time: 7000,
      },
      {
        Level: 10,
        Time: 7500,
      },
    ],
    AfterCastActDelay: 500,
    Cooldown: 5000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 24,
        },
        {
          Level: 2,
          Amount: 28,
        },
        {
          Level: 3,
          Amount: 32,
        },
        {
          Level: 4,
          Amount: 36,
        },
        {
          Level: 5,
          Amount: 40,
        },
        {
          Level: 6,
          Amount: 44,
        },
        {
          Level: 7,
          Amount: 48,
        },
        {
          Level: 8,
          Amount: 52,
        },
        {
          Level: 9,
          Amount: 56,
        },
        {
          Level: 10,
          Amount: 60,
        },
      ],
      ItemCost: [
        {
          Item: "Seed_Of_Horny_Plant",
          Amount: 1,
        },
      ],
    },
  },
  {
    Id: 2484,
    Name: "GN_CRAZYWEED_ATK",
    Description: "Crazy Weed Attack",
    MaxLevel: 10,
    Type: "Weapon",
    TargetType: "Ground",
    DamageFlags: {
      Splash: true,
    },
    Flags: {
      TargetTrap: true,
      IgnoreLandProtector: true,
    },
    Range: 5,
    Hit: "Multi_Hit",
    HitCount: 2,
    Element: "Weapon",
    SplashArea: 2,
    ActiveInstance: [
      {
        Level: 1,
        Max: 5,
      },
      {
        Level: 2,
        Max: 6,
      },
      {
        Level: 3,
        Max: 6,
      },
      {
        Level: 4,
        Max: 7,
      },
      {
        Level: 5,
        Max: 7,
      },
      {
        Level: 6,
        Max: 8,
      },
      {
        Level: 7,
        Max: 8,
      },
      {
        Level: 8,
        Max: 9,
      },
      {
        Level: 9,
        Max: 9,
      },
      {
        Level: 10,
        Max: 10,
      },
    ],
    CopyFlags: {
      Skill: {
        Reproduce: true,
      },
    },
    Duration1: 100,
    Requires: {
      SpCost: 1,
    },
    Unit: {
      Id: "Dummyskill",
      Range: 1,
      Interval: 100,
      Target: "Enemy",
      Flag: {
        Skill: true,
      },
    },
  },
  {
    Id: 2485,
    Name: "GN_DEMONIC_FIRE",
    Description: "Demonic Fire",
    MaxLevel: 5,
    Type: "Magic",
    TargetType: "Ground",
    Range: 9,
    Hit: "Single",
    HitCount: 1,
    Element: "Fire",
    ActiveInstance: 1,
    CastCancel: true,
    CastTime: [
      {
        Level: 1,
        Time: 3000,
      },
      {
        Level: 2,
        Time: 3500,
      },
      {
        Level: 3,
        Time: 4000,
      },
      {
        Level: 4,
        Time: 4500,
      },
      {
        Level: 5,
        Time: 5000,
      },
    ],
    AfterCastActDelay: 500,
    Duration1: [
      {
        Level: 1,
        Time: 10000,
      },
      {
        Level: 2,
        Time: 12000,
      },
      {
        Level: 3,
        Time: 14000,
      },
      {
        Level: 4,
        Time: 16000,
      },
      {
        Level: 5,
        Time: 18000,
      },
    ],
    Duration2: [
      {
        Level: 1,
        Time: 8000,
      },
      {
        Level: 2,
        Time: 16000,
      },
      {
        Level: 3,
        Time: 24000,
      },
      {
        Level: 4,
        Time: 32000,
      },
      {
        Level: 5,
        Time: 40000,
      },
    ],
    Cooldown: 5000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 24,
        },
        {
          Level: 2,
          Amount: 28,
        },
        {
          Level: 3,
          Amount: 32,
        },
        {
          Level: 4,
          Amount: 36,
        },
        {
          Level: 5,
          Amount: 40,
        },
      ],
      ItemCost: [
        {
          Item: "Fire_Bottle",
          Amount: 1,
        },
      ],
    },
    Unit: {
      Id: "Demonic_Fire",
      Range: 2,
      Interval: 2000,
      Target: "Enemy",
      Flag: {
        NoOverlap: true,
        PathCheck: true,
        Skill: true,
        RemovedByFireRain: true,
      },
    },
  },
  {
    Id: 2486,
    Name: "GN_FIRE_EXPANSION",
    Description: "Fire Expansion",
    MaxLevel: 5,
    TargetType: "Ground",
    Range: 9,
    Hit: "Single",
    HitCount: 1,
    CastCancel: true,
    CastTime: 2000,
    AfterCastActDelay: 500,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 30,
        },
        {
          Level: 2,
          Amount: 35,
        },
        {
          Level: 3,
          Amount: 40,
        },
        {
          Level: 4,
          Amount: 45,
        },
        {
          Level: 5,
          Amount: 50,
        },
      ],
      ItemCost: [
        {
          Item: "Oil_Bottle",
          Amount: 1,
          Level: 1,
        },
        {
          Item: "Explosive_Powder",
          Amount: 1,
          Level: 2,
        },
        {
          Item: "Smoke_Powder",
          Amount: 1,
          Level: 3,
        },
        {
          Item: "Tear_Gas",
          Amount: 1,
          Level: 4,
        },
        {
          Item: "Acid_Bottle",
          Amount: 1,
          Level: 5,
        },
      ],
    },
  },
  {
    Id: 2487,
    Name: "GN_FIRE_EXPANSION_SMOKE_POWDER",
    Description: "Fire Expansion Smoke Powder",
    MaxLevel: 1,
    TargetType: "Ground",
    Range: 9,
    Hit: "Single",
    HitCount: 1,
    Duration1: 4000,
    Requires: {
      SpCost: 1,
    },
    Unit: {
      Id: "Fire_Expansion_Smoke_Powder",
      Layout: 2,
      Interval: -1,
      Flag: {
        RangedSingleUnit: true,
      },
    },
    Status: "SmokePowder",
  },
  {
    Id: 2488,
    Name: "GN_FIRE_EXPANSION_TEAR_GAS",
    Description: "Fire Expansion Tear Gas",
    MaxLevel: 1,
    TargetType: "Ground",
    Range: 9,
    Hit: "Single",
    HitCount: 1,
    Duration1: 5000,
    Requires: {
      SpCost: 1,
    },
    Unit: {
      Id: "Fire_Expansion_Tear_Gas",
      Layout: 2,
      Interval: -1,
      Flag: {
        RangedSingleUnit: true,
      },
    },
    Status: "TearGas",
  },
  {
    Id: 2489,
    Name: "GN_FIRE_EXPANSION_ACID",
    Description: "Fire Expansion Acid",
    MaxLevel: 10,
    Type: "Misc",
    TargetType: "Attack",
    DamageFlags: {
      IgnoreDefense: true,
      IgnoreFlee: true,
    },
    Flags: {
      IgnoreBgReduction: true,
      IgnoreGvgReduction: true,
    },
    Range: 11,
    Hit: "Multi_Hit",
    HitCount: [
      {
        Level: 1,
        Count: 1,
      },
      {
        Level: 2,
        Count: 2,
      },
      {
        Level: 3,
        Count: 3,
      },
      {
        Level: 4,
        Count: 4,
      },
      {
        Level: 5,
        Count: 5,
      },
      {
        Level: 6,
        Count: 6,
      },
      {
        Level: 7,
        Count: 7,
      },
      {
        Level: 8,
        Count: 8,
      },
      {
        Level: 9,
        Count: 9,
      },
      {
        Level: 10,
        Count: 10,
      },
    ],
    Requires: {
      SpCost: 1,
    },
  },
  {
    Id: 2490,
    Name: "GN_HELLS_PLANT",
    Description: "Hell's Plant",
    MaxLevel: 5,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Hit: "Single",
    HitCount: 1,
    CopyFlags: {
      Skill: {
        Reproduce: true,
      },
    },
    CastCancel: true,
    CastTime: [
      {
        Level: 1,
        Time: 3000,
      },
      {
        Level: 2,
        Time: 3500,
      },
      {
        Level: 3,
        Time: 4000,
      },
      {
        Level: 4,
        Time: 4500,
      },
      {
        Level: 5,
        Time: 5000,
      },
    ],
    AfterCastActDelay: 500,
    Duration1: [
      {
        Level: 1,
        Time: 60000,
      },
      {
        Level: 2,
        Time: 90000,
      },
      {
        Level: 3,
        Time: 120000,
      },
      {
        Level: 4,
        Time: 150000,
      },
      {
        Level: 5,
        Time: 180000,
      },
    ],
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 40,
        },
        {
          Level: 2,
          Amount: 45,
        },
        {
          Level: 3,
          Amount: 50,
        },
        {
          Level: 4,
          Amount: 55,
        },
        {
          Level: 5,
          Amount: 60,
        },
      ],
      ItemCost: [
        {
          Item: "MenEater_Plant_Bottle",
          Amount: 1,
        },
      ],
    },
    Status: "Hells_Plant",
  },
  {
    Id: 2491,
    Name: "GN_HELLS_PLANT_ATK",
    Description: "Hell's Plant Attack",
    MaxLevel: 5,
    Type: "Weapon",
    TargetType: "Attack",
    DamageFlags: {
      Splash: true,
    },
    Hit: "Single",
    HitCount: 1,
    SplashArea: 2,
    Element: "Weapon",
    CopyFlags: {
      Skill: {
        Reproduce: true,
      },
    },
    Duration1: 20000,
  },
  {
    Id: 2492,
    Name: "GN_MANDRAGORA",
    Description: "Howling of Mandragora",
    MaxLevel: 5,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
      Splash: true,
    },
    Hit: "Single",
    HitCount: 1,
    SplashArea: [
      {
        Level: 1,
        Area: 5,
      },
      {
        Level: 2,
        Area: 6,
      },
      {
        Level: 3,
        Area: 6,
      },
      {
        Level: 4,
        Area: 7,
      },
      {
        Level: 5,
        Area: 7,
      },
    ],
    CastCancel: true,
    CastTime: 1000,
    AfterCastActDelay: 500,
    Duration1: [
      {
        Level: 1,
        Time: 10000,
      },
      {
        Level: 2,
        Time: 15000,
      },
      {
        Level: 3,
        Time: 20000,
      },
      {
        Level: 4,
        Time: 25000,
      },
      {
        Level: 5,
        Time: 30000,
      },
    ],
    Cooldown: 15000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 40,
        },
        {
          Level: 2,
          Amount: 45,
        },
        {
          Level: 3,
          Amount: 50,
        },
        {
          Level: 4,
          Amount: 55,
        },
        {
          Level: 5,
          Amount: 60,
        },
      ],
      ItemCost: [
        {
          Item: "Mandragora_Flowerpot",
          Amount: 1,
        },
      ],
    },
    Status: "Mandragora",
  },
  {
    Id: 2493,
    Name: "GN_SLINGITEM",
    Description: "Sling Item",
    MaxLevel: 1,
    TargetType: "Support",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      NoTargetSelf: true,
    },
    Range: 11,
    Hit: "Single",
    HitCount: 1,
    Cooldown: 1000,
    Requires: {
      SpCost: 4,
      Ammo: {
        Throwweapon: true,
      },
      AmmoAmount: 1,
    },
  },
  {
    Id: 2494,
    Name: "GN_CHANGEMATERIAL",
    Description: "Change Material",
    MaxLevel: 1,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Hit: "Single",
    HitCount: 1,
    Requires: {
      SpCost: 5,
    },
  },
  {
    Id: 2495,
    Name: "GN_MIX_COOKING",
    Description: "Mix Cooking",
    MaxLevel: 2,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Hit: "Single",
    HitCount: 1,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 5,
        },
        {
          Level: 2,
          Amount: 40,
        },
      ],
    },
  },
  {
    Id: 2496,
    Name: "GN_MAKEBOMB",
    Description: "Create Bomb",
    MaxLevel: 2,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Hit: "Single",
    HitCount: 1,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 5,
        },
        {
          Level: 2,
          Amount: 40,
        },
      ],
    },
  },
  {
    Id: 2497,
    Name: "GN_S_PHARMACY",
    Description: "Special Pharmacy",
    MaxLevel: 10,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Hit: "Single",
    HitCount: 1,
    Requires: {
      SpCost: 12,
    },
  },
  {
    Id: 2498,
    Name: "GN_SLINGITEM_RANGEMELEEATK",
    Description: "Sling Item Attack",
    MaxLevel: 1,
    Type: "Weapon",
    TargetType: "Attack",
    Range: 11,
    Hit: "Single",
    HitCount: 1,
    Requires: {
      SpCost: 1,
    },
  },
  {
    Id: 2533,
    Name: "ALL_ODINS_RECALL",
    Description: "Odin's Recall",
    MaxLevel: 1,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Hit: "Single",
    HitCount: 1,
    CastCancel: true,
    FixedCastTime: 10000,
    Requires: {
      SpCost: 1,
    },
  },
  {
    Id: 2534,
    Name: "RETURN_TO_ELDICASTES",
    Description: "Return To Eldicastes",
    MaxLevel: 1,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Cooldown: 300000,
    FixedCastTime: 2000,
    CastTimeFlags: {
      IgnoreDex: true,
      IgnoreStatus: true,
      IgnoreItemBonus: true,
    },
    CastDelayFlags: {
      IgnoreDex: true,
      IgnoreStatus: true,
      IgnoreItemBonus: true,
    },
    Requires: {
      SpCost: 1,
    },
  },
  {
    Id: 2535,
    Name: "ALL_BUYING_STORE",
    Description: "Open Buying Store",
    MaxLevel: 1,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      IsQuest: true,
    },
    Requires: {
      SpCost: 30,
      ItemCost: [
        {
          Item: "Buy_Market_Permit",
          Amount: 1,
        },
      ],
    },
  },
  {
    Id: 2536,
    Name: "ALL_GUARDIAN_RECALL",
    Description: "Guardian's Recall",
    MaxLevel: 1,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Cooldown: 300000,
    FixedCastTime: 3000,
    CastTimeFlags: {
      IgnoreDex: true,
      IgnoreStatus: true,
      IgnoreItemBonus: true,
    },
    CastDelayFlags: {
      IgnoreDex: true,
      IgnoreStatus: true,
      IgnoreItemBonus: true,
    },
    Requires: {
      SpCost: 1,
    },
  },
  {
    Id: 2537,
    Name: "ALL_ODINS_POWER",
    Description: "Odin's Power",
    MaxLevel: 2,
    TargetType: "Support",
    DamageFlags: {
      NoDamage: true,
    },
    Range: 9,
    Hit: "Single",
    HitCount: 1,
    CastCancel: true,
    Duration1: 60000,
    CastDelayFlags: {
      IgnoreDex: true,
      IgnoreStatus: true,
      IgnoreItemBonus: true,
    },
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 70,
        },
        {
          Level: 2,
          Amount: 100,
        },
      ],
    },
    Status: "Odins_Power",
  },
  {
    Id: 2544,
    Name: "MC_CARTDECORATE",
    Description: "Decorate Cart",
    MaxLevel: 1,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      IsQuest: true,
      AllowOnMado: true,
    },
    Hit: "Single",
    HitCount: 1,
    Requires: {
      SpCost: 40,
      State: "Cart",
    },
  },
  {
    Id: 2552,
    Name: "RL_RICHS_COIN",
    Description: "Rich's Coin",
    MaxLevel: 1,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Hit: "Single",
    HitCount: 1,
    AfterCastActDelay: 1000,
    Duration1: 600000,
    Cooldown: 3000,
    Requires: {
      SpCost: 10,
      ZenyCost: 100,
    },
  },
  {
    Id: 2553,
    Name: "RL_MASS_SPIRAL",
    Description: "Mass Spiral",
    MaxLevel: 5,
    Type: "Weapon",
    TargetType: "Attack",
    Range: -15,
    Hit: "Single",
    HitCount: 1,
    Element: "Weapon",
    CastTime: 1000,
    AfterCastActDelay: 1000,
    Duration1: 108000,
    Cooldown: 2000,
    FixedCastTime: 2000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 40,
        },
        {
          Level: 2,
          Amount: 44,
        },
        {
          Level: 3,
          Amount: 48,
        },
        {
          Level: 4,
          Amount: 52,
        },
        {
          Level: 5,
          Amount: 56,
        },
      ],
      Weapon: {
        Rifle: true,
      },
      Ammo: {
        Bullet: true,
      },
      AmmoAmount: 1,
      ItemCost: [
        {
          Item: "Full_Metal_Jacket",
          Amount: 1,
        },
      ],
    },
    Status: "Bleeding",
  },
  {
    Id: 2554,
    Name: "RL_BANISHING_BUSTER",
    Description: "Banishing Buster",
    MaxLevel: 10,
    Type: "Weapon",
    TargetType: "Attack",
    Flags: {
      TargetHidden: true,
    },
    Range: -9,
    Hit: "Single",
    HitCount: 1,
    Element: "Weapon",
    CastTime: 1000,
    AfterCastActDelay: 400,
    Cooldown: 1000,
    FixedCastTime: 1600,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 55,
        },
        {
          Level: 2,
          Amount: 57,
        },
        {
          Level: 3,
          Amount: 59,
        },
        {
          Level: 4,
          Amount: 61,
        },
        {
          Level: 5,
          Amount: 63,
        },
        {
          Level: 6,
          Amount: 65,
        },
        {
          Level: 7,
          Amount: 67,
        },
        {
          Level: 8,
          Amount: 69,
        },
        {
          Level: 9,
          Amount: 71,
        },
        {
          Level: 10,
          Amount: 73,
        },
      ],
      Weapon: {
        Shotgun: true,
      },
      Ammo: {
        Bullet: true,
      },
      AmmoAmount: 1,
    },
  },
  {
    Id: 2555,
    Name: "RL_B_TRAP",
    Description: "Bind Trap",
    MaxLevel: 5,
    Type: "Misc",
    TargetType: "Ground",
    DamageFlags: {
      NoDamage: true,
    },
    Range: [
      {
        Level: 1,
        Size: 3,
      },
      {
        Level: 2,
        Size: 4,
      },
      {
        Level: 3,
        Size: 4,
      },
      {
        Level: 4,
        Size: 5,
      },
      {
        Level: 5,
        Size: 5,
      },
    ],
    Hit: "Single",
    HitCount: 1,
    SplashArea: 1,
    ActiveInstance: 1,
    CastTime: [
      {
        Level: 1,
        Time: 2000,
      },
      {
        Level: 2,
        Time: 1600,
      },
      {
        Level: 3,
        Time: 1200,
      },
      {
        Level: 4,
        Time: 800,
      },
      {
        Level: 5,
        Time: 400,
      },
    ],
    AfterCastActDelay: [
      {
        Level: 1,
        Time: 2500,
      },
      {
        Level: 2,
        Time: 2000,
      },
      {
        Level: 3,
        Time: 1500,
      },
      {
        Level: 4,
        Time: 1000,
      },
      {
        Level: 5,
        Time: 500,
      },
    ],
    Duration1: 10000,
    Duration2: [
      {
        Level: 1,
        Time: 10000,
      },
      {
        Level: 2,
        Time: 11000,
      },
      {
        Level: 3,
        Time: 12000,
      },
      {
        Level: 4,
        Time: 13000,
      },
      {
        Level: 5,
        Time: 14000,
      },
    ],
    Cooldown: 10000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 30,
        },
        {
          Level: 2,
          Amount: 32,
        },
        {
          Level: 3,
          Amount: 34,
        },
        {
          Level: 4,
          Amount: 36,
        },
        {
          Level: 5,
          Amount: 38,
        },
      ],
      Weapon: {
        Revolver: true,
        Rifle: true,
        Gatling: true,
        Shotgun: true,
        Grenade: true,
      },
      SpiritSphereCost: 1,
      ItemCost: [
        {
          Item: "Special_Alloy_Trap",
          Amount: 1,
        },
      ],
    },
    Status: "B_Trap",
    Unit: {
      Id: "B_Trap",
      Range: [
        {
          Level: 1,
          Size: 1,
        },
        {
          Level: 2,
          Size: 2,
        },
        {
          Level: 3,
          Size: 2,
        },
        {
          Level: 4,
          Size: 3,
        },
        {
          Level: 5,
          Size: 3,
        },
      ],
      Interval: 500,
      Target: "Enemy",
      Flag: {
        NoReiteration: true,
        NoFootSet: true,
      },
    },
  },
  {
    Id: 2556,
    Name: "RL_FLICKER",
    Description: "Flicker",
    MaxLevel: 1,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
      Splash: true,
    },
    Hit: "Single",
    HitCount: 1,
    SplashArea: -1,
    Requires: {
      SpCost: 2,
      SpiritSphereCost: 1,
    },
  },
  {
    Id: 2557,
    Name: "RL_S_STORM",
    Description: "Shatter Storm",
    MaxLevel: 5,
    Type: "Weapon",
    TargetType: "Attack",
    DamageFlags: {
      Splash: true,
    },
    Range: -9,
    Hit: "Single",
    HitCount: 1,
    Element: "Weapon",
    SplashArea: [
      {
        Level: 1,
        Area: 2,
      },
      {
        Level: 2,
        Area: 2,
      },
      {
        Level: 3,
        Area: 2,
      },
      {
        Level: 4,
        Area: 2,
      },
      {
        Level: 5,
        Area: 3,
      },
    ],
    CastTime: [
      {
        Level: 1,
        Time: 3000,
      },
      {
        Level: 2,
        Time: 2500,
      },
      {
        Level: 3,
        Time: 2000,
      },
      {
        Level: 4,
        Time: 1500,
      },
      {
        Level: 5,
        Time: 1000,
      },
    ],
    Cooldown: 2000,
    FixedCastTime: 1000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 50,
        },
        {
          Level: 2,
          Amount: 55,
        },
        {
          Level: 3,
          Amount: 60,
        },
        {
          Level: 4,
          Amount: 65,
        },
        {
          Level: 5,
          Amount: 70,
        },
      ],
      Weapon: {
        Shotgun: true,
      },
      Ammo: {
        Bullet: true,
      },
      AmmoAmount: 1,
    },
  },
  {
    Id: 2558,
    Name: "RL_E_CHAIN",
    Description: "Eternal Chain",
    MaxLevel: 10,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Hit: "Single",
    HitCount: 1,
    CastTime: 1000,
    AfterCastActDelay: 1000,
    Duration1: [
      {
        Level: 1,
        Time: 45000,
      },
      {
        Level: 2,
        Time: 60000,
      },
      {
        Level: 3,
        Time: 75000,
      },
      {
        Level: 4,
        Time: 90000,
      },
      {
        Level: 5,
        Time: 105000,
      },
      {
        Level: 6,
        Time: 120000,
      },
      {
        Level: 7,
        Time: 135000,
      },
      {
        Level: 8,
        Time: 150000,
      },
      {
        Level: 9,
        Time: 165000,
      },
      {
        Level: 10,
        Time: 180000,
      },
    ],
    Requires: {
      SpCost: 45,
      Weapon: {
        Revolver: true,
        Rifle: true,
        Gatling: true,
        Shotgun: true,
        Grenade: true,
      },
      SpiritSphereCost: 1,
    },
    Status: "E_Chain",
  },
  {
    Id: 2559,
    Name: "RL_QD_SHOT",
    Description: "Quick Draw Shot",
    MaxLevel: 1,
    Type: "Weapon",
    TargetType: "Self",
    Range: -9,
    Hit: "Single",
    HitCount: 1,
    Element: "Weapon",
    SplashArea: 10,
    Duration1: 1500,
    Requires: {
      SpCost: 5,
      Weapon: {
        Revolver: true,
        Rifle: true,
        Gatling: true,
        Shotgun: true,
        Grenade: true,
      },
      Ammo: {
        Bullet: true,
        Shell: true,
        Grenade: true,
      },
      AmmoAmount: 1,
      Status: {
        Qd_Shot_Ready: true,
      },
    },
  },
  {
    Id: 2560,
    Name: "RL_C_MARKER",
    Description: "Crimson Marker",
    MaxLevel: 1,
    TargetType: "Attack",
    DamageFlags: {
      NoDamage: true,
    },
    Range: -11,
    Hit: "Single",
    HitCount: 1,
    ActiveInstance: 3,
    Duration1: 30000,
    Cooldown: 1000,
    Requires: {
      SpCost: 10,
      Weapon: {
        Revolver: true,
        Rifle: true,
        Gatling: true,
        Shotgun: true,
        Grenade: true,
      },
      SpiritSphereCost: 1,
    },
    Status: "C_Marker",
  },
  {
    Id: 2561,
    Name: "RL_FIREDANCE",
    Description: "Fire Dance",
    MaxLevel: 10,
    Type: "Weapon",
    TargetType: "Self",
    DamageFlags: {
      Splash: true,
    },
    Hit: "Single",
    HitCount: 1,
    Element: "Weapon",
    SplashArea: 3,
    AfterCastActDelay: 500,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 13,
        },
        {
          Level: 2,
          Amount: 16,
        },
        {
          Level: 3,
          Amount: 19,
        },
        {
          Level: 4,
          Amount: 22,
        },
        {
          Level: 5,
          Amount: 25,
        },
        {
          Level: 6,
          Amount: 28,
        },
        {
          Level: 7,
          Amount: 31,
        },
        {
          Level: 8,
          Amount: 34,
        },
        {
          Level: 9,
          Amount: 37,
        },
        {
          Level: 10,
          Amount: 40,
        },
      ],
      Weapon: {
        Revolver: true,
      },
      Ammo: {
        Bullet: true,
      },
      AmmoAmount: 3,
    },
  },
  {
    Id: 2562,
    Name: "RL_H_MINE",
    Description: "Howling Mine",
    MaxLevel: 5,
    Type: "Weapon",
    TargetType: "Attack",
    Range: [
      {
        Level: 1,
        Size: -7,
      },
      {
        Level: 2,
        Size: -8,
      },
      {
        Level: 3,
        Size: -9,
      },
      {
        Level: 4,
        Size: -10,
      },
      {
        Level: 5,
        Size: -11,
      },
    ],
    Hit: "Single",
    HitCount: 1,
    Element: "Weapon",
    SplashArea: 2,
    CastTime: 1000,
    AfterCastActDelay: 1000,
    Duration1: 50000,
    Duration2: 15000,
    Cooldown: [
      {
        Level: 1,
        Time: 5000,
      },
      {
        Level: 2,
        Time: 4500,
      },
      {
        Level: 3,
        Time: 4000,
      },
      {
        Level: 4,
        Time: 3500,
      },
      {
        Level: 5,
        Time: 3000,
      },
    ],
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 45,
        },
        {
          Level: 2,
          Amount: 50,
        },
        {
          Level: 3,
          Amount: 55,
        },
        {
          Level: 4,
          Amount: 60,
        },
        {
          Level: 5,
          Amount: 65,
        },
      ],
      Weapon: {
        Grenade: true,
      },
      ItemCost: [
        {
          Item: "Shooting_Mine",
          Amount: 1,
        },
      ],
    },
    Status: "H_Mine",
  },
  {
    Id: 2563,
    Name: "RL_P_ALTER",
    Description: "Platinum Alter",
    MaxLevel: 5,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Hit: "Single",
    HitCount: 1,
    CastTime: 2000,
    Duration1: [
      {
        Level: 1,
        Time: 42000,
      },
      {
        Level: 2,
        Time: 54000,
      },
      {
        Level: 3,
        Time: 66000,
      },
      {
        Level: 4,
        Time: 78000,
      },
      {
        Level: 5,
        Time: 90000,
      },
    ],
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 20,
        },
        {
          Level: 2,
          Amount: 24,
        },
        {
          Level: 3,
          Amount: 28,
        },
        {
          Level: 4,
          Amount: 32,
        },
        {
          Level: 5,
          Amount: 36,
        },
      ],
      Ammo: {
        Bullet: true,
      },
      AmmoAmount: 1,
      SpiritSphereCost: -1,
      Equipment: {
        Silver_Bullet: true,
        Sanctified_Bullet: true,
        Silver_Bullet_: true,
      },
    },
    Status: "P_Alter",
  },
  {
    Id: 2564,
    Name: "RL_FALLEN_ANGEL",
    Description: "Fallen Angel",
    MaxLevel: 5,
    TargetType: "Ground",
    DamageFlags: {
      NoDamage: true,
    },
    Range: -9,
    Hit: "Single",
    HitCount: 1,
    Duration1: 2000,
    Requires: {
      SpCost: 10,
      Weapon: {
        Revolver: true,
      },
      SpiritSphereCost: 1,
    },
    Status: "Fallen_Angel",
  },
  {
    Id: 2565,
    Name: "RL_R_TRIP",
    Description: "Round Trip",
    MaxLevel: 10,
    Type: "Weapon",
    TargetType: "Self",
    DamageFlags: {
      Splash: true,
    },
    Hit: "Single",
    HitCount: 1,
    Element: "Weapon",
    SplashArea: [
      {
        Level: 1,
        Area: 3,
      },
      {
        Level: 2,
        Area: 3,
      },
      {
        Level: 3,
        Area: 3,
      },
      {
        Level: 4,
        Area: 4,
      },
      {
        Level: 5,
        Area: 4,
      },
      {
        Level: 6,
        Area: 4,
      },
      {
        Level: 7,
        Area: 5,
      },
      {
        Level: 8,
        Area: 5,
      },
      {
        Level: 9,
        Area: 5,
      },
      {
        Level: 10,
        Area: 6,
      },
    ],
    Knockback: 3,
    AfterCastActDelay: 1000,
    Cooldown: [
      {
        Level: 1,
        Time: 2800,
      },
      {
        Level: 2,
        Time: 2600,
      },
      {
        Level: 3,
        Time: 2400,
      },
      {
        Level: 4,
        Time: 2200,
      },
      {
        Level: 5,
        Time: 2000,
      },
      {
        Level: 6,
        Time: 1800,
      },
      {
        Level: 7,
        Time: 1600,
      },
      {
        Level: 8,
        Time: 1400,
      },
      {
        Level: 9,
        Time: 1200,
      },
      {
        Level: 10,
        Time: 1000,
      },
    ],
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 43,
        },
        {
          Level: 2,
          Amount: 46,
        },
        {
          Level: 3,
          Amount: 49,
        },
        {
          Level: 4,
          Amount: 52,
        },
        {
          Level: 5,
          Amount: 55,
        },
        {
          Level: 6,
          Amount: 58,
        },
        {
          Level: 7,
          Amount: 61,
        },
        {
          Level: 8,
          Amount: 64,
        },
        {
          Level: 9,
          Amount: 67,
        },
        {
          Level: 10,
          Amount: 70,
        },
      ],
      Weapon: {
        Gatling: true,
      },
      Ammo: {
        Bullet: true,
      },
      AmmoAmount: 5,
    },
  },
  {
    Id: 2566,
    Name: "RL_D_TAIL",
    Description: "Dragon Tail",
    MaxLevel: 10,
    Type: "Weapon",
    TargetType: "Attack",
    DamageFlags: {
      IgnoreElement: true,
      IgnoreDefense: true,
    },
    Range: 11,
    Hit: "Single",
    HitCount: 1,
    SplashArea: 1,
    CastTime: [
      {
        Level: 1,
        Time: 1200,
      },
      {
        Level: 2,
        Time: 1400,
      },
      {
        Level: 3,
        Time: 1600,
      },
      {
        Level: 4,
        Time: 1800,
      },
      {
        Level: 5,
        Time: 2000,
      },
      {
        Level: 6,
        Time: 2200,
      },
      {
        Level: 7,
        Time: 2400,
      },
      {
        Level: 8,
        Time: 2600,
      },
      {
        Level: 9,
        Time: 2800,
      },
      {
        Level: 10,
        Time: 3000,
      },
    ],
    AfterCastActDelay: 1000,
    Cooldown: 3500,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 55,
        },
        {
          Level: 2,
          Amount: 60,
        },
        {
          Level: 3,
          Amount: 65,
        },
        {
          Level: 4,
          Amount: 70,
        },
        {
          Level: 5,
          Amount: 75,
        },
        {
          Level: 6,
          Amount: 80,
        },
        {
          Level: 7,
          Amount: 85,
        },
        {
          Level: 8,
          Amount: 90,
        },
        {
          Level: 9,
          Amount: 95,
        },
        {
          Level: 10,
          Amount: 100,
        },
      ],
      Weapon: {
        Grenade: true,
      },
      ItemCost: [
        {
          Item: "Dragon_Tail_Missile",
          Amount: 1,
        },
      ],
    },
  },
  {
    Id: 2567,
    Name: "RL_FIRE_RAIN",
    Description: "Fire Rain",
    MaxLevel: 5,
    Type: "Weapon",
    TargetType: "Ground",
    DamageFlags: {
      Splash: true,
    },
    Range: 3,
    Hit: "Single",
    HitCount: 1,
    Element: "Weapon",
    SplashArea: 1,
    AfterCastActDelay: 1000,
    Duration1: 100,
    Cooldown: 5000,
    Requires: {
      SpCost: 70,
      Weapon: {
        Gatling: true,
      },
      Ammo: {
        Bullet: true,
      },
      AmmoAmount: 10,
    },
    Unit: {
      Id: "Fire_Rain",
      Layout: -1,
      Interval: 1000,
      Target: "Enemy",
      Flag: {
        NoOverlap: true,
        PathCheck: true,
        Skill: true,
      },
    },
  },
  {
    Id: 2568,
    Name: "RL_HEAT_BARREL",
    Description: "Heat Barrel",
    MaxLevel: 5,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Hit: "Single",
    HitCount: 1,
    CastTime: 2000,
    AfterCastActDelay: 1000,
    Duration1: 60000,
    Cooldown: [
      {
        Level: 1,
        Time: 100000,
      },
      {
        Level: 2,
        Time: 95000,
      },
      {
        Level: 3,
        Time: 90000,
      },
      {
        Level: 4,
        Time: 85000,
      },
      {
        Level: 5,
        Time: 80000,
      },
    ],
    Requires: {
      SpCost: 30,
      SpiritSphereCost: -1,
    },
    Status: "Heat_Barrel",
  },
  {
    Id: 2569,
    Name: "RL_AM_BLAST",
    Description: "Anti-Material Blast",
    MaxLevel: 5,
    Type: "Weapon",
    TargetType: "Attack",
    Range: -15,
    Hit: "Single",
    HitCount: 1,
    Element: "Weapon",
    CastTime: 2000,
    AfterCastActDelay: 1000,
    Duration2: [
      {
        Level: 1,
        Time: 6000,
      },
      {
        Level: 2,
        Time: 7000,
      },
      {
        Level: 3,
        Time: 8000,
      },
      {
        Level: 4,
        Time: 9000,
      },
      {
        Level: 5,
        Time: 10000,
      },
    ],
    Cooldown: 5000,
    FixedCastTime: 1000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 80,
        },
        {
          Level: 2,
          Amount: 84,
        },
        {
          Level: 3,
          Amount: 88,
        },
        {
          Level: 4,
          Amount: 92,
        },
        {
          Level: 5,
          Amount: 96,
        },
      ],
      Weapon: {
        Rifle: true,
      },
    },
    Status: "Anti_M_Blast",
  },
  {
    Id: 2570,
    Name: "RL_SLUGSHOT",
    Description: "Slug Shot",
    MaxLevel: 5,
    Type: "Weapon",
    TargetType: "Attack",
    Range: -9,
    Hit: "Single",
    HitCount: 1,
    Knockback: 6,
    CastTime: [
      {
        Level: 1,
        Time: 5000,
      },
      {
        Level: 2,
        Time: 6000,
      },
      {
        Level: 3,
        Time: 7000,
      },
      {
        Level: 4,
        Time: 8000,
      },
      {
        Level: 5,
        Time: 9000,
      },
    ],
    AfterCastActDelay: 1000,
    Duration2: 1500,
    Cooldown: 5000,
    FixedCastTime: 1000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 80,
        },
        {
          Level: 2,
          Amount: 84,
        },
        {
          Level: 3,
          Amount: 88,
        },
        {
          Level: 4,
          Amount: 92,
        },
        {
          Level: 5,
          Amount: 96,
        },
      ],
      Weapon: {
        Shotgun: true,
      },
      ItemCost: [
        {
          Item: "Slug_Bullet",
          Amount: 1,
        },
      ],
    },
    Status: "Stun",
  },
  {
    Id: 2571,
    Name: "RL_HAMMER_OF_GOD",
    Description: "Hammer of God",
    MaxLevel: 10,
    Type: "Weapon",
    TargetType: "Attack",
    DamageFlags: {
      Splash: true,
    },
    Range: 11,
    Hit: "Single",
    HitCount: 1,
    SplashArea: [
      {
        Level: 1,
        Area: 2,
      },
      {
        Level: 2,
        Area: 2,
      },
      {
        Level: 3,
        Area: 2,
      },
      {
        Level: 4,
        Area: 2,
      },
      {
        Level: 5,
        Area: 2,
      },
      {
        Level: 6,
        Area: 3,
      },
      {
        Level: 7,
        Area: 3,
      },
      {
        Level: 8,
        Area: 3,
      },
      {
        Level: 9,
        Area: 3,
      },
      {
        Level: 10,
        Area: 3,
      },
    ],
    AfterCastActDelay: 500,
    Cooldown: 20000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 37,
        },
        {
          Level: 2,
          Amount: 39,
        },
        {
          Level: 3,
          Amount: 41,
        },
        {
          Level: 4,
          Amount: 43,
        },
        {
          Level: 5,
          Amount: 45,
        },
        {
          Level: 6,
          Amount: 47,
        },
        {
          Level: 7,
          Amount: 49,
        },
        {
          Level: 8,
          Amount: 51,
        },
        {
          Level: 9,
          Amount: 53,
        },
        {
          Level: 10,
          Amount: 55,
        },
      ],
      Weapon: {
        Rifle: true,
      },
      SpiritSphereCost: -1,
    },
  },
  {
    Id: 2572,
    Name: "RL_R_TRIP_PLUSATK",
    Description: "Round Trip Plus Attack",
    MaxLevel: 5,
    Type: "Weapon",
    TargetType: "Attack",
    DamageFlags: {
      IgnoreFlee: true,
    },
    Hit: "Single",
    HitCount: 1,
    Element: "Weapon",
    Requires: {
      SpCost: 1,
    },
  },
  {
    Id: 2574,
    Name: "SJ_LIGHTOFMOON",
    Description: "Light of Moon",
    MaxLevel: 5,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Hit: "Single",
    HitCount: 1,
    CastCancel: true,
    Duration1: [
      {
        Level: 1,
        Time: 20000,
      },
      {
        Level: 2,
        Time: 30000,
      },
      {
        Level: 3,
        Time: 40000,
      },
      {
        Level: 4,
        Time: 50000,
      },
      {
        Level: 5,
        Time: 60000,
      },
    ],
    Requires: {
      SpCost: 40,
      State: "Moonstance",
    },
    Status: "LightOfMoon",
  },
  {
    Id: 2575,
    Name: "SJ_LUNARSTANCE",
    Description: "Lunar Stance",
    MaxLevel: 3,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      Toggleable: true,
    },
    Hit: "Single",
    HitCount: 1,
    CastCancel: true,
    Requires: {
      SpCost: 10,
    },
    Status: "LunarStance",
  },
  {
    Id: 2576,
    Name: "SJ_FULLMOONKICK",
    Description: "Full Moon Kick",
    MaxLevel: 10,
    Type: "Weapon",
    TargetType: "Self",
    DamageFlags: {
      Splash: true,
    },
    Hit: "Single",
    HitCount: 1,
    Element: "Weapon",
    SplashArea: 3,
    CastCancel: true,
    Duration1: 18000,
    Cooldown: 1000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 30,
        },
        {
          Level: 2,
          Amount: 35,
        },
        {
          Level: 3,
          Amount: 40,
        },
        {
          Level: 4,
          Amount: 45,
        },
        {
          Level: 5,
          Amount: 50,
        },
        {
          Level: 6,
          Amount: 55,
        },
        {
          Level: 7,
          Amount: 60,
        },
        {
          Level: 8,
          Amount: 65,
        },
        {
          Level: 9,
          Amount: 70,
        },
        {
          Level: 10,
          Amount: 75,
        },
      ],
      State: "Moonstance",
    },
    Status: "Blind",
  },
  {
    Id: 2577,
    Name: "SJ_LIGHTOFSTAR",
    Description: "Light of Star",
    MaxLevel: 5,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Hit: "Single",
    HitCount: 1,
    CastCancel: true,
    Duration1: [
      {
        Level: 1,
        Time: 20000,
      },
      {
        Level: 2,
        Time: 30000,
      },
      {
        Level: 3,
        Time: 40000,
      },
      {
        Level: 4,
        Time: 50000,
      },
      {
        Level: 5,
        Time: 60000,
      },
    ],
    Requires: {
      SpCost: 40,
      State: "Starstance",
    },
    Status: "LightOfStar",
  },
  {
    Id: 2578,
    Name: "SJ_STARSTANCE",
    Description: "Star Stance",
    MaxLevel: 3,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      Toggleable: true,
    },
    Hit: "Single",
    HitCount: 1,
    CastCancel: true,
    Requires: {
      SpCost: 10,
    },
    Status: "StarStance",
  },
  {
    Id: 2579,
    Name: "SJ_NEWMOONKICK",
    Description: "New Moon Kick",
    MaxLevel: 7,
    Type: "Weapon",
    TargetType: "Self",
    DamageFlags: {
      Splash: true,
    },
    Hit: "Single",
    HitCount: 1,
    Element: "Weapon",
    SplashArea: 3,
    CastCancel: true,
    CastTime: 1000,
    Duration1: 15000,
    Cooldown: 1000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 20,
        },
        {
          Level: 2,
          Amount: 25,
        },
        {
          Level: 3,
          Amount: 30,
        },
        {
          Level: 4,
          Amount: 35,
        },
        {
          Level: 5,
          Amount: 40,
        },
        {
          Level: 6,
          Amount: 45,
        },
        {
          Level: 7,
          Amount: 50,
        },
      ],
      State: "Moonstance",
    },
    Status: "NewMoon",
  },
  {
    Id: 2580,
    Name: "SJ_FLASHKICK",
    Description: "Flash Kick",
    MaxLevel: 7,
    Type: "Weapon",
    TargetType: "Attack",
    Range: 1,
    Hit: "Single",
    HitCount: 1,
    Element: "Weapon",
    CastCancel: true,
    Duration1: [
      {
        Level: 1,
        Time: 4000,
      },
      {
        Level: 2,
        Time: 5000,
      },
      {
        Level: 3,
        Time: 6000,
      },
      {
        Level: 4,
        Time: 7000,
      },
      {
        Level: 5,
        Time: 8000,
      },
      {
        Level: 6,
        Time: 9000,
      },
      {
        Level: 7,
        Time: 10000,
      },
    ],
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 45,
        },
        {
          Level: 2,
          Amount: 40,
        },
        {
          Level: 3,
          Amount: 35,
        },
        {
          Level: 4,
          Amount: 30,
        },
        {
          Level: 5,
          Amount: 25,
        },
        {
          Level: 6,
          Amount: 20,
        },
        {
          Level: 7,
          Amount: 15,
        },
      ],
      State: "Starstance",
    },
    Status: "FlashKick",
  },
  {
    Id: 2581,
    Name: "SJ_STAREMPEROR",
    Description: "Star Emperor Advent",
    MaxLevel: 5,
    Type: "Weapon",
    TargetType: "Self",
    DamageFlags: {
      Splash: true,
    },
    Hit: "Single",
    HitCount: 1,
    Element: "Weapon",
    SplashArea: 3,
    CastCancel: true,
    AfterCastActDelay: 1000,
    Duration1: 5000,
    Cooldown: 10000,
    FixedCastTime: 1000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 70,
        },
        {
          Level: 2,
          Amount: 75,
        },
        {
          Level: 3,
          Amount: 80,
        },
        {
          Level: 4,
          Amount: 85,
        },
        {
          Level: 5,
          Amount: 90,
        },
      ],
      State: "Universestance",
    },
    Status: "Silence",
  },
  {
    Id: 2582,
    Name: "SJ_NOVAEXPLOSING",
    Description: "Nova Explosion",
    MaxLevel: 5,
    Type: "Misc",
    TargetType: "Attack",
    DamageFlags: {
      IgnoreElement: true,
      IgnoreFlee: true,
      IgnoreDefCard: true,
    },
    Range: 3,
    Hit: "Single",
    HitCount: 1,
    CastCancel: true,
    CastTime: 5000,
    AfterCastActDelay: 1000,
    Duration1: 2000,
    Cooldown: 20000,
    FixedCastTime: 1000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 60,
        },
        {
          Level: 2,
          Amount: 65,
        },
        {
          Level: 3,
          Amount: 70,
        },
        {
          Level: 4,
          Amount: 75,
        },
        {
          Level: 5,
          Amount: 80,
        },
      ],
      State: "Universestance",
    },
    Status: "NovaExplosing",
  },
  {
    Id: 2583,
    Name: "SJ_UNIVERSESTANCE",
    Description: "Universe Stance",
    MaxLevel: 3,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      Toggleable: true,
    },
    Hit: "Single",
    HitCount: 1,
    CastCancel: true,
    Requires: {
      SpCost: 10,
    },
    Status: "UniverseStance",
  },
  {
    Id: 2584,
    Name: "SJ_FALLINGSTAR",
    Description: "Falling Star",
    MaxLevel: 10,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Hit: "Single",
    HitCount: 1,
    CastCancel: true,
    CastTime: 1000,
    Duration1: [
      {
        Level: 1,
        Time: 120000,
      },
      {
        Level: 2,
        Time: 140000,
      },
      {
        Level: 3,
        Time: 160000,
      },
      {
        Level: 4,
        Time: 180000,
      },
      {
        Level: 5,
        Time: 200000,
      },
      {
        Level: 6,
        Time: 220000,
      },
      {
        Level: 7,
        Time: 240000,
      },
      {
        Level: 8,
        Time: 260000,
      },
      {
        Level: 9,
        Time: 280000,
      },
      {
        Level: 10,
        Time: 300000,
      },
    ],
    FixedCastTime: 2000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 40,
        },
        {
          Level: 2,
          Amount: 45,
        },
        {
          Level: 3,
          Amount: 50,
        },
        {
          Level: 4,
          Amount: 55,
        },
        {
          Level: 5,
          Amount: 60,
        },
        {
          Level: 6,
          Amount: 65,
        },
        {
          Level: 7,
          Amount: 70,
        },
        {
          Level: 8,
          Amount: 75,
        },
        {
          Level: 9,
          Amount: 80,
        },
        {
          Level: 10,
          Amount: 85,
        },
      ],
      State: "Starstance",
    },
    Status: "FallingStar",
  },
  {
    Id: 2585,
    Name: "SJ_GRAVITYCONTROL",
    Description: "Gravity Control",
    MaxLevel: 1,
    TargetType: "Attack",
    DamageFlags: {
      NoDamage: true,
    },
    Range: 9,
    Hit: "Single",
    HitCount: 1,
    CastCancel: true,
    CastTime: 2000,
    AfterCastActDelay: 500,
    Duration1: 5000,
    Cooldown: 20000,
    Requires: {
      SpCost: 80,
      State: "Universestance",
    },
    Status: "GravityControl",
  },
  {
    Id: 2586,
    Name: "SJ_BOOKOFDIMENSION",
    Description: "Book of Dimension",
    MaxLevel: 5,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Hit: "Single",
    HitCount: 1,
    CastCancel: true,
    Duration1: 60000,
    Duration2: 30000,
    Cooldown: [
      {
        Level: 1,
        Time: 150000,
      },
      {
        Level: 2,
        Time: 120000,
      },
      {
        Level: 3,
        Time: 90000,
      },
      {
        Level: 4,
        Time: 60000,
      },
      {
        Level: 5,
        Time: 30000,
      },
    ],
    Requires: {
      SpCost: 40,
      State: "Universestance",
    },
    Status: "Dimension",
  },
  {
    Id: 2587,
    Name: "SJ_BOOKOFCREATINGSTAR",
    Description: "Book of Creating Star",
    MaxLevel: 5,
    Type: "Weapon",
    TargetType: "Ground",
    Range: 7,
    Hit: "Single",
    HitCount: 1,
    Element: "Weapon",
    CastCancel: true,
    CastTime: 2000,
    AfterCastActDelay: 500,
    Duration1: [
      {
        Level: 1,
        Time: 6000,
      },
      {
        Level: 2,
        Time: 7000,
      },
      {
        Level: 3,
        Time: 8000,
      },
      {
        Level: 4,
        Time: 9000,
      },
      {
        Level: 5,
        Time: 10000,
      },
    ],
    Cooldown: 15000,
    FixedCastTime: 1000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 50,
        },
        {
          Level: 2,
          Amount: 55,
        },
        {
          Level: 3,
          Amount: 60,
        },
        {
          Level: 4,
          Amount: 65,
        },
        {
          Level: 5,
          Amount: 70,
        },
      ],
      State: "Universestance",
    },
    Unit: {
      Id: "Creatingstar",
      Layout: 2,
      Interval: -1,
      Target: "Enemy",
      Flag: {
        NoOverlap: true,
        PathCheck: true,
        NoKnockback: true,
      },
    },
    Status: "CreatingStar",
  },
  {
    Id: 2588,
    Name: "SJ_DOCUMENT",
    Description: "Document of Sun Moon and Star",
    MaxLevel: 3,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Hit: "Single",
    HitCount: 1,
    CastCancel: true,
    Cooldown: 60000,
    Requires: {
      SpCost: 60,
    },
  },
  {
    Id: 2589,
    Name: "SJ_PURIFY",
    Description: "Purification of Sun Moon and Star",
    MaxLevel: 1,
  },
  {
    Id: 2590,
    Name: "SJ_LIGHTOFSUN",
    Description: "Light of Sun",
    MaxLevel: 5,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Hit: "Single",
    HitCount: 1,
    CastCancel: true,
    Duration1: [
      {
        Level: 1,
        Time: 20000,
      },
      {
        Level: 2,
        Time: 30000,
      },
      {
        Level: 3,
        Time: 40000,
      },
      {
        Level: 4,
        Time: 50000,
      },
      {
        Level: 5,
        Time: 60000,
      },
    ],
    Requires: {
      SpCost: 40,
      State: "Sunstance",
    },
    Status: "LightOfSun",
  },
  {
    Id: 2591,
    Name: "SJ_SUNSTANCE",
    Description: "Sun Stance",
    MaxLevel: 3,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      Toggleable: true,
    },
    Hit: "Single",
    HitCount: 1,
    CastCancel: true,
    Requires: {
      SpCost: 10,
    },
    Status: "SunStance",
  },
  {
    Id: 2592,
    Name: "SJ_SOLARBURST",
    Description: "Solar Burst",
    MaxLevel: 10,
    Type: "Weapon",
    TargetType: "Self",
    DamageFlags: {
      Splash: true,
    },
    Hit: "Multi_Hit",
    HitCount: -3,
    Element: "Weapon",
    SplashArea: 3,
    CastCancel: true,
    AfterCastActDelay: 500,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 34,
        },
        {
          Level: 2,
          Amount: 37,
        },
        {
          Level: 3,
          Amount: 40,
        },
        {
          Level: 4,
          Amount: 43,
        },
        {
          Level: 5,
          Amount: 46,
        },
        {
          Level: 6,
          Amount: 49,
        },
        {
          Level: 7,
          Amount: 52,
        },
        {
          Level: 8,
          Amount: 55,
        },
        {
          Level: 9,
          Amount: 58,
        },
        {
          Level: 10,
          Amount: 61,
        },
      ],
      State: "Sunstance",
    },
  },
  {
    Id: 2593,
    Name: "SJ_PROMINENCEKICK",
    Description: "Prominence Kick",
    MaxLevel: 7,
    Type: "Weapon",
    TargetType: "Attack",
    DamageFlags: {
      Splash: true,
    },
    Range: 1,
    Hit: "Single",
    HitCount: 1,
    Element: "Weapon",
    SplashArea: 1,
    CastCancel: true,
    AfterCastActDelay: 1000,
    CastDelayFlags: {
      IgnoreStatus: true,
    },
    Requires: {
      SpCost: 20,
      State: "Sunstance",
    },
  },
  {
    Id: 2594,
    Name: "SJ_FALLINGSTAR_ATK",
    Description: "Falling Star Attack",
    MaxLevel: 10,
    Type: "Weapon",
    TargetType: "Self",
    DamageFlags: {
      Splash: true,
    },
    Flags: {
      IsChorus: true,
    },
    Hit: "Multi_Hit",
    HitCount: -3,
    Element: "Weapon",
    SplashArea: 2,
    CastCancel: true,
    Requires: {
      SpCost: 1,
      State: "Starstance",
    },
  },
  {
    Id: 2595,
    Name: "SJ_FALLINGSTAR_ATK2",
    Description: "Falling Star Attack 2",
    MaxLevel: 10,
    Type: "Weapon",
    TargetType: "Attack",
    DamageFlags: {
      Splash: true,
    },
    Flags: {
      IsChorus: true,
    },
    Range: 1,
    Hit: "Multi_Hit",
    HitCount: -3,
    Element: "Weapon",
    SplashArea: 2,
    CastCancel: true,
    Requires: {
      SpCost: 1,
      State: "Starstance",
    },
  },
  {
    Id: 2596,
    Name: "SP_SOULGOLEM",
    Description: "Golem's Soul",
    MaxLevel: 5,
    Type: "Magic",
    TargetType: "Support",
    DamageFlags: {
      NoDamage: true,
    },
    Range: 9,
    Hit: "Single",
    HitCount: 1,
    CastCancel: true,
    AfterCastActDelay: 500,
    Duration1: [
      {
        Level: 1,
        Time: 60000,
      },
      {
        Level: 2,
        Time: 120000,
      },
      {
        Level: 3,
        Time: 180000,
      },
      {
        Level: 4,
        Time: 240000,
      },
      {
        Level: 5,
        Time: 300000,
      },
    ],
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 250,
        },
        {
          Level: 2,
          Amount: 200,
        },
        {
          Level: 3,
          Amount: 150,
        },
        {
          Level: 4,
          Amount: 100,
        },
        {
          Level: 5,
          Amount: 50,
        },
      ],
      SpiritSphereCost: 1,
    },
    Status: "SoulGolem",
  },
  {
    Id: 2597,
    Name: "SP_SOULSHADOW",
    Description: "Shadow's Soul",
    MaxLevel: 5,
    Type: "Magic",
    TargetType: "Support",
    DamageFlags: {
      NoDamage: true,
    },
    Range: 9,
    Hit: "Single",
    HitCount: 1,
    CastCancel: true,
    AfterCastActDelay: 500,
    Duration1: [
      {
        Level: 1,
        Time: 60000,
      },
      {
        Level: 2,
        Time: 120000,
      },
      {
        Level: 3,
        Time: 180000,
      },
      {
        Level: 4,
        Time: 240000,
      },
      {
        Level: 5,
        Time: 300000,
      },
    ],
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 250,
        },
        {
          Level: 2,
          Amount: 200,
        },
        {
          Level: 3,
          Amount: 150,
        },
        {
          Level: 4,
          Amount: 100,
        },
        {
          Level: 5,
          Amount: 50,
        },
      ],
      SpiritSphereCost: 1,
    },
    Status: "SoulShadow",
  },
  {
    Id: 2598,
    Name: "SP_SOULFALCON",
    Description: "Falcon's Soul",
    MaxLevel: 5,
    Type: "Magic",
    TargetType: "Support",
    DamageFlags: {
      NoDamage: true,
    },
    Range: 9,
    Hit: "Single",
    HitCount: 1,
    CastCancel: true,
    AfterCastActDelay: 500,
    Duration1: [
      {
        Level: 1,
        Time: 60000,
      },
      {
        Level: 2,
        Time: 120000,
      },
      {
        Level: 3,
        Time: 180000,
      },
      {
        Level: 4,
        Time: 240000,
      },
      {
        Level: 5,
        Time: 300000,
      },
    ],
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 250,
        },
        {
          Level: 2,
          Amount: 200,
        },
        {
          Level: 3,
          Amount: 150,
        },
        {
          Level: 4,
          Amount: 100,
        },
        {
          Level: 5,
          Amount: 50,
        },
      ],
      SpiritSphereCost: 1,
    },
    Status: "SoulFalcon",
  },
  {
    Id: 2599,
    Name: "SP_SOULFAIRY",
    Description: "Fairy's Soul",
    MaxLevel: 5,
    Type: "Magic",
    TargetType: "Support",
    DamageFlags: {
      NoDamage: true,
    },
    Range: 9,
    Hit: "Single",
    HitCount: 1,
    CastCancel: true,
    AfterCastActDelay: 500,
    Duration1: [
      {
        Level: 1,
        Time: 60000,
      },
      {
        Level: 2,
        Time: 120000,
      },
      {
        Level: 3,
        Time: 180000,
      },
      {
        Level: 4,
        Time: 240000,
      },
      {
        Level: 5,
        Time: 300000,
      },
    ],
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 250,
        },
        {
          Level: 2,
          Amount: 200,
        },
        {
          Level: 3,
          Amount: 150,
        },
        {
          Level: 4,
          Amount: 100,
        },
        {
          Level: 5,
          Amount: 50,
        },
      ],
      SpiritSphereCost: 1,
    },
    Status: "SoulFairy",
  },
  {
    Id: 2600,
    Name: "SP_CURSEEXPLOSION",
    Description: "Curse Explosion",
    MaxLevel: 10,
    Type: "Magic",
    TargetType: "Attack",
    DamageFlags: {
      Splash: true,
    },
    Range: 9,
    Hit: "Multi_Hit",
    HitCount: -7,
    Element: "Dark",
    SplashArea: 3,
    CastCancel: true,
    CastTime: 3000,
    AfterCastActDelay: 500,
    Cooldown: 1000,
    FixedCastTime: 1000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 50,
        },
        {
          Level: 2,
          Amount: 55,
        },
        {
          Level: 3,
          Amount: 60,
        },
        {
          Level: 4,
          Amount: 65,
        },
        {
          Level: 5,
          Amount: 70,
        },
        {
          Level: 6,
          Amount: 75,
        },
        {
          Level: 7,
          Amount: 80,
        },
        {
          Level: 8,
          Amount: 85,
        },
        {
          Level: 9,
          Amount: 90,
        },
        {
          Level: 10,
          Amount: 95,
        },
      ],
    },
  },
  {
    Id: 2601,
    Name: "SP_SOULCURSE",
    Description: "Soul Curse",
    MaxLevel: 5,
    Type: "Magic",
    TargetType: "Attack",
    DamageFlags: {
      NoDamage: true,
      Splash: true,
    },
    Range: 9,
    Hit: "Single",
    HitCount: 1,
    SplashArea: 3,
    CastCancel: true,
    CastTime: 1000,
    AfterCastActDelay: 500,
    Duration1: 20000,
    Cooldown: 5000,
    FixedCastTime: 1000,
    Requires: {
      SpCost: 70,
      SpiritSphereCost: 3,
    },
    Status: "SoulCurse",
  },
  {
    Id: 2602,
    Name: "SP_SPA",
    Description: "Espa",
    MaxLevel: 10,
    Type: "Magic",
    TargetType: "Attack",
    Range: 9,
    Hit: "Single",
    HitCount: 1,
    Element: "Endowed",
    CastCancel: true,
    CastTime: 500,
    Duration1: 5000,
    FixedCastTime: 1000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 52,
        },
        {
          Level: 2,
          Amount: 56,
        },
        {
          Level: 3,
          Amount: 60,
        },
        {
          Level: 4,
          Amount: 64,
        },
        {
          Level: 5,
          Amount: 68,
        },
        {
          Level: 6,
          Amount: 72,
        },
        {
          Level: 7,
          Amount: 76,
        },
        {
          Level: 8,
          Amount: 80,
        },
        {
          Level: 9,
          Amount: 84,
        },
        {
          Level: 10,
          Amount: 88,
        },
      ],
      SpiritSphereCost: [
        {
          Level: 1,
          Amount: 1,
        },
        {
          Level: 2,
          Amount: 1,
        },
        {
          Level: 3,
          Amount: 1,
        },
        {
          Level: 4,
          Amount: 1,
        },
        {
          Level: 5,
          Amount: 1,
        },
        {
          Level: 6,
          Amount: 1,
        },
        {
          Level: 7,
          Amount: 1,
        },
        {
          Level: 8,
          Amount: 1,
        },
        {
          Level: 9,
          Amount: 1,
        },
        {
          Level: 10,
          Amount: 0,
        },
      ],
    },
  },
  {
    Id: 2603,
    Name: "SP_SHA",
    Description: "Esha",
    MaxLevel: 5,
    Type: "Magic",
    TargetType: "Attack",
    DamageFlags: {
      Splash: true,
    },
    Range: 9,
    Hit: "Single",
    HitCount: 1,
    Element: "Endowed",
    SplashArea: [
      {
        Level: 1,
        Area: 1,
      },
      {
        Level: 2,
        Area: 1,
      },
      {
        Level: 3,
        Area: 2,
      },
      {
        Level: 4,
        Area: 2,
      },
      {
        Level: 5,
        Area: 2,
      },
    ],
    CastCancel: true,
    CastTime: 500,
    AfterCastActDelay: 500,
    Duration1: [
      {
        Level: 1,
        Time: 3000,
      },
      {
        Level: 2,
        Time: 4000,
      },
      {
        Level: 3,
        Time: 5000,
      },
      {
        Level: 4,
        Time: 6000,
      },
      {
        Level: 5,
        Time: 7000,
      },
    ],
    Duration2: 5000,
    Cooldown: 3000,
    FixedCastTime: 1000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 18,
        },
        {
          Level: 2,
          Amount: 20,
        },
        {
          Level: 3,
          Amount: 22,
        },
        {
          Level: 4,
          Amount: 24,
        },
        {
          Level: 5,
          Amount: 26,
        },
      ],
      SpiritSphereCost: 1,
    },
    Status: "Sp_Sha",
  },
  {
    Id: 2604,
    Name: "SP_SWHOO",
    Description: "Eswhoo",
    MaxLevel: 10,
    Type: "Magic",
    TargetType: "Attack",
    DamageFlags: {
      Splash: true,
    },
    Range: 9,
    Hit: "Multi_Hit",
    HitCount: -5,
    Element: "Endowed",
    SplashArea: [
      {
        Level: 1,
        Area: 1,
      },
      {
        Level: 2,
        Area: 1,
      },
      {
        Level: 3,
        Area: 1,
      },
      {
        Level: 4,
        Area: 2,
      },
      {
        Level: 5,
        Area: 2,
      },
      {
        Level: 6,
        Area: 2,
      },
      {
        Level: 7,
        Area: 3,
      },
      {
        Level: 8,
        Area: 3,
      },
      {
        Level: 9,
        Area: 3,
      },
      {
        Level: 10,
        Area: 4,
      },
    ],
    CastCancel: true,
    CastTime: 500,
    AfterCastActDelay: 500,
    Duration1: 5000,
    Cooldown: 2000,
    FixedCastTime: 1000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 66,
        },
        {
          Level: 2,
          Amount: 70,
        },
        {
          Level: 3,
          Amount: 74,
        },
        {
          Level: 4,
          Amount: 78,
        },
        {
          Level: 5,
          Amount: 82,
        },
        {
          Level: 6,
          Amount: 86,
        },
        {
          Level: 7,
          Amount: 90,
        },
        {
          Level: 8,
          Amount: 94,
        },
        {
          Level: 9,
          Amount: 98,
        },
        {
          Level: 10,
          Amount: 102,
        },
      ],
      SpiritSphereCost: [
        {
          Level: 1,
          Amount: 2,
        },
        {
          Level: 2,
          Amount: 2,
        },
        {
          Level: 3,
          Amount: 2,
        },
        {
          Level: 4,
          Amount: 2,
        },
        {
          Level: 5,
          Amount: 2,
        },
        {
          Level: 6,
          Amount: 2,
        },
        {
          Level: 7,
          Amount: 2,
        },
        {
          Level: 8,
          Amount: 2,
        },
        {
          Level: 9,
          Amount: 2,
        },
        {
          Level: 10,
          Amount: 1,
        },
      ],
    },
  },
  {
    Id: 2605,
    Name: "SP_SOULUNITY",
    Description: "Soul Unity",
    MaxLevel: 7,
    Type: "Magic",
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
      Splash: true,
    },
    Range: 11,
    Hit: "Single",
    HitCount: 1,
    SplashArea: [
      {
        Level: 1,
        Area: 1,
      },
      {
        Level: 2,
        Area: 1,
      },
      {
        Level: 3,
        Area: 2,
      },
      {
        Level: 4,
        Area: 2,
      },
      {
        Level: 5,
        Area: 3,
      },
      {
        Level: 6,
        Area: 3,
      },
      {
        Level: 7,
        Area: 4,
      },
    ],
    CastCancel: true,
    AfterCastActDelay: 1000,
    Duration1: [
      {
        Level: 1,
        Time: 30000,
      },
      {
        Level: 2,
        Time: 60000,
      },
      {
        Level: 3,
        Time: 90000,
      },
      {
        Level: 4,
        Time: 120000,
      },
      {
        Level: 5,
        Time: 150000,
      },
      {
        Level: 6,
        Time: 180000,
      },
      {
        Level: 7,
        Time: 210000,
      },
    ],
    Cooldown: [
      {
        Level: 2,
        Time: 30000,
      },
      {
        Level: 3,
        Time: 60000,
      },
      {
        Level: 4,
        Time: 90000,
      },
      {
        Level: 5,
        Time: 120000,
      },
      {
        Level: 6,
        Time: 150000,
      },
      {
        Level: 7,
        Time: 180000,
      },
    ],
    FixedCastTime: 4000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 44,
        },
        {
          Level: 2,
          Amount: 46,
        },
        {
          Level: 3,
          Amount: 48,
        },
        {
          Level: 4,
          Amount: 50,
        },
        {
          Level: 5,
          Amount: 52,
        },
        {
          Level: 6,
          Amount: 54,
        },
        {
          Level: 7,
          Amount: 56,
        },
      ],
      SpiritSphereCost: 10,
    },
    Status: "SoulUnity",
  },
  {
    Id: 2606,
    Name: "SP_SOULDIVISION",
    Description: "Soul Division",
    MaxLevel: 5,
    Type: "Magic",
    TargetType: "Attack",
    DamageFlags: {
      NoDamage: true,
    },
    Range: 9,
    Hit: "Single",
    HitCount: 1,
    CastCancel: true,
    CastTime: 500,
    AfterCastActDelay: 500,
    Duration1: 5000,
    Cooldown: 3000,
    FixedCastTime: 1500,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 36,
        },
        {
          Level: 2,
          Amount: 40,
        },
        {
          Level: 3,
          Amount: 44,
        },
        {
          Level: 4,
          Amount: 48,
        },
        {
          Level: 5,
          Amount: 52,
        },
      ],
      SpiritSphereCost: 1,
    },
    Status: "SoulDivision",
  },
  {
    Id: 2607,
    Name: "SP_SOULREAPER",
    Description: "Soul Reaper",
    MaxLevel: 5,
    Type: "Magic",
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Hit: "Single",
    HitCount: 1,
    CastCancel: true,
    CastTime: 3000,
    Duration1: [
      {
        Level: 1,
        Time: 90000,
      },
      {
        Level: 2,
        Time: 120000,
      },
      {
        Level: 3,
        Time: 150000,
      },
      {
        Level: 4,
        Time: 180000,
      },
      {
        Level: 5,
        Time: 210000,
      },
    ],
    Cooldown: [
      {
        Level: 1,
        Time: 90000,
      },
      {
        Level: 2,
        Time: 120000,
      },
      {
        Level: 3,
        Time: 150000,
      },
      {
        Level: 4,
        Time: 180000,
      },
      {
        Level: 5,
        Time: 210000,
      },
    ],
    FixedCastTime: 1000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 42,
        },
        {
          Level: 2,
          Amount: 44,
        },
        {
          Level: 3,
          Amount: 46,
        },
        {
          Level: 4,
          Amount: 48,
        },
        {
          Level: 5,
          Amount: 50,
        },
      ],
      SpiritSphereCost: 2,
    },
    Status: "SoulReaper",
  },
  {
    Id: 2608,
    Name: "SP_SOULREVOLVE",
    Description: "Soul Revolution",
    MaxLevel: 3,
    Type: "Magic",
    TargetType: "Support",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      PartyOnly: true,
    },
    Range: 9,
    Hit: "Single",
    HitCount: 1,
    CastCancel: true,
    AfterCastActDelay: 500,
    Cooldown: 3000,
    FixedCastTime: 1000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 50,
        },
        {
          Level: 2,
          Amount: 100,
        },
        {
          Level: 3,
          Amount: 150,
        },
      ],
    },
  },
  {
    Id: 2609,
    Name: "SP_SOULCOLLECT",
    Description: "Soul Collect",
    MaxLevel: 5,
    Type: "Magic",
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      Toggleable: true,
    },
    Hit: "Single",
    HitCount: 1,
    CastCancel: true,
    Duration1: [
      {
        Level: 1,
        Time: 60000,
      },
      {
        Level: 2,
        Time: 50000,
      },
      {
        Level: 3,
        Time: 40000,
      },
      {
        Level: 4,
        Time: 30000,
      },
      {
        Level: 5,
        Time: 20000,
      },
    ],
    Duration2: 600000,
    Requires: {
      SpCost: 100,
    },
    Status: "SoulCollect",
  },
  {
    Id: 2610,
    Name: "SP_SOULEXPLOSION",
    Description: "Soul Explosion",
    MaxLevel: 5,
    Type: "Misc",
    TargetType: "Attack",
    DamageFlags: {
      IgnoreElement: true,
      IgnoreFlee: true,
      IgnoreDefCard: true,
    },
    Range: 7,
    Hit: "Single",
    HitCount: 1,
    CastCancel: true,
    CastTime: 2000,
    AfterCastActDelay: 500,
    Cooldown: 60000,
    FixedCastTime: 1000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 30,
        },
        {
          Level: 2,
          Amount: 60,
        },
        {
          Level: 3,
          Amount: 90,
        },
        {
          Level: 4,
          Amount: 120,
        },
        {
          Level: 5,
          Amount: 150,
        },
      ],
      SpiritSphereCost: 10,
    },
  },
  {
    Id: 2611,
    Name: "SP_SOULENERGY",
    Description: "Soul Energy Research",
    MaxLevel: 5,
  },
  {
    Id: 2612,
    Name: "SP_KAUTE",
    Description: "Kaute",
    MaxLevel: 5,
    Type: "Magic",
    TargetType: "Support",
    DamageFlags: {
      NoDamage: true,
    },
    Range: 7,
    Hit: "Single",
    HitCount: 1,
    CastCancel: true,
    AfterCastActDelay: 1000,
    Cooldown: 5000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 24,
        },
        {
          Level: 2,
          Amount: 30,
        },
        {
          Level: 3,
          Amount: 36,
        },
        {
          Level: 4,
          Amount: 42,
        },
        {
          Level: 5,
          Amount: 48,
        },
      ],
      SpiritSphereCost: 5,
    },
  },
  {
    Id: 3001,
    Name: "KO_YAMIKUMO",
    Description: "Shadow Hiding",
    MaxLevel: 1,
    TargetType: "Self",
    Flags: {
      AllowWhenHidden: true,
      Toggleable: true,
    },
    Hit: "Single",
    HitCount: 1,
    Duration1: 200000,
    Requires: {
      SpCost: 10,
    },
    Status: "Hiding",
  },
  {
    Id: 3002,
    Name: "KO_RIGHT",
    Description: "Right Hand Mastery",
    MaxLevel: 5,
    Type: "Weapon",
  },
  {
    Id: 3003,
    Name: "KO_LEFT",
    Description: "Left Hand Mastery",
    MaxLevel: 5,
    Type: "Weapon",
  },
  {
    Id: 3004,
    Name: "KO_JYUMONJIKIRI",
    Description: "Cross Slash",
    MaxLevel: 10,
    Type: "Weapon",
    TargetType: "Attack",
    Range: [
      {
        Level: 1,
        Size: 4,
      },
      {
        Level: 2,
        Size: 4,
      },
      {
        Level: 3,
        Size: 4,
      },
      {
        Level: 4,
        Size: 5,
      },
      {
        Level: 5,
        Size: 5,
      },
      {
        Level: 6,
        Size: 5,
      },
      {
        Level: 7,
        Size: 6,
      },
      {
        Level: 8,
        Size: 6,
      },
      {
        Level: 9,
        Size: 6,
      },
      {
        Level: 10,
        Size: 7,
      },
    ],
    Hit: "Multi_Hit",
    HitCount: -2,
    Element: "Weapon",
    Duration1: 3000,
    Cooldown: [
      {
        Level: 1,
        Time: 4000,
      },
      {
        Level: 2,
        Time: 3900,
      },
      {
        Level: 3,
        Time: 3800,
      },
      {
        Level: 4,
        Time: 3700,
      },
      {
        Level: 5,
        Time: 3600,
      },
      {
        Level: 6,
        Time: 3500,
      },
      {
        Level: 7,
        Time: 3400,
      },
      {
        Level: 8,
        Time: 3300,
      },
      {
        Level: 9,
        Time: 3200,
      },
      {
        Level: 10,
        Time: 3100,
      },
    ],
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 10,
        },
        {
          Level: 2,
          Amount: 12,
        },
        {
          Level: 3,
          Amount: 14,
        },
        {
          Level: 4,
          Amount: 16,
        },
        {
          Level: 5,
          Amount: 18,
        },
        {
          Level: 6,
          Amount: 20,
        },
        {
          Level: 7,
          Amount: 22,
        },
        {
          Level: 8,
          Amount: 24,
        },
        {
          Level: 9,
          Amount: 26,
        },
        {
          Level: 10,
          Amount: 28,
        },
      ],
    },
    Status: "Jyumonjikiri",
  },
  {
    Id: 3005,
    Name: "KO_SETSUDAN",
    Description: "Soul Cutter",
    MaxLevel: 5,
    Type: "Weapon",
    TargetType: "Attack",
    Range: 2,
    Hit: "Single",
    HitCount: 1,
    Element: "Weapon",
    Cooldown: 3000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 12,
        },
        {
          Level: 2,
          Amount: 16,
        },
        {
          Level: 3,
          Amount: 20,
        },
        {
          Level: 4,
          Amount: 24,
        },
        {
          Level: 5,
          Amount: 28,
        },
      ],
    },
  },
  {
    Id: 3006,
    Name: "KO_BAKURETSU",
    Description: "Kunai Explosion",
    MaxLevel: 5,
    Type: "Weapon",
    TargetType: "Attack",
    DamageFlags: {
      Splash: true,
      IgnoreFlee: true,
    },
    Range: [
      {
        Level: 1,
        Size: 7,
      },
      {
        Level: 2,
        Size: 8,
      },
      {
        Level: 3,
        Size: 9,
      },
      {
        Level: 4,
        Size: 10,
      },
      {
        Level: 5,
        Size: 11,
      },
    ],
    Hit: "Single",
    HitCount: 1,
    Element: "Weapon",
    SplashArea: 2,
    CastTime: [
      {
        Level: 1,
        Time: 1000,
      },
      {
        Level: 2,
        Time: 1400,
      },
      {
        Level: 3,
        Time: 1800,
      },
      {
        Level: 4,
        Time: 2200,
      },
      {
        Level: 5,
        Time: 2600,
      },
    ],
    AfterCastActDelay: 1000,
    Duration1: 100,
    Cooldown: 3000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 5,
        },
        {
          Level: 2,
          Amount: 6,
        },
        {
          Level: 3,
          Amount: 7,
        },
        {
          Level: 4,
          Amount: 8,
        },
        {
          Level: 5,
          Amount: 9,
        },
      ],
      ItemCost: [
        {
          Item: "Explosive_Kunai",
          Amount: 1,
        },
      ],
    },
    Unit: {
      Id: "Dummyskill",
      Range: 1,
      Interval: 1000,
      Target: "Enemy",
      Flag: {
        NoOverlap: true,
        PathCheck: true,
      },
    },
  },
  {
    Id: 3007,
    Name: "KO_HAPPOKUNAI",
    Description: "Kunai Splash",
    MaxLevel: 5,
    Type: "Weapon",
    TargetType: "Self",
    DamageFlags: {
      Splash: true,
      IgnoreFlee: true,
    },
    Hit: "Single",
    HitCount: 1,
    Element: "Weapon",
    SplashArea: [
      {
        Level: 1,
        Area: 4,
      },
      {
        Level: 2,
        Area: 4,
      },
      {
        Level: 3,
        Area: 4,
      },
      {
        Level: 4,
        Area: 4,
      },
      {
        Level: 5,
        Area: 5,
      },
    ],
    AfterCastActDelay: 500,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 12,
        },
        {
          Level: 2,
          Amount: 14,
        },
        {
          Level: 3,
          Amount: 16,
        },
        {
          Level: 4,
          Amount: 18,
        },
        {
          Level: 5,
          Amount: 20,
        },
      ],
      Ammo: {
        Kunai: true,
      },
      AmmoAmount: 2,
    },
  },
  {
    Id: 3008,
    Name: "KO_MUCHANAGE",
    Description: "Rapid Throw",
    MaxLevel: 10,
    Type: "Misc",
    TargetType: "Ground",
    DamageFlags: {
      Splash: true,
      SplashSplit: true,
      IgnoreElement: true,
      IgnoreFlee: true,
    },
    Range: 11,
    Hit: "Multi_Hit",
    HitCount: -10,
    SplashArea: [
      {
        Level: 1,
        Area: 1,
      },
      {
        Level: 2,
        Area: 1,
      },
      {
        Level: 3,
        Area: 1,
      },
      {
        Level: 4,
        Area: 1,
      },
      {
        Level: 5,
        Area: 1,
      },
      {
        Level: 6,
        Area: 1,
      },
      {
        Level: 7,
        Area: 1,
      },
      {
        Level: 8,
        Area: 1,
      },
      {
        Level: 9,
        Area: 1,
      },
      {
        Level: 10,
        Area: 2,
      },
    ],
    CopyFlags: {
      Skill: {
        Plagiarism: true,
        Reproduce: true,
      },
    },
    CastTime: 1000,
    Cooldown: 10000,
    Requires: {
      SpCost: 50,
      ZenyCost: [
        {
          Level: 1,
          Amount: 10000,
        },
        {
          Level: 2,
          Amount: 20000,
        },
        {
          Level: 3,
          Amount: 30000,
        },
        {
          Level: 4,
          Amount: 40000,
        },
        {
          Level: 5,
          Amount: 50000,
        },
        {
          Level: 6,
          Amount: 60000,
        },
        {
          Level: 7,
          Amount: 70000,
        },
        {
          Level: 8,
          Amount: 80000,
        },
        {
          Level: 9,
          Amount: 90000,
        },
        {
          Level: 10,
          Amount: 100000,
        },
      ],
    },
    Unit: {
      Id: "Dummyskill",
      Range: [
        {
          Level: 1,
          Size: 1,
        },
        {
          Level: 2,
          Size: 1,
        },
        {
          Level: 3,
          Size: 1,
        },
        {
          Level: 4,
          Size: 1,
        },
        {
          Level: 5,
          Size: 1,
        },
        {
          Level: 6,
          Size: 1,
        },
        {
          Level: 7,
          Size: 1,
        },
        {
          Level: 8,
          Size: 1,
        },
        {
          Level: 9,
          Size: 1,
        },
        {
          Level: 10,
          Size: 2,
        },
      ],
      Interval: 1000,
      Target: "Enemy",
      Flag: {
        NoOverlap: true,
        PathCheck: true,
      },
    },
  },
  {
    Id: 3009,
    Name: "KO_HUUMARANKA",
    Description: "Swirling Petal",
    MaxLevel: 10,
    Type: "Weapon",
    TargetType: "Attack",
    DamageFlags: {
      Splash: true,
    },
    Range: 11,
    Hit: "Multi_Hit",
    HitCount: -5,
    Element: "Weapon",
    SplashArea: 3,
    CastTime: 1500,
    AfterCastActDelay: 500,
    Duration1: 100,
    Cooldown: 3000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 22,
        },
        {
          Level: 2,
          Amount: 24,
        },
        {
          Level: 3,
          Amount: 26,
        },
        {
          Level: 4,
          Amount: 28,
        },
        {
          Level: 5,
          Amount: 30,
        },
        {
          Level: 6,
          Amount: 32,
        },
        {
          Level: 7,
          Amount: 34,
        },
        {
          Level: 8,
          Amount: 36,
        },
        {
          Level: 9,
          Amount: 38,
        },
        {
          Level: 10,
          Amount: 40,
        },
      ],
      Weapon: {
        Huuma: true,
      },
    },
    Unit: {
      Id: "Dummyskill",
      Range: 3,
      Interval: 1000,
      Target: "Enemy",
      Flag: {
        NoOverlap: true,
        PathCheck: true,
      },
    },
  },
  {
    Id: 3010,
    Name: "KO_MAKIBISHI",
    Description: "Makibishi",
    MaxLevel: 5,
    Type: "Weapon",
    TargetType: "Self",
    DamageFlags: {
      Splash: true,
      IgnoreElement: true,
      IgnoreFlee: true,
    },
    Flags: {
      IsTrap: true,
      TargetEmperium: true,
    },
    Range: 3,
    Hit: "Single",
    HitCount: 1,
    Duration1: [
      {
        Level: 1,
        Time: 12000,
      },
      {
        Level: 2,
        Time: 14000,
      },
      {
        Level: 3,
        Time: 16000,
      },
      {
        Level: 4,
        Time: 18000,
      },
      {
        Level: 5,
        Time: 20000,
      },
    ],
    Duration2: [
      {
        Level: 1,
        Time: 2500,
      },
      {
        Level: 2,
        Time: 3000,
      },
      {
        Level: 3,
        Time: 3500,
      },
      {
        Level: 4,
        Time: 4000,
      },
      {
        Level: 5,
        Time: 4500,
      },
    ],
    Cooldown: 10000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 9,
        },
        {
          Level: 2,
          Amount: 12,
        },
        {
          Level: 3,
          Amount: 15,
        },
        {
          Level: 4,
          Amount: 18,
        },
        {
          Level: 5,
          Amount: 21,
        },
      ],
      ItemCost: [
        {
          Item: "Makibishi",
          Amount: 3,
          Level: 1,
        },
        {
          Item: "Makibishi",
          Amount: 4,
          Level: 2,
        },
        {
          Item: "Makibishi",
          Amount: 5,
          Level: 3,
        },
        {
          Item: "Makibishi",
          Amount: 6,
          Level: 4,
        },
        {
          Item: "Makibishi",
          Amount: 7,
          Level: 5,
        },
      ],
    },
    Unit: {
      Id: "Makibishi",
      Interval: 5000,
      Target: "Enemy",
      Flag: {
        NoOverlap: true,
        PathCheck: true,
      },
    },
    Status: "Stun",
  },
  {
    Id: 3011,
    Name: "KO_MEIKYOUSISUI",
    Description: "Pure Soul",
    MaxLevel: 5,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Hit: "Single",
    CastCancel: true,
    CastTime: 3000,
    Duration1: 10000,
    Cooldown: 10000,
    Requires: {
      SpCost: 100,
    },
    Status: "Meikyousisui",
  },
  {
    Id: 3012,
    Name: "KO_ZANZOU",
    Description: "Illusion - Shadow",
    MaxLevel: 5,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Hit: "Single",
    ActiveInstance: 1,
    Knockback: [
      {
        Level: 1,
        Amount: 3,
      },
      {
        Level: 2,
        Amount: 4,
      },
      {
        Level: 3,
        Amount: 5,
      },
      {
        Level: 4,
        Amount: 6,
      },
      {
        Level: 5,
        Amount: 7,
      },
    ],
    AfterCastActDelay: 1000,
    Duration1: [
      {
        Level: 1,
        Time: 27000,
      },
      {
        Level: 2,
        Time: 24000,
      },
      {
        Level: 3,
        Time: 21000,
      },
      {
        Level: 4,
        Time: 18000,
      },
      {
        Level: 5,
        Time: 15000,
      },
    ],
    Cooldown: [
      {
        Level: 1,
        Time: 30000,
      },
      {
        Level: 2,
        Time: 27000,
      },
      {
        Level: 3,
        Time: 24000,
      },
      {
        Level: 4,
        Time: 21000,
      },
      {
        Level: 5,
        Time: 18000,
      },
    ],
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 40,
        },
        {
          Level: 2,
          Amount: 44,
        },
        {
          Level: 3,
          Amount: 48,
        },
        {
          Level: 4,
          Amount: 52,
        },
        {
          Level: 5,
          Amount: 56,
        },
      ],
    },
  },
  {
    Id: 3013,
    Name: "KO_KYOUGAKU",
    Description: "Illusion - Shock",
    MaxLevel: 5,
    TargetType: "Attack",
    DamageFlags: {
      NoDamage: true,
    },
    Range: 5,
    Hit: "Single",
    CastTime: [
      {
        Level: 1,
        Time: 3000,
      },
      {
        Level: 2,
        Time: 2500,
      },
      {
        Level: 3,
        Time: 2000,
      },
      {
        Level: 4,
        Time: 1500,
      },
      {
        Level: 5,
        Time: 1000,
      },
    ],
    AfterCastActDelay: 1000,
    Duration1: [
      {
        Level: 1,
        Time: 12000,
      },
      {
        Level: 2,
        Time: 14000,
      },
      {
        Level: 3,
        Time: 16000,
      },
      {
        Level: 4,
        Time: 18000,
      },
      {
        Level: 5,
        Time: 20000,
      },
    ],
    Cooldown: 10000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 40,
        },
        {
          Level: 2,
          Amount: 44,
        },
        {
          Level: 3,
          Amount: 48,
        },
        {
          Level: 4,
          Amount: 52,
        },
        {
          Level: 5,
          Amount: 56,
        },
      ],
    },
    Status: "Kyougaku",
  },
  {
    Id: 3014,
    Name: "KO_JYUSATSU",
    Description: "Illusion - Death",
    MaxLevel: 5,
    TargetType: "Attack",
    DamageFlags: {
      NoDamage: true,
    },
    Range: 5,
    Hit: "Single",
    CastTime: [
      {
        Level: 1,
        Time: 3000,
      },
      {
        Level: 2,
        Time: 2500,
      },
      {
        Level: 3,
        Time: 2000,
      },
      {
        Level: 4,
        Time: 1500,
      },
      {
        Level: 5,
        Time: 1000,
      },
    ],
    AfterCastActDelay: 1000,
    Duration1: [
      {
        Level: 1,
        Time: 6000,
      },
      {
        Level: 2,
        Time: 8000,
      },
      {
        Level: 3,
        Time: 10000,
      },
      {
        Level: 4,
        Time: 12000,
      },
      {
        Level: 5,
        Time: 14000,
      },
    ],
    Cooldown: 10000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 40,
        },
        {
          Level: 2,
          Amount: 44,
        },
        {
          Level: 3,
          Amount: 48,
        },
        {
          Level: 4,
          Amount: 52,
        },
        {
          Level: 5,
          Amount: 56,
        },
      ],
    },
    Status: "Curse",
  },
  {
    Id: 3015,
    Name: "KO_KAHU_ENTEN",
    Description: "Fire Charm",
    MaxLevel: 1,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Hit: "Single",
    HitCount: 1,
    Element: "Fire",
    CastTime: 2000,
    Duration1: 300000,
    Requires: {
      SpCost: 20,
      ItemCost: [
        {
          Item: "Charm_Fire",
          Amount: 1,
        },
      ],
    },
  },
  {
    Id: 3016,
    Name: "KO_HYOUHU_HUBUKI",
    Description: "Ice Charm",
    MaxLevel: 1,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Hit: "Single",
    HitCount: 1,
    Element: "Water",
    CastTime: 2000,
    Duration1: 300000,
    Requires: {
      SpCost: 20,
      ItemCost: [
        {
          Item: "Charm_Ice",
          Amount: 1,
        },
      ],
    },
  },
  {
    Id: 3017,
    Name: "KO_KAZEHU_SEIRAN",
    Description: "Wind Charm",
    MaxLevel: 1,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Hit: "Single",
    HitCount: 1,
    Element: "Wind",
    CastTime: 2000,
    Duration1: 300000,
    Requires: {
      SpCost: 20,
      ItemCost: [
        {
          Item: "Charm_Wind",
          Amount: 1,
        },
      ],
    },
  },
  {
    Id: 3018,
    Name: "KO_DOHU_KOUKAI",
    Description: "Earth Charm",
    MaxLevel: 1,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Hit: "Single",
    HitCount: 1,
    Element: "Earth",
    CastTime: 2000,
    Duration1: 300000,
    Requires: {
      SpCost: 20,
      ItemCost: [
        {
          Item: "Charm_Earth",
          Amount: 1,
        },
      ],
    },
  },
  {
    Id: 3019,
    Name: "KO_KAIHOU",
    Description: "Release Ninja Spell",
    MaxLevel: 1,
    Type: "Magic",
    TargetType: "Attack",
    Range: 11,
    Hit: "Single",
    HitCount: 1,
    Requires: {
      SpCost: 10,
    },
  },
  {
    Id: 3020,
    Name: "KO_ZENKAI",
    Description: "Cast Ninja Spell",
    MaxLevel: 1,
    Type: "Magic",
    TargetType: "Ground",
    Range: 7,
    Hit: "Single",
    HitCount: 1,
    CastCancel: true,
    AfterCastActDelay: 1000,
    Duration1: 100,
    Duration2: 10000,
    Requires: {
      SpCost: 30,
    },
    Unit: {
      Id: "Zenkai_Water",
      Range: 2,
      Interval: 500,
      Flag: {
        NoOverlap: true,
        PathCheck: true,
      },
    },
    Status: "Zenkai",
  },
  {
    Id: 3021,
    Name: "KO_GENWAKU",
    Description: "Illusion - Bewitch",
    MaxLevel: 5,
    TargetType: "Support",
    DamageFlags: {
      NoDamage: true,
    },
    Range: [
      {
        Level: 1,
        Size: 5,
      },
      {
        Level: 2,
        Size: 6,
      },
      {
        Level: 3,
        Size: 7,
      },
      {
        Level: 4,
        Size: 8,
      },
      {
        Level: 5,
        Size: 9,
      },
    ],
    Hit: "Single",
    HitCount: 1,
    CastTime: [
      {
        Level: 1,
        Time: 3000,
      },
      {
        Level: 2,
        Time: 2500,
      },
      {
        Level: 3,
        Time: 2000,
      },
      {
        Level: 4,
        Time: 1500,
      },
      {
        Level: 5,
        Time: 1000,
      },
    ],
    AfterCastActDelay: 1000,
    Duration1: 30000,
    Cooldown: 10000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 40,
        },
        {
          Level: 2,
          Amount: 44,
        },
        {
          Level: 3,
          Amount: 48,
        },
        {
          Level: 4,
          Amount: 52,
        },
        {
          Level: 5,
          Amount: 56,
        },
      ],
    },
  },
  {
    Id: 3022,
    Name: "KO_IZAYOI",
    Description: "16th Night",
    MaxLevel: 5,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Hit: "Single",
    Duration1: [
      {
        Level: 1,
        Time: 30000,
      },
      {
        Level: 2,
        Time: 45000,
      },
      {
        Level: 3,
        Time: 60000,
      },
      {
        Level: 4,
        Time: 75000,
      },
      {
        Level: 5,
        Time: 90000,
      },
    ],
    Cooldown: 60000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 70,
        },
        {
          Level: 2,
          Amount: 75,
        },
        {
          Level: 3,
          Amount: 80,
        },
        {
          Level: 4,
          Amount: 85,
        },
        {
          Level: 5,
          Amount: 90,
        },
      ],
    },
    Status: "Izayoi",
  },
  {
    Id: 3023,
    Name: "KG_KAGEHUMI",
    Description: "Shadow Trampling",
    MaxLevel: 5,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
      Splash: true,
    },
    Hit: "Single",
    SplashArea: [
      {
        Level: 1,
        Area: 2,
      },
      {
        Level: 2,
        Area: 3,
      },
      {
        Level: 3,
        Area: 4,
      },
      {
        Level: 4,
        Area: 5,
      },
      {
        Level: 5,
        Area: 6,
      },
    ],
    Duration1: [
      {
        Level: 1,
        Time: 5000,
      },
      {
        Level: 2,
        Time: 6000,
      },
      {
        Level: 3,
        Time: 7000,
      },
      {
        Level: 4,
        Time: 8000,
      },
      {
        Level: 5,
        Time: 9000,
      },
    ],
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 25,
        },
        {
          Level: 2,
          Amount: 30,
        },
        {
          Level: 3,
          Amount: 35,
        },
        {
          Level: 4,
          Amount: 40,
        },
        {
          Level: 5,
          Amount: 45,
        },
      ],
    },
    Status: "Kagehumi",
  },
  {
    Id: 3024,
    Name: "KG_KYOMU",
    Description: "Empty Shadow",
    MaxLevel: 5,
    TargetType: "Attack",
    DamageFlags: {
      NoDamage: true,
    },
    Range: 7,
    Hit: "Single",
    HitCount: 1,
    AfterCastActDelay: 1000,
    Duration1: [
      {
        Level: 1,
        Time: 10000,
      },
      {
        Level: 2,
        Time: 15000,
      },
      {
        Level: 3,
        Time: 20000,
      },
      {
        Level: 4,
        Time: 25000,
      },
      {
        Level: 5,
        Time: 30000,
      },
    ],
    Cooldown: 20000,
    Requires: {
      SpCost: 50,
      ItemCost: [
        {
          Item: "Shadow_Orb",
          Amount: 1,
        },
      ],
    },
    Status: "Kyomu",
  },
  {
    Id: 3025,
    Name: "KG_KAGEMUSYA",
    Description: "Shadow Warrior",
    MaxLevel: 5,
    TargetType: "Support",
    DamageFlags: {
      NoDamage: true,
    },
    Range: 7,
    Hit: "Single",
    HitCount: 1,
    AfterCastActDelay: 1000,
    Duration1: [
      {
        Level: 1,
        Time: 60000,
      },
      {
        Level: 2,
        Time: 90000,
      },
      {
        Level: 3,
        Time: 120000,
      },
      {
        Level: 4,
        Time: 150000,
      },
      {
        Level: 5,
        Time: 180000,
      },
    ],
    Cooldown: 20000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 60,
        },
        {
          Level: 2,
          Amount: 65,
        },
        {
          Level: 3,
          Amount: 70,
        },
        {
          Level: 4,
          Amount: 75,
        },
        {
          Level: 5,
          Amount: 80,
        },
      ],
      ItemCost: [
        {
          Item: "Shadow_Orb",
          Amount: 1,
        },
      ],
    },
    Status: "Kagemusya",
  },
  {
    Id: 3026,
    Name: "OB_ZANGETSU",
    Description: "Distorted Crescent",
    MaxLevel: 5,
    TargetType: "Support",
    DamageFlags: {
      NoDamage: true,
    },
    Range: 7,
    Hit: "Single",
    HitCount: 1,
    CastTime: [
      {
        Level: 1,
        Time: 1000,
      },
      {
        Level: 2,
        Time: 1500,
      },
      {
        Level: 3,
        Time: 2000,
      },
      {
        Level: 4,
        Time: 2500,
      },
      {
        Level: 5,
        Time: 3000,
      },
    ],
    AfterCastActDelay: 1000,
    Duration1: [
      {
        Level: 1,
        Time: 60000,
      },
      {
        Level: 2,
        Time: 75000,
      },
      {
        Level: 3,
        Time: 90000,
      },
      {
        Level: 4,
        Time: 105000,
      },
      {
        Level: 5,
        Time: 120000,
      },
    ],
    Cooldown: 30000,
    FixedCastTime: 2000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 60,
        },
        {
          Level: 2,
          Amount: 70,
        },
        {
          Level: 3,
          Amount: 80,
        },
        {
          Level: 4,
          Amount: 90,
        },
        {
          Level: 5,
          Amount: 100,
        },
      ],
    },
    Status: "Zangetsu",
  },
  {
    Id: 3027,
    Name: "OB_OBOROGENSOU",
    Description: "Moonlight Fantasy",
    MaxLevel: 5,
    TargetType: "Support",
    DamageFlags: {
      NoDamage: true,
    },
    Range: 7,
    Hit: "Single",
    HitCount: 1,
    CastTime: 1000,
    AfterCastActDelay: 1000,
    Duration1: [
      {
        Level: 1,
        Time: 10000,
      },
      {
        Level: 2,
        Time: 15000,
      },
      {
        Level: 3,
        Time: 20000,
      },
      {
        Level: 4,
        Time: 25000,
      },
      {
        Level: 5,
        Time: 30000,
      },
    ],
    Cooldown: 15000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 55,
        },
        {
          Level: 2,
          Amount: 60,
        },
        {
          Level: 3,
          Amount: 65,
        },
        {
          Level: 4,
          Amount: 70,
        },
        {
          Level: 5,
          Amount: 75,
        },
      ],
    },
    Status: "Gensou",
  },
  {
    Id: 3028,
    Name: "OB_OBOROGENSOU_TRANSITION_ATK",
    Description: "Moonlight Fantasy Transition Attack",
    MaxLevel: 1,
    Type: "Weapon",
    TargetType: "Self",
    DamageFlags: {
      Splash: true,
    },
    Range: 1,
    Hit: "Single",
    HitCount: 1,
    SplashArea: 3,
  },
  {
    Id: 3029,
    Name: "OB_AKAITSUKI",
    Description: "Ominous Moonlight",
    MaxLevel: 5,
    TargetType: "Attack",
    DamageFlags: {
      NoDamage: true,
    },
    Range: 7,
    Hit: "Single",
    CastTime: [
      {
        Level: 1,
        Time: 1000,
      },
      {
        Level: 2,
        Time: 1500,
      },
      {
        Level: 3,
        Time: 2000,
      },
      {
        Level: 4,
        Time: 2500,
      },
      {
        Level: 5,
        Time: 3000,
      },
    ],
    AfterCastActDelay: 1000,
    Duration1: [
      {
        Level: 1,
        Time: 10000,
      },
      {
        Level: 2,
        Time: 15000,
      },
      {
        Level: 3,
        Time: 20000,
      },
      {
        Level: 4,
        Time: 25000,
      },
      {
        Level: 5,
        Time: 30000,
      },
    ],
    Cooldown: 30000,
    FixedCastTime: 2000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 20,
        },
        {
          Level: 2,
          Amount: 30,
        },
        {
          Level: 3,
          Amount: 40,
        },
        {
          Level: 4,
          Amount: 50,
        },
        {
          Level: 5,
          Amount: 60,
        },
      ],
    },
    Status: "Akaitsuki",
  },
  {
    Id: 3031,
    Name: "ECL_SNOWFLIP",
    Description: "Snow Flip",
    MaxLevel: 1,
    TargetType: "Support",
    DamageFlags: {
      NoDamage: true,
    },
    Range: 7,
    Hit: "Single",
    HitCount: 1,
    Cooldown: 5000,
    Requires: {
      SpCost: 1,
    },
  },
  {
    Id: 3032,
    Name: "ECL_PEONYMAMY",
    Description: "Peony Mamy",
    MaxLevel: 1,
    TargetType: "Support",
    DamageFlags: {
      NoDamage: true,
    },
    Range: 7,
    Hit: "Single",
    HitCount: 1,
    Cooldown: 5000,
    Requires: {
      SpCost: 1,
    },
  },
  {
    Id: 3033,
    Name: "ECL_SADAGUI",
    Description: "Sadagui",
    MaxLevel: 1,
    TargetType: "Support",
    DamageFlags: {
      NoDamage: true,
    },
    Range: 7,
    Hit: "Single",
    HitCount: 1,
    Cooldown: 5000,
    Requires: {
      SpCost: 1,
    },
  },
  {
    Id: 3034,
    Name: "ECL_SEQUOIADUST",
    Description: "Sequoia Dust",
    MaxLevel: 1,
    TargetType: "Support",
    DamageFlags: {
      NoDamage: true,
    },
    Range: 7,
    Hit: "Single",
    HitCount: 1,
    Cooldown: 5000,
    Requires: {
      SpCost: 1,
    },
  },
  {
    Id: 3035,
    Name: "ECLAGE_RECALL",
    Description: "Return To Eclage",
    MaxLevel: 1,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Hit: "Single",
    HitCount: 1,
    CastTime: 3000,
    Cooldown: 300000,
    CastTimeFlags: {
      IgnoreDex: true,
      IgnoreStatus: true,
      IgnoreItemBonus: true,
    },
    CastDelayFlags: {
      IgnoreDex: true,
      IgnoreStatus: true,
      IgnoreItemBonus: true,
    },
    Requires: {
      SpCost: 1,
    },
  },
  {
    Id: 3042,
    Name: "ALL_PRONTERA_RECALL",
    Description: "Prontera Recall",
    MaxLevel: 2,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Hit: "Single",
    HitCount: 1,
    Cooldown: [
      {
        Level: 1,
        Time: 1800000,
      },
      {
        Level: 2,
        Time: 900000,
      },
    ],
    FixedCastTime: 1000,
    CastTimeFlags: {
      IgnoreDex: true,
      IgnoreStatus: true,
      IgnoreItemBonus: true,
    },
    CastDelayFlags: {
      IgnoreDex: true,
      IgnoreStatus: true,
      IgnoreItemBonus: true,
    },
    Requires: {
      SpCost: 1,
    },
  },
  {
    Id: 5001,
    Name: "GC_DARKCROW",
    Description: "Dark Claw",
    MaxLevel: 5,
    Type: "Weapon",
    TargetType: "Attack",
    Range: 1,
    Hit: "Multi_Hit",
    HitCount: 3,
    Element: "Weapon",
    CopyFlags: {
      Skill: {
        Reproduce: true,
      },
    },
    Duration1: 20000,
    Cooldown: 60000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 22,
        },
        {
          Level: 2,
          Amount: 34,
        },
        {
          Level: 3,
          Amount: 46,
        },
        {
          Level: 4,
          Amount: 58,
        },
        {
          Level: 5,
          Amount: 70,
        },
      ],
    },
    Status: "DarkCrow",
  },
  {
    Id: 5002,
    Name: "RA_UNLIMIT",
    Description: "Unlimited",
    MaxLevel: 5,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Hit: "Single",
    HitCount: 1,
    AfterCastActDelay: 500,
    Duration1: 150000,
    Cooldown: 300000,
    FixedCastTime: 1000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 100,
        },
        {
          Level: 2,
          Amount: 120,
        },
        {
          Level: 3,
          Amount: 140,
        },
        {
          Level: 4,
          Amount: 160,
        },
        {
          Level: 5,
          Amount: 180,
        },
      ],
    },
    Status: "Unlimit",
  },
  {
    Id: 5003,
    Name: "GN_ILLUSIONDOPING",
    Description: "Illusion Doping",
    MaxLevel: 5,
    Type: "Weapon",
    TargetType: "Attack",
    DamageFlags: {
      Splash: true,
    },
    Range: 7,
    Hit: "Single",
    HitCount: 1,
    Element: "Weapon",
    SplashArea: [
      {
        Level: 1,
        Area: 4,
      },
      {
        Level: 2,
        Area: 5,
      },
      {
        Level: 3,
        Area: 6,
      },
      {
        Level: 4,
        Area: 7,
      },
      {
        Level: 5,
        Area: -1,
      },
    ],
    CopyFlags: {
      Skill: {
        Reproduce: true,
      },
    },
    AfterCastActDelay: 500,
    Duration1: 10000,
    Cooldown: [
      {
        Level: 1,
        Time: 5000,
      },
      {
        Level: 2,
        Time: 4000,
      },
      {
        Level: 3,
        Time: 3000,
      },
      {
        Level: 4,
        Time: 2000,
      },
      {
        Level: 5,
        Time: 1000,
      },
    ],
    FixedCastTime: [
      {
        Level: 1,
        Time: 1000,
      },
      {
        Level: 2,
        Time: 1000,
      },
      {
        Level: 3,
        Time: 1000,
      },
      {
        Level: 4,
        Time: 1000,
      },
      {
        Level: 5,
        Time: 0,
      },
    ],
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 60,
        },
        {
          Level: 2,
          Amount: 70,
        },
        {
          Level: 3,
          Amount: 80,
        },
        {
          Level: 4,
          Amount: 90,
        },
        {
          Level: 5,
          Amount: 100,
        },
      ],
      ItemCost: [
        {
          Item: "Alchol",
          Amount: 1,
        },
      ],
    },
    Status: "IllusionDoping",
  },
  {
    Id: 5004,
    Name: "RK_DRAGONBREATH_WATER",
    Description: "Dragon Breath - Water",
    MaxLevel: 10,
    Type: "Weapon",
    TargetType: "Ground",
    DamageFlags: {
      Splash: true,
      IgnoreFlee: true,
    },
    Flags: {
      TargetTrap: true,
    },
    Range: 9,
    Hit: "Single",
    HitCount: 1,
    Element: "Water",
    SplashArea: [
      {
        Level: 1,
        Area: 1,
      },
      {
        Level: 2,
        Area: 1,
      },
      {
        Level: 3,
        Area: 1,
      },
      {
        Level: 4,
        Area: 2,
      },
      {
        Level: 5,
        Area: 2,
      },
      {
        Level: 6,
        Area: 2,
      },
      {
        Level: 7,
        Area: 3,
      },
      {
        Level: 8,
        Area: 3,
      },
      {
        Level: 9,
        Area: 4,
      },
      {
        Level: 10,
        Area: 4,
      },
    ],
    CastTime: [
      {
        Level: 4,
        Time: 1000,
      },
      {
        Level: 5,
        Time: 1000,
      },
      {
        Level: 6,
        Time: 1000,
      },
      {
        Level: 7,
        Time: 1500,
      },
      {
        Level: 8,
        Time: 1500,
      },
      {
        Level: 9,
        Time: 2000,
      },
      {
        Level: 10,
        Time: 2000,
      },
    ],
    AfterCastActDelay: 2000,
    Duration1: 40000,
    FixedCastTime: 500,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 30,
        },
        {
          Level: 2,
          Amount: 35,
        },
        {
          Level: 3,
          Amount: 40,
        },
        {
          Level: 4,
          Amount: 45,
        },
        {
          Level: 5,
          Amount: 50,
        },
        {
          Level: 6,
          Amount: 55,
        },
        {
          Level: 7,
          Amount: 60,
        },
        {
          Level: 8,
          Amount: 65,
        },
        {
          Level: 9,
          Amount: 70,
        },
        {
          Level: 10,
          Amount: 75,
        },
      ],
      State: "Ridingdragon",
    },
    Status: "Freezing",
  },
  {
    Id: 5005,
    Name: "RK_LUXANIMA",
    Description: "Lux Anima",
    MaxLevel: 1,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Hit: "Single",
    HitCount: 1,
    Duration1: 900000,
    Requires: {
      SpCost: 1,
    },
    Status: "LuxAnima",
  },
  {
    Id: 5006,
    Name: "NC_MAGMA_ERUPTION",
    Description: "Magma Eruption",
    MaxLevel: 5,
    Type: "Weapon",
    TargetType: "Ground",
    DamageFlags: {
      Splash: true,
    },
    Flags: {
      AllowOnMado: true,
    },
    Range: 1,
    Hit: "Single",
    HitCount: 1,
    Element: "Weapon",
    SplashArea: 3,
    ActiveInstance: 3,
    CopyFlags: {
      Skill: {
        Reproduce: true,
      },
    },
    CastTime: 1000,
    AfterCastActDelay: 500,
    Duration1: 5000,
    Duration2: 4500,
    Cooldown: [
      {
        Level: 1,
        Time: 10000,
      },
      {
        Level: 2,
        Time: 9000,
      },
      {
        Level: 3,
        Time: 8000,
      },
      {
        Level: 4,
        Time: 7000,
      },
      {
        Level: 5,
        Time: 6000,
      },
    ],
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 60,
        },
        {
          Level: 2,
          Amount: 70,
        },
        {
          Level: 3,
          Amount: 80,
        },
        {
          Level: 4,
          Amount: 90,
        },
        {
          Level: 5,
          Amount: 100,
        },
      ],
    },
    Unit: {
      Id: "Magma_Eruption",
      Range: 3,
      Interval: 500,
      Target: "Enemy",
      Flag: {
        NoOverlap: true,
        PathCheck: true,
      },
    },
    Status: "Stun",
  },
  {
    Id: 5007,
    Name: "WM_FRIGG_SONG",
    Description: "Frigg's Song",
    MaxLevel: 5,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
      Splash: true,
    },
    Hit: "Single",
    HitCount: 1,
    SplashArea: [
      {
        Level: 1,
        Area: 5,
      },
      {
        Level: 2,
        Area: 6,
      },
      {
        Level: 3,
        Area: 7,
      },
      {
        Level: 4,
        Area: 8,
      },
      {
        Level: 5,
        Area: 9,
      },
    ],
    CastTime: 1000,
    AfterCastActDelay: 2000,
    Duration1: 60000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 200,
        },
        {
          Level: 2,
          Amount: 230,
        },
        {
          Level: 3,
          Amount: 260,
        },
        {
          Level: 4,
          Amount: 290,
        },
        {
          Level: 5,
          Amount: 320,
        },
      ],
      Weapon: {
        Musical: true,
        Whip: true,
      },
      ItemCost: [
        {
          Item: "Heartbroken_Tears",
          Amount: 1,
        },
      ],
    },
    Status: "Frigg_Song",
  },
  {
    Id: 5008,
    Name: "SO_ELEMENTAL_SHIELD",
    Description: "Elemental Shield",
    MaxLevel: 5,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
      Splash: true,
    },
    Hit: "Single",
    HitCount: 1,
    SplashArea: 11,
    Requires: {
      SpCost: 120,
      State: "Elementalspirit2",
      ItemCost: [
        {
          Item: "Blue_Gemstone",
          Amount: 1,
        },
      ],
    },
  },
  {
    Id: 5009,
    Name: "SR_FLASHCOMBO",
    Description: "Flash Combo",
    MaxLevel: 5,
    TargetType: "Attack",
    DamageFlags: {
      NoDamage: true,
    },
    Range: 1,
    Hit: "Single",
    HitCount: 1,
    AfterCastActDelay: 1000,
    Duration1: 3000,
    Cooldown: [
      {
        Level: 1,
        Time: 10000,
      },
      {
        Level: 2,
        Time: 8000,
      },
      {
        Level: 3,
        Time: 7000,
      },
      {
        Level: 4,
        Time: 5000,
      },
      {
        Level: 5,
        Time: 3000,
      },
    ],
    Requires: {
      SpCost: 65,
      SpiritSphereCost: [
        {
          Level: 1,
          Amount: 5,
        },
        {
          Level: 2,
          Amount: 5,
        },
        {
          Level: 3,
          Amount: 4,
        },
        {
          Level: 4,
          Amount: 4,
        },
        {
          Level: 5,
          Amount: 3,
        },
      ],
    },
    Status: "FlashCombo",
  },
  {
    Id: 5010,
    Name: "SC_ESCAPE",
    Description: "Emergency Escape",
    MaxLevel: 5,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Hit: "Single",
    HitCount: 1,
    Knockback: [
      {
        Level: 1,
        Amount: 4,
      },
      {
        Level: 2,
        Amount: 5,
      },
      {
        Level: 3,
        Amount: 6,
      },
      {
        Level: 4,
        Amount: 7,
      },
      {
        Level: 5,
        Amount: 8,
      },
      {
        Level: 6,
        Amount: 9,
      },
    ],
    AfterCastActDelay: 500,
    Duration1: 50000,
    Duration2: 20000,
    Cooldown: [
      {
        Level: 1,
        Time: 10000,
      },
      {
        Level: 2,
        Time: 8000,
      },
      {
        Level: 3,
        Time: 6000,
      },
      {
        Level: 4,
        Time: 4000,
      },
      {
        Level: 5,
        Time: 2000,
      },
    ],
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 30,
        },
        {
          Level: 2,
          Amount: 26,
        },
        {
          Level: 3,
          Amount: 22,
        },
        {
          Level: 4,
          Amount: 18,
        },
        {
          Level: 5,
          Amount: 14,
        },
      ],
      ItemCost: [
        {
          Item: "Special_Alloy_Trap",
          Amount: 1,
        },
      ],
    },
    Unit: {
      Id: "Anklesnare",
      Range: 1,
      Interval: 1000,
      Flag: {
        NoReiteration: true,
      },
    },
    Status: "Ankle",
  },
  {
    Id: 5011,
    Name: "AB_OFFERTORIUM",
    Description: "Offertorium",
    MaxLevel: 5,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Hit: "Single",
    HitCount: 1,
    CastTime: [
      {
        Level: 1,
        Time: 5000,
      },
      {
        Level: 2,
        Time: 4000,
      },
      {
        Level: 3,
        Time: 3000,
      },
      {
        Level: 4,
        Time: 2000,
      },
      {
        Level: 5,
        Time: 1000,
      },
    ],
    AfterCastActDelay: 500,
    Duration1: 90000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 30,
        },
        {
          Level: 2,
          Amount: 60,
        },
        {
          Level: 3,
          Amount: 90,
        },
        {
          Level: 4,
          Amount: 120,
        },
        {
          Level: 5,
          Amount: 150,
        },
      ],
    },
    Status: "Offertorium",
  },
  {
    Id: 5012,
    Name: "WL_TELEKINESIS_INTENSE",
    Description: "Intense Telekinesis",
    MaxLevel: 5,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Hit: "Single",
    HitCount: 1,
    AfterCastActDelay: 500,
    Duration1: 60000,
    Cooldown: 300000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 100,
        },
        {
          Level: 2,
          Amount: 150,
        },
        {
          Level: 3,
          Amount: 200,
        },
        {
          Level: 4,
          Amount: 250,
        },
        {
          Level: 5,
          Amount: 300,
        },
      ],
    },
    Status: "Telekinesis_Intense",
  },
  {
    Id: 5013,
    Name: "LG_KINGS_GRACE",
    Description: "King's Grace",
    MaxLevel: 5,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
      Splash: true,
    },
    Hit: "Single",
    HitCount: 1,
    AfterCastActDelay: 500,
    Duration1: 5000,
    Cooldown: [
      {
        Level: 1,
        Time: 100000,
      },
      {
        Level: 2,
        Time: 90000,
      },
      {
        Level: 3,
        Time: 80000,
      },
      {
        Level: 4,
        Time: 70000,
      },
      {
        Level: 5,
        Time: 60000,
      },
    ],
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 200,
        },
        {
          Level: 2,
          Amount: 180,
        },
        {
          Level: 3,
          Amount: 160,
        },
        {
          Level: 4,
          Amount: 140,
        },
        {
          Level: 5,
          Amount: 120,
        },
      ],
    },
    Unit: {
      Id: "Kings_Grace",
      Layout: 3,
      Interval: -1,
      Flag: {
        NoReiteration: true,
        RangedSingleUnit: true,
      },
    },
    Status: "Kings_Grace",
  },
  {
    Id: 5014,
    Name: "ALL_FULL_THROTTLE",
    Description: "Full Throttle",
    MaxLevel: 5,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      AllowOnMado: true,
    },
    Hit: "Single",
    HitCount: 1,
    AfterCastActDelay: 500,
    Duration1: [
      {
        Level: 1,
        Time: 10000,
      },
      {
        Level: 2,
        Time: 15000,
      },
      {
        Level: 3,
        Time: 20000,
      },
      {
        Level: 4,
        Time: 25000,
      },
      {
        Level: 5,
        Time: 30000,
      },
    ],
    Duration2: 10000,
    Cooldown: 1800000,
    Requires: {
      SpCost: 1,
    },
    Status: "Full_Throttle",
  },
  {
    Id: 5015,
    Name: "NC_MAGMA_ERUPTION_DOTDAMAGE",
    Description: "Magma Eruption Dot Damage",
    MaxLevel: 5,
    Type: "Misc",
    TargetType: "Attack",
    DamageFlags: {
      IgnoreFlee: true,
      IgnoreDefCard: true,
    },
    Range: 1,
    Hit: "Single",
    HitCount: 1,
    Duration2: 18000,
    Status: "Burning",
  },
  {
    Id: 5018,
    Name: "SU_BASIC_SKILL",
    Description: "New Basic Skill",
    MaxLevel: 1,
  },
  {
    Id: 5019,
    Name: "SU_BITE",
    Description: "Bite",
    MaxLevel: 1,
    Type: "Weapon",
    TargetType: "Attack",
    Range: 2,
    Hit: "Single",
    HitCount: 1,
    Element: "Weapon",
    CastCancel: true,
    CastTime: 1000,
    AfterCastActDelay: 1000,
    Requires: {
      SpCost: 10,
    },
  },
  {
    Id: 5020,
    Name: "SU_HIDE",
    Description: "Hide",
    MaxLevel: 1,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Hit: "Single",
    HitCount: 1,
    CastCancel: true,
    AfterCastActDelay: 1000,
    Duration1: -1,
    Cooldown: 15000,
    Requires: {
      SpCost: 10,
    },
    Status: "SuHide",
  },
  {
    Id: 5021,
    Name: "SU_SCRATCH",
    Description: "Scratch",
    MaxLevel: 3,
    Type: "Weapon",
    TargetType: "Attack",
    DamageFlags: {
      Splash: true,
    },
    Range: 2,
    Hit: "Single",
    HitCount: 1,
    Element: "Weapon",
    SplashArea: 1,
    CastCancel: true,
    AfterCastActDelay: 1000,
    Duration2: 108000,
    Cooldown: [
      {
        Level: 1,
        Time: 3000,
      },
      {
        Level: 2,
        Time: 2000,
      },
      {
        Level: 3,
        Time: 1000,
      },
    ],
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 20,
        },
        {
          Level: 2,
          Amount: 25,
        },
        {
          Level: 3,
          Amount: 30,
        },
      ],
    },
    Status: "Bleeding",
  },
  {
    Id: 5022,
    Name: "SU_STOOP",
    Description: "Stoop",
    MaxLevel: 1,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Hit: "Single",
    HitCount: 1,
    CastCancel: true,
    AfterCastActDelay: 1000,
    Duration1: 6000,
    Cooldown: 15000,
    Requires: {
      SpCost: 10,
    },
    Status: "Su_Stoop",
  },
  {
    Id: 5023,
    Name: "SU_LOPE",
    Description: "Lope",
    MaxLevel: 3,
    TargetType: "Ground",
    DamageFlags: {
      NoDamage: true,
    },
    Range: [
      {
        Level: 1,
        Size: 6,
      },
      {
        Level: 2,
        Size: 10,
      },
      {
        Level: 3,
        Size: 14,
      },
    ],
    Hit: "Single",
    HitCount: 1,
    CastCancel: true,
    CastTime: 500,
    AfterCastActDelay: 1000,
    Cooldown: [
      {
        Level: 1,
        Time: 2000,
      },
      {
        Level: 2,
        Time: 4000,
      },
      {
        Level: 3,
        Time: 6000,
      },
    ],
    Requires: {
      SpCost: 30,
    },
  },
  {
    Id: 5024,
    Name: "SU_SPRITEMABLE",
    Description: "Spirit Marble",
    MaxLevel: 1,
  },
  {
    Id: 5025,
    Name: "SU_POWEROFLAND",
    Description: "Power of Land",
    MaxLevel: 1,
  },
  {
    Id: 5026,
    Name: "SU_SV_STEMSPEAR",
    Description: "Silvervine Stem Spear",
    MaxLevel: 5,
    Type: "Magic",
    TargetType: "Attack",
    Range: 9,
    Hit: "Single",
    HitCount: 1,
    Element: [
      {
        Level: 1,
        Element: "Earth",
      },
      {
        Level: 2,
        Element: "Fire",
      },
      {
        Level: 3,
        Element: "Water",
      },
      {
        Level: 4,
        Element: "Wind",
      },
      {
        Level: 5,
        Element: "Ghost",
      },
    ],
    CastCancel: true,
    CastTime: 2000,
    AfterCastActDelay: 1000,
    Duration2: 108000,
    Requires: {
      SpCost: 40,
    },
    Status: "Bleeding",
  },
  {
    Id: 5027,
    Name: "SU_CN_POWDERING",
    Description: "Catnip Powdering",
    MaxLevel: 5,
    TargetType: "Attack",
    DamageFlags: {
      NoDamage: true,
      Splash: true,
    },
    Range: 9,
    Hit: "Single",
    HitCount: 1,
    ActiveInstance: 1,
    CastCancel: true,
    CastTime: 2000,
    AfterCastActDelay: 1000,
    Duration1: [
      {
        Level: 1,
        Time: 3000,
      },
      {
        Level: 2,
        Time: 4000,
      },
      {
        Level: 3,
        Time: 5000,
      },
      {
        Level: 4,
        Time: 6000,
      },
      {
        Level: 5,
        Time: 7000,
      },
    ],
    Cooldown: 10000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 40,
        },
        {
          Level: 2,
          Amount: 36,
        },
        {
          Level: 3,
          Amount: 32,
        },
        {
          Level: 4,
          Amount: 28,
        },
        {
          Level: 5,
          Amount: 24,
        },
      ],
      ItemCost: [
        {
          Item: "Nepeta_Cataria",
          Amount: 1,
        },
      ],
    },
    Unit: {
      Id: "Catnippowder",
      Layout: [
        {
          Level: 1,
          Size: 1,
        },
        {
          Level: 2,
          Size: 1,
        },
        {
          Level: 3,
          Size: 2,
        },
        {
          Level: 4,
          Size: 2,
        },
        {
          Level: 5,
          Size: 3,
        },
      ],
      Interval: -1,
      Target: "Enemy",
      Flag: {
        PathCheck: true,
        RangedSingleUnit: true,
      },
    },
    Status: "CatnipPowder",
  },
  {
    Id: 5028,
    Name: "SU_CN_METEOR",
    Description: "Catnip Meteor",
    MaxLevel: 5,
    Type: "Magic",
    TargetType: "Ground",
    Range: 9,
    Hit: "Multi_Hit",
    HitCount: -5,
    SplashArea: 3,
    CastCancel: true,
    CastTime: 2000,
    AfterCastActDelay: 1000,
    Duration1: [
      {
        Level: 1,
        Time: 1500,
      },
      {
        Level: 2,
        Time: 2000,
      },
      {
        Level: 3,
        Time: 2500,
      },
      {
        Level: 4,
        Time: 3000,
      },
      {
        Level: 5,
        Time: 3500,
      },
    ],
    Duration2: 18000,
    Cooldown: 5000,
    FixedCastTime: 1500,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 20,
        },
        {
          Level: 2,
          Amount: 35,
        },
        {
          Level: 3,
          Amount: 50,
        },
        {
          Level: 4,
          Amount: 65,
        },
        {
          Level: 5,
          Amount: 80,
        },
      ],
    },
    Unit: {
      Id: "Dummyskill",
      Range: 3,
      Interval: 500,
      Target: "Enemy",
      Flag: {
        PathCheck: true,
      },
    },
    Status: "Curse",
  },
  {
    Id: 5029,
    Name: "SU_SV_ROOTTWIST",
    Description: "Silvervine Root Twist",
    MaxLevel: 5,
    TargetType: "Attack",
    DamageFlags: {
      NoDamage: true,
    },
    Range: 9,
    Hit: "Single",
    HitCount: 1,
    CastCancel: true,
    AfterCastActDelay: 1000,
    Duration1: [
      {
        Level: 1,
        Time: 7000,
      },
      {
        Level: 2,
        Time: 9000,
      },
      {
        Level: 3,
        Time: 11000,
      },
      {
        Level: 4,
        Time: 13000,
      },
      {
        Level: 5,
        Time: 15000,
      },
    ],
    Cooldown: [
      {
        Level: 1,
        Time: 3000,
      },
      {
        Level: 2,
        Time: 2500,
      },
      {
        Level: 3,
        Time: 2000,
      },
      {
        Level: 4,
        Time: 1500,
      },
      {
        Level: 5,
        Time: 1000,
      },
    ],
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 10,
        },
        {
          Level: 2,
          Amount: 12,
        },
        {
          Level: 3,
          Amount: 14,
        },
        {
          Level: 4,
          Amount: 16,
        },
        {
          Level: 5,
          Amount: 18,
        },
      ],
    },
    Status: "Sv_RootTwist",
  },
  {
    Id: 5030,
    Name: "SU_SV_ROOTTWIST_ATK",
    Description: "Silver Vine Root Twist Attack",
    MaxLevel: 5,
    Type: "Misc",
    TargetType: "Attack",
    DamageFlags: {
      IgnoreElement: true,
      IgnoreDefense: true,
      IgnoreFlee: true,
    },
    Hit: "Single",
    HitCount: 1,
    Element: "Poison",
    Requires: {
      SpCost: 1,
    },
  },
  {
    Id: 5031,
    Name: "SU_POWEROFLIFE",
    Description: "Power of Life",
    MaxLevel: 1,
  },
  {
    Id: 5032,
    Name: "SU_SCAROFTAROU",
    Description: "Scar of Tarou",
    MaxLevel: 5,
    Type: "Weapon",
    TargetType: "Attack",
    Range: 9,
    Hit: "Single",
    HitCount: 1,
    Element: "Weapon",
    CastCancel: true,
    CastTime: 500,
    AfterCastActDelay: 1000,
    Duration1: 9000,
    Duration2: 1000,
    Cooldown: 10000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 10,
        },
        {
          Level: 2,
          Amount: 12,
        },
        {
          Level: 3,
          Amount: 14,
        },
        {
          Level: 4,
          Amount: 16,
        },
        {
          Level: 5,
          Amount: 18,
        },
      ],
    },
    Status: "BiteScar",
  },
  {
    Id: 5033,
    Name: "SU_PICKYPECK",
    Description: "Picky Peck",
    MaxLevel: 5,
    Type: "Weapon",
    TargetType: "Attack",
    Range: 9,
    Hit: "Multi_Hit",
    HitCount: -5,
    Element: "Weapon",
    CastCancel: true,
    CastTime: 1000,
    AfterCastActDelay: 1000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 10,
        },
        {
          Level: 2,
          Amount: 12,
        },
        {
          Level: 3,
          Amount: 14,
        },
        {
          Level: 4,
          Amount: 16,
        },
        {
          Level: 5,
          Amount: 18,
        },
      ],
    },
  },
  {
    Id: 5034,
    Name: "SU_PICKYPECK_DOUBLE_ATK",
    Description: "Picky Peck Double Attack",
    MaxLevel: 5,
    Type: "Weapon",
    TargetType: "Attack",
    Hit: "Multi_Hit",
    HitCount: -5,
    Element: "Weapon",
    CastCancel: true,
    AfterCastActDelay: 1000,
    Requires: {
      SpCost: 1,
    },
  },
  {
    Id: 5035,
    Name: "SU_ARCLOUSEDASH",
    Description: "Arclouse Dash",
    MaxLevel: 5,
    TargetType: "Support",
    DamageFlags: {
      NoDamage: true,
    },
    Range: 9,
    Hit: "Single",
    HitCount: 1,
    CastCancel: true,
    CastTime: 1000,
    AfterCastActDelay: 1000,
    Duration1: [
      {
        Level: 1,
        Time: 60000,
      },
      {
        Level: 2,
        Time: 70000,
      },
      {
        Level: 3,
        Time: 80000,
      },
      {
        Level: 4,
        Time: 90000,
      },
      {
        Level: 5,
        Time: 100000,
      },
    ],
    Cooldown: 10000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 12,
        },
        {
          Level: 2,
          Amount: 14,
        },
        {
          Level: 3,
          Amount: 16,
        },
        {
          Level: 4,
          Amount: 18,
        },
        {
          Level: 5,
          Amount: 20,
        },
      ],
    },
    Status: "ArclouseDash",
  },
  {
    Id: 5036,
    Name: "SU_LUNATICCARROTBEAT",
    Description: "Lunatic Carrot Beat",
    MaxLevel: 5,
    Type: "Weapon",
    TargetType: "Attack",
    DamageFlags: {
      Splash: true,
    },
    Range: 9,
    Hit: "Multi_Hit",
    HitCount: -3,
    Element: "Weapon",
    SplashArea: [
      {
        Level: 1,
        Area: 1,
      },
      {
        Level: 2,
        Area: 1,
      },
      {
        Level: 3,
        Area: 2,
      },
      {
        Level: 4,
        Area: 2,
      },
      {
        Level: 5,
        Area: 3,
      },
    ],
    CastCancel: true,
    CastTime: 1000,
    AfterCastActDelay: 1000,
    Duration2: 4500,
    Cooldown: 6000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 15,
        },
        {
          Level: 2,
          Amount: 20,
        },
        {
          Level: 3,
          Amount: 25,
        },
        {
          Level: 4,
          Amount: 30,
        },
        {
          Level: 5,
          Amount: 35,
        },
      ],
    },
    Status: "Stun",
  },
  {
    Id: 5037,
    Name: "SU_POWEROFSEA",
    Description: "Power of Sea",
    MaxLevel: 1,
  },
  {
    Id: 5038,
    Name: "SU_TUNABELLY",
    Description: "Tuna Belly",
    MaxLevel: 5,
    TargetType: "Support",
    DamageFlags: {
      NoDamage: true,
    },
    Range: 9,
    Hit: "Single",
    HitCount: 1,
    CastCancel: true,
    CastTime: 1000,
    AfterCastActDelay: 1000,
    Duration1: 5000,
    Cooldown: [
      {
        Level: 1,
        Time: 2000,
      },
      {
        Level: 2,
        Time: 5000,
      },
      {
        Level: 3,
        Time: 8000,
      },
      {
        Level: 4,
        Time: 11000,
      },
      {
        Level: 5,
        Time: 14000,
      },
    ],
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 20,
        },
        {
          Level: 2,
          Amount: 30,
        },
        {
          Level: 3,
          Amount: 40,
        },
        {
          Level: 4,
          Amount: 50,
        },
        {
          Level: 5,
          Amount: 60,
        },
      ],
    },
  },
  {
    Id: 5039,
    Name: "SU_TUNAPARTY",
    Description: "Tuna Party",
    MaxLevel: 5,
    TargetType: "Support",
    DamageFlags: {
      NoDamage: true,
    },
    Range: 9,
    Hit: "Single",
    HitCount: 1,
    CastCancel: true,
    AfterCastActDelay: 1000,
    Duration1: 30000,
    Cooldown: 20000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 20,
        },
        {
          Level: 2,
          Amount: 30,
        },
        {
          Level: 3,
          Amount: 40,
        },
        {
          Level: 4,
          Amount: 50,
        },
        {
          Level: 5,
          Amount: 60,
        },
      ],
    },
    Status: "TunaParty",
  },
  {
    Id: 5040,
    Name: "SU_BUNCHOFSHRIMP",
    Description: "Bunch of Shrimp",
    MaxLevel: 5,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
      Splash: true,
    },
    Hit: "Single",
    HitCount: 1,
    SplashArea: -1,
    CastCancel: true,
    AfterCastActDelay: 1000,
    Duration1: [
      {
        Level: 1,
        Time: 60000,
      },
      {
        Level: 2,
        Time: 90000,
      },
      {
        Level: 3,
        Time: 120000,
      },
      {
        Level: 4,
        Time: 150000,
      },
      {
        Level: 5,
        Time: 180000,
      },
    ],
    Duration2: 120000,
    Cooldown: 10000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 44,
        },
        {
          Level: 2,
          Amount: 48,
        },
        {
          Level: 3,
          Amount: 52,
        },
        {
          Level: 4,
          Amount: 56,
        },
        {
          Level: 5,
          Amount: 60,
        },
      ],
      ItemCost: [
        {
          Item: "Prawn",
          Amount: 1,
        },
      ],
    },
    Status: "Shrimp",
  },
  {
    Id: 5041,
    Name: "SU_FRESHSHRIMP",
    Description: "Fresh Shrimp",
    MaxLevel: 5,
    TargetType: "Support",
    DamageFlags: {
      NoDamage: true,
      Splash: true,
    },
    Range: 9,
    Hit: "Single",
    HitCount: 1,
    CastCancel: true,
    AfterCastActDelay: 1000,
    Duration1: 120000,
    Cooldown: [
      {
        Level: 1,
        Time: 6000,
      },
      {
        Level: 2,
        Time: 5000,
      },
      {
        Level: 3,
        Time: 4000,
      },
      {
        Level: 4,
        Time: 3000,
      },
      {
        Level: 5,
        Time: 2000,
      },
    ],
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 22,
        },
        {
          Level: 2,
          Amount: 24,
        },
        {
          Level: 3,
          Amount: 26,
        },
        {
          Level: 4,
          Amount: 28,
        },
        {
          Level: 5,
          Amount: 30,
        },
      ],
    },
    Status: "FreshShrimp",
  },
  {
    Id: 5042,
    Name: "SU_CN_METEOR2",
    Description: "Catnip Meteor 2",
    MaxLevel: 5,
    Type: "Magic",
    TargetType: "Ground",
    Range: 9,
    Hit: "Multi_Hit",
    HitCount: -5,
    SplashArea: 3,
    CastCancel: true,
    Duration1: [
      {
        Level: 1,
        Time: 1500,
      },
      {
        Level: 2,
        Time: 2000,
      },
      {
        Level: 3,
        Time: 2500,
      },
      {
        Level: 4,
        Time: 3000,
      },
      {
        Level: 5,
        Time: 3500,
      },
    ],
    Duration2: 20000,
    Requires: {
      ItemCost: [
        {
          Item: "Nepeta_Cataria",
          Amount: 1,
        },
      ],
    },
    Unit: {
      Id: "Dummyskill",
      Range: 3,
      Interval: 500,
      Target: "Enemy",
      Flag: {
        PathCheck: true,
      },
    },
  },
  {
    Id: 5043,
    Name: "SU_LUNATICCARROTBEAT2",
    Description: "Lunatic Carrot Beat 2",
    MaxLevel: 5,
    Type: "Weapon",
    TargetType: "Attack",
    DamageFlags: {
      Splash: true,
    },
    Range: 9,
    Hit: "Multi_Hit",
    HitCount: -3,
    Element: "Weapon",
    SplashArea: [
      {
        Level: 1,
        Area: 1,
      },
      {
        Level: 2,
        Area: 1,
      },
      {
        Level: 3,
        Area: 2,
      },
      {
        Level: 4,
        Area: 2,
      },
      {
        Level: 5,
        Area: 3,
      },
    ],
    CastCancel: true,
    Duration2: 5000,
    Requires: {
      ItemCost: [
        {
          Item: "Carrot",
          Amount: 1,
        },
      ],
    },
  },
  {
    Id: 5044,
    Name: "SU_SOULATTACK",
    Description: "Soul Attack",
    MaxLevel: 1,
    Range: 14,
  },
  {
    Id: 5045,
    Name: "SU_POWEROFFLOCK",
    Description: "Power of Flock",
    MaxLevel: 5,
    Type: "Magic",
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
      Splash: true,
    },
    Hit: "Single",
    SplashArea: [
      {
        Level: 1,
        Area: 3,
      },
      {
        Level: 2,
        Area: 4,
      },
      {
        Level: 3,
        Area: 5,
      },
      {
        Level: 4,
        Area: 6,
      },
      {
        Level: 5,
        Area: -1,
      },
    ],
    CastCancel: true,
    CastTime: [
      {
        Level: 1,
        Time: 5000,
      },
      {
        Level: 2,
        Time: 4000,
      },
      {
        Level: 3,
        Time: 3000,
      },
      {
        Level: 4,
        Time: 2000,
      },
      {
        Level: 5,
        Time: 1000,
      },
    ],
    AfterCastActDelay: 1000,
    Duration1: 15000,
    Duration2: 10000,
    Cooldown: 100000,
    Requires: {
      SpCost: 50,
    },
  },
  {
    Id: 5046,
    Name: "SU_SVG_SPIRIT",
    Description: "Spirit of Savage",
    MaxLevel: 5,
    Type: "Weapon",
    TargetType: "Attack",
    Range: 9,
    Hit: "Multi_Hit",
    HitCount: 1,
    Element: "Weapon",
    SplashArea: 1,
    ActiveInstance: 14,
    CastCancel: true,
    CastTime: [
      {
        Level: 1,
        Time: 3000,
      },
      {
        Level: 2,
        Time: 3000,
      },
      {
        Level: 3,
        Time: 2500,
      },
      {
        Level: 4,
        Time: 2000,
      },
    ],
    AfterCastActDelay: 1000,
    Cooldown: 22000,
    Requires: {
      SpCost: 60,
    },
  },
  {
    Id: 5047,
    Name: "SU_HISS",
    Description: "Hiss",
    MaxLevel: 5,
    Type: "Magic",
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
      Splash: true,
    },
    Hit: "Single",
    HitCount: 1,
    SplashArea: -1,
    CastCancel: true,
    CastTime: 1000,
    AfterCastActDelay: 1000,
    Duration1: 3000,
    Duration2: [
      {
        Level: 1,
        Time: 3000,
      },
      {
        Level: 2,
        Time: 3000,
      },
      {
        Level: 3,
        Time: 4000,
      },
      {
        Level: 4,
        Time: 4000,
      },
      {
        Level: 5,
        Time: 5000,
      },
    ],
    Cooldown: 60000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 50,
        },
        {
          Level: 2,
          Amount: 46,
        },
        {
          Level: 3,
          Amount: 42,
        },
        {
          Level: 4,
          Amount: 38,
        },
        {
          Level: 5,
          Amount: 34,
        },
      ],
    },
    Status: "Hiss",
  },
  {
    Id: 5048,
    Name: "SU_NYANGGRASS",
    Description: "Nyang Grass",
    MaxLevel: 5,
    TargetType: "Ground",
    DamageFlags: {
      NoDamage: true,
    },
    Range: 9,
    Hit: "Single",
    HitCount: 1,
    ActiveInstance: 1,
    CastCancel: true,
    CastTime: [
      {
        Level: 1,
        Time: 3000,
      },
      {
        Level: 2,
        Time: 2500,
      },
      {
        Level: 3,
        Time: 2000,
      },
      {
        Level: 4,
        Time: 1500,
      },
      {
        Level: 5,
        Time: 1000,
      },
    ],
    AfterCastActDelay: 1000,
    Duration1: [
      {
        Level: 1,
        Time: 6000,
      },
      {
        Level: 2,
        Time: 7000,
      },
      {
        Level: 3,
        Time: 8000,
      },
      {
        Level: 4,
        Time: 9000,
      },
      {
        Level: 5,
        Time: 10000,
      },
    ],
    Cooldown: 60000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 50,
        },
        {
          Level: 2,
          Amount: 48,
        },
        {
          Level: 3,
          Amount: 46,
        },
        {
          Level: 4,
          Amount: 44,
        },
        {
          Level: 5,
          Amount: 42,
        },
      ],
    },
    Unit: {
      Id: "Nyanggrass",
      Layout: [
        {
          Level: 1,
          Size: 2,
        },
        {
          Level: 2,
          Size: 2,
        },
        {
          Level: 3,
          Size: 3,
        },
        {
          Level: 4,
          Size: 3,
        },
        {
          Level: 5,
          Size: 4,
        },
      ],
      Interval: -1,
      Target: "Enemy",
      Flag: {
        PathCheck: true,
        RangedSingleUnit: true,
      },
    },
    Status: "NyangGrass",
  },
  {
    Id: 5049,
    Name: "SU_GROOMING",
    Description: "Grooming",
    MaxLevel: 5,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Hit: "Single",
    HitCount: 1,
    CastCancel: true,
    CastTime: 1000,
    AfterCastActDelay: 1000,
    Duration1: [
      {
        Level: 1,
        Time: 3000,
      },
      {
        Level: 2,
        Time: 4000,
      },
      {
        Level: 3,
        Time: 5000,
      },
      {
        Level: 4,
        Time: 6000,
      },
      {
        Level: 5,
        Time: 7000,
      },
    ],
    Cooldown: [
      {
        Level: 1,
        Time: 60000,
      },
      {
        Level: 2,
        Time: 50000,
      },
      {
        Level: 3,
        Time: 40000,
      },
      {
        Level: 4,
        Time: 30000,
      },
      {
        Level: 5,
        Time: 20000,
      },
    ],
    Requires: {
      SpCost: 15,
    },
    Status: "Grooming",
  },
  {
    Id: 5050,
    Name: "SU_PURRING",
    Description: "Purring",
    MaxLevel: 5,
    Type: "Magic",
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
      Splash: true,
    },
    Hit: "Single",
    HitCount: 1,
    SplashArea: -1,
    CastCancel: true,
    CastTime: 1000,
    AfterCastActDelay: 1000,
    Duration1: [
      {
        Level: 1,
        Time: 7000,
      },
      {
        Level: 2,
        Time: 9000,
      },
      {
        Level: 3,
        Time: 11000,
      },
      {
        Level: 4,
        Time: 13000,
      },
      {
        Level: 5,
        Time: 15000,
      },
    ],
    Cooldown: [
      {
        Level: 1,
        Time: 65000,
      },
      {
        Level: 2,
        Time: 60000,
      },
      {
        Level: 3,
        Time: 55000,
      },
      {
        Level: 4,
        Time: 50000,
      },
      {
        Level: 5,
        Time: 45000,
      },
    ],
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 70,
        },
        {
          Level: 2,
          Amount: 65,
        },
        {
          Level: 3,
          Amount: 60,
        },
        {
          Level: 4,
          Amount: 55,
        },
        {
          Level: 5,
          Amount: 50,
        },
      ],
    },
    Status: "Grooming",
  },
  {
    Id: 5051,
    Name: "SU_SHRIMPARTY",
    Description: "Tasty Shrimp Party",
    MaxLevel: 5,
    Type: "Magic",
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
      Splash: true,
    },
    Hit: "Single",
    HitCount: 1,
    SplashArea: -1,
    CastCancel: true,
    CastTime: [
      {
        Level: 1,
        Time: 3500,
      },
      {
        Level: 2,
        Time: 3000,
      },
      {
        Level: 3,
        Time: 2500,
      },
      {
        Level: 4,
        Time: 2000,
      },
      {
        Level: 5,
        Time: 1500,
      },
    ],
    AfterCastActDelay: 1000,
    Duration1: [
      {
        Level: 1,
        Time: 12000,
      },
      {
        Level: 2,
        Time: 14000,
      },
      {
        Level: 3,
        Time: 16000,
      },
      {
        Level: 4,
        Time: 18000,
      },
      {
        Level: 5,
        Time: 20000,
      },
    ],
    Cooldown: [
      {
        Level: 1,
        Time: 65000,
      },
      {
        Level: 2,
        Time: 60000,
      },
      {
        Level: 3,
        Time: 55000,
      },
      {
        Level: 4,
        Time: 50000,
      },
      {
        Level: 5,
        Time: 45000,
      },
    ],
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 100,
        },
        {
          Level: 2,
          Amount: 90,
        },
        {
          Level: 3,
          Amount: 80,
        },
        {
          Level: 4,
          Amount: 70,
        },
        {
          Level: 5,
          Amount: 60,
        },
      ],
    },
    Status: "ShrimpBlessing",
  },
  {
    Id: 5052,
    Name: "SU_SPIRITOFLIFE",
    Description: "Spirit of Life",
    MaxLevel: 1,
  },
  {
    Id: 5053,
    Name: "SU_MEOWMEOW",
    Description: "Meow Meow",
    MaxLevel: 5,
    Type: "Magic",
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
      Splash: true,
    },
    Hit: "Single",
    HitCount: 1,
    SplashArea: -1,
    CastCancel: true,
    AfterCastActDelay: 1000,
    Duration1: [
      {
        Level: 1,
        Time: 8000,
      },
      {
        Level: 2,
        Time: 8000,
      },
      {
        Level: 3,
        Time: 10000,
      },
      {
        Level: 4,
        Time: 10000,
      },
      {
        Level: 5,
        Time: 12000,
      },
    ],
    Cooldown: [
      {
        Level: 1,
        Time: 180000,
      },
      {
        Level: 2,
        Time: 160000,
      },
      {
        Level: 3,
        Time: 140000,
      },
      {
        Level: 4,
        Time: 120000,
      },
      {
        Level: 5,
        Time: 100000,
      },
    ],
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 100,
        },
        {
          Level: 2,
          Amount: 90,
        },
        {
          Level: 3,
          Amount: 80,
        },
        {
          Level: 4,
          Amount: 70,
        },
        {
          Level: 5,
          Amount: 60,
        },
      ],
    },
    Status: "Chattering",
  },
  {
    Id: 5054,
    Name: "SU_SPIRITOFLAND",
    Description: "Spirit of Land",
    MaxLevel: 1,
    Duration1: 3000,
  },
  {
    Id: 5055,
    Name: "SU_CHATTERING",
    Description: "Chattering",
    MaxLevel: 5,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Hit: "Single",
    HitCount: 1,
    CastCancel: true,
    AfterCastActDelay: 1000,
    Duration1: 5000,
    Duration2: 10000,
    Cooldown: [
      {
        Level: 1,
        Time: 140000,
      },
      {
        Level: 2,
        Time: 120000,
      },
      {
        Level: 3,
        Time: 100000,
      },
      {
        Level: 4,
        Time: 80000,
      },
      {
        Level: 5,
        Time: 60000,
      },
    ],
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 50,
        },
        {
          Level: 2,
          Amount: 45,
        },
        {
          Level: 3,
          Amount: 40,
        },
        {
          Level: 4,
          Amount: 35,
        },
        {
          Level: 5,
          Amount: 30,
        },
      ],
    },
    Status: "Chattering",
  },
  {
    Id: 5056,
    Name: "SU_SPIRITOFSEA",
    Description: "Spirit of Sea",
    MaxLevel: 1,
  },
  {
    Id: 5063,
    Name: "WE_CALLALLFAMILY",
    Description: "Call All Family",
    MaxLevel: 1,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      IsWedding: true,
    },
    Range: 1,
    Hit: "Single",
    HitCount: 1,
    CastCancel: true,
    CastTime: 1500,
    FixedCastTime: 1500,
    CastTimeFlags: {
      IgnoreDex: true,
    },
    Requires: {
      SpCost: 100,
    },
  },
  {
    Id: 5064,
    Name: "WE_ONEFOREVER",
    Description: "One Forever",
    MaxLevel: 1,
    TargetType: "Support",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      IsWedding: true,
    },
    Range: 3,
    Hit: "Single",
    HitCount: 1,
    CastCancel: true,
    CastTime: 1500,
    FixedCastTime: 1500,
    CastTimeFlags: {
      IgnoreDex: true,
    },
    Requires: {
      SpCost: 100,
    },
  },
  {
    Id: 5065,
    Name: "WE_CHEERUP",
    Description: "Cheer Up",
    MaxLevel: 1,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
      Splash: true,
    },
    Flags: {
      IsWedding: true,
    },
    Range: 1,
    Hit: "Single",
    HitCount: 1,
    SplashArea: 3,
    CastCancel: true,
    CastTime: 1500,
    Duration1: 60000,
    FixedCastTime: 1500,
    CastTimeFlags: {
      IgnoreDex: true,
    },
    Requires: {
      SpCost: 50,
    },
    Status: "CheerUp",
  },
  {
    Id: 5067,
    Name: "ALL_EQSWITCH",
    Description: "Equip Switch",
    MaxLevel: 1,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Cooldown: 10000,
    FixedCastTime: 60,
    CastTimeFlags: {
      IgnoreDex: true,
      IgnoreStatus: true,
      IgnoreItemBonus: true,
    },
    CastDelayFlags: {
      IgnoreDex: true,
      IgnoreStatus: true,
      IgnoreItemBonus: true,
    },
  },
  {
    Id: 5068,
    Name: "CG_SPECIALSINGER",
    Description: "Skilled Special Singer",
    MaxLevel: 1,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Range: 1,
    Duration1: 10000,
    Cooldown: 60000,
    Requires: {
      SpCost: 1,
    },
  },
  {
    Id: 5072,
    Name: "AB_VITUPERATUM",
    Description: "Vituperatum",
    MaxLevel: 5,
    Type: "Magic",
    TargetType: "Attack",
    DamageFlags: {
      NoDamage: true,
      Splash: true,
    },
    Range: 9,
    Hit: "Single",
    SplashArea: [
      {
        Level: 1,
        Area: 1,
      },
      {
        Level: 2,
        Area: 1,
      },
      {
        Level: 3,
        Area: 1,
      },
      {
        Level: 4,
        Area: 2,
      },
      {
        Level: 5,
        Area: 2,
      },
    ],
    CastCancel: true,
    CastTime: 1000,
    AfterCastActDelay: 1000,
    Duration1: 600000,
    Cooldown: 5000,
    FixedCastTime: [
      {
        Level: 1,
        Time: 3000,
      },
      {
        Level: 2,
        Time: 2500,
      },
      {
        Level: 3,
        Time: 2000,
      },
      {
        Level: 4,
        Time: 1500,
      },
      {
        Level: 5,
        Time: 1000,
      },
    ],
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 144,
        },
        {
          Level: 2,
          Amount: 120,
        },
        {
          Level: 3,
          Amount: 106,
        },
        {
          Level: 4,
          Amount: 92,
        },
        {
          Level: 5,
          Amount: 78,
        },
      ],
      ItemCost: [
        {
          Item: "Blue_Gemstone",
          Amount: 1,
        },
      ],
    },
    Status: "Aeterna",
  },
  {
    Id: 5073,
    Name: "AB_CONVENIO",
    Description: "Convenio",
    MaxLevel: 1,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Hit: "Single",
    CastCancel: true,
    CastTime: 2000,
    AfterCastActDelay: 1000,
    Cooldown: 5000,
    FixedCastTime: 2000,
    Requires: {
      SpCost: 70,
    },
  },
  {
    Id: 5075,
    Name: "NV_BREAKTHROUGH",
    Description: "Break Through",
    MaxLevel: 5,
  },
  {
    Id: 5076,
    Name: "NV_HELPANGEL",
    Description: "Help Angel",
    MaxLevel: 1,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
      Splash: true,
    },
    Hit: "Single",
    HitCount: 1,
    SplashArea: 7,
    CastCancel: true,
    AfterCastActDelay: 500,
    Duration1: 20000,
    Cooldown: 300000,
    Requires: {
      SpCost: 1,
    },
    Status: "HelpAngel",
  },
  {
    Id: 5077,
    Name: "NV_TRANSCENDENCE",
    Description: "Transcendence",
    MaxLevel: 5,
  },
  {
    Id: 5078,
    Name: "WL_READING_SB_READING",
    Description: "Reading Spellbook",
    MaxLevel: 10,
    TargetType: "Self",
    CastTime: 5000,
    AfterCastActDelay: 500,
    FixedCastTime: 1000,
  },
  {
    Id: 5201,
    Name: "DK_SERVANTWEAPON",
    Description: "Servant Weapon",
    MaxLevel: 5,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Hit: "Single",
    HitCount: 1,
    GiveAp: [
      {
        Level: 1,
        Amount: 6,
      },
      {
        Level: 2,
        Amount: 12,
      },
      {
        Level: 3,
        Amount: 18,
      },
      {
        Level: 4,
        Amount: 24,
      },
      {
        Level: 5,
        Amount: 30,
      },
    ],
    CastCancel: true,
    Duration1: [
      {
        Level: 1,
        Time: 30000,
      },
      {
        Level: 2,
        Time: 60000,
      },
      {
        Level: 3,
        Time: 90000,
      },
      {
        Level: 4,
        Time: 120000,
      },
      {
        Level: 5,
        Time: 150000,
      },
    ],
    Duration2: [
      {
        Level: 1,
        Time: 5000,
      },
      {
        Level: 2,
        Time: 4000,
      },
      {
        Level: 3,
        Time: 3000,
      },
      {
        Level: 4,
        Time: 2000,
      },
      {
        Level: 5,
        Time: 1000,
      },
    ],
    Cooldown: [
      {
        Level: 1,
        Time: 30000,
      },
      {
        Level: 2,
        Time: 60000,
      },
      {
        Level: 3,
        Time: 90000,
      },
      {
        Level: 4,
        Time: 120000,
      },
      {
        Level: 5,
        Time: 150000,
      },
    ],
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 30,
        },
        {
          Level: 2,
          Amount: 40,
        },
        {
          Level: 3,
          Amount: 50,
        },
        {
          Level: 4,
          Amount: 60,
        },
        {
          Level: 5,
          Amount: 70,
        },
      ],
    },
    Status: "ServantWeapon",
  },
  {
    Id: 5202,
    Name: "DK_SERVANTWEAPON_ATK",
    Description: "Servant Weapon Attack",
    MaxLevel: 5,
    Type: "Weapon",
    TargetType: "Attack",
    DamageFlags: {
      Critical: true,
    },
    Range: 1,
    Hit: "Single",
    HitCount: 1,
    Element: "Weapon",
    Requires: {
      SpCost: 1,
    },
  },
  {
    Id: 5203,
    Name: "DK_SERVANT_W_SIGN",
    Description: "Servant Weapon Sign",
    MaxLevel: 5,
    TargetType: "Attack",
    DamageFlags: {
      NoDamage: true,
    },
    Range: 9,
    Hit: "Single",
    HitCount: 1,
    CastCancel: true,
    Duration1: [
      {
        Level: 1,
        Time: 2000,
      },
      {
        Level: 2,
        Time: 4000,
      },
      {
        Level: 3,
        Time: 6000,
      },
      {
        Level: 4,
        Time: 8000,
      },
      {
        Level: 5,
        Time: 10000,
      },
    ],
    Requires: {
      SpCost: 15,
      SpiritSphereCost: 1,
    },
    Status: "Servant_Sign",
  },
  {
    Id: 5204,
    Name: "DK_SERVANT_W_PHANTOM",
    Description: "Servant Weapon Phantom",
    MaxLevel: 5,
    Type: "Weapon",
    TargetType: "Attack",
    DamageFlags: {
      Splash: true,
      Critical: true,
    },
    Range: 9,
    Hit: "Multi_Hit",
    HitCount: 5,
    Element: "Weapon",
    SplashArea: 2,
    CastCancel: true,
    AfterCastActDelay: 500,
    Duration1: 20000,
    Cooldown: 2000,
    FixedCastTime: 500,
    Requires: {
      SpCost: 40,
      SpiritSphereCost: 5,
    },
    Status: "HandicapState_DeepBlind",
  },
  {
    Id: 5205,
    Name: "DK_SERVANT_W_DEMOL",
    Description: "Servant Weapon Demolition",
    MaxLevel: 5,
    Type: "Weapon",
    TargetType: "Self",
    DamageFlags: {
      Splash: true,
      Critical: true,
    },
    Hit: "Multi_Hit",
    HitCount: 5,
    Element: "Weapon",
    SplashArea: 6,
    GiveAp: 3,
    CastCancel: true,
    AfterCastActDelay: 500,
    Cooldown: 3000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 30,
        },
        {
          Level: 2,
          Amount: 35,
        },
        {
          Level: 3,
          Amount: 40,
        },
        {
          Level: 4,
          Amount: 45,
        },
        {
          Level: 5,
          Amount: 50,
        },
      ],
      SpiritSphereCost: 5,
    },
  },
  {
    Id: 5206,
    Name: "DK_CHARGINGPIERCE",
    Description: "Charging Pierce",
    MaxLevel: 10,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Hit: "Single",
    HitCount: 1,
    CastCancel: true,
    AfterCastActDelay: 500,
    Duration1: [
      {
        Level: 1,
        Time: 90000,
      },
      {
        Level: 2,
        Time: 100000,
      },
      {
        Level: 3,
        Time: 110000,
      },
      {
        Level: 4,
        Time: 120000,
      },
      {
        Level: 5,
        Time: 130000,
      },
      {
        Level: 6,
        Time: 140000,
      },
      {
        Level: 7,
        Time: 150000,
      },
      {
        Level: 8,
        Time: 160000,
      },
      {
        Level: 9,
        Time: 170000,
      },
      {
        Level: 10,
        Time: 180000,
      },
    ],
    Duration2: 5000,
    Cooldown: 60000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 25,
        },
        {
          Level: 2,
          Amount: 30,
        },
        {
          Level: 3,
          Amount: 35,
        },
        {
          Level: 4,
          Amount: 40,
        },
        {
          Level: 5,
          Amount: 45,
        },
        {
          Level: 6,
          Amount: 50,
        },
        {
          Level: 7,
          Amount: 55,
        },
        {
          Level: 8,
          Amount: 60,
        },
        {
          Level: 9,
          Amount: 65,
        },
        {
          Level: 10,
          Amount: 70,
        },
      ],
      Weapon: {
        "2hSword": true,
        "1hSpear": true,
        "2hSpear": true,
      },
    },
    Status: "ChargingPierce",
  },
  {
    Id: 5207,
    Name: "DK_TWOHANDDEF",
    Description: "Two Hand Def",
    MaxLevel: 10,
  },
  {
    Id: 5208,
    Name: "DK_HACKANDSLASHER",
    Description: "Hack And Slasher",
    MaxLevel: 10,
    Type: "Weapon",
    TargetType: "Attack",
    Range: 2,
    Hit: "Single",
    HitCount: 1,
    Element: "Weapon",
    CastCancel: true,
    AfterCastActDelay: 500,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 34,
        },
        {
          Level: 2,
          Amount: 38,
        },
        {
          Level: 3,
          Amount: 42,
        },
        {
          Level: 4,
          Amount: 46,
        },
        {
          Level: 5,
          Amount: 50,
        },
        {
          Level: 6,
          Amount: 54,
        },
        {
          Level: 7,
          Amount: 58,
        },
        {
          Level: 8,
          Amount: 62,
        },
        {
          Level: 9,
          Amount: 66,
        },
        {
          Level: 10,
          Amount: 70,
        },
      ],
      Weapon: {
        "2hSword": true,
        "2hSpear": true,
      },
    },
  },
  {
    Id: 5209,
    Name: "DK_HACKANDSLASHER_ATK",
    Description: "Hack And Slasher Attack",
    MaxLevel: 10,
    Type: "Weapon",
    TargetType: "Attack",
    DamageFlags: {
      Splash: true,
    },
    Range: 2,
    Hit: "Single",
    HitCount: 1,
    Element: "Weapon",
    SplashArea: [
      {
        Level: 1,
        Area: 1,
      },
      {
        Level: 2,
        Area: 1,
      },
      {
        Level: 3,
        Area: 1,
      },
      {
        Level: 4,
        Area: 1,
      },
      {
        Level: 5,
        Area: 2,
      },
      {
        Level: 6,
        Area: 2,
      },
      {
        Level: 7,
        Area: 2,
      },
      {
        Level: 8,
        Area: 2,
      },
      {
        Level: 9,
        Area: 3,
      },
      {
        Level: 10,
        Area: 3,
      },
    ],
    Requires: {
      SpCost: 1,
    },
  },
  {
    Id: 5210,
    Name: "DK_DRAGONIC_AURA",
    Description: "Dragonic Aura",
    MaxLevel: 10,
    Type: "Weapon",
    TargetType: "Attack",
    Range: 7,
    Hit: "Single",
    HitCount: 1,
    Element: "Weapon",
    CastCancel: true,
    AfterCastActDelay: 1000,
    Duration1: 300000,
    Cooldown: 60000,
    Requires: {
      SpCost: 100,
      ApCost: 150,
    },
    Status: "Dragonic_Aura",
  },
  {
    Id: 5211,
    Name: "DK_MADNESS_CRUSHER",
    Description: "Madness Crusher",
    MaxLevel: 5,
    Type: "Weapon",
    TargetType: "Attack",
    DamageFlags: {
      Splash: true,
    },
    Range: 7,
    Hit: "Single",
    HitCount: 1,
    Element: "Weapon",
    SplashArea: [
      {
        Level: 1,
        Area: 1,
      },
      {
        Level: 2,
        Area: 2,
      },
      {
        Level: 3,
        Area: 2,
      },
      {
        Level: 4,
        Area: 3,
      },
      {
        Level: 5,
        Area: 3,
      },
    ],
    GiveAp: 2,
    CastCancel: true,
    AfterCastActDelay: 500,
    Cooldown: 2000,
    FixedCastTime: 500,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 34,
        },
        {
          Level: 2,
          Amount: 38,
        },
        {
          Level: 3,
          Amount: 42,
        },
        {
          Level: 4,
          Amount: 46,
        },
        {
          Level: 5,
          Amount: 50,
        },
      ],
      Weapon: {
        "2hSword": true,
        "2hSpear": true,
      },
    },
  },
  {
    Id: 5212,
    Name: "DK_VIGOR",
    Description: "Vigor",
    MaxLevel: 10,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Hit: "Single",
    HitCount: 1,
    CastCancel: true,
    Duration1: [
      {
        Level: 1,
        Time: 30000,
      },
      {
        Level: 2,
        Time: 60000,
      },
      {
        Level: 3,
        Time: 90000,
      },
      {
        Level: 4,
        Time: 120000,
      },
      {
        Level: 5,
        Time: 150000,
      },
      {
        Level: 6,
        Time: 180000,
      },
      {
        Level: 7,
        Time: 210000,
      },
      {
        Level: 8,
        Time: 240000,
      },
      {
        Level: 9,
        Time: 270000,
      },
      {
        Level: 10,
        Time: 300000,
      },
    ],
    Cooldown: 60000,
    Requires: {
      SpCost: 100,
      ApCost: 150,
    },
    Status: "Vigor",
  },
  {
    Id: 5213,
    Name: "DK_STORMSLASH",
    Description: "Storm Slash",
    MaxLevel: 5,
    Type: "Weapon",
    TargetType: "Attack",
    DamageFlags: {
      Critical: true,
    },
    Range: 2,
    Hit: "Multi_Hit",
    HitCount: [
      {
        Level: 1,
        Count: 1,
      },
      {
        Level: 2,
        Count: 2,
      },
      {
        Level: 3,
        Count: 3,
      },
      {
        Level: 4,
        Count: 4,
      },
      {
        Level: 5,
        Count: 5,
      },
    ],
    Element: "Weapon",
    GiveAp: 1,
    CastCancel: true,
    AfterCastActDelay: 500,
    Cooldown: 1000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 30,
        },
        {
          Level: 2,
          Amount: 35,
        },
        {
          Level: 3,
          Amount: 40,
        },
        {
          Level: 4,
          Amount: 45,
        },
        {
          Level: 5,
          Amount: 50,
        },
      ],
      Weapon: {
        "2hSword": true,
        "2hAxe": true,
      },
    },
  },
  {
    Id: 5214,
    Name: "AG_DEADLY_PROJECTION",
    Description: "Deadly Projection",
    MaxLevel: 5,
    Type: "Magic",
    TargetType: "Attack",
    Flags: {
      IgnoreGtb: true,
    },
    Range: 9,
    Hit: "Single",
    HitCount: 1,
    Element: "Undead",
    CastCancel: true,
    CastTime: 4000,
    AfterCastActDelay: 500,
    Duration1: [
      {
        Level: 1,
        Time: 4000,
      },
      {
        Level: 2,
        Time: 5000,
      },
      {
        Level: 3,
        Time: 6000,
      },
      {
        Level: 4,
        Time: 7000,
      },
      {
        Level: 5,
        Time: 8000,
      },
    ],
    Cooldown: 2000,
    FixedCastTime: 1500,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 80,
        },
        {
          Level: 2,
          Amount: 90,
        },
        {
          Level: 3,
          Amount: 100,
        },
        {
          Level: 4,
          Amount: 110,
        },
        {
          Level: 5,
          Amount: 120,
        },
      ],
    },
    Status: "Deadly_Defeasance",
  },
  {
    Id: 5215,
    Name: "AG_DESTRUCTIVE_HURRICANE",
    Description: "Destructive Hurricane",
    MaxLevel: 5,
    Type: "Magic",
    TargetType: "Self",
    DamageFlags: {
      Splash: true,
    },
    Hit: "Single",
    HitCount: 1,
    Element: "Wind",
    SplashArea: [
      {
        Level: 1,
        Area: 3,
      },
      {
        Level: 2,
        Area: 3,
      },
      {
        Level: 3,
        Area: 4,
      },
      {
        Level: 4,
        Area: 4,
      },
      {
        Level: 5,
        Area: 5,
      },
    ],
    CastCancel: true,
    CastTime: 4000,
    AfterCastActDelay: 1000,
    Duration2: 900000,
    Cooldown: 6000,
    FixedCastTime: 1500,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 80,
        },
        {
          Level: 2,
          Amount: 90,
        },
        {
          Level: 3,
          Amount: 100,
        },
        {
          Level: 4,
          Amount: 110,
        },
        {
          Level: 5,
          Amount: 120,
        },
      ],
    },
    Status: "Climax_Des_Hu",
  },
  {
    Id: 5216,
    Name: "AG_RAIN_OF_CRYSTAL",
    Description: "Rain Of Crystal",
    MaxLevel: 5,
    Type: "Magic",
    TargetType: "Self",
    Hit: "Single",
    HitCount: -2,
    Element: "Water",
    CastCancel: true,
    CastTime: 3000,
    AfterCastActDelay: 500,
    Duration1: 4000,
    Cooldown: 5000,
    FixedCastTime: 1500,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 40,
        },
        {
          Level: 2,
          Amount: 50,
        },
        {
          Level: 3,
          Amount: 60,
        },
        {
          Level: 4,
          Amount: 70,
        },
        {
          Level: 5,
          Amount: 80,
        },
      ],
    },
    Unit: {
      Id: "Rain_Of_Crystal",
      Range: [
        {
          Level: 1,
          Size: 6,
        },
        {
          Level: 2,
          Size: 7,
        },
        {
          Level: 3,
          Size: 8,
        },
        {
          Level: 4,
          Size: 9,
        },
        {
          Level: 5,
          Size: 10,
        },
      ],
      Interval: 500,
      Target: "Enemy",
      Flag: {
        NoOverlap: true,
        PathCheck: true,
      },
    },
  },
  {
    Id: 5217,
    Name: "AG_MYSTERY_ILLUSION",
    Description: "Mystery Illusion",
    MaxLevel: 5,
    Type: "Magic",
    TargetType: "Ground",
    Range: 9,
    Hit: "Single",
    HitCount: 1,
    Element: "Dark",
    CastCancel: true,
    CastTime: 4000,
    AfterCastActDelay: 1000,
    Duration1: 4000,
    Cooldown: 4000,
    FixedCastTime: 1500,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 80,
        },
        {
          Level: 2,
          Amount: 90,
        },
        {
          Level: 3,
          Amount: 100,
        },
        {
          Level: 4,
          Amount: 110,
        },
        {
          Level: 5,
          Amount: 120,
        },
      ],
    },
    Unit: {
      Id: "Mystery_Illusion",
      Range: [
        {
          Level: 1,
          Size: 4,
        },
        {
          Level: 2,
          Size: 4,
        },
        {
          Level: 3,
          Size: 5,
        },
        {
          Level: 4,
          Size: 5,
        },
        {
          Level: 5,
          Size: 6,
        },
      ],
      Interval: 300,
      Target: "Enemy",
      Flag: {
        NoOverlap: true,
        PathCheck: true,
      },
    },
  },
  {
    Id: 5218,
    Name: "AG_VIOLENT_QUAKE",
    Description: "Violent Quake",
    MaxLevel: 5,
    Type: "Magic",
    TargetType: "Ground",
    Range: 9,
    Hit: "Single",
    HitCount: 1,
    Element: "Earth",
    SplashArea: [
      {
        Level: 1,
        Area: 3,
      },
      {
        Level: 2,
        Area: 3,
      },
      {
        Level: 3,
        Area: 4,
      },
      {
        Level: 4,
        Area: 4,
      },
      {
        Level: 5,
        Area: 4,
      },
    ],
    CastCancel: true,
    CastTime: 4000,
    AfterCastActDelay: 1000,
    Duration1: [
      {
        Level: 1,
        Time: 1200,
      },
      {
        Level: 2,
        Time: 2400,
      },
      {
        Level: 3,
        Time: 3600,
      },
      {
        Level: 4,
        Time: 4800,
      },
      {
        Level: 5,
        Time: 6000,
      },
    ],
    Duration2: 30000,
    Cooldown: 6000,
    FixedCastTime: 1500,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 80,
        },
        {
          Level: 2,
          Amount: 90,
        },
        {
          Level: 3,
          Amount: 100,
        },
        {
          Level: 4,
          Amount: 110,
        },
        {
          Level: 5,
          Amount: 120,
        },
      ],
    },
    Unit: {
      Id: "Violent_Quake",
      Range: [
        {
          Level: 1,
          Size: 3,
        },
        {
          Level: 2,
          Size: 3,
        },
        {
          Level: 3,
          Size: 4,
        },
        {
          Level: 4,
          Size: 4,
        },
        {
          Level: 5,
          Size: 4,
        },
      ],
      Interval: 300,
      Target: "Enemy",
      Flag: {
        NoOverlap: true,
        PathCheck: true,
      },
    },
    Status: "Climax_Earth",
  },
  {
    Id: 5219,
    Name: "AG_VIOLENT_QUAKE_ATK",
    Description: "Violent Quake Attack",
    MaxLevel: 5,
    Type: "Magic",
    TargetType: "Attack",
    Range: 9,
    Hit: "Single",
    HitCount: 1,
    Element: "Earth",
    Duration1: 100,
    Requires: {
      SpCost: 1,
    },
    Unit: {
      Id: "Dummyskill",
      Range: 3,
      Interval: 300,
      Target: "Enemy",
      Flag: {
        PathCheck: true,
      },
    },
  },
  {
    Id: 5220,
    Name: "AG_SOUL_VC_STRIKE",
    Description: "Soul Vulcan Strike",
    MaxLevel: 5,
    Type: "Magic",
    TargetType: "Attack",
    DamageFlags: {
      Splash: true,
    },
    Range: 9,
    Hit: "Multi_Hit",
    HitCount: [
      {
        Level: 1,
        Count: 3,
      },
      {
        Level: 2,
        Count: 4,
      },
      {
        Level: 3,
        Count: 5,
      },
      {
        Level: 4,
        Count: 6,
      },
      {
        Level: 5,
        Count: 7,
      },
    ],
    Element: "Ghost",
    SplashArea: [
      {
        Level: 1,
        Area: 1,
      },
      {
        Level: 2,
        Area: 2,
      },
      {
        Level: 3,
        Area: 3,
      },
      {
        Level: 4,
        Area: 4,
      },
      {
        Level: 5,
        Area: 5,
      },
    ],
    CastCancel: true,
    CastTime: 3000,
    AfterCastActDelay: 500,
    Cooldown: 700,
    FixedCastTime: 1000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 80,
        },
        {
          Level: 2,
          Amount: 90,
        },
        {
          Level: 3,
          Amount: 100,
        },
        {
          Level: 4,
          Amount: 110,
        },
        {
          Level: 5,
          Amount: 120,
        },
      ],
    },
  },
  {
    Id: 5221,
    Name: "AG_STRANTUM_TREMOR",
    Description: "Strantum Tremor",
    MaxLevel: 5,
    Type: "Magic",
    TargetType: "Ground",
    Range: 9,
    Hit: "Multi_Hit",
    HitCount: -2,
    Element: "Earth",
    CastCancel: true,
    CastTime: 3000,
    AfterCastActDelay: 500,
    Duration1: 4000,
    Cooldown: 5000,
    FixedCastTime: 1500,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 35,
        },
        {
          Level: 2,
          Amount: 45,
        },
        {
          Level: 3,
          Amount: 55,
        },
        {
          Level: 4,
          Amount: 65,
        },
        {
          Level: 5,
          Amount: 75,
        },
      ],
    },
    Unit: {
      Id: "Strantum_Tremor",
      Range: [
        {
          Level: 1,
          Size: 2,
        },
        {
          Level: 2,
          Size: 2,
        },
        {
          Level: 3,
          Size: 3,
        },
        {
          Level: 4,
          Size: 3,
        },
        {
          Level: 5,
          Size: 4,
        },
      ],
      Interval: 400,
      Target: "Enemy",
      Flag: {
        NoOverlap: true,
        PathCheck: true,
      },
    },
  },
  {
    Id: 5222,
    Name: "AG_ALL_BLOOM",
    Description: "All Bloom",
    MaxLevel: 5,
    Type: "Magic",
    TargetType: "Ground",
    Range: 9,
    Hit: "Single",
    HitCount: 1,
    Element: "Fire",
    SplashArea: [
      {
        Level: 1,
        Area: 3,
      },
      {
        Level: 2,
        Area: 3,
      },
      {
        Level: 3,
        Area: 4,
      },
      {
        Level: 4,
        Area: 4,
      },
      {
        Level: 5,
        Area: 4,
      },
    ],
    CastCancel: true,
    CastTime: 4000,
    AfterCastActDelay: 1000,
    Duration1: [
      {
        Level: 1,
        Time: 1200,
      },
      {
        Level: 2,
        Time: 2400,
      },
      {
        Level: 3,
        Time: 3600,
      },
      {
        Level: 4,
        Time: 4800,
      },
      {
        Level: 5,
        Time: 6000,
      },
    ],
    Duration2: 30000,
    Cooldown: 6000,
    FixedCastTime: 1500,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 80,
        },
        {
          Level: 2,
          Amount: 90,
        },
        {
          Level: 3,
          Amount: 100,
        },
        {
          Level: 4,
          Amount: 110,
        },
        {
          Level: 5,
          Amount: 120,
        },
      ],
    },
    Unit: {
      Id: "All_Bloom",
      Range: [
        {
          Level: 1,
          Size: 3,
        },
        {
          Level: 2,
          Size: 3,
        },
        {
          Level: 3,
          Size: 4,
        },
        {
          Level: 4,
          Size: 4,
        },
        {
          Level: 5,
          Size: 4,
        },
      ],
      Interval: 300,
      Target: "Enemy",
      Flag: {
        NoOverlap: true,
        PathCheck: true,
      },
    },
    Status: "Climax_Bloom",
  },
  {
    Id: 5223,
    Name: "AG_ALL_BLOOM_ATK",
    Description: "All Bloom Attack",
    MaxLevel: 5,
    Type: "Magic",
    TargetType: "Attack",
    Range: 9,
    Hit: "Single",
    HitCount: 1,
    Element: "Fire",
    Duration1: 100,
    Requires: {
      SpCost: 1,
    },
    Unit: {
      Id: "Dummyskill",
      Range: 3,
      Interval: 300,
      Target: "Enemy",
      Flag: {
        PathCheck: true,
      },
    },
  },
  {
    Id: 5224,
    Name: "AG_ALL_BLOOM_ATK2",
    Description: "All Bloom Attack 2",
    MaxLevel: 5,
    Type: "Magic",
    TargetType: "Attack",
    Range: 9,
    Hit: "Single",
    HitCount: 1,
    Element: "Fire",
    Duration1: 100,
    Requires: {
      SpCost: 1,
    },
    Unit: {
      Id: "Dummyskill",
      Range: [
        {
          Level: 1,
          Size: 3,
        },
        {
          Level: 2,
          Size: 3,
        },
        {
          Level: 3,
          Size: 4,
        },
        {
          Level: 4,
          Size: 4,
        },
        {
          Level: 5,
          Size: 4,
        },
      ],
      Interval: 1000,
      Target: "Enemy",
      Flag: {
        PathCheck: true,
      },
    },
  },
  {
    Id: 5225,
    Name: "AG_CRYSTAL_IMPACT",
    Description: "Crystal Impact",
    MaxLevel: 5,
    Type: "Magic",
    TargetType: "Self",
    DamageFlags: {
      Splash: true,
    },
    Hit: "Multi_Hit",
    HitCount: 1,
    Element: "Water",
    SplashArea: [
      {
        Level: 1,
        Area: 3,
      },
      {
        Level: 2,
        Area: 4,
      },
      {
        Level: 3,
        Area: 5,
      },
      {
        Level: 4,
        Area: 6,
      },
      {
        Level: 5,
        Area: 7,
      },
    ],
    CastCancel: true,
    CastTime: 4000,
    AfterCastActDelay: 1000,
    Duration2: 900000,
    Cooldown: 6000,
    FixedCastTime: 1500,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 80,
        },
        {
          Level: 2,
          Amount: 90,
        },
        {
          Level: 3,
          Amount: 100,
        },
        {
          Level: 4,
          Amount: 110,
        },
        {
          Level: 5,
          Amount: 120,
        },
      ],
    },
    Status: "Climax_CryImp",
  },
  {
    Id: 5226,
    Name: "AG_CRYSTAL_IMPACT_ATK",
    Description: "Crystal Impact Attack",
    MaxLevel: 5,
    Type: "Magic",
    TargetType: "Attack",
    DamageFlags: {
      Splash: true,
    },
    Hit: "Single",
    HitCount: 1,
    Element: "Water",
    Requires: {
      SpCost: 1,
    },
  },
  {
    Id: 5227,
    Name: "AG_TORNADO_STORM",
    Description: "Tornado Storm",
    MaxLevel: 5,
    Type: "Magic",
    TargetType: "Ground",
    Range: 9,
    Hit: "Single",
    HitCount: 1,
    Element: "Wind",
    CastCancel: true,
    CastTime: 3000,
    AfterCastActDelay: 500,
    Duration1: 3000,
    Cooldown: 5000,
    FixedCastTime: 1500,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 45,
        },
        {
          Level: 2,
          Amount: 55,
        },
        {
          Level: 3,
          Amount: 65,
        },
        {
          Level: 4,
          Amount: 75,
        },
        {
          Level: 5,
          Amount: 85,
        },
      ],
    },
    Unit: {
      Id: "Tornado_Storm",
      Range: [
        {
          Level: 1,
          Size: 2,
        },
        {
          Level: 2,
          Size: 2,
        },
        {
          Level: 3,
          Size: 3,
        },
        {
          Level: 4,
          Size: 3,
        },
        {
          Level: 5,
          Size: 4,
        },
      ],
      Interval: 300,
      Target: "Enemy",
      Flag: {
        NoOverlap: true,
        PathCheck: true,
      },
    },
  },
  {
    Id: 5228,
    Name: "AG_TWOHANDSTAFF",
    Description: "Two Hand Staff Mastery",
    MaxLevel: 10,
    HitCount: 1,
  },
  {
    Id: 5229,
    Name: "AG_FLORAL_FLARE_ROAD",
    Description: "Floral Flare Road",
    MaxLevel: 5,
    Type: "Magic",
    TargetType: "Ground",
    Range: 9,
    Hit: "Multi_Hit",
    HitCount: -2,
    Element: "Fire",
    CastCancel: true,
    CastTime: 3000,
    AfterCastActDelay: 500,
    Duration1: 5000,
    Cooldown: 5000,
    FixedCastTime: 1500,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 30,
        },
        {
          Level: 2,
          Amount: 40,
        },
        {
          Level: 3,
          Amount: 50,
        },
        {
          Level: 4,
          Amount: 60,
        },
        {
          Level: 5,
          Amount: 70,
        },
      ],
    },
    Unit: {
      Id: "Floral_Flare_Road",
      Range: [
        {
          Level: 1,
          Size: 1,
        },
        {
          Level: 2,
          Size: 2,
        },
        {
          Level: 3,
          Size: 3,
        },
        {
          Level: 4,
          Size: 4,
        },
        {
          Level: 5,
          Size: 5,
        },
      ],
      Interval: 500,
      Target: "Enemy",
      Flag: {
        NoOverlap: true,
        PathCheck: true,
      },
    },
  },
  {
    Id: 5230,
    Name: "AG_ASTRAL_STRIKE",
    Description: "Astral Strike",
    MaxLevel: 10,
    Type: "Magic",
    TargetType: "Ground",
    DamageFlags: {
      Splash: true,
    },
    Range: 9,
    Hit: "Single",
    HitCount: 1,
    SplashArea: [
      {
        Level: 1,
        Area: 2,
      },
      {
        Level: 2,
        Area: 2,
      },
      {
        Level: 3,
        Area: 2,
      },
      {
        Level: 4,
        Area: 3,
      },
      {
        Level: 5,
        Area: 3,
      },
      {
        Level: 6,
        Area: 3,
      },
      {
        Level: 7,
        Area: 4,
      },
      {
        Level: 8,
        Area: 4,
      },
      {
        Level: 9,
        Area: 4,
      },
      {
        Level: 10,
        Area: 5,
      },
    ],
    CastCancel: true,
    CastTime: 8000,
    AfterCastActDelay: 500,
    Duration1: 15000,
    Cooldown: 60000,
    FixedCastTime: 2000,
    Requires: {
      SpCost: 150,
      ApCost: 150,
    },
    Unit: {
      Id: "Astral_Strike",
      Range: [
        {
          Level: 1,
          Size: 2,
        },
        {
          Level: 2,
          Size: 2,
        },
        {
          Level: 3,
          Size: 2,
        },
        {
          Level: 4,
          Size: 3,
        },
        {
          Level: 5,
          Size: 3,
        },
        {
          Level: 6,
          Size: 3,
        },
        {
          Level: 7,
          Size: 4,
        },
        {
          Level: 8,
          Size: 4,
        },
        {
          Level: 9,
          Size: 4,
        },
        {
          Level: 10,
          Size: 5,
        },
      ],
      Interval: 300,
      Target: "Enemy",
      Flag: {
        NoOverlap: true,
        PathCheck: true,
      },
    },
  },
  {
    Id: 5231,
    Name: "AG_ASTRAL_STRIKE_ATK",
    Description: "Astral Strike Attack",
    MaxLevel: 10,
    Type: "Magic",
    TargetType: "Attack",
    Range: 9,
    Hit: "Single",
    HitCount: 1,
    Requires: {
      SpCost: 1,
    },
  },
  {
    Id: 5232,
    Name: "AG_CLIMAX",
    Description: "Climax",
    MaxLevel: 5,
    Type: "Magic",
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Hit: "Single",
    HitCount: 1,
    CastCancel: true,
    AfterCastActDelay: 300,
    Duration1: 300000,
    Cooldown: 300000,
    FixedCastTime: 4000,
    Requires: {
      SpCost: 60,
      ApCost: 200,
    },
    Status: "Climax",
  },
  {
    Id: 5233,
    Name: "AG_ROCK_DOWN",
    Description: "Rock Down",
    MaxLevel: 5,
    Type: "Magic",
    TargetType: "Attack",
    DamageFlags: {
      Splash: true,
    },
    Range: 9,
    Hit: "Multi_Hit",
    HitCount: -5,
    Element: "Earth",
    SplashArea: 1,
    GiveAp: 4,
    CastCancel: true,
    CastTime: 4000,
    AfterCastActDelay: 1000,
    Cooldown: 4000,
    FixedCastTime: 1500,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 65,
        },
        {
          Level: 2,
          Amount: 70,
        },
        {
          Level: 3,
          Amount: 75,
        },
        {
          Level: 4,
          Amount: 80,
        },
        {
          Level: 5,
          Amount: 85,
        },
      ],
    },
  },
  {
    Id: 5234,
    Name: "AG_STORM_CANNON",
    Description: "Storm Cannon",
    MaxLevel: 5,
    Type: "Magic",
    TargetType: "Attack",
    Range: 9,
    Hit: "Single",
    HitCount: 1,
    Element: "Wind",
    SplashArea: 1,
    ActiveInstance: 14,
    GiveAp: 4,
    CastCancel: true,
    CastTime: 4000,
    AfterCastActDelay: 1000,
    Cooldown: 4000,
    FixedCastTime: 1500,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 60,
        },
        {
          Level: 2,
          Amount: 70,
        },
        {
          Level: 3,
          Amount: 80,
        },
        {
          Level: 4,
          Amount: 90,
        },
        {
          Level: 5,
          Amount: 100,
        },
      ],
    },
  },
  {
    Id: 5235,
    Name: "AG_CRIMSON_ARROW",
    Description: "Crimson Arrow",
    MaxLevel: 5,
    Type: "Magic",
    TargetType: "Attack",
    Range: 9,
    Hit: "Single",
    HitCount: 1,
    Element: "Fire",
    SplashArea: 1,
    ActiveInstance: 14,
    GiveAp: 4,
    CastCancel: true,
    CastTime: 4000,
    AfterCastActDelay: 1000,
    Cooldown: 4000,
    FixedCastTime: 1500,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 65,
        },
        {
          Level: 2,
          Amount: 75,
        },
        {
          Level: 3,
          Amount: 85,
        },
        {
          Level: 4,
          Amount: 95,
        },
        {
          Level: 5,
          Amount: 105,
        },
      ],
    },
  },
  {
    Id: 5236,
    Name: "AG_CRIMSON_ARROW_ATK",
    Description: "Crimson Arrow Attack",
    MaxLevel: 5,
    Type: "Magic",
    TargetType: "Attack",
    Range: 9,
    Hit: "Multi_Hit",
    HitCount: -2,
    Element: "Fire",
    Requires: {
      SpCost: 1,
    },
  },
  {
    Id: 5237,
    Name: "AG_FROZEN_SLASH",
    Description: "Frozen Slash",
    MaxLevel: 5,
    Type: "Magic",
    TargetType: "Self",
    DamageFlags: {
      Splash: true,
    },
    Hit: "Single",
    HitCount: 1,
    Element: "Water",
    SplashArea: [
      {
        Level: 1,
        Area: 2,
      },
      {
        Level: 2,
        Area: 2,
      },
      {
        Level: 3,
        Area: 3,
      },
      {
        Level: 4,
        Area: 3,
      },
      {
        Level: 5,
        Area: 4,
      },
    ],
    GiveAp: 4,
    CastCancel: true,
    CastTime: 4000,
    AfterCastActDelay: 1000,
    Cooldown: 4000,
    FixedCastTime: 1500,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 45,
        },
        {
          Level: 2,
          Amount: 55,
        },
        {
          Level: 3,
          Amount: 65,
        },
        {
          Level: 4,
          Amount: 75,
        },
        {
          Level: 5,
          Amount: 85,
        },
      ],
    },
  },
  {
    Id: 5238,
    Name: "IQ_POWERFUL_FAITH",
    Description: "Powerful Faith",
    MaxLevel: 5,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Hit: "Single",
    HitCount: 1,
    CastCancel: true,
    CastTime: 2000,
    AfterCastActDelay: 500,
    Duration1: [
      {
        Level: 1,
        Time: 120000,
      },
      {
        Level: 2,
        Time: 150000,
      },
      {
        Level: 3,
        Time: 180000,
      },
      {
        Level: 4,
        Time: 210000,
      },
      {
        Level: 5,
        Time: 240000,
      },
    ],
    Cooldown: 60000,
    FixedCastTime: 1000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 54,
        },
        {
          Level: 2,
          Amount: 58,
        },
        {
          Level: 3,
          Amount: 62,
        },
        {
          Level: 4,
          Amount: 66,
        },
        {
          Level: 5,
          Amount: 70,
        },
      ],
    },
    Status: "Powerful_Faith",
  },
  {
    Id: 5239,
    Name: "IQ_FIRM_FAITH",
    Description: "Firm Faith",
    MaxLevel: 5,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Hit: "Single",
    HitCount: 1,
    CastCancel: true,
    CastTime: 2000,
    AfterCastActDelay: 500,
    Duration1: [
      {
        Level: 1,
        Time: 120000,
      },
      {
        Level: 2,
        Time: 150000,
      },
      {
        Level: 3,
        Time: 180000,
      },
      {
        Level: 4,
        Time: 210000,
      },
      {
        Level: 5,
        Time: 240000,
      },
    ],
    Cooldown: 60000,
    FixedCastTime: 1000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 54,
        },
        {
          Level: 2,
          Amount: 58,
        },
        {
          Level: 3,
          Amount: 62,
        },
        {
          Level: 4,
          Amount: 66,
        },
        {
          Level: 5,
          Amount: 70,
        },
      ],
    },
    Status: "Firm_Faith",
  },
  {
    Id: 5240,
    Name: "IQ_WILL_OF_FAITH",
    Description: "Will Of Faith",
    MaxLevel: 10,
    CastCancel: true,
  },
  {
    Id: 5241,
    Name: "IQ_OLEUM_SANCTUM",
    Description: "Oleum Sanctum",
    MaxLevel: 5,
    Type: "Weapon",
    TargetType: "Self",
    DamageFlags: {
      Splash: true,
    },
    Range: 9,
    Hit: "Single",
    HitCount: 1,
    Element: "Weapon",
    SplashArea: [
      {
        Level: 1,
        Area: 1,
      },
      {
        Level: 2,
        Area: 1,
      },
      {
        Level: 3,
        Area: 2,
      },
      {
        Level: 4,
        Area: 2,
      },
      {
        Level: 5,
        Area: 3,
      },
    ],
    CastCancel: true,
    AfterCastActDelay: 500,
    Duration1: [
      {
        Level: 1,
        Time: 3000,
      },
      {
        Level: 2,
        Time: 4000,
      },
      {
        Level: 3,
        Time: 5000,
      },
      {
        Level: 4,
        Time: 6000,
      },
      {
        Level: 5,
        Time: 7000,
      },
    ],
    Cooldown: 5000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 30,
        },
        {
          Level: 2,
          Amount: 40,
        },
        {
          Level: 3,
          Amount: 50,
        },
        {
          Level: 4,
          Amount: 60,
        },
        {
          Level: 5,
          Amount: 70,
        },
      ],
      ItemCost: [
        {
          Item: "Holy_Water",
          Amount: 1,
        },
      ],
    },
    Status: "Holy_Oil",
  },
  {
    Id: 5242,
    Name: "IQ_SINCERE_FAITH",
    Description: "Sincere Faith",
    MaxLevel: 5,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Hit: "Single",
    HitCount: 1,
    CastCancel: true,
    CastTime: 2000,
    AfterCastActDelay: 500,
    Duration1: [
      {
        Level: 1,
        Time: 120000,
      },
      {
        Level: 2,
        Time: 150000,
      },
      {
        Level: 3,
        Time: 180000,
      },
      {
        Level: 4,
        Time: 210000,
      },
      {
        Level: 5,
        Time: 240000,
      },
    ],
    Cooldown: 60000,
    FixedCastTime: 1000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 54,
        },
        {
          Level: 2,
          Amount: 58,
        },
        {
          Level: 3,
          Amount: 62,
        },
        {
          Level: 4,
          Amount: 66,
        },
        {
          Level: 5,
          Amount: 70,
        },
      ],
    },
    Status: "Sincere_Faith",
  },
  {
    Id: 5243,
    Name: "IQ_MASSIVE_F_BLASTER",
    Description: "Massive Flame Blaster",
    MaxLevel: 10,
    Type: "Weapon",
    TargetType: "Self",
    DamageFlags: {
      Splash: true,
    },
    Range: 9,
    Hit: "Single",
    HitCount: 1,
    Element: "Weapon",
    SplashArea: 4,
    CastCancel: true,
    AfterCastActDelay: 500,
    Duration1: 300000,
    Cooldown: 60000,
    Requires: {
      SpCost: 100,
      ApCost: 150,
    },
    Status: "Massive_F_Blaster",
  },
  {
    Id: 5244,
    Name: "IQ_EXPOSION_BLASTER",
    Description: "Exposion Blaster",
    MaxLevel: 5,
    Type: "Weapon",
    TargetType: "Self",
    DamageFlags: {
      Splash: true,
    },
    Range: 9,
    Hit: "Single",
    HitCount: 1,
    Element: "Weapon",
    SplashArea: [
      {
        Level: 1,
        Area: 2,
      },
      {
        Level: 2,
        Area: 2,
      },
      {
        Level: 3,
        Area: 3,
      },
      {
        Level: 4,
        Area: 3,
      },
      {
        Level: 5,
        Area: 4,
      },
    ],
    GiveAp: 5,
    CastCancel: true,
    AfterCastActDelay: 500,
    Cooldown: 5000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 80,
        },
        {
          Level: 2,
          Amount: 90,
        },
        {
          Level: 3,
          Amount: 100,
        },
        {
          Level: 4,
          Amount: 110,
        },
        {
          Level: 5,
          Amount: 120,
        },
      ],
    },
  },
  {
    Id: 5245,
    Name: "IQ_FIRST_BRAND",
    Description: "First Brand",
    MaxLevel: 5,
    Type: "Weapon",
    TargetType: "Attack",
    DamageFlags: {
      Splash: true,
    },
    Range: 2,
    Hit: "Single",
    HitCount: 1,
    Element: "Weapon",
    SplashArea: [
      {
        Level: 1,
        Area: 1,
      },
      {
        Level: 2,
        Area: 1,
      },
      {
        Level: 3,
        Area: 2,
      },
      {
        Level: 4,
        Area: 2,
      },
      {
        Level: 5,
        Area: 3,
      },
    ],
    CastCancel: true,
    Duration1: [
      {
        Level: 1,
        Time: 1000,
      },
      {
        Level: 2,
        Time: 2000,
      },
      {
        Level: 3,
        Time: 3000,
      },
      {
        Level: 4,
        Time: 4000,
      },
      {
        Level: 5,
        Time: 5000,
      },
    ],
    Cooldown: 500,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 22,
        },
        {
          Level: 2,
          Amount: 29,
        },
        {
          Level: 3,
          Amount: 36,
        },
        {
          Level: 4,
          Amount: 43,
        },
        {
          Level: 5,
          Amount: 50,
        },
      ],
    },
    Status: "First_Brand",
  },
  {
    Id: 5246,
    Name: "IQ_FIRST_FAITH_POWER",
    Description: "First Faith Power",
    MaxLevel: 5,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Hit: "Single",
    HitCount: 1,
    CastCancel: true,
    CastTime: 2000,
    AfterCastActDelay: 500,
    Duration1: [
      {
        Level: 1,
        Time: 60000,
      },
      {
        Level: 2,
        Time: 120000,
      },
      {
        Level: 3,
        Time: 180000,
      },
      {
        Level: 4,
        Time: 240000,
      },
      {
        Level: 5,
        Time: 300000,
      },
    ],
    Cooldown: 150000,
    FixedCastTime: 1000,
    Requires: {
      SpCost: 60,
    },
    Status: "First_Faith_Power",
  },
  {
    Id: 5247,
    Name: "IQ_JUDGE",
    Description: "Judge",
    MaxLevel: 5,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Hit: "Single",
    HitCount: 1,
    CastCancel: true,
    CastTime: 2000,
    AfterCastActDelay: 500,
    Duration1: [
      {
        Level: 1,
        Time: 60000,
      },
      {
        Level: 2,
        Time: 120000,
      },
      {
        Level: 3,
        Time: 180000,
      },
      {
        Level: 4,
        Time: 240000,
      },
      {
        Level: 5,
        Time: 300000,
      },
    ],
    Cooldown: 150000,
    FixedCastTime: 1000,
    Requires: {
      SpCost: 60,
      ApCost: 100,
      Status: {
        First_Faith_Power: true,
      },
    },
    Status: "Second_Judge",
  },
  {
    Id: 5248,
    Name: "IQ_SECOND_FLAME",
    Description: "Second Flame",
    MaxLevel: 5,
    Type: "Weapon",
    TargetType: "Attack",
    DamageFlags: {
      Splash: true,
    },
    Range: 3,
    Hit: "Single",
    HitCount: 1,
    Element: "Weapon",
    SplashArea: [
      {
        Level: 1,
        Area: 1,
      },
      {
        Level: 2,
        Area: 1,
      },
      {
        Level: 3,
        Area: 2,
      },
      {
        Level: 4,
        Area: 2,
      },
      {
        Level: 5,
        Area: 3,
      },
    ],
    GiveAp: 3,
    CastCancel: true,
    Duration1: 5000,
    Cooldown: 1000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 46,
        },
        {
          Level: 2,
          Amount: 52,
        },
        {
          Level: 3,
          Amount: 58,
        },
        {
          Level: 4,
          Amount: 64,
        },
        {
          Level: 5,
          Amount: 70,
        },
      ],
    },
    Status: "Second_Brand",
  },
  {
    Id: 5249,
    Name: "IQ_SECOND_FAITH",
    Description: "Second Faith",
    MaxLevel: 5,
    Type: "Weapon",
    TargetType: "Attack",
    DamageFlags: {
      Splash: true,
    },
    Range: 3,
    Hit: "Multi_Hit",
    HitCount: -2,
    Element: "Weapon",
    SplashArea: [
      {
        Level: 1,
        Area: 1,
      },
      {
        Level: 2,
        Area: 1,
      },
      {
        Level: 3,
        Area: 2,
      },
      {
        Level: 4,
        Area: 2,
      },
      {
        Level: 5,
        Area: 3,
      },
    ],
    GiveAp: 1,
    CastCancel: true,
    Duration1: 5000,
    Cooldown: 1000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 36,
        },
        {
          Level: 2,
          Amount: 42,
        },
        {
          Level: 3,
          Amount: 48,
        },
        {
          Level: 4,
          Amount: 54,
        },
        {
          Level: 5,
          Amount: 60,
        },
      ],
    },
    Status: "Second_Brand",
  },
  {
    Id: 5250,
    Name: "IQ_SECOND_JUDGEMENT",
    Description: "Second Judgement",
    MaxLevel: 5,
    Type: "Weapon",
    TargetType: "Attack",
    DamageFlags: {
      Splash: true,
    },
    Range: 3,
    Hit: "Multi_Hit",
    HitCount: -3,
    Element: "Weapon",
    SplashArea: [
      {
        Level: 1,
        Area: 1,
      },
      {
        Level: 2,
        Area: 1,
      },
      {
        Level: 3,
        Area: 2,
      },
      {
        Level: 4,
        Area: 2,
      },
      {
        Level: 5,
        Area: 3,
      },
    ],
    GiveAp: 2,
    CastCancel: true,
    Duration1: 5000,
    Cooldown: 1000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 45,
        },
        {
          Level: 2,
          Amount: 50,
        },
        {
          Level: 3,
          Amount: 55,
        },
        {
          Level: 4,
          Amount: 60,
        },
        {
          Level: 5,
          Amount: 65,
        },
      ],
    },
    Status: "Second_Brand",
  },
  {
    Id: 5251,
    Name: "IQ_THIRD_PUNISH",
    Description: "Third Punish",
    MaxLevel: 5,
    Type: "Weapon",
    TargetType: "Attack",
    DamageFlags: {
      Splash: true,
    },
    Range: 3,
    Hit: "Multi_Hit",
    HitCount: -2,
    Element: "Weapon",
    SplashArea: [
      {
        Level: 1,
        Area: 1,
      },
      {
        Level: 2,
        Area: 1,
      },
      {
        Level: 3,
        Area: 2,
      },
      {
        Level: 4,
        Area: 2,
      },
      {
        Level: 5,
        Area: 3,
      },
    ],
    CastCancel: true,
    Duration1: 600000,
    Cooldown: 2000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 56,
        },
        {
          Level: 2,
          Amount: 62,
        },
        {
          Level: 3,
          Amount: 68,
        },
        {
          Level: 4,
          Amount: 74,
        },
        {
          Level: 5,
          Amount: 80,
        },
      ],
    },
  },
  {
    Id: 5252,
    Name: "IQ_THIRD_FLAME_BOMB",
    Description: "Third Flame Bomb",
    MaxLevel: 5,
    Type: "Weapon",
    TargetType: "Attack",
    DamageFlags: {
      Splash: true,
    },
    Range: 3,
    Hit: "Multi_Hit",
    HitCount: 1,
    Element: "Weapon",
    SplashArea: [
      {
        Level: 1,
        Area: 1,
      },
      {
        Level: 2,
        Area: 1,
      },
      {
        Level: 3,
        Area: 2,
      },
      {
        Level: 4,
        Area: 2,
      },
      {
        Level: 5,
        Area: 3,
      },
    ],
    CastCancel: true,
    Cooldown: 2000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 74,
        },
        {
          Level: 2,
          Amount: 78,
        },
        {
          Level: 3,
          Amount: 82,
        },
        {
          Level: 4,
          Amount: 86,
        },
        {
          Level: 5,
          Amount: 90,
        },
      ],
    },
  },
  {
    Id: 5253,
    Name: "IQ_THIRD_CONSECRATION",
    Description: "Third Consecration",
    MaxLevel: 5,
    Type: "Weapon",
    TargetType: "Attack",
    DamageFlags: {
      Splash: true,
    },
    Range: 3,
    Hit: "Multi_Hit",
    HitCount: -3,
    Element: "Weapon",
    SplashArea: [
      {
        Level: 1,
        Area: 1,
      },
      {
        Level: 2,
        Area: 1,
      },
      {
        Level: 3,
        Area: 2,
      },
      {
        Level: 4,
        Area: 2,
      },
      {
        Level: 5,
        Area: 3,
      },
    ],
    CastCancel: true,
    Cooldown: 2000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 65,
        },
        {
          Level: 2,
          Amount: 70,
        },
        {
          Level: 3,
          Amount: 75,
        },
        {
          Level: 4,
          Amount: 80,
        },
        {
          Level: 5,
          Amount: 85,
        },
      ],
    },
  },
  {
    Id: 5254,
    Name: "IQ_THIRD_EXOR_FLAME",
    Description: "Third Exor Flame",
    MaxLevel: 5,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Hit: "Single",
    HitCount: 1,
    CastCancel: true,
    CastTime: 2000,
    AfterCastActDelay: 500,
    Duration1: [
      {
        Level: 1,
        Time: 30000,
      },
      {
        Level: 2,
        Time: 60000,
      },
      {
        Level: 3,
        Time: 90000,
      },
      {
        Level: 4,
        Time: 120000,
      },
      {
        Level: 5,
        Time: 150000,
      },
    ],
    Cooldown: 150000,
    FixedCastTime: 1000,
    Requires: {
      SpCost: 60,
      ApCost: 150,
      Status: {
        Second_Judge: true,
      },
    },
    Status: "Third_Exor_Flame",
  },
  {
    Id: 5255,
    Name: "IG_GUARD_STANCE",
    Description: "Guard Stance",
    MaxLevel: 5,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      Toggleable: true,
    },
    Hit: "Single",
    HitCount: 1,
    CastCancel: true,
    FixedCastTime: 500,
    Requires: {
      SpCost: 50,
      State: "Shield",
    },
    Status: "Guard_Stance",
  },
  {
    Id: 5256,
    Name: "IG_GUARDIAN_SHIELD",
    Description: "Guardian Shield",
    MaxLevel: 5,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
      Splash: true,
    },
    Flags: {
      Toggleable: true,
    },
    Hit: "Single",
    HitCount: 1,
    SplashArea: 10,
    CastCancel: true,
    CastTime: 2000,
    AfterCastActDelay: 500,
    Duration1: 60000,
    Cooldown: 15000,
    FixedCastTime: 1000,
    Requires: {
      SpCost: 60,
      Status: {
        Guard_Stance: true,
      },
    },
    Status: "Guardian_S",
  },
  {
    Id: 5257,
    Name: "IG_REBOUND_SHIELD",
    Description: "Rebound Shield",
    MaxLevel: 5,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Hit: "Single",
    HitCount: 1,
    CastCancel: true,
    CastTime: 2000,
    AfterCastActDelay: 500,
    Duration1: 60000,
    Cooldown: 15000,
    FixedCastTime: 1000,
    Requires: {
      SpCost: 60,
      Status: {
        Guard_Stance: true,
      },
    },
    Status: "Rebound_S",
  },
  {
    Id: 5258,
    Name: "IG_SHIELD_MASTERY",
    Description: "Shield Mastery",
    MaxLevel: 10,
  },
  {
    Id: 5259,
    Name: "IG_SPEAR_SWORD_M",
    Description: "Spear And Sword Mastery",
    MaxLevel: 10,
  },
  {
    Id: 5260,
    Name: "IG_ATTACK_STANCE",
    Description: "Attack Stance",
    MaxLevel: 5,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Hit: "Single",
    HitCount: 1,
    CastCancel: true,
    FixedCastTime: 500,
    Requires: {
      SpCost: 50,
    },
    Status: "Attack_Stance",
  },
  {
    Id: 5261,
    Name: "IG_ULTIMATE_SACRIFICE",
    Description: "Ultimate Sacrifice",
    MaxLevel: 5,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Hit: "Single",
    HitCount: 1,
    SplashArea: [
      {
        Level: 1,
        Area: 1,
      },
      {
        Level: 2,
        Area: 1,
      },
      {
        Level: 3,
        Area: 2,
      },
      {
        Level: 4,
        Area: 2,
      },
      {
        Level: 5,
        Area: 3,
      },
    ],
    CastCancel: true,
    CastTime: 2000,
    AfterCastActDelay: 500,
    Duration1: 300000,
    Cooldown: [
      {
        Level: 1,
        Time: 20000,
      },
      {
        Level: 2,
        Time: 40000,
      },
      {
        Level: 3,
        Time: 60000,
      },
      {
        Level: 4,
        Time: 80000,
      },
      {
        Level: 5,
        Time: 100000,
      },
    ],
    FixedCastTime: 1000,
    Requires: {
      SpCost: 120,
      Status: {
        Guard_Stance: true,
      },
    },
    Status: "Ultimate_S",
  },
  {
    Id: 5262,
    Name: "IG_HOLY_SHIELD",
    Description: "Holy Shield",
    MaxLevel: 5,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Hit: "Single",
    HitCount: 1,
    CastCancel: true,
    CastTime: 2000,
    AfterCastActDelay: 500,
    Duration1: 180000,
    Cooldown: 120000,
    FixedCastTime: 1000,
    Requires: {
      SpCost: 60,
      State: "Shield",
    },
    Status: "Holy_S",
  },
  {
    Id: 5263,
    Name: "IG_GRAND_JUDGEMENT",
    Description: "Grand Judgement",
    MaxLevel: 10,
    Type: "Weapon",
    TargetType: "Attack",
    DamageFlags: {
      Splash: true,
    },
    Range: 9,
    Hit: "Single",
    HitCount: 1,
    Element: "Weapon",
    SplashArea: 3,
    CastCancel: true,
    CastTime: 1000,
    AfterCastActDelay: 500,
    Duration1: 300000,
    Cooldown: 60000,
    FixedCastTime: 1000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 41,
        },
        {
          Level: 2,
          Amount: 44,
        },
        {
          Level: 3,
          Amount: 47,
        },
        {
          Level: 4,
          Amount: 50,
        },
        {
          Level: 5,
          Amount: 53,
        },
        {
          Level: 6,
          Amount: 56,
        },
        {
          Level: 7,
          Amount: 59,
        },
        {
          Level: 8,
          Amount: 62,
        },
        {
          Level: 9,
          Amount: 65,
        },
        {
          Level: 10,
          Amount: 68,
        },
      ],
      ApCost: 150,
      Weapon: {
        "1hSpear": true,
        "2hSpear": true,
      },
      Status: {
        Attack_Stance: true,
      },
    },
    Status: "Spear_Scar",
  },
  {
    Id: 5264,
    Name: "IG_JUDGEMENT_CROSS",
    Description: "Judgement Cross",
    MaxLevel: 10,
    Type: "Magic",
    TargetType: "Attack",
    Range: 9,
    Hit: "Multi_Hit",
    HitCount: -10,
    Element: "Holy",
    CastCancel: true,
    CastTime: 2000,
    AfterCastActDelay: 1000,
    Cooldown: 60000,
    FixedCastTime: 1000,
    Requires: {
      SpCost: 150,
      ApCost: 150,
    },
  },
  {
    Id: 5265,
    Name: "IG_SHIELD_SHOOTING",
    Description: "Shield Shooting",
    MaxLevel: 5,
    Type: "Weapon",
    TargetType: "Attack",
    Range: 9,
    Hit: "Multi_Hit",
    HitCount: -7,
    Element: "Weapon",
    GiveAp: 2,
    CastCancel: true,
    CastTime: 500,
    AfterCastActDelay: 500,
    Duration1: 10000,
    Cooldown: 2000,
    FixedCastTime: 500,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 40,
        },
        {
          Level: 2,
          Amount: 45,
        },
        {
          Level: 3,
          Amount: 50,
        },
        {
          Level: 4,
          Amount: 55,
        },
        {
          Level: 5,
          Amount: 60,
        },
      ],
      State: "Shield",
      Status: {
        Attack_Stance: true,
      },
    },
    Status: "Shield_Power",
  },
  {
    Id: 5266,
    Name: "IG_OVERSLASH",
    Description: "Overslash",
    MaxLevel: 10,
    Type: "Weapon",
    TargetType: "Attack",
    DamageFlags: {
      Splash: true,
    },
    Range: 1,
    Hit: "Multi_Hit",
    HitCount: 2,
    Element: "Weapon",
    SplashArea: 3,
    GiveAp: 3,
    CastCancel: true,
    CastTime: 1000,
    AfterCastActDelay: 500,
    Cooldown: 3000,
    FixedCastTime: 1000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 41,
        },
        {
          Level: 2,
          Amount: 44,
        },
        {
          Level: 3,
          Amount: 47,
        },
        {
          Level: 4,
          Amount: 50,
        },
        {
          Level: 5,
          Amount: 53,
        },
        {
          Level: 6,
          Amount: 56,
        },
        {
          Level: 7,
          Amount: 59,
        },
        {
          Level: 8,
          Amount: 62,
        },
        {
          Level: 9,
          Amount: 65,
        },
        {
          Level: 10,
          Amount: 68,
        },
      ],
      Status: {
        Attack_Stance: true,
      },
    },
  },
  {
    Id: 5267,
    Name: "IG_CROSS_RAIN",
    Description: "Cross Rain",
    MaxLevel: 10,
    Type: "Magic",
    TargetType: "Ground",
    Range: 9,
    Hit: "Single",
    HitCount: 1,
    Element: "Holy",
    GiveAp: 5,
    CastCancel: true,
    CastTime: 1000,
    AfterCastActDelay: 500,
    Duration1: 4500,
    Cooldown: 5000,
    FixedCastTime: 1000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 50,
        },
        {
          Level: 2,
          Amount: 54,
        },
        {
          Level: 3,
          Amount: 58,
        },
        {
          Level: 4,
          Amount: 62,
        },
        {
          Level: 5,
          Amount: 66,
        },
        {
          Level: 6,
          Amount: 70,
        },
        {
          Level: 7,
          Amount: 74,
        },
        {
          Level: 8,
          Amount: 78,
        },
        {
          Level: 9,
          Amount: 82,
        },
        {
          Level: 10,
          Amount: 86,
        },
      ],
    },
    Unit: {
      Id: "Cross_Rain",
      Range: [
        {
          Level: 1,
          Size: 1,
        },
        {
          Level: 2,
          Size: 1,
        },
        {
          Level: 3,
          Size: 1,
        },
        {
          Level: 4,
          Size: 2,
        },
        {
          Level: 5,
          Size: 2,
        },
        {
          Level: 6,
          Size: 2,
        },
        {
          Level: 7,
          Size: 3,
        },
        {
          Level: 8,
          Size: 3,
        },
        {
          Level: 9,
          Size: 3,
        },
        {
          Level: 10,
          Size: 4,
        },
      ],
      Interval: 300,
      Target: "Enemy",
      Flag: {
        NoOverlap: true,
        PathCheck: true,
      },
    },
  },
  {
    Id: 5268,
    Name: "CD_REPARATIO",
    Description: "Reparatio",
    MaxLevel: 5,
    TargetType: "Support",
    DamageFlags: {
      NoDamage: true,
    },
    Range: 9,
    Hit: "Single",
    HitCount: 1,
    CastCancel: true,
    CastTime: 2000,
    AfterCastActDelay: 500,
    Cooldown: [
      {
        Level: 1,
        Time: 150000,
      },
      {
        Level: 2,
        Time: 100000,
      },
      {
        Level: 3,
        Time: 60000,
      },
      {
        Level: 4,
        Time: 30000,
      },
      {
        Level: 5,
        Time: 10000,
      },
    ],
    FixedCastTime: 1000,
    Requires: {
      SpCost: 120,
    },
  },
  {
    Id: 5269,
    Name: "CD_MEDIALE_VOTUM",
    Description: "Mediale Votum",
    MaxLevel: 5,
    TargetType: "Support",
    DamageFlags: {
      NoDamage: true,
      Splash: true,
    },
    Flags: {
      PartyOnly: true,
    },
    Range: 9,
    Hit: "Single",
    HitCount: 1,
    SplashArea: 4,
    CastCancel: true,
    CastTime: 2000,
    AfterCastActDelay: 500,
    Duration1: [
      {
        Level: 1,
        Time: 40000,
      },
      {
        Level: 2,
        Time: 60000,
      },
      {
        Level: 3,
        Time: 80000,
      },
      {
        Level: 4,
        Time: 100000,
      },
      {
        Level: 5,
        Time: 120000,
      },
    ],
    Cooldown: 60000,
    FixedCastTime: 1000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 30,
        },
        {
          Level: 2,
          Amount: 40,
        },
        {
          Level: 3,
          Amount: 50,
        },
        {
          Level: 4,
          Amount: 60,
        },
        {
          Level: 5,
          Amount: 70,
        },
      ],
    },
    Status: "Mediale",
  },
  {
    Id: 5270,
    Name: "CD_MACE_BOOK_M",
    Description: "Mace Book Mastery",
    MaxLevel: 10,
  },
  {
    Id: 5271,
    Name: "CD_ARGUTUS_VITA",
    Description: "Argutus Vita",
    MaxLevel: 5,
    TargetType: "Support",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      PartyOnly: true,
    },
    Range: 9,
    Hit: "Single",
    HitCount: 1,
    CastCancel: true,
    CastTime: 2000,
    AfterCastActDelay: 500,
    Duration1: [
      {
        Level: 1,
        Time: 120000,
      },
      {
        Level: 2,
        Time: 150000,
      },
      {
        Level: 3,
        Time: 180000,
      },
      {
        Level: 4,
        Time: 210000,
      },
      {
        Level: 5,
        Time: 240000,
      },
    ],
    Cooldown: 1000,
    FixedCastTime: 1000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 30,
        },
        {
          Level: 2,
          Amount: 45,
        },
        {
          Level: 3,
          Amount: 60,
        },
        {
          Level: 4,
          Amount: 75,
        },
        {
          Level: 5,
          Amount: 90,
        },
      ],
    },
    Status: "A_Vita",
  },
  {
    Id: 5272,
    Name: "CD_ARGUTUS_TELUM",
    Description: "Argutus Telum",
    MaxLevel: 5,
    TargetType: "Support",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      PartyOnly: true,
    },
    Range: 9,
    Hit: "Single",
    HitCount: 1,
    CastCancel: true,
    CastTime: 2000,
    AfterCastActDelay: 500,
    Duration1: [
      {
        Level: 1,
        Time: 120000,
      },
      {
        Level: 2,
        Time: 150000,
      },
      {
        Level: 3,
        Time: 180000,
      },
      {
        Level: 4,
        Time: 210000,
      },
      {
        Level: 5,
        Time: 240000,
      },
    ],
    Cooldown: 1000,
    FixedCastTime: 1000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 30,
        },
        {
          Level: 2,
          Amount: 45,
        },
        {
          Level: 3,
          Amount: 60,
        },
        {
          Level: 4,
          Amount: 75,
        },
        {
          Level: 5,
          Amount: 90,
        },
      ],
    },
    Status: "A_Telum",
  },
  {
    Id: 5273,
    Name: "CD_ARBITRIUM",
    Description: "Arbitrium",
    MaxLevel: 10,
    Type: "Magic",
    TargetType: "Attack",
    Range: 9,
    Hit: "Single",
    HitCount: 1,
    Element: "Holy",
    CastCancel: true,
    CastTime: 2000,
    AfterCastActDelay: 500,
    Duration1: 20000,
    Cooldown: 3000,
    FixedCastTime: 1000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 50,
        },
        {
          Level: 2,
          Amount: 60,
        },
        {
          Level: 3,
          Amount: 70,
        },
        {
          Level: 4,
          Amount: 80,
        },
        {
          Level: 5,
          Amount: 90,
        },
        {
          Level: 6,
          Amount: 100,
        },
        {
          Level: 7,
          Amount: 110,
        },
        {
          Level: 8,
          Amount: 120,
        },
        {
          Level: 9,
          Amount: 130,
        },
        {
          Level: 10,
          Amount: 140,
        },
      ],
    },
    Status: "HandicapState_DeepSilence",
  },
  {
    Id: 5274,
    Name: "CD_ARBITRIUM_ATK",
    Description: "Arbitrium Attack",
    MaxLevel: 10,
    Type: "Magic",
    TargetType: "Attack",
    DamageFlags: {
      Splash: true,
    },
    Range: 9,
    Hit: "Single",
    HitCount: 1,
    Element: "Holy",
    SplashArea: [
      {
        Level: 1,
        Area: 1,
      },
      {
        Level: 2,
        Area: 1,
      },
      {
        Level: 3,
        Area: 1,
      },
      {
        Level: 4,
        Area: 2,
      },
      {
        Level: 5,
        Area: 2,
      },
      {
        Level: 6,
        Area: 2,
      },
      {
        Level: 7,
        Area: 3,
      },
      {
        Level: 8,
        Area: 3,
      },
      {
        Level: 9,
        Area: 3,
      },
      {
        Level: 10,
        Area: 4,
      },
    ],
    Requires: {
      SpCost: 1,
    },
  },
  {
    Id: 5275,
    Name: "CD_PRESENS_ACIES",
    Description: "Presens Acies",
    MaxLevel: 5,
    TargetType: "Support",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      PartyOnly: true,
    },
    Range: 9,
    Hit: "Single",
    HitCount: 1,
    CastCancel: true,
    CastTime: 2000,
    AfterCastActDelay: 500,
    Duration1: [
      {
        Level: 1,
        Time: 120000,
      },
      {
        Level: 2,
        Time: 150000,
      },
      {
        Level: 3,
        Time: 180000,
      },
      {
        Level: 4,
        Time: 210000,
      },
      {
        Level: 5,
        Time: 240000,
      },
    ],
    Cooldown: 1000,
    FixedCastTime: 1000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 30,
        },
        {
          Level: 2,
          Amount: 45,
        },
        {
          Level: 3,
          Amount: 60,
        },
        {
          Level: 4,
          Amount: 75,
        },
        {
          Level: 5,
          Amount: 90,
        },
      ],
    },
    Status: "Pre_Acies",
  },
  {
    Id: 5276,
    Name: "CD_FIDUS_ANIMUS",
    Description: "Fidus Animus",
    MaxLevel: 10,
  },
  {
    Id: 5277,
    Name: "CD_EFFLIGO",
    Description: "Effligo",
    MaxLevel: 10,
    Type: "Weapon",
    TargetType: "Attack",
    Range: 2,
    Hit: "Multi_Hit",
    HitCount: -7,
    Element: "Weapon",
    CastCancel: true,
    AfterCastActDelay: 500,
    Cooldown: 60000,
    Requires: {
      SpCost: 60,
      ApCost: 100,
      Weapon: {
        Mace: true,
        "2hMace": true,
        Book: true,
      },
    },
  },
  {
    Id: 5278,
    Name: "CD_COMPETENTIA",
    Description: "Competentia",
    MaxLevel: 5,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
      Splash: true,
    },
    Hit: "Single",
    HitCount: 1,
    SplashArea: 10,
    CastCancel: true,
    CastTime: 8000,
    AfterCastActDelay: 500,
    Duration1: [
      {
        Level: 1,
        Time: 120000,
      },
      {
        Level: 2,
        Time: 150000,
      },
      {
        Level: 3,
        Time: 180000,
      },
      {
        Level: 4,
        Time: 210000,
      },
      {
        Level: 5,
        Time: 240000,
      },
    ],
    Cooldown: 60000,
    FixedCastTime: 2000,
    Requires: {
      SpCost: 60,
      ApCost: 200,
    },
    Status: "Competentia",
  },
  {
    Id: 5279,
    Name: "CD_PNEUMATICUS_PROCELLA",
    Description: "Pneumaticus Procella",
    MaxLevel: 10,
    Type: "Magic",
    TargetType: "Ground",
    Range: 9,
    Hit: "Multi_Hit",
    HitCount: -10,
    Element: "Holy",
    CastCancel: true,
    CastTime: 3000,
    AfterCastActDelay: 500,
    Duration1: 12000,
    Cooldown: 60000,
    FixedCastTime: 2000,
    Requires: {
      SpCost: 150,
      ApCost: 150,
    },
    Unit: {
      Id: "Pneumaticus_Procella",
      Range: [
        {
          Level: 1,
          Size: 2,
        },
        {
          Level: 2,
          Size: 2,
        },
        {
          Level: 3,
          Size: 2,
        },
        {
          Level: 4,
          Size: 3,
        },
        {
          Level: 5,
          Size: 3,
        },
        {
          Level: 6,
          Size: 3,
        },
        {
          Level: 7,
          Size: 4,
        },
        {
          Level: 8,
          Size: 4,
        },
        {
          Level: 9,
          Size: 4,
        },
        {
          Level: 10,
          Size: 5,
        },
      ],
      Interval: 3000,
      Target: "Enemy",
      Flag: {
        NoOverlap: true,
        PathCheck: true,
      },
    },
  },
  {
    Id: 5280,
    Name: "CD_DILECTIO_HEAL",
    Description: "Dilectio Heal",
    MaxLevel: 5,
    TargetType: "Support",
    DamageFlags: {
      NoDamage: true,
      Splash: true,
    },
    Flags: {
      PartyOnly: true,
    },
    Range: 9,
    Hit: "Single",
    HitCount: 1,
    SplashArea: [
      {
        Level: 1,
        Area: 1,
      },
      {
        Level: 2,
        Area: 1,
      },
      {
        Level: 3,
        Area: 2,
      },
      {
        Level: 4,
        Area: 2,
      },
      {
        Level: 5,
        Area: 3,
      },
    ],
    GiveAp: 1,
    CastCancel: true,
    CastTime: 2000,
    AfterCastActDelay: 500,
    FixedCastTime: 1000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 50,
        },
        {
          Level: 2,
          Amount: 55,
        },
        {
          Level: 3,
          Amount: 60,
        },
        {
          Level: 4,
          Amount: 65,
        },
        {
          Level: 5,
          Amount: 70,
        },
      ],
    },
  },
  {
    Id: 5281,
    Name: "CD_RELIGIO",
    Description: "Religio",
    MaxLevel: 5,
    TargetType: "Support",
    DamageFlags: {
      NoDamage: true,
    },
    Range: 9,
    Hit: "Single",
    HitCount: 1,
    GiveAp: 1,
    CastCancel: true,
    CastTime: 2000,
    AfterCastActDelay: 500,
    Duration1: [
      {
        Level: 1,
        Time: 120000,
      },
      {
        Level: 2,
        Time: 150000,
      },
      {
        Level: 3,
        Time: 180000,
      },
      {
        Level: 4,
        Time: 210000,
      },
      {
        Level: 5,
        Time: 240000,
      },
    ],
    FixedCastTime: 1000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 70,
        },
        {
          Level: 2,
          Amount: 75,
        },
        {
          Level: 3,
          Amount: 80,
        },
        {
          Level: 4,
          Amount: 85,
        },
        {
          Level: 5,
          Amount: 90,
        },
      ],
    },
    Status: "Religio",
  },
  {
    Id: 5282,
    Name: "CD_BENEDICTUM",
    Description: "Benedictum",
    MaxLevel: 5,
    TargetType: "Support",
    DamageFlags: {
      NoDamage: true,
    },
    Range: 9,
    Hit: "Single",
    HitCount: 1,
    GiveAp: 1,
    CastCancel: true,
    CastTime: 2000,
    AfterCastActDelay: 500,
    Duration1: [
      {
        Level: 1,
        Time: 120000,
      },
      {
        Level: 2,
        Time: 150000,
      },
      {
        Level: 3,
        Time: 180000,
      },
      {
        Level: 4,
        Time: 210000,
      },
      {
        Level: 5,
        Time: 240000,
      },
    ],
    FixedCastTime: 1000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 70,
        },
        {
          Level: 2,
          Amount: 75,
        },
        {
          Level: 3,
          Amount: 80,
        },
        {
          Level: 4,
          Amount: 85,
        },
        {
          Level: 5,
          Amount: 90,
        },
      ],
    },
    Status: "Benedictum",
  },
  {
    Id: 5283,
    Name: "CD_PETITIO",
    Description: "Petitio",
    MaxLevel: 10,
    Type: "Weapon",
    TargetType: "Attack",
    DamageFlags: {
      Splash: true,
    },
    Range: 2,
    Hit: "Single",
    HitCount: 1,
    Element: "Weapon",
    SplashArea: [
      {
        Level: 1,
        Area: 1,
      },
      {
        Level: 2,
        Area: 1,
      },
      {
        Level: 3,
        Area: 1,
      },
      {
        Level: 4,
        Area: 2,
      },
      {
        Level: 5,
        Area: 2,
      },
      {
        Level: 6,
        Area: 2,
      },
      {
        Level: 7,
        Area: 3,
      },
      {
        Level: 8,
        Area: 3,
      },
      {
        Level: 9,
        Area: 3,
      },
      {
        Level: 10,
        Area: 4,
      },
    ],
    GiveAp: 2,
    CastCancel: true,
    AfterCastActDelay: 500,
    Cooldown: 2000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 32,
        },
        {
          Level: 2,
          Amount: 34,
        },
        {
          Level: 3,
          Amount: 36,
        },
        {
          Level: 4,
          Amount: 38,
        },
        {
          Level: 5,
          Amount: 40,
        },
        {
          Level: 6,
          Amount: 42,
        },
        {
          Level: 7,
          Amount: 44,
        },
        {
          Level: 8,
          Amount: 46,
        },
        {
          Level: 9,
          Amount: 48,
        },
        {
          Level: 10,
          Amount: 50,
        },
      ],
      Weapon: {
        Mace: true,
        "2hMace": true,
        Book: true,
      },
    },
  },
  {
    Id: 5284,
    Name: "CD_FRAMEN",
    Description: "Framen",
    MaxLevel: 5,
    Type: "Magic",
    TargetType: "Attack",
    DamageFlags: {
      Splash: true,
    },
    Range: 9,
    Hit: "Single",
    HitCount: 1,
    Element: "Holy",
    SplashArea: [
      {
        Level: 1,
        Area: 2,
      },
      {
        Level: 2,
        Area: 2,
      },
      {
        Level: 3,
        Area: 2,
      },
      {
        Level: 4,
        Area: 3,
      },
      {
        Level: 5,
        Area: 3,
      },
    ],
    GiveAp: 3,
    CastCancel: true,
    CastTime: 2000,
    AfterCastActDelay: 500,
    Cooldown: 3000,
    FixedCastTime: 1000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 40,
        },
        {
          Level: 2,
          Amount: 45,
        },
        {
          Level: 3,
          Amount: 50,
        },
        {
          Level: 4,
          Amount: 55,
        },
        {
          Level: 5,
          Amount: 60,
        },
      ],
    },
  },
  {
    Id: 5285,
    Name: "SHC_SHADOW_EXCEED",
    Description: "Shadow Exceed",
    MaxLevel: 10,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Hit: "Single",
    HitCount: 1,
    CastCancel: true,
    CastTime: 1000,
    AfterCastActDelay: 500,
    Duration1: [
      {
        Level: 1,
        Time: 60000,
      },
      {
        Level: 2,
        Time: 80000,
      },
      {
        Level: 3,
        Time: 100000,
      },
      {
        Level: 4,
        Time: 120000,
      },
      {
        Level: 5,
        Time: 140000,
      },
      {
        Level: 6,
        Time: 160000,
      },
      {
        Level: 7,
        Time: 180000,
      },
      {
        Level: 8,
        Time: 200000,
      },
      {
        Level: 9,
        Time: 220000,
      },
      {
        Level: 10,
        Time: 240000,
      },
    ],
    Cooldown: 60000,
    FixedCastTime: 1000,
    Requires: {
      SpCost: 100,
      ApCost: 150,
    },
    Status: "Shadow_Exceed",
  },
  {
    Id: 5286,
    Name: "SHC_DANCING_KNIFE",
    Description: "Dancing Knife",
    MaxLevel: 5,
    Type: "Weapon",
    TargetType: "Self",
    DamageFlags: {
      Splash: true,
    },
    Hit: "Single",
    HitCount: 1,
    Element: "Weapon",
    SplashArea: 2,
    CastCancel: true,
    CastTime: 1000,
    AfterCastActDelay: 500,
    Duration1: 120000,
    Cooldown: 30000,
    FixedCastTime: 1000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 40,
        },
        {
          Level: 2,
          Amount: 45,
        },
        {
          Level: 3,
          Amount: 50,
        },
        {
          Level: 4,
          Amount: 55,
        },
        {
          Level: 5,
          Amount: 60,
        },
      ],
      Weapon: {
        Dagger: true,
      },
    },
    Status: "Dancing_Knife",
  },
  {
    Id: 5287,
    Name: "SHC_SAVAGE_IMPACT",
    Description: "Savage Impact",
    MaxLevel: 10,
    Type: "Weapon",
    TargetType: "Attack",
    DamageFlags: {
      Splash: true,
      Critical: true,
    },
    Range: 7,
    Hit: "Multi_Hit",
    HitCount: -8,
    Element: "Weapon",
    SplashArea: 1,
    CastCancel: true,
    AfterCastActDelay: 500,
    Cooldown: 3000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 28,
        },
        {
          Level: 2,
          Amount: 31,
        },
        {
          Level: 3,
          Amount: 34,
        },
        {
          Level: 4,
          Amount: 37,
        },
        {
          Level: 5,
          Amount: 40,
        },
        {
          Level: 6,
          Amount: 43,
        },
        {
          Level: 7,
          Amount: 46,
        },
        {
          Level: 8,
          Amount: 49,
        },
        {
          Level: 9,
          Amount: 52,
        },
        {
          Level: 10,
          Amount: 55,
        },
      ],
      Weapon: {
        Katar: true,
      },
      State: "Hidden",
    },
  },
  {
    Id: 5288,
    Name: "SHC_SHADOW_SENSE",
    Description: "Shadow Sense",
    MaxLevel: 10,
  },
  {
    Id: 5289,
    Name: "SHC_ETERNAL_SLASH",
    Description: "Eternal Slash",
    MaxLevel: 5,
    Type: "Weapon",
    TargetType: "Attack",
    DamageFlags: {
      Critical: true,
    },
    Range: 2,
    Hit: "Multi_Hit",
    HitCount: 1,
    Element: "Weapon",
    CastCancel: true,
    AfterCastActDelay: 500,
    Duration1: 3000,
    Cooldown: 1500,
    Requires: {
      SpCost: 40,
      Status: {
        Weaponblock_On: true,
      },
    },
    Status: "E_Slash_Count",
  },
  {
    Id: 5290,
    Name: "SHC_POTENT_VENOM",
    Description: "Potent Venom",
    MaxLevel: 10,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Hit: "Single",
    HitCount: 1,
    CastCancel: true,
    AfterCastActDelay: 500,
    Duration1: [
      {
        Level: 1,
        Time: 30000,
      },
      {
        Level: 2,
        Time: 40000,
      },
      {
        Level: 3,
        Time: 50000,
      },
      {
        Level: 4,
        Time: 60000,
      },
      {
        Level: 5,
        Time: 70000,
      },
      {
        Level: 6,
        Time: 80000,
      },
      {
        Level: 7,
        Time: 90000,
      },
      {
        Level: 8,
        Time: 100000,
      },
      {
        Level: 9,
        Time: 110000,
      },
      {
        Level: 10,
        Time: 120000,
      },
    ],
    Cooldown: 3000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 15,
        },
        {
          Level: 2,
          Amount: 20,
        },
        {
          Level: 3,
          Amount: 25,
        },
        {
          Level: 4,
          Amount: 30,
        },
        {
          Level: 5,
          Amount: 35,
        },
        {
          Level: 6,
          Amount: 40,
        },
        {
          Level: 7,
          Amount: 45,
        },
        {
          Level: 8,
          Amount: 50,
        },
        {
          Level: 9,
          Amount: 55,
        },
        {
          Level: 10,
          Amount: 60,
        },
      ],
      Status: {
        Edp: true,
      },
    },
    Status: "Potent_Venom",
  },
  {
    Id: 5291,
    Name: "SHC_SHADOW_STAB",
    Description: "Shadow Stab",
    MaxLevel: 5,
    Type: "Weapon",
    TargetType: "Attack",
    DamageFlags: {
      IgnoreDefense: true,
    },
    Range: 2,
    Hit: "Multi_Hit",
    HitCount: 1,
    Element: "Weapon",
    GiveAp: 3,
    CastCancel: true,
    AfterCastActDelay: 500,
    Cooldown: 3000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 45,
        },
        {
          Level: 2,
          Amount: 50,
        },
        {
          Level: 3,
          Amount: 55,
        },
        {
          Level: 4,
          Amount: 60,
        },
        {
          Level: 5,
          Amount: 65,
        },
      ],
      Weapon: {
        Dagger: true,
      },
    },
  },
  {
    Id: 5292,
    Name: "SHC_IMPACT_CRATER",
    Description: "Impact Crater",
    MaxLevel: 5,
    Type: "Weapon",
    TargetType: "Self",
    DamageFlags: {
      Splash: true,
      Critical: true,
    },
    Hit: "Multi_Hit",
    HitCount: 1,
    Element: "Weapon",
    SplashArea: [
      {
        Level: 1,
        Area: 1,
      },
      {
        Level: 2,
        Area: 1,
      },
      {
        Level: 3,
        Area: 2,
      },
      {
        Level: 4,
        Area: 2,
      },
      {
        Level: 5,
        Area: 3,
      },
    ],
    GiveAp: 5,
    CastCancel: true,
    AfterCastActDelay: 500,
    Duration1: 10000,
    Cooldown: 5000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 43,
        },
        {
          Level: 2,
          Amount: 46,
        },
        {
          Level: 3,
          Amount: 49,
        },
        {
          Level: 4,
          Amount: 52,
        },
        {
          Level: 5,
          Amount: 55,
        },
      ],
      Weapon: {
        Katar: true,
      },
      Status: {
        Rollingcutter: true,
      },
    },
    Status: "WeaponBlock_On",
  },
  {
    Id: 5293,
    Name: "SHC_ENCHANTING_SHADOW",
    Description: "Enchanting Shadow",
    MaxLevel: 5,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Hit: "Single",
    HitCount: 1,
    CastCancel: true,
    AfterCastActDelay: 500,
    Duration1: 180000,
    Duration2: 30000,
    Cooldown: 150000,
    FixedCastTime: 2000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 30,
        },
        {
          Level: 2,
          Amount: 40,
        },
        {
          Level: 3,
          Amount: 50,
        },
        {
          Level: 4,
          Amount: 60,
        },
        {
          Level: 5,
          Amount: 70,
        },
      ],
    },
    Status: "Shadow_Weapon",
  },
  {
    Id: 5294,
    Name: "SHC_FATAL_SHADOW_CROW",
    Description: "Fatal Shadow Crow",
    MaxLevel: 10,
    Type: "Weapon",
    TargetType: "Attack",
    DamageFlags: {
      Splash: true,
    },
    Range: 9,
    Hit: "Single",
    HitCount: 1,
    Element: "Weapon",
    SplashArea: 3,
    CastCancel: true,
    AfterCastActDelay: 500,
    Duration1: 20000,
    Cooldown: 60000,
    Requires: {
      SpCost: 150,
      ApCost: 150,
    },
    Status: "Darkcrow",
  },
  {
    Id: 5295,
    Name: "MT_AXE_STOMP",
    Description: "Axe Stomp",
    MaxLevel: 5,
    Type: "Weapon",
    TargetType: "Self",
    DamageFlags: {
      Splash: true,
    },
    Flags: {
      AllowOnMado: true,
    },
    Hit: "Multi_Hit",
    HitCount: 1,
    Element: "Weapon",
    SplashArea: [
      {
        Level: 1,
        Area: 1,
      },
      {
        Level: 2,
        Area: 1,
      },
      {
        Level: 3,
        Area: 2,
      },
      {
        Level: 4,
        Area: 2,
      },
      {
        Level: 5,
        Area: 3,
      },
    ],
    GiveAp: 2,
    CastCancel: true,
    AfterCastActDelay: 500,
    Duration1: 5000,
    Cooldown: 2000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 25,
        },
        {
          Level: 2,
          Amount: 30,
        },
        {
          Level: 3,
          Amount: 35,
        },
        {
          Level: 4,
          Amount: 40,
        },
        {
          Level: 5,
          Amount: 45,
        },
      ],
      Weapon: {
        "1hAxe": true,
        "2hAxe": true,
      },
    },
    Status: "Axe_Stomp",
  },
  {
    Id: 5296,
    Name: "MT_RUSH_QUAKE",
    Description: "Rush Quake",
    MaxLevel: 10,
    Type: "Weapon",
    TargetType: "Attack",
    DamageFlags: {
      Splash: true,
    },
    Flags: {
      AllowOnMado: true,
    },
    Range: 9,
    Hit: "Single",
    HitCount: 1,
    Element: "Weapon",
    SplashArea: [
      {
        Level: 1,
        Area: 1,
      },
      {
        Level: 2,
        Area: 1,
      },
      {
        Level: 3,
        Area: 1,
      },
      {
        Level: 4,
        Area: 1,
      },
      {
        Level: 5,
        Area: 2,
      },
      {
        Level: 6,
        Area: 2,
      },
      {
        Level: 7,
        Area: 2,
      },
      {
        Level: 8,
        Area: 2,
      },
      {
        Level: 9,
        Area: 3,
      },
      {
        Level: 10,
        Area: 3,
      },
    ],
    CastCancel: true,
    AfterCastActDelay: 500,
    Cooldown: 60000,
    Requires: {
      SpCost: 150,
      ApCost: 150,
    },
  },
  {
    Id: 5297,
    Name: "MT_M_MACHINE",
    Description: "Manufacture Machine",
    MaxLevel: 5,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      AllowOnMado: true,
    },
    Hit: "Single",
    HitCount: 1,
    CastCancel: true,
    AfterCastActDelay: 500,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 30,
        },
        {
          Level: 2,
          Amount: 40,
        },
        {
          Level: 3,
          Amount: 50,
        },
        {
          Level: 4,
          Amount: 60,
        },
        {
          Level: 5,
          Amount: 70,
        },
      ],
      ItemCost: [
        {
          Item: "Device_Creation_Guide",
          Amount: 0,
        },
      ],
    },
  },
  {
    Id: 5298,
    Name: "MT_A_MACHINE",
    Description: "Attack Machine",
    MaxLevel: 5,
    Type: "Weapon",
    TargetType: "Support",
    DamageFlags: {
      Splash: true,
    },
    Flags: {
      PartyOnly: true,
      AllowOnMado: true,
    },
    Range: 1,
    Hit: "Single",
    HitCount: 1,
    Element: "Weapon",
    SplashArea: [
      {
        Level: 1,
        Area: 1,
      },
      {
        Level: 2,
        Area: 1,
      },
      {
        Level: 3,
        Area: 2,
      },
      {
        Level: 4,
        Area: 2,
      },
      {
        Level: 5,
        Area: 3,
      },
    ],
    CastCancel: true,
    AfterCastActDelay: 500,
    Duration1: [
      {
        Level: 1,
        Time: 80000,
      },
      {
        Level: 2,
        Time: 120000,
      },
      {
        Level: 3,
        Time: 160000,
      },
      {
        Level: 4,
        Time: 200000,
      },
      {
        Level: 5,
        Time: 240000,
      },
    ],
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 43,
        },
        {
          Level: 2,
          Amount: 46,
        },
        {
          Level: 3,
          Amount: 49,
        },
        {
          Level: 4,
          Amount: 52,
        },
        {
          Level: 5,
          Amount: 55,
        },
      ],
      ItemCost: [
        {
          Item: "Device_Capsule",
          Amount: 1,
        },
      ],
    },
    Status: "A_Machine",
  },
  {
    Id: 5299,
    Name: "MT_D_MACHINE",
    Description: "Defense Machine",
    MaxLevel: 5,
    TargetType: "Support",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      PartyOnly: true,
      AllowOnMado: true,
    },
    Range: 1,
    Hit: "Single",
    HitCount: 1,
    CastCancel: true,
    AfterCastActDelay: 500,
    Duration1: [
      {
        Level: 1,
        Time: 80000,
      },
      {
        Level: 2,
        Time: 120000,
      },
      {
        Level: 3,
        Time: 160000,
      },
      {
        Level: 4,
        Time: 200000,
      },
      {
        Level: 5,
        Time: 240000,
      },
    ],
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 43,
        },
        {
          Level: 2,
          Amount: 46,
        },
        {
          Level: 3,
          Amount: 49,
        },
        {
          Level: 4,
          Amount: 52,
        },
        {
          Level: 5,
          Amount: 55,
        },
      ],
      ItemCost: [
        {
          Item: "Device_Capsule",
          Amount: 1,
        },
      ],
    },
    Status: "D_Machine",
  },
  {
    Id: 5300,
    Name: "MT_TWOAXEDEF",
    Description: "Two Hand Axe Def",
    MaxLevel: 10,
  },
  {
    Id: 5301,
    Name: "MT_ABR_M",
    Description: "ABR Mastery",
    MaxLevel: 10,
  },
  {
    Id: 5302,
    Name: "MT_SUMMON_ABR_BATTLE_WARIOR",
    Description: "ABR Battle Warior",
    MaxLevel: 4,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      AllowOnMado: true,
    },
    Hit: "Single",
    HitCount: 1,
    ActiveInstance: 1,
    GiveAp: 20,
    CastCancel: true,
    AfterCastActDelay: 500,
    Duration1: [
      {
        Level: 1,
        Time: 120000,
      },
      {
        Level: 2,
        Time: 180000,
      },
      {
        Level: 3,
        Time: 240000,
      },
      {
        Level: 4,
        Time: 300000,
      },
    ],
    Cooldown: 60000,
    FixedCastTime: 3000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 30,
        },
        {
          Level: 2,
          Amount: 40,
        },
        {
          Level: 3,
          Amount: 50,
        },
        {
          Level: 4,
          Amount: 60,
        },
      ],
      ItemCost: [
        {
          Item: "Auto_Battle_Capsule",
          Amount: 1,
        },
      ],
    },
    Status: "Abr_Battle_Warior",
  },
  {
    Id: 5303,
    Name: "MT_SUMMON_ABR_DUAL_CANNON",
    Description: "ABR Dual Cannon",
    MaxLevel: 4,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      AllowOnMado: true,
    },
    Hit: "Single",
    HitCount: 1,
    ActiveInstance: 1,
    GiveAp: 20,
    CastCancel: true,
    AfterCastActDelay: 500,
    Duration1: [
      {
        Level: 1,
        Time: 120000,
      },
      {
        Level: 2,
        Time: 180000,
      },
      {
        Level: 3,
        Time: 240000,
      },
      {
        Level: 4,
        Time: 300000,
      },
    ],
    Cooldown: 60000,
    FixedCastTime: 3000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 30,
        },
        {
          Level: 2,
          Amount: 40,
        },
        {
          Level: 3,
          Amount: 50,
        },
        {
          Level: 4,
          Amount: 60,
        },
      ],
      ItemCost: [
        {
          Item: "Auto_Battle_Capsule",
          Amount: 1,
        },
      ],
    },
    Status: "Abr_Dual_Cannon",
  },
  {
    Id: 5304,
    Name: "MT_SUMMON_ABR_MOTHER_NET",
    Description: "ABR Mother Net",
    MaxLevel: 4,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      AllowOnMado: true,
    },
    Hit: "Single",
    HitCount: 1,
    ActiveInstance: 1,
    GiveAp: 20,
    CastCancel: true,
    AfterCastActDelay: 500,
    Duration1: [
      {
        Level: 1,
        Time: 120000,
      },
      {
        Level: 2,
        Time: 180000,
      },
      {
        Level: 3,
        Time: 240000,
      },
      {
        Level: 4,
        Time: 300000,
      },
    ],
    Cooldown: 60000,
    FixedCastTime: 3000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 30,
        },
        {
          Level: 2,
          Amount: 40,
        },
        {
          Level: 3,
          Amount: 50,
        },
        {
          Level: 4,
          Amount: 60,
        },
      ],
      ItemCost: [
        {
          Item: "Auto_Battle_Capsule",
          Amount: 1,
        },
      ],
    },
    Status: "Abr_Mother_Net",
  },
  {
    Id: 5305,
    Name: "MT_SUMMON_ABR_INFINITY",
    Description: "ABR Infinity",
    MaxLevel: 4,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Flags: {
      AllowOnMado: true,
    },
    Hit: "Single",
    HitCount: 1,
    ActiveInstance: 1,
    CastCancel: true,
    AfterCastActDelay: 500,
    Duration1: [
      {
        Level: 1,
        Time: 120000,
      },
      {
        Level: 2,
        Time: 180000,
      },
      {
        Level: 3,
        Time: 240000,
      },
      {
        Level: 4,
        Time: 300000,
      },
    ],
    Cooldown: 60000,
    FixedCastTime: 3000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 30,
        },
        {
          Level: 2,
          Amount: 40,
        },
        {
          Level: 3,
          Amount: 50,
        },
        {
          Level: 4,
          Amount: 60,
        },
      ],
      ApCost: 200,
      ItemCost: [
        {
          Item: "Auto_Battle_Capsule",
          Amount: 5,
        },
      ],
    },
    Status: "Abr_Infinity",
  },
  {
    Id: 5306,
    Name: "AG_DESTRUCTIVE_HURRICANE_CLIMAX",
    Description: "Destructive Hurricane Climax",
    MaxLevel: 5,
    Type: "Magic",
    TargetType: "Attack",
    Hit: "Single",
    HitCount: 1,
    Element: "Wind",
    Requires: {
      SpCost: 1,
    },
  },
  {
    Id: 5307,
    Name: "BO_ACIDIFIED_ZONE_WATER_ATK",
    Description: "Actified Zone Water Attack",
    MaxLevel: 5,
    Type: "Weapon",
    TargetType: "Attack",
    DamageFlags: {
      IgnoreFlee: true,
    },
    Hit: "Single",
    HitCount: 1,
    Element: "Water",
    Requires: {
      SpCost: 1,
    },
  },
  {
    Id: 5308,
    Name: "BO_ACIDIFIED_ZONE_GROUND_ATK",
    Description: "Actified Zone Ground Attack",
    MaxLevel: 5,
    Type: "Weapon",
    TargetType: "Attack",
    DamageFlags: {
      IgnoreFlee: true,
    },
    Hit: "Single",
    HitCount: 1,
    Element: "Earth",
    Requires: {
      SpCost: 1,
    },
  },
  {
    Id: 5309,
    Name: "BO_ACIDIFIED_ZONE_WIND_ATK",
    Description: "Actified Zone Wind Attack",
    MaxLevel: 5,
    Type: "Weapon",
    TargetType: "Attack",
    DamageFlags: {
      IgnoreFlee: true,
    },
    Hit: "Single",
    HitCount: 1,
    Element: "Wind",
    Requires: {
      SpCost: 1,
    },
  },
  {
    Id: 5310,
    Name: "BO_ACIDIFIED_ZONE_FIRE_ATK",
    Description: "Actified Zone Fire Attack",
    MaxLevel: 5,
    Type: "Weapon",
    TargetType: "Attack",
    DamageFlags: {
      IgnoreFlee: true,
    },
    Hit: "Single",
    HitCount: 1,
    Element: "Fire",
    Requires: {
      SpCost: 1,
    },
  },
  {
    Id: 5311,
    Name: "ABC_DAGGER_AND_BOW_M",
    Description: "Dagger And Bow Mastery",
    MaxLevel: 10,
  },
  {
    Id: 5312,
    Name: "ABC_MAGIC_SWORD_M",
    Description: "Magic Sword Mastery",
    MaxLevel: 10,
  },
  {
    Id: 5313,
    Name: "ABC_STRIP_SHADOW",
    Description: "Strip Shadow",
    MaxLevel: 5,
    TargetType: "Attack",
    DamageFlags: {
      NoDamage: true,
    },
    Range: 1,
    Hit: "Single",
    HitCount: 1,
    CastCancel: true,
    CastTime: 1000,
    AfterCastActDelay: 1000,
    Duration1: [
      {
        Level: 1,
        Time: 60000,
      },
      {
        Level: 2,
        Time: 70000,
      },
      {
        Level: 3,
        Time: 80000,
      },
      {
        Level: 4,
        Time: 90000,
      },
      {
        Level: 5,
        Time: 100000,
      },
    ],
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 29,
        },
        {
          Level: 2,
          Amount: 33,
        },
        {
          Level: 3,
          Amount: 37,
        },
        {
          Level: 4,
          Amount: 41,
        },
        {
          Level: 5,
          Amount: 45,
        },
      ],
    },
    Status: "Shadow_Strip",
  },
  {
    Id: 5314,
    Name: "ABC_ABYSS_DAGGER",
    Description: "Abyss Dagger",
    MaxLevel: 5,
    Type: "Weapon",
    TargetType: "Self",
    DamageFlags: {
      Splash: true,
    },
    Hit: "Single",
    HitCount: 1,
    Element: "Weapon",
    SplashArea: 2,
    CastCancel: true,
    AfterCastActDelay: 500,
    Duration1: [
      {
        Level: 1,
        Time: 2000,
      },
      {
        Level: 2,
        Time: 4000,
      },
      {
        Level: 3,
        Time: 6000,
      },
      {
        Level: 4,
        Time: 8000,
      },
      {
        Level: 5,
        Time: 10000,
      },
    ],
    Cooldown: 3000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 40,
        },
        {
          Level: 2,
          Amount: 45,
        },
        {
          Level: 3,
          Amount: 50,
        },
        {
          Level: 4,
          Amount: 55,
        },
        {
          Level: 5,
          Amount: 60,
        },
      ],
      Weapon: {
        Dagger: true,
        "1hSword": true,
      },
    },
    Status: "Abyss_Dagger",
  },
  {
    Id: 5315,
    Name: "ABC_UNLUCKY_RUSH",
    Description: "Unlucky Rush",
    MaxLevel: 5,
    Type: "Weapon",
    TargetType: "Attack",
    Range: 7,
    Hit: "Single",
    HitCount: 1,
    Element: "Weapon",
    CastCancel: true,
    CastTime: 1000,
    AfterCastActDelay: 500,
    Duration1: 20000,
    Cooldown: 2000,
    FixedCastTime: 1000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 30,
        },
        {
          Level: 2,
          Amount: 35,
        },
        {
          Level: 3,
          Amount: 40,
        },
        {
          Level: 4,
          Amount: 45,
        },
        {
          Level: 5,
          Amount: 50,
        },
      ],
    },
    Status: "HandicapState_Misfortune",
  },
  {
    Id: 5316,
    Name: "ABC_CHAIN_REACTION_SHOT",
    Description: "Chain Reaction Shot",
    MaxLevel: 5,
    Type: "Weapon",
    TargetType: "Attack",
    DamageFlags: {
      Splash: true,
    },
    Range: 9,
    Hit: "Single",
    HitCount: 1,
    Element: "Weapon",
    SplashArea: [
      {
        Level: 1,
        Area: 1,
      },
      {
        Level: 2,
        Area: 1,
      },
      {
        Level: 3,
        Area: 2,
      },
      {
        Level: 4,
        Area: 2,
      },
      {
        Level: 5,
        Area: 3,
      },
    ],
    CastCancel: true,
    CastTime: 1000,
    AfterCastActDelay: 500,
    Cooldown: 3000,
    FixedCastTime: 1000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 40,
        },
        {
          Level: 2,
          Amount: 50,
        },
        {
          Level: 3,
          Amount: 60,
        },
        {
          Level: 4,
          Amount: 70,
        },
        {
          Level: 5,
          Amount: 80,
        },
      ],
      Weapon: {
        Bow: true,
      },
      Ammo: {
        Arrow: true,
      },
      AmmoAmount: 7,
    },
  },
  {
    Id: 5317,
    Name: "ABC_FROM_THE_ABYSS",
    Description: "From The Abyss",
    MaxLevel: 5,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Hit: "Single",
    HitCount: 1,
    CastCancel: true,
    Duration1: [
      {
        Level: 1,
        Time: 30000,
      },
      {
        Level: 2,
        Time: 60000,
      },
      {
        Level: 3,
        Time: 90000,
      },
      {
        Level: 4,
        Time: 120000,
      },
      {
        Level: 5,
        Time: 150000,
      },
    ],
    Duration2: [
      {
        Level: 1,
        Time: 10000,
      },
      {
        Level: 2,
        Time: 8000,
      },
      {
        Level: 3,
        Time: 6000,
      },
      {
        Level: 4,
        Time: 4000,
      },
      {
        Level: 5,
        Time: 2000,
      },
    ],
    Cooldown: 60000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 40,
        },
        {
          Level: 2,
          Amount: 50,
        },
        {
          Level: 3,
          Amount: 60,
        },
        {
          Level: 4,
          Amount: 70,
        },
        {
          Level: 5,
          Amount: 80,
        },
      ],
    },
    Status: "AbyssForceWeapon",
  },
  {
    Id: 5318,
    Name: "ABC_ABYSS_SLAYER",
    Description: "Abyss Slayer",
    MaxLevel: 10,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Hit: "Single",
    HitCount: 1,
    CastCancel: true,
    CastTime: 2000,
    AfterCastActDelay: 500,
    Duration1: 60000,
    Cooldown: 60000,
    FixedCastTime: 1000,
    Requires: {
      SpCost: 100,
      ApCost: 150,
    },
    Status: "Abyss_Slayer",
  },
  {
    Id: 5319,
    Name: "ABC_ABYSS_STRIKE",
    Description: "Abyss Strike",
    MaxLevel: 10,
    Type: "Magic",
    TargetType: "Ground",
    Range: 9,
    Hit: "Single",
    HitCount: 1,
    CastCancel: true,
    CastTime: 2000,
    AfterCastActDelay: 500,
    Duration1: 100,
    Cooldown: 60000,
    FixedCastTime: 1000,
    Requires: {
      SpCost: 150,
      ApCost: 150,
    },
    Unit: {
      Id: "Dummyskill",
      Range: 4,
      Interval: 1000,
      Target: "Enemy",
      Flag: {
        PathCheck: true,
      },
    },
  },
  {
    Id: 5320,
    Name: "ABC_DEFT_STAB",
    Description: "Deft Stab",
    MaxLevel: 10,
    Type: "Weapon",
    TargetType: "Attack",
    DamageFlags: {
      Splash: true,
    },
    Range: 2,
    Hit: "Multi_Hit",
    HitCount: -5,
    Element: "Weapon",
    SplashArea: [
      {
        Level: 1,
        Area: 1,
      },
      {
        Level: 2,
        Area: 1,
      },
      {
        Level: 3,
        Area: 1,
      },
      {
        Level: 4,
        Area: 1,
      },
      {
        Level: 5,
        Area: 1,
      },
      {
        Level: 6,
        Area: 2,
      },
      {
        Level: 7,
        Area: 2,
      },
      {
        Level: 8,
        Area: 2,
      },
      {
        Level: 9,
        Area: 2,
      },
      {
        Level: 10,
        Area: 2,
      },
    ],
    GiveAp: 2,
    CastCancel: true,
    AfterCastActDelay: 500,
    Cooldown: 2000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 28,
        },
        {
          Level: 2,
          Amount: 31,
        },
        {
          Level: 3,
          Amount: 34,
        },
        {
          Level: 4,
          Amount: 37,
        },
        {
          Level: 5,
          Amount: 40,
        },
        {
          Level: 6,
          Amount: 43,
        },
        {
          Level: 7,
          Amount: 46,
        },
        {
          Level: 8,
          Amount: 49,
        },
        {
          Level: 9,
          Amount: 52,
        },
        {
          Level: 10,
          Amount: 55,
        },
      ],
    },
  },
  {
    Id: 5321,
    Name: "ABC_ABYSS_SQUARE",
    Description: "Abyss Square",
    MaxLevel: 5,
    Type: "Magic",
    TargetType: "Ground",
    Range: 9,
    Hit: "Multi_Hit",
    HitCount: 1,
    GiveAp: 4,
    CastCancel: true,
    CastTime: 2000,
    AfterCastActDelay: 500,
    Duration1: 4000,
    Cooldown: 4000,
    FixedCastTime: 1000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 65,
        },
        {
          Level: 2,
          Amount: 75,
        },
        {
          Level: 3,
          Amount: 85,
        },
        {
          Level: 4,
          Amount: 95,
        },
        {
          Level: 5,
          Amount: 105,
        },
      ],
    },
    Unit: {
      Id: "Abyss_Square",
      Range: 3,
      Interval: 700,
      Target: "Enemy",
      Flag: {
        NoOverlap: true,
        PathCheck: true,
      },
    },
  },
  {
    Id: 5322,
    Name: "ABC_FRENZY_SHOT",
    Description: "Frenzy Shot",
    MaxLevel: 10,
    Type: "Weapon",
    TargetType: "Attack",
    DamageFlags: {
      Critical: true,
    },
    Range: 9,
    Hit: "Multi_Hit",
    HitCount: -10,
    Element: "Weapon",
    GiveAp: 2,
    CastCancel: true,
    AfterCastActDelay: 500,
    Cooldown: 2000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 40,
        },
        {
          Level: 2,
          Amount: 45,
        },
        {
          Level: 3,
          Amount: 50,
        },
        {
          Level: 4,
          Amount: 55,
        },
        {
          Level: 5,
          Amount: 60,
        },
        {
          Level: 6,
          Amount: 65,
        },
        {
          Level: 7,
          Amount: 70,
        },
        {
          Level: 8,
          Amount: 75,
        },
        {
          Level: 9,
          Amount: 80,
        },
        {
          Level: 10,
          Amount: 85,
        },
      ],
      Weapon: {
        Bow: true,
      },
      Ammo: {
        Arrow: true,
      },
      AmmoAmount: 10,
    },
  },
  {
    Id: 5323,
    Name: "WH_ADVANCED_TRAP",
    Description: "Advanced Trap",
    MaxLevel: 5,
  },
  {
    Id: 5324,
    Name: "WH_WIND_SIGN",
    Description: "Wind Sign",
    MaxLevel: 5,
    TargetType: "Attack",
    DamageFlags: {
      NoDamage: true,
    },
    Range: 9,
    Hit: "Single",
    HitCount: 1,
    CastCancel: true,
    Duration1: [
      {
        Level: 1,
        Time: 20000,
      },
      {
        Level: 2,
        Time: 30000,
      },
      {
        Level: 3,
        Time: 40000,
      },
      {
        Level: 4,
        Time: 50000,
      },
      {
        Level: 5,
        Time: 60000,
      },
    ],
    Cooldown: 30000,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 100,
        },
        {
          Level: 2,
          Amount: 90,
        },
        {
          Level: 3,
          Amount: 80,
        },
        {
          Level: 4,
          Amount: 70,
        },
        {
          Level: 5,
          Amount: 60,
        },
      ],
    },
    Status: "WindSign",
  },
  {
    Id: 5325,
    Name: "WH_NATUREFRIENDLY",
    Description: "Nature Friendly",
    MaxLevel: 5,
  },
  {
    Id: 5326,
    Name: "WH_HAWKRUSH",
    Description: "Hawk Rush",
    MaxLevel: 5,
    Type: "Weapon",
    TargetType: "Attack",
    DamageFlags: {
      Critical: true,
    },
    Range: 9,
    Hit: "Multi_Hit",
    HitCount: -2,
    CastCancel: true,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 40,
        },
        {
          Level: 2,
          Amount: 44,
        },
        {
          Level: 3,
          Amount: 48,
        },
        {
          Level: 4,
          Amount: 52,
        },
        {
          Level: 5,
          Amount: 56,
        },
      ],
      Weapon: {
        Bow: true,
      },
      State: "Falcon",
    },
  },
  {
    Id: 5327,
    Name: "WH_HAWK_M",
    Description: "Hawk Mastery",
    MaxLevel: 1,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Hit: "Single",
    HitCount: 1,
    CastCancel: true,
    AfterCastActDelay: 1000,
    Requires: {
      SpCost: 5,
      ItemCost: [
        {
          Item: "Hawk_Flute",
          Amount: 0,
        },
      ],
    },
  },
  {
    Id: 5328,
    Name: "WH_CALAMITYGALE",
    Description: "Calamity Gale",
    MaxLevel: 1,
    TargetType: "Self",
    DamageFlags: {
      NoDamage: true,
    },
    Hit: "Single",
    HitCount: 1,
    CastCancel: true,
    AfterCastActDelay: 500,
    Duration1: 60000,
    Cooldown: 300000,
    FixedCastTime: 1000,
    Requires: {
      SpCost: 300,
      ApCost: 200,
    },
    Status: "CalamityGale",
  },
  {
    Id: 5329,
    Name: "WH_HAWKBOOMERANG",
    Description: "Hawk Boomerang",
    MaxLevel: 5,
    Type: "Weapon",
    TargetType: "Attack",
    DamageFlags: {
      Critical: true,
    },
    Range: 9,
    Hit: "Single",
    HitCount: 1,
    CastCancel: true,
    CastTime: 800,
    AfterCastActDelay: 500,
    Cooldown: 30000,
    FixedCastTime: 200,
    Requires: {
      SpCost: 120,
      ApCost: 50,
      Weapon: {
        Bow: true,
      },
      State: "Falcon",
    },
  },
  {
    Id: 5330,
    Name: "WH_GALESTORM",
    Description: "Gale Storm",
    MaxLevel: 10,
    Type: "Weapon",
    TargetType: "Attack",
    DamageFlags: {
      Splash: true,
      Critical: true,
    },
    Range: 9,
    Hit: "Multi_Hit",
    HitCount: -5,
    Element: "Weapon",
    SplashArea: [
      {
        Level: 1,
        Area: 2,
      },
      {
        Level: 2,
        Area: 2,
      },
      {
        Level: 3,
        Area: 2,
      },
      {
        Level: 4,
        Area: 2,
      },
      {
        Level: 5,
        Area: 3,
      },
      {
        Level: 6,
        Area: 3,
      },
      {
        Level: 7,
        Area: 3,
      },
      {
        Level: 8,
        Area: 4,
      },
      {
        Level: 9,
        Area: 4,
      },
      {
        Level: 10,
        Area: 5,
      },
    ],
    CastCancel: true,
    CastTime: 3500,
    AfterCastActDelay: 500,
    Cooldown: 2000,
    FixedCastTime: 500,
    Requires: {
      SpCost: [
        {
          Level: 1,
          Amount: 80,
        },
        {
          Level: 2,
          Amount: 91,
        },
        {
          Level: 3,
          Amount: 102,
        },
        {
          Level: 4,
          Amount: 113,
        },
        {
          Level: 5,
          Amount: 124,
        },
        {
          Level: 6,
          Amount: 135,
        },
        {
          Level: 7,
          Amount: 146,
        },
        {
          Level: 8,
          Amount: 157,
        },
        {
          Level: 9,
          Amount: 168,
        },
        {
          Level: 10,
          Amount: 179,
        },
      ],
      Weapon: {
        Bow: true,
      },
      Ammo: {
        Arrow: true,
      },
      AmmoAmount: 5,
    },
  },
  {
    Id: 5331,
    Name: "WH_DEEPBLINDTRAP",
    Description: "Deep Blind Trap",
    MaxLevel: 5,
    Type: "Weapon",
    TargetType: "Ground",
    DamageFlags: {
      IgnoreFlee: true,
    },
    Range: 1,
    Hit: "Single",
    HitCount: 1,
    Element: "Dark",
    GiveAp: 3,
    CastCancel: true,
    CastTime: 1000,
    AfterCastActDelay: 500,
    Duration1: [
      {
        Level: 1,
        Time: 12000,
      },
      {
        Level: 2,
        Time: 24000,
      },
      {
        Level: 3,
        Time: 36000,
      },
      {
        Level: 4,
        Time: 48000,
      },
      {
        Level: 5,
        Time: 60000,
      },
    ],
];