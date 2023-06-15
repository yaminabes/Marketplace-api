import {useState} from 'react';
import Stack from "@mui/material/Stack";
import {TextField} from "@mui/material";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import {Link} from 'react-router-dom';

interface Form {
    title: string,
    description: string,
    image: string,
}

const AdForm: React.FC = () => {
    const [formData, setFormData] = useState<Form>();

    return (
        <>
            <Stack spacing={3} alignItems={"center"} justifyContent="center">
                <TextField
                    required={true}
                    label={"Titre de l'annonce"}
                />
                <TextField
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