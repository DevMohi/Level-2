    {
    //Generic With Interface
    //By Default x param will be null
    
        interface Developer<T, X = null> {
            name: string;
            computer: {
            brand: string;
            model: string;
            releaseYear: number;
            };
            smartWatch: T;
            bike ? : X
        }

        type EmilabWatch = {
            brand: string;
            model: string;
            display: string;
        }
        const PoorDeveloper: Developer<EmilabWatch, null> = {
            name: "Mdui",
            computer: {
            brand: "Asus",
            model: "2000",
            releaseYear: 2003,
            },
            smartWatch: {
            brand: "emilab",
            model: "kw66",
            display: "OLED",
            },
        };

        interface AppleWatch {
            brand: string;
            model: string;
            heartTrack: boolean;
            sleepTrack: boolean;
        }
        interface Yamaha {
            model : string;
        }
    
        const RichDeveloper: Developer<AppleWatch, Yamaha> = {
            name: "Modui",
            computer: {
            brand: "Ipad",
            model: "2000",
            releaseYear: 2003,
            },
            smartWatch: {
            brand: "Apple",
            model: "kw66",
            heartTrack: true,
            sleepTrack: true,
            },
            bike: {
                model : 'Yamaha'
            }
        };
    }
