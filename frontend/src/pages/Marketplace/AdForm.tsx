import {useEffect, useState} from 'react';
import Stack from "@mui/material/Stack";
import {TextField, Typography} from "@mui/material";
import Button from "@mui/material/Button";
<<<<<<< HEAD
import {Link} from 'react-router-dom';
import routes from '../../services/services'
=======
import {Link, useNavigate, useOutletContext} from 'react-router-dom';
import AddCircleIcon from "@mui/icons-material/AddCircle";
import MenuIcon from "@mui/icons-material/Menu";
import ClearIcon from '@mui/icons-material/Clear';
>>>>>>> 8470e6640d546233aa55f6791eacdf89d548a879

type Form = {
    idUser: number;
    libelleOffre: string;
<<<<<<< HEAD
    dateOffre:string;
    descriptionOffre: string;
    prixOffre: number;
    is_activeTypeOffre: boolean;
    idTypeOffre : number;
    idStatus: number
=======
    dateOffre: string;
    descriptionOffre: string;
    prixOffre: number;
    is_activeTypeOffre: boolean;
    idTypeOffre: number;
    idStatut: number;
    image: string;
>>>>>>> 8470e6640d546233aa55f6791eacdf89d548a879
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

    const handleChange = (from: string, value: any) => {
        let copy : Form = {...formData};
        copy[from] = value;
        copy.idUser = 1;
        copy.dateOffre = "2023-06-15T00:31:30.124Z";
        copy.prixOffre = 0;
        copy.is_activeTypeOffre = true;
        copy.idTypeOffre = 1;
        copy.idStatus= 1;
        setFormData(copy);
    }

    const sendOffre = () => {
        routes.sendOffre(formData)
    }

    return (
        <>
            <Stack spacing={3} alignItems={"center"} justifyContent="center">
                <h3>Déposer une nouvelle annonce </h3>
                <TextField
                    required={true}
                    label={"Titre de l'annonce"}
                    onChange={(event) => {handleChange('libelleOffre', event.target.value)}}

                    
                />
                <TextField
                    onChange={(event) => {handleChange('title', event.target.value)}}
                    required={true}
                    label={"Description de l'annonce"}
                    multiline
                    rows={10}
                    onChange={(event) => {handleChange('descriptionOffre', event.target.value)}}

                />
                <TextField
                    required={true}
                    label={""}
<<<<<<< HEAD
                    />
                <ButtonGroup>
                    <Button onClick={sendOffre}>Valider</Button>
                    <Button><Link to={'/offres'}>Annuler</Link></Button>
                </ButtonGroup>
=======
                />
                <Button>Valider</Button>
>>>>>>> 8470e6640d546233aa55f6791eacdf89d548a879
            </Stack>
        </>
    );
}
export default AdForm;