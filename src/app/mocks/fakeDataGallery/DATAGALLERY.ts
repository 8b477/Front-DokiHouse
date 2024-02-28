import { BonsaiData } from "../../API/models/blogModels/BonsaiData";


export const MOCKUP_DATA: BonsaiData[] = [
    {
        idBonsai: 1,
        idUser: 1,
        bonsaiName: "Bonsaï Zen",
        bonsaiDescription: "Un magnifique bonsaï pour apporter la paix intérieure.",
        createAt: "2024-02-26T12:39:47.79",
        modifiedAt: "0001-01-01T00:00:00",
        bonsaiPicture: [
            {
                idPicture: 1,
                fileName: "/assets/img/symbole.png",
                createAt: "2024-02-26T13:02:11.8",
                modifiedAt: null,
                idBonsai: 1
            },
            {
                idPicture: 2,
                fileName: "/assets/img/bonsai-1.png",
                createAt: "2024-02-26T13:02:12.8",
                modifiedAt: null,
                idBonsai: 1
            },
            {
                idPicture: 3,
                fileName: "/assets/img/lotus.png",
                createAt: "2024-02-26T13:02:13.8",
                modifiedAt: null,
                idBonsai: 1
            }
        ]
    },


    {
        idBonsai: 2,
        idUser: 1,
        bonsaiName: "Bonsaï Sakura",
        bonsaiDescription: "Un magnifique bonsaï de cerisier en fleurs.",
        createAt: "2024-02-26T14:15:38.693",
        modifiedAt: "0001-01-01T00:00:00",
        bonsaiPicture: [
            {
                idPicture: 6,
                fileName: "/assets/img/fleur.png",
                createAt: "2024-02-26T14:34:33.55",
                modifiedAt: null,
                idBonsai: 2
            },
            {
                idPicture: 7,
                fileName: "/assets/img/geisha.png",
                createAt: "2024-02-26T14:34:33.55",
                modifiedAt: null,
                idBonsai: 2
            }
        ]
    }
    ,

    {
        idBonsai: 3,
        idUser: 1,
        bonsaiName: "Bonsaï Sakura",
        bonsaiDescription: "Un magnifique bonsaï de cerisier en fleurs.",
        createAt: "2024-02-26T14:15:38.693",
        modifiedAt: "0001-01-01T00:00:00",
        bonsaiPicture: [
            {
                idPicture: 4,
                fileName: "/assets/img/fleur.png",
                createAt: "2024-02-26T14:34:33.55",
                modifiedAt: null,
                idBonsai: 2
            },
            {
                idPicture: 5,
                fileName: "/assets/img/geisha.png",
                createAt: "2024-02-26T14:34:33.55",
                modifiedAt: null,
                idBonsai: 2
            }
        ]
    }
];