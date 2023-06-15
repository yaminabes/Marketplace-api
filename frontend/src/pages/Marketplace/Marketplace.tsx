import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import MyCard from '../../components/MyCard';
import Box from '@mui/material/Box';
import ButtonGroup from '@mui/material/ButtonGroup';
import Grid from '@mui/material/Grid';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import VisibilityIcon from '@mui/icons-material/Visibility';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import {AdInterface} from './AdCard';
import {Modal, TextField} from "@mui/material";
import routes from '../../services/services'

// @ts-ignore
import AdCard from './AdCard.tsx';
import Stack from "@mui/material/Stack";
// @ts-ignore
import MySelect from '../../components/MySelect.tsx';

const Marketplace: React.FC = () => {
    const [data, setData] = useState<AdInterface[]>([]);
    const [filtersOpened, setFiltersOpened] = useState<boolean>(false);
    const [adModalOpened, setAdModalOpened] = useState<boolean>(false);
    const [adData, setAdData] = useState<AdInterface>();

    var offres = []

    useEffect(() => {
        doDatabind();
    }, []);

    const doDatabind = (): void => {

        routes.getOffres().then((data)=>setData(data))
        
        //     {
        //         id: 1,
        //         title: "Title 1",
        //         text:"    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        //         image: "frontend/src/pages/media/babysitter.jpg",
        //         buttonName: "Suivre l'annonce"
        //     },
        //     {
        //         id: 2,
        //         title: "Title 2",
        //         text:"    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        //         image: "frontend/src/pages/media/babysitter.jpg",
        //         buttonName: "Suivre l'annonce"
        //     },
        //     {
        //         id: 3,
        //         title: "Title 3",
        //         text:"    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        //         image: "frontend/src/pages/media/babysitter.jpg",
        //         buttonName: "Suivre l'annonce"
        //     },
        //     {
        //         id: 4,
        //         title: "Title 4",
        //         text:"    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        //         image: "frontend/src/pages/media/babysitter.jpg",
        //         buttonName: "Suivre l'annonce"
        //     },
        //     {
        //         id: 5,
        //         title: "Title 5",
        //         text:"    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        //         image: "frontend/src/pages/media/babysitter.jpg",
        //         buttonName: "Suivre l'annonce"
        //     },
        //     {
        //         id: 6,
        //         title: "Title 6",
        //         text:"    Lore ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        //         image: "frontend/src/pages/media/babysitter.jpg",
        //         buttonName: "Suivre l'annonce"
        //     },
        //     {
        //         id: 7,
        //         title: "Title 7",
        //         text:"    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        //         image: "frontend/src/pages/media/babysitter.jpg",
        //         buttonName: "Suivre l'annonce"
        //     },
        //     {
        //         id: 8,
        //         title: "Title 8",
        //         text:"    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        //         image: "frontend/src/pages/media/babysitter.jpg",
        //         buttonName: "Suivre l'annonce"
        //     },
        //     {
        //         id: 9,
        //         title: "Title 9",
        //         text:"    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        //         image: "frontend/src/pages/media/babysitter.jpg",
        //         buttonName: "Suivre l'annonce"
        //     }
        // ]

        // setData(placeholderData);
        // setAdData(placeholderData[1])
    };

    const cardActionRender = (ad: AdInterface): JSX.Element => {
        return (<ButtonGroup>
            <Button
                startIcon={<LibraryAddIcon />}
                onClick={() => add(ad.id)}
            >
                "Suivre"
            </Button>
            <Button
                endIcon={<VisibilityIcon/>}
                onClick={() => show(ad)}
            >
                "Voir"
            </Button>
        </ButtonGroup>);
    }

    const add = (id: number): void => {
        console.log("Suivre ", id);
    }

    const show = (ad: AdInterface): void => {
        console.log("show", ad.id);
        setAdData(ad);
        setAdModalOpened(true);
    };

    const toggleDrawer = (state: boolean): void => {
        setFiltersOpened(state);
    };

    return (
        <>
            <Link to={"/offres/new"}>Créer une nouvelle offre</Link>
            <Button
                onClick={() => toggleDrawer(true)}
            >
                Filtres
            </Button>
            <Drawer
                anchor={'right'}
                open={filtersOpened}
                onClose={() => toggleDrawer(false)}
            >
                <Stack>
                    <TextField label={"Titre"}/>
                    <TextField label={"Nom d'utilisateur"}/>
                    <MySelect
                        label={"Tags"}
                        className={"TagFilter"}
                        dataSourceUrl={"lll"}
                        bindingScheme={{
                            Key: "id",
                            Label: "label"
                        }}
                        callback={(val) => console.log("test", val)}
                    />
                </Stack>
            </Drawer>
            <Modal
                open={adModalOpened}
                onClose={() => setAdModalOpened(false)}
                sx={{
                    maxWidth: 1000,
                    p: 30,
                }}
            >
                <Box>
                    <AdCard ad={adData} />
                </Box>
            </Modal>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container rowSpacing={3} columnSpacing={3}>
                    {data.map((ad: AdInterface) => (
                        <Grid item xs={3} key={ad.idOffre}>
                            <MyCard
                                sx={{ maxHeight: 500 }}
                                id={ad.idOffre}
                                title={ad.libelleOffre}
                                text={ad.descriptionOffre }
                                image={ad.image}
                                buttonName={ad.buttonName}
                                renderCardActions={cardActionRender(ad)}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </>
    );
};

export default Marketplace;
