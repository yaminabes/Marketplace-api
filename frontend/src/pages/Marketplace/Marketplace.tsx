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
import {Modal, TextField} from "@mui/material";
import routes from '../../services/services'
import MarketplaceFilter from './MarketplaceFilter.tsx';
// @ts-ignore
import AdCard from './AdCard.tsx';
import IconButton from "@mui/material/IconButton";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import MenuIcon from "@mui/icons-material/Menu";

const Marketplace: React.FC = () => {
    const [data, setData] = useState<AdInterface[]>([]);
    const [adModalOpened, setAdModalOpened] = useState<boolean>(false);
    const [adData, setAdData] = useState<AdInterface>();
    const [filtersOpened, setFiltersOpened] = useState<boolean>(false);
    const [toolbarRender, setToolbarRender] = useOutletContext();
    const [filters, setFilters] = useState<object>({});
    const navigate = useNavigate();

    var offres = []

    useEffect(() => {
        setToolbarRender(() => toolbarRenderMarketplace());
        doDatabind();
    }, []);

    const doDatabind = (): void => {
        routes.getOffres().then((data)=>setData(data))
    };

    const cardActionRender = (ad: AdInterface): JSX.Element => {
        return (<ButtonGroup>
            <Button
                startIcon={<LibraryAddIcon />}
                onClick={() => add(ad.idOffre)}
            >
                Suivre
            </Button>
            <Button
                endIcon={<VisibilityIcon/>}
                onClick={() => show(ad)}
            >
                Consulter
            </Button>
        </ButtonGroup>);
    }

    const add = (id: number): void => {
        console.log("Suivre ", id);
    }

    const show = (ad: AdInterface): void => {
        console.log("show", ad.idOffre);
        setAdData(ad);
        toggleAdModal(true);
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

    const toggleAdModal = (state) => {
        setAdModalOpened(state);
    }

    return (
        <>
            <Modal
                open={adModalOpened}
                onClose={() => toggleAdModal(false)}
                sx={{
                    maxWidth: 1000,
                    p: 30,
                }}
            >
                <Box>
                    <AdCard
                        ad={adData}
                        buttonName={"Ajouter aux annonces suivies"}
                        callback={() => toggleAdModal(false)}
                    />
                </Box>
            </Modal>
            <Drawer
                anchor={'right'}
                open={filtersOpened}
                onClose={() => setFiltersOpened(false)}
            >
                <MarketplaceFilter
                    values={filters}
                    callback={(f) => {
                        setFilters(f);
                        console.log(f)
                    }}
                />
            </Drawer>
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
