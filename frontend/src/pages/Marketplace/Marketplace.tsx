import { useEffect, useState } from 'react';
import {Link, useNavigate, useOutletContext} from 'react-router-dom';
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
import {Modal, TextField, Typography} from "@mui/material";
// @ts-ignore
import AdCard from './AdCard.tsx';
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import MenuIcon from "@mui/icons-material/Menu";
import MySelect from "../../components/MySelect.tsx";
import ClearIcon from "@mui/icons-material/Clear";
// @ts-ignore

const Marketplace: React.FC = () => {
    const [data, setData] = useState<AdInterface[]>([]);
    const [adModalOpened, setAdModalOpened] = useState<boolean>(false);
    const [adData, setAdData] = useState<AdInterface>();
    const [filtersOpened, setFiltersOpened] = useState<boolean>(false);
    const [toolbarRender, setToolbarRender] = useOutletContext();
    const navigate = useNavigate();

    useEffect(() => {
        setToolbarRender(() => toolbarRenderMarketplace());
        doDatabind();
    }, []);

    const doDatabind = (): void => {
        // const filters: any[] = [];
        // fetch('https://localhost:8000/marketplace/ads', {
        //         method: 'POST',
        //         mode: 'cors',
        //         body: JSON.stringify(filters)
        //      }
        // ).then((res) => {
        //     setData(res.data)
        // });

        const placeholderData = [
            {
                id: 1,
                title: "Title 1",
                text:"    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                image: "frontend/src/pages/media/babysitter.jpg",
                buttonName: "Suivre l'annonce"
            },
            {
                id: 2,
                title: "Title 2",
                text:"    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                image: "frontend/src/pages/media/babysitter.jpg",
                buttonName: "Suivre l'annonce"
            },
            {
                id: 3,
                title: "Title 3",
                text:"    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                image: "frontend/src/pages/media/babysitter.jpg",
                buttonName: "Suivre l'annonce"
            },
            {
                id: 4,
                title: "Title 4",
                text:"    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                image: "frontend/src/pages/media/babysitter.jpg",
                buttonName: "Suivre l'annonce"
            },
            {
                id: 5,
                title: "Title 5",
                text:"    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                image: "frontend/src/pages/media/babysitter.jpg",
                buttonName: "Suivre l'annonce"
            },
            {
                id: 6,
                title: "Title 6",
                text:"    Lore ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                image: "frontend/src/pages/media/babysitter.jpg",
                buttonName: "Suivre l'annonce"
            },
            {
                id: 7,
                title: "Title 7",
                text:"    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                image: "frontend/src/pages/media/babysitter.jpg",
                buttonName: "Suivre l'annonce"
            },
            {
                id: 8,
                title: "Title 8",
                text:"    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                image: "frontend/src/pages/media/babysitter.jpg",
                buttonName: "Suivre l'annonce"
            },
            {
                id: 9,
                title: "Title 9",
                text:"    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                image: "frontend/src/pages/media/babysitter.jpg",
                buttonName: "Suivre l'annonce"
            }
        ]

        setData(placeholderData);
        setAdData(placeholderData[1])
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

    function toolbarRenderMarketplace(): JSX.Element {
        return (
            <>
                <Button
                    fullWidth={true}
                    size="large"
                    color="inherit"
                    startIcon={<AddCircleIcon />}
                    sx={{ mr: 2 }}
                    onClick={() => navigate("/offres/new")}
                >
                        Ajouter une annonce
                </Button>

                <IconButton
                    onClick={() => setFiltersOpened(true)}
                >
                    <MenuIcon />
                </IconButton>
            </>
        );
    }

    return (
        <>
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
            <Drawer
                anchor={'right'}
                open={filtersOpened}
                onClose={() => setFiltersOpened(false)}
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
            <Box sx={{ flexGrow: 1 }}>
                <Grid container rowSpacing={3} columnSpacing={3}>
                    {data.map((ad: AdInterface) => (
                        <Grid item xs={3} key={ad.id}>
                            <MyCard
                                sx={{ maxHeight: 500 }}
                                id={ad.id}
                                title={ad.title}
                                text={ad.text}
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
