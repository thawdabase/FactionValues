// NOTE: aid/enforce/manage/energy/prole/ground/intel stats below are heuristically
// derived placeholders (mapped from the old econ/dipl/govt/scty model) so the
// matching engine has something to run against. Replace with real per-faction
// values once you've defined how each ideology should score on your 7 axes.
ideologies = [
    {
        "name": "Anarcho-Communism",
        "stats": {
            "ground": 90,
            "intel": 50,
            "aid": 50,
            "enforce": 100,
            "manage": 100,
            "energy": 90,
            "prole": 100
        }
    },
    {
        "name": "Libertarian Communism",
        "stats": {
            "ground": 80,
            "intel": 30,
            "aid": 50,
            "enforce": 80,
            "manage": 80,
            "energy": 80,
            "prole": 100
        }
    },
    {
        "name": "Trotskyism",
        "stats": {
            "ground": 80,
            "intel": 0,
            "aid": 50,
            "enforce": 60,
            "manage": 60,
            "energy": 80,
            "prole": 100
        }
    },
    {
        "name": "Marxism",
        "stats": {
            "ground": 80,
            "intel": 30,
            "aid": 50,
            "enforce": 40,
            "manage": 40,
            "energy": 80,
            "prole": 100
        }
    },
    {
        "name": "De Leonism",
        "stats": {
            "ground": 80,
            "intel": 70,
            "aid": 50,
            "enforce": 30,
            "manage": 30,
            "energy": 80,
            "prole": 100
        }
    },
    {
        "name": "Leninism",
        "stats": {
            "ground": 70,
            "intel": 60,
            "aid": 50,
            "enforce": 20,
            "manage": 20,
            "energy": 70,
            "prole": 100
        }
    },
    {
        "name": "Stalinism/Maoism",
        "stats": {
            "ground": 60,
            "intel": 80,
            "aid": 50,
            "enforce": 0,
            "manage": 0,
            "energy": 60,
            "prole": 100
        }
    },
    {
        "name": "Religious Communism",
        "stats": {
            "ground": 30,
            "intel": 50,
            "aid": 50,
            "enforce": 30,
            "manage": 30,
            "energy": 30,
            "prole": 100
        }
    },
    {
        "name": "State Socialism",
        "stats": {
            "ground": 70,
            "intel": 70,
            "aid": 50,
            "enforce": 30,
            "manage": 30,
            "energy": 70,
            "prole": 80
        }
    },
    {
        "name": "Theocratic Socialism",
        "stats": {
            "ground": 20,
            "intel": 50,
            "aid": 50,
            "enforce": 30,
            "manage": 30,
            "energy": 20,
            "prole": 80
        }
    },
    {
        "name": "Religious Socialism",
        "stats": {
            "ground": 20,
            "intel": 50,
            "aid": 50,
            "enforce": 70,
            "manage": 70,
            "energy": 20,
            "prole": 80
        }
    },
    {
        "name": "Democratic Socialism",
        "stats": {
            "ground": 80,
            "intel": 50,
            "aid": 50,
            "enforce": 50,
            "manage": 50,
            "energy": 80,
            "prole": 80
        }
    },
    {
        "name": "Revolutionary Socialism",
        "stats": {
            "ground": 70,
            "intel": 80,
            "aid": 50,
            "enforce": 50,
            "manage": 50,
            "energy": 70,
            "prole": 80
        }
    },
    {
        "name": "Libertarian Socialism",
        "stats": {
            "ground": 80,
            "intel": 20,
            "aid": 50,
            "enforce": 80,
            "manage": 80,
            "energy": 80,
            "prole": 80
        }
    },
    {
        "name": "Anarcho-Syndicalism",
        "stats": {
            "ground": 80,
            "intel": 50,
            "aid": 50,
            "enforce": 100,
            "manage": 100,
            "energy": 80,
            "prole": 80
        }
    },
    {
        "name": "Left-Wing Populism",
        "stats": {
            "ground": 70,
            "intel": 60,
            "aid": 50,
            "enforce": 30,
            "manage": 30,
            "energy": 70,
            "prole": 60
        }
    },
    {
        "name": "Theocratic Distributism",
        "stats": {
            "ground": 20,
            "intel": 60,
            "aid": 50,
            "enforce": 30,
            "manage": 30,
            "energy": 20,
            "prole": 60
        }
    },
    {
        "name": "Distributism",
        "stats": {
            "ground": 20,
            "intel": 50,
            "aid": 50,
            "enforce": 50,
            "manage": 50,
            "energy": 20,
            "prole": 60
        }
    },
    {
        "name": "Social Liberalism",
        "stats": {
            "ground": 80,
            "intel": 40,
            "aid": 50,
            "enforce": 60,
            "manage": 60,
            "energy": 80,
            "prole": 60
        }
    },
    {
        "name": "Christian Democracy",
        "stats": {
            "ground": 30,
            "intel": 40,
            "aid": 50,
            "enforce": 50,
            "manage": 50,
            "energy": 30,
            "prole": 60
        }
    },
    {
        "name": "Social Democracy",
        "stats": {
            "ground": 80,
            "intel": 30,
            "aid": 50,
            "enforce": 60,
            "manage": 60,
            "energy": 80,
            "prole": 60
        }
    },
    {
        "name": "Progressivism",
        "stats": {
            "ground": 100,
            "intel": 20,
            "aid": 50,
            "enforce": 60,
            "manage": 60,
            "energy": 100,
            "prole": 60
        }
    },
    {
        "name": "Anarcho-Mutualism",
        "stats": {
            "ground": 70,
            "intel": 50,
            "aid": 50,
            "enforce": 100,
            "manage": 100,
            "energy": 70,
            "prole": 60
        }
    },
    {
        "name": "National Totalitarianism",
        "stats": {
            "ground": 50,
            "intel": 80,
            "aid": 50,
            "enforce": 0,
            "manage": 0,
            "energy": 50,
            "prole": 50
        }
    },
    {
        "name": "Global Totalitarianism",
        "stats": {
            "ground": 50,
            "intel": 20,
            "aid": 50,
            "enforce": 0,
            "manage": 0,
            "energy": 50,
            "prole": 50
        }
    },
    {
        "name": "Technocracy",
        "stats": {
            "ground": 70,
            "intel": 40,
            "aid": 50,
            "enforce": 20,
            "manage": 20,
            "energy": 70,
            "prole": 60
        }
    },
    {
        "name": "Centrist",
        "stats": {
            "ground": 50,
            "intel": 50,
            "aid": 50,
            "enforce": 50,
            "manage": 50,
            "energy": 50,
            "prole": 50
        }
    },
    {
        "name": "Liberalism",
        "stats": {
            "ground": 60,
            "intel": 40,
            "aid": 50,
            "enforce": 60,
            "manage": 60,
            "energy": 60,
            "prole": 50
        }
    },
    {
        "name": "Religious Anarchism",
        "stats": {
            "ground": 20,
            "intel": 50,
            "aid": 50,
            "enforce": 100,
            "manage": 100,
            "energy": 20,
            "prole": 50
        }
    },
    {
        "name": "Right-Wing Populism",
        "stats": {
            "ground": 30,
            "intel": 70,
            "aid": 50,
            "enforce": 30,
            "manage": 30,
            "energy": 30,
            "prole": 40
        }
    },
    {
        "name": "Moderate Conservatism",
        "stats": {
            "ground": 30,
            "intel": 60,
            "aid": 50,
            "enforce": 50,
            "manage": 50,
            "energy": 30,
            "prole": 40
        }
    },
    {
        "name": "Reactionary",
        "stats": {
            "ground": 10,
            "intel": 60,
            "aid": 50,
            "enforce": 40,
            "manage": 40,
            "energy": 10,
            "prole": 40
        }
    },
    {
        "name": "Social Libertarianism",
        "stats": {
            "ground": 70,
            "intel": 30,
            "aid": 50,
            "enforce": 80,
            "manage": 80,
            "energy": 70,
            "prole": 60
        }
    },
    {
        "name": "Libertarianism",
        "stats": {
            "ground": 60,
            "intel": 40,
            "aid": 50,
            "enforce": 80,
            "manage": 80,
            "energy": 60,
            "prole": 40
        }
    },
    {
        "name": "Anarcho-Egoism",
        "stats": {
            "ground": 50,
            "intel": 50,
            "aid": 50,
            "enforce": 100,
            "manage": 100,
            "energy": 50,
            "prole": 40
        }
    },
    {
        "name": "Nazism",
        "stats": {
            "ground": 5,
            "intel": 100,
            "aid": 50,
            "enforce": 0,
            "manage": 0,
            "energy": 5,
            "prole": 40
        }
    },
    {
        "name": "Autocracy",
        "stats": {
            "ground": 50,
            "intel": 80,
            "aid": 50,
            "enforce": 20,
            "manage": 20,
            "energy": 50,
            "prole": 50
        }
    },
    {
        "name": "Fascism",
        "stats": {
            "ground": 20,
            "intel": 80,
            "aid": 50,
            "enforce": 20,
            "manage": 20,
            "energy": 20,
            "prole": 40
        }
    },
    {
        "name": "Capitalist Fascism",
        "stats": {
            "ground": 20,
            "intel": 80,
            "aid": 50,
            "enforce": 20,
            "manage": 20,
            "energy": 20,
            "prole": 20
        }
    },
    {
        "name": "Conservatism",
        "stats": {
            "ground": 20,
            "intel": 60,
            "aid": 50,
            "enforce": 40,
            "manage": 40,
            "energy": 20,
            "prole": 30
        }
    },
    {
        "name": "Neo-Liberalism",
        "stats": {
            "ground": 60,
            "intel": 70,
            "aid": 50,
            "enforce": 50,
            "manage": 50,
            "energy": 60,
            "prole": 30
        }
    },
    {
        "name": "Classical Liberalism",
        "stats": {
            "ground": 80,
            "intel": 40,
            "aid": 50,
            "enforce": 60,
            "manage": 60,
            "energy": 80,
            "prole": 30
        }
    },
    {
        "name": "Authoritarian Capitalism",
        "stats": {
            "ground": 40,
            "intel": 70,
            "aid": 50,
            "enforce": 20,
            "manage": 20,
            "energy": 40,
            "prole": 20
        }
    },
    {
        "name": "State Capitalism",
        "stats": {
            "ground": 50,
            "intel": 50,
            "aid": 50,
            "enforce": 30,
            "manage": 30,
            "energy": 50,
            "prole": 20
        }
    },
    {
        "name": "Neo-Conservatism",
        "stats": {
            "ground": 20,
            "intel": 80,
            "aid": 50,
            "enforce": 40,
            "manage": 40,
            "energy": 20,
            "prole": 20
        }
    },
    {
        "name": "Fundamentalism",
        "stats": {
            "ground": 5,
            "intel": 70,
            "aid": 50,
            "enforce": 30,
            "manage": 30,
            "energy": 5,
            "prole": 20
        }
    },
    {
        "name": "Libertarian Capitalism",
        "stats": {
            "ground": 60,
            "intel": 50,
            "aid": 50,
            "enforce": 80,
            "manage": 80,
            "energy": 60,
            "prole": 20
        }
    },
    {
        "name": "Market Anarchism",
        "stats": {
            "ground": 50,
            "intel": 50,
            "aid": 50,
            "enforce": 100,
            "manage": 100,
            "energy": 50,
            "prole": 20
        }
    },
    {
        "name": "Objectivism",
        "stats": {
            "ground": 40,
            "intel": 50,
            "aid": 50,
            "enforce": 90,
            "manage": 90,
            "energy": 40,
            "prole": 10
        }
    },
    {
        "name": "Totalitarian Capitalism",
        "stats": {
            "ground": 50,
            "intel": 70,
            "aid": 50,
            "enforce": 0,
            "manage": 0,
            "energy": 50,
            "prole": 0
        }
    },
    {
        "name": "Ultra-Capitalism",
        "stats": {
            "ground": 50,
            "intel": 60,
            "aid": 50,
            "enforce": 50,
            "manage": 50,
            "energy": 50,
            "prole": 0
        }
    },
    {
        "name": "Anarcho-Capitalism",
        "stats": {
            "ground": 50,
            "intel": 50,
            "aid": 50,
            "enforce": 100,
            "manage": 100,
            "energy": 50,
            "prole": 0
        }
    }
];