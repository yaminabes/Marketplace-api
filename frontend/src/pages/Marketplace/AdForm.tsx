import {useEffect, useState} from 'react';
import Stack from "@mui/material/Stack";
import {TextField, Typography} from "@mui/material";
import Button from "@mui/material/Button";
import {Link, useNavigate, useOutletContext} from 'react-router-dom';
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
    const navigate = useNavigate();

    useEffect(() => {
        setToolbarRender(() => toolbarRenderMarketplace());
    }, []);

    function toolbarRenderMarketplace(): JSX.Element {
        return (
            <>
                <Button
                    fullWidth={true}
                    size="large"
                    color="inherit"
                    startIcon={<ClearIcon />}
                    sx={{ mr: 2 }}
                    onClick={() => navigate("/offres")}
                >
                        Retourner à la page des annonces
                </Button>
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
                <Button>Valider</Button>
            </Stack>
        </>
    );
}
export default AdForm;