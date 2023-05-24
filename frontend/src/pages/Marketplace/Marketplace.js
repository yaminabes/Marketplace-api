import MyCard from '../../components/MyCard';
import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';

import ListItemText from '@mui/material/ListItemText';
class Marketplace extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        data: [],
        filters: [],
        filtersOpened: false,
    }

    componentDidMount() {
        this.doDatabind();
    }


    doDatabind = () => {
        console.log("test");
        const { filters } = this.state;
        // fetch('https://localhost:8000/marketplace/ads', {
        //         method: 'POST',
        //         mode: 'cors',
        //         body: JSON.stringify(jsondata)
        //      }
        // ).then((res) => {
        //     this.setState({data: res.data})
        // });

        let placeholderData = [
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

        this.setState({data: placeholderData});
    }

    buttonAction = (id) => {
        console.log("click");
    }

    toggleDrawer = (state) => {
        console.log('toggle');
        this.setState({filtersOpened: state});
    }

    render() {
        const { data } = this.state;
        const cols = 3;

        return (
            <>
                <Button
                    onClick={() => { this.toggleDrawer(true) }}
                >
                    Filtres
                </Button>
                <Drawer
                    anchor={'right'}
                    open={this.state.filtersOpened}
                    onClose={() => {this.toggleDrawer(false)}}
                >
                    <List>
                        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                            <ListItem key={text} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                    </ListItemIcon>
                                    <ListItemText primary={text} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                    <Divider />
                    <List>
                        {['All mail', 'Trash', 'Spam'].map((text, index) => (
                            <ListItem key={text} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                    </ListItemIcon>
                                    <ListItemText primary={text} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Drawer>
                <Box sx={{flexGrow: 1}}>
                    <Grid container spacing={3} colums={3}>
                        {
                            data.map((ad) => {
                                return (
                                    <Grid key={ad.id} item xs={12} md={6} lg={3}>
                                        <MyCard
                                            sx={{maxHeight:500}}
                                            id={ad.id}
                                            title={ad.title}
                                            text={ad.text}
                                            image={ad.image}
                                            buttonName={ad.buttonName}
                                            action={this.buttonAction}
                                        />
                                    </Grid>);
                            })
                        }
                    </Grid>
                </Box>
            </>
        );
    }
}

export default Marketplace;