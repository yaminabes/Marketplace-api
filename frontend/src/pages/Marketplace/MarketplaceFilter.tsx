import {FunctionComponent, useEffect, useState} from "react";
import Stack from "@mui/material/Stack";
import {TextField, Typography} from "@mui/material";
import MySelect from "../../components/MySelect.tsx";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";


interface MarketPlaceFilterProps {
    values: object,
    callback: Function,
}


const MarketplaceFilter:FunctionComponent<MarketPlaceFilterProps> = ({values, callback}) => {
    const [filters, setFilters] = useState<object>([{}]);


    useEffect(() => {
        setFilters(values);
    })

    const handleChange = (from, value) => {
        let copy = {...filters}
        copy[from] = value;
        setFilters(copy);
        console.log(copy, filters);
        // callback(copy);
    }

    const submitFilters = () => {
        callback(filters);
    }

    return (
        <Box>
            <Box sx={{height: 35}} />
            <Stack spacing={5} sx={{paddingLeft: 2, paddingRight: 2}}>
                <Typography>
                    Filtres
                </Typography>
                <TextField
                    label={"Titre"}
                    onChange={(event) => handleChange("libelle", event.target.value)}
                    value={filters["titre"]}
                />
                <TextField label={"Nom d'utilisateur"}
                   onChange={(event) => handleChange("libelle", event.target.value)}
                   value={filters["user"]}
                />
                <MySelect
                    label={"Tags"}
                    className={"TagFilter"}
                    dataSourceUrl={"lll"}
                    bindingScheme={{
                        Key: "id",
                        Label: "label"
                    }}
                    // callback={(value) => handleChange("libelle", value)}
                    callback={(value) => console.log('click', value)}
                    value={filters["tag"]}
                />
                <Button onClick={submitFilters}>
                    Confirmer
                </Button>
            </Stack>
        </Box>


    );
}
export default MarketplaceFilter;