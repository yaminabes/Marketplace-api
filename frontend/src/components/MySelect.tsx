import {MenuItem, Select} from "@mui/material";
import {useEffect, useState} from "react";

type MySelectProps = {
    dataSourceUrl: string,
    dataSource: [],
    bindingScheme: {Key: string, Label: string}
    label: string,
    className: string,
    callback: Function,
}

const MySelect: React.FC = ({
    className,
    dataSourceUrl,
    dataSource,
    bindingScheme,
    label,
    callback
}: MySelectProps) => {
    const [data, setData] = useState<object[]>([]);
    const [selected, setSelected] = useState<any>(null);

    useEffect(() => {
        if(dataSource?.length > 0) {
            return setData(dataSource);
        }
        if(dataSourceUrl) {
            return doDatabind();
        }
    }, []);

    const doDatabind = () => {
        // fetch(dataSourceUrl, {
        //         method: 'GET',
        //         mode: 'cors',
        //      }
        // ).then((res) => {
        //     setData(res.data)
        // });

        let placeholderData = [
            {
                id: 0,
                label: "test 1"
            },
            {
                id: 1,
                label: "test 2"
            },
            {
                id: 2,
                label: "test 3"
            },
        ];
        setData(placeholderData);
    }
    const handleChange = (selected) => {
        let newValue = selected[bindingScheme?.Key]
        if (newValue) {
            setSelected(newValue)
            if (callback) {
                callback(newValue);
            }
        }
    }

    return (
        <Select
            defaultValue={selected ?? undefined}
            label={label}
            labelId={"my-select-label" + (className ? ` my-select-label-${className} ${className}` : "")}
            id={"my-select" + (className ? ` my-select-${className} ${className}` : "")}
            onChange={handleChange}
        >
            {data.map((item: object) => (
                <MenuItem
                    key={item[bindingScheme?.Key]}
                    value={item[bindingScheme?.Key]}
                >
                    {item[bindingScheme?.Label]}
                </MenuItem>
            ))}
        </Select>
    );
}
export default MySelect;