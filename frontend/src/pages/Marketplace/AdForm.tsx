import {useEffect, useState} from 'react';
import Stack from "@mui/material/Stack";
import {TextField, Typography} from "@mui/material";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import {Link, useOutletContext} from 'react-router-dom';
import IconButton from "@mui/material/IconButton";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import MenuIcon from "@mui/icons-material/Menu";
import ClearIcon from '@mui/icons-material/Clear';

type Form = {
    idUser: number;
    libelleOffre: string;
    dateOffre: string;
    descriptionOffre: string;
    prixOffre: number;
    is_activeTypeOffre: boolean;
    idTypeOffre: number;
    idStatut: number;
    image: string;
}

const AdForm: React.FC = () => {
    const [formData, setFormData] = useState<Form>();
    const [toolbarRender, setToolbarRender] = useOutletContext();

    useEffect(() => {
        setToolbarRender(() => toolbarRenderMarketplace());
    }, []);

    function toolbarRenderMarketplace(): JSX.Element {
        return (
            <>
                <Link to={"/offres"}>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="ajouter"
                        sx={{ mr: 2 }}
                    >
                        <ClearIcon />
                    </IconButton>
                </Link>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Retourner à la page des annonces
                </Typography>
            </>
        );
    }

    const handleChange = (from: string, value: any) => {
        let copy : Form = {...formData};
        copy[from] = value;
        copy.idUser = 0;
        copy.dateOffre = Date.now().toString();
        copy.prixOffre = 0;
        copy.is_activeTypeOffre = true;
        copy.idTypeOffre = 0;
        copy.idStatut = 0;
        copy.image = "#";
        setFormData(copy);
    }

    return (
        <>
            <Stack spacing={3} alignItems={"center"} justifyContent="center">
                <TextField
                    required={true}
                    label={"Titre de l'annonce"}
                />
                <TextField
                    onChange={(event) => {handleChange('title', event.target.value)}}
                    required={true}
                    label={"Description de l'annonce"}
                    multiline
                    rows={10}
                />
                <TextField
                    required={true}
                    label={""}
                />
                <ButtonGroup>
                    <Button>Valider</Button>
                    <Button><Link to={'/offres'}>Annuler</Link></Button>
                </ButtonGroup>
            </Stack>
        </>
    );
}
export default AdForm;