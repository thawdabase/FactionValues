// Question set for the 7-axis FactionValues system.
// Each "effect" object must include all 7 keys: ground, intel, aid, enforce, manage, energy, prole.
// Convention: a POSITIVE value pushes the axis toward its LEFT pole; a NEGATIVE value pushes toward
// its RIGHT pole (see the AXES config in results.html for what each pole is named).
//   ground   -> left: Insurrection      right: Coup D'État
//   intel    -> left: Domestic          right: Foreign
//   aid      -> left: Mutual Aid        right: State Aid
//   enforce  -> left: Restorative       right: Punitive
//   manage   -> left: Decentralized     right: Centralized
//   energy   -> left: Renewable         right: Extractive
//   prole    -> left: Labor             right: Capital
// 5 questions per axis (35 total). quiz.html and results.html read the axis keys straight
// from this file, so adding/removing/renaming axes only ever requires editing this file
// (and the AXES config in results.html).
questions = [
    {
        "question": "Lasting change comes from mass uprisings of ordinary people, not palace intrigue.",
        "effect": { "ground": 10, "intel": 0, "aid": 0, "enforce": 0, "manage": 0, "energy": 0, "prole": 0 }
    },
    {
        "question": "A small, disciplined group seizing key institutions is more effective than a popular revolt.",
        "effect": { "ground": -10, "intel": 0, "aid": 0, "enforce": 0, "manage": 0, "energy": 0, "prole": 0 }
    },
    {
        "question": "Revolutions belong to the people in the streets, not to generals in the barracks.",
        "effect": { "ground": 5, "intel": 0, "aid": 0, "enforce": 0, "manage": 0, "energy": 0, "prole": 0 }
    },
    {
        "question": "A revolutionary vanguard should install itself in the state apparatus before the masses are ready.",
        "effect": { "ground": -7, "intel": 0, "aid": 0, "enforce": 0, "manage": 0, "energy": 0, "prole": 0 }
    },
    {
        "question": "General strikes and mass demonstrations are the true engines of revolutionary change.",
        "effect": { "ground": 7, "intel": 0, "aid": 0, "enforce": 0, "manage": 0, "energy": 0, "prole": 0 }
    },
    {
        "question": "Our resources are best spent solving problems at home before looking abroad.",
        "effect": { "ground": 0, "intel": 10, "aid": 0, "enforce": 0, "manage": 0, "energy": 0, "prole": 0 }
    },
    {
        "question": "Foreign entanglements and international cooperation strengthen us in the long run.",
        "effect": { "ground": 0, "intel": -10, "aid": 0, "enforce": 0, "manage": 0, "energy": 0, "prole": 0 }
    },
    {
        "question": "Charity, and policy, should begin at home.",
        "effect": { "ground": 0, "intel": 5, "aid": 0, "enforce": 0, "manage": 0, "energy": 0, "prole": 0 }
    },
    {
        "question": "International solidarity movements matter more than any single nation's borders.",
        "effect": { "ground": 0, "intel": -7, "aid": 0, "enforce": 0, "manage": 0, "energy": 0, "prole": 0 }
    },
    {
        "question": "We should build strong institutions domestically before trying to export our model abroad.",
        "effect": { "ground": 0, "intel": 7, "aid": 0, "enforce": 0, "manage": 0, "energy": 0, "prole": 0 }
    },
    {
        "question": "Communities helping each other directly is more effective than waiting on bureaucracy.",
        "effect": { "ground": 0, "intel": 0, "aid": 10, "enforce": 0, "manage": 0, "energy": 0, "prole": 0 }
    },
    {
        "question": "A well-funded state welfare system reaches more people than informal charity ever could.",
        "effect": { "ground": 0, "intel": 0, "aid": -10, "enforce": 0, "manage": 0, "energy": 0, "prole": 0 }
    },
    {
        "question": "Grassroots mutual aid networks should replace, not supplement, government assistance programs.",
        "effect": { "ground": 0, "intel": 0, "aid": 5, "enforce": 0, "manage": 0, "energy": 0, "prole": 0 }
    },
    {
        "question": "Bureaucratic aid programs are too slow and impersonal to truly help people in need.",
        "effect": { "ground": 0, "intel": 0, "aid": 7, "enforce": 0, "manage": 0, "energy": 0, "prole": 0 }
    },
    {
        "question": "Only a centralized welfare state has the resources to guarantee aid at scale.",
        "effect": { "ground": 0, "intel": 0, "aid": -7, "enforce": 0, "manage": 0, "energy": 0, "prole": 0 }
    },
    {
        "question": "Justice should focus on repairing harm, not punishing offenders.",
        "effect": { "ground": 0, "intel": 0, "aid": 0, "enforce": 10, "manage": 0, "energy": 0, "prole": 0 }
    },
    {
        "question": "Strict, certain punishment is the best deterrent to crime.",
        "effect": { "ground": 0, "intel": 0, "aid": 0, "enforce": -10, "manage": 0, "energy": 0, "prole": 0 }
    },
    {
        "question": "Rehabilitation matters more than retribution.",
        "effect": { "ground": 0, "intel": 0, "aid": 0, "enforce": 5, "manage": 0, "energy": 0, "prole": 0 }
    },
    {
        "question": "Prisons should exist to reintegrate people into society, not merely to punish them.",
        "effect": { "ground": 0, "intel": 0, "aid": 0, "enforce": 7, "manage": 0, "energy": 0, "prole": 0 }
    },
    {
        "question": "Some crimes deserve harsh punishment regardless of the offender's circumstances.",
        "effect": { "ground": 0, "intel": 0, "aid": 0, "enforce": -7, "manage": 0, "energy": 0, "prole": 0 }
    },
    {
        "question": "Decisions are best made locally, by those closest to the problem.",
        "effect": { "ground": 0, "intel": 0, "aid": 0, "enforce": 0, "manage": 10, "energy": 0, "prole": 0 }
    },
    {
        "question": "A strong central authority is necessary to coordinate large-scale efforts effectively.",
        "effect": { "ground": 0, "intel": 0, "aid": 0, "enforce": 0, "manage": -10, "energy": 0, "prole": 0 }
    },
    {
        "question": "Power should be distributed as widely as possible, even at the cost of efficiency.",
        "effect": { "ground": 0, "intel": 0, "aid": 0, "enforce": 0, "manage": 5, "energy": 0, "prole": 0 }
    },
    {
        "question": "Federated networks of local councils work better than one central command.",
        "effect": { "ground": 0, "intel": 0, "aid": 0, "enforce": 0, "manage": 7, "energy": 0, "prole": 0 }
    },
    {
        "question": "Complex crises call for unified central planning rather than a patchwork of local responses.",
        "effect": { "ground": 0, "intel": 0, "aid": 0, "enforce": 0, "manage": -7, "energy": 0, "prole": 0 }
    },
    {
        "question": "We should transition rapidly to renewable energy, even at short-term economic cost.",
        "effect": { "ground": 0, "intel": 0, "aid": 0, "enforce": 0, "manage": 0, "energy": 10, "prole": 0 }
    },
    {
        "question": "Extractive industries like oil, gas, and mining remain essential to a functioning economy.",
        "effect": { "ground": 0, "intel": 0, "aid": 0, "enforce": 0, "manage": 0, "energy": -10, "prole": 0 }
    },
    {
        "question": "Long-term sustainability matters more than short-term energy output.",
        "effect": { "ground": 0, "intel": 0, "aid": 0, "enforce": 0, "manage": 0, "energy": 5, "prole": 0 }
    },
    {
        "question": "Investing heavily in solar, wind, and other renewables should be a top national priority.",
        "effect": { "ground": 0, "intel": 0, "aid": 0, "enforce": 0, "manage": 0, "energy": 7, "prole": 0 }
    },
    {
        "question": "Cutting off extractive industries too quickly would do more harm than good.",
        "effect": { "ground": 0, "intel": 0, "aid": 0, "enforce": 0, "manage": 0, "energy": -7, "prole": 0 }
    },
    {
        "question": "Workers should control the enterprises they work in.",
        "effect": { "ground": 0, "intel": 0, "aid": 0, "enforce": 0, "manage": 0, "energy": 0, "prole": 10 }
    },
    {
        "question": "Capital investment and ownership drive innovation and should be protected.",
        "effect": { "ground": 0, "intel": 0, "aid": 0, "enforce": 0, "manage": 0, "energy": 0, "prole": -10 }
    },
    {
        "question": "The interests of labor should take precedence over the interests of capital.",
        "effect": { "ground": 0, "intel": 0, "aid": 0, "enforce": 0, "manage": 0, "energy": 0, "prole": 5 }
    },
    {
        "question": "Profits generated by a workplace rightly belong to the workers who created them.",
        "effect": { "ground": 0, "intel": 0, "aid": 0, "enforce": 0, "manage": 0, "energy": 0, "prole": 7 }
    },
    {
        "question": "Protecting investors and business owners is key to a healthy, growing economy.",
        "effect": { "ground": 0, "intel": 0, "aid": 0, "enforce": 0, "manage": 0, "energy": 0, "prole": -7 }
    }
];
