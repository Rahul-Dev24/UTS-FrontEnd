import React, { useEffect, useRef, useState } from 'react';
import {
    Box,
    Button,
    TextField,
    Typography,
    List,
    ListItem,
    ListItemText,
    IconButton,
    Card,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import "./StationSearch.css"
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Decryption } from "../../utils/Decode";
import { Encryption } from "../../utils/Encrypt";
import axios from "axios";


const allStations = [
    { name: 'GUMMIDIPUNDI', code: 'GPD' },
    { name: 'KASTURBA NAGAR', code: 'KTBR' },
    { name: 'INDRA NAGAR', code: 'INDR' },
    { name: 'KOTTURPURAM', code: 'KTPM' },
    { name: 'GREENWAYS ROAD', code: 'GWYR' },
    { name: 'TIRUVANMIYUR', code: 'TYMR' },
    { name: 'MANDAVELI', code: 'MNDY' },
    { name: 'THIRUMAYILAI', code: 'MTMY' },
    { name: 'TARAMANI', code: 'TRMN' },
    { name: 'MUNDAKAKANNI AMMAN K', code: 'MKAK' },
    { name: 'SAIDAPET', code: 'SP' },
    { name: 'TIRUVANMIYUR', code: 'TYMR' },
    { name: 'MANDAVELI', code: 'MNDY' },
    { name: 'THIRUMAYILAI', code: 'MTMY' },
    { name: 'TARAMANI', code: 'TRMN' },
    { name: 'MUNDAKAKANNI AMMAN K', code: 'MKAK' },
    { name: 'SAIDAPET', code: 'SP' },
    { name: 'SAIDAPET', code: 'SP' },
    { name: 'TIRUVANMIYUR', code: 'TYMR' },
    { name: 'MANDAVELI', code: 'MNDY' },
    { name: 'THIRUMAYILAI', code: 'MTMY' },
    { name: 'TARAMANI', code: 'TRMN' },
    { name: 'MUNDAKAKANNI AMMAN K', code: 'MKAK' },
    { name: 'SAIDAPET', code: 'SP' },
];

const StationSearch: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [searchHistory, setSearchHistory] = useState<any[]>([]);
    const [recentWidth, setRecentWidth] = useState<{ width: string; height: string }>({ width: "100%", height: "fit-content" });
    const [filteredStations, setFilteredStations] = useState(allStations);
    const searchInputRef = useRef<HTMLInputElement>(null);
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const recentRef = useRef<HTMLDivElement>(null);

    // Get the encrypted string from the URL
    const { url } = useParams<any>();
    const obj: { label: string, key: string } = Decryption(url);
    const navigate = useNavigate();

    useEffect(() => {
        const getAllStation = async () => {
            try {
                const response = await axios.get(`https://uts-dev.onrender.com/api/auth/v1/searchStation?query=${searchTerm}`);
                setFilteredStations(response.data);
            } catch (error) {
                // console.log(error);
            }
        }
        if (searchTerm) getAllStation();
    }, [searchTerm]);


    const handleScroll = () => {
        if (scrollContainerRef.current) {
            const scrollTop = scrollContainerRef.current.scrollTop;
            if (scrollTop < 100) {
                let width = (100 - scrollTop) + "%";
                setRecentWidth({ width: width, height: "fit-content" });
            }
            console.log(scrollTop);
        }
    };

    useEffect(() => {
        if (searchInputRef.current) {
            searchInputRef.current.focus();
        }
        const allHistoryData = getLocalData('stationHistory')?.filter((data: any) => data?.key === obj?.key);
        setSearchHistory(allHistoryData);
    }, []);

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value.toUpperCase();
        setSearchTerm(value);
    };

    const handleSelectStation = (station: { name: string; code: string }) => {
        let stationData = getLocalData('stationHistory');

        // Check if the station already exists in the stationData array
        const isDuplicate = stationData.some(
            (item: { name: string; code: string }) => item.name === station.name && item.code === station.code
        );
        // If the station is not a duplicate, add it to the array
        if (!isDuplicate) {
            stationData.push({ ...station, key: obj.key });
            localStorage.setItem('stationHistory', JSON.stringify(stationData));
        }
        setSearchTerm(''); // Clear search input after selection
        const encodedObj = Encryption({ ...station, key: obj?.key });
        navigate(`../home/${encodedObj}`);
    };

    const getLocalData = (key: string) => {
        return JSON.parse(localStorage.getItem(key) || '[]');
    }

    const removeRecentStation = (stationCode: string) => {
        const stationData = getLocalData('stationHistory');
        const updatedData = stationData.filter((station: any) => station.code !== stationCode);
        localStorage.setItem('stationHistory', JSON.stringify(updatedData));
        setSearchHistory(updatedData);
        // setStations(updatedData);
    };

    return (
        <>
            <div className="searchContainer">
                <div className="top">
                    <Link to="/home">
                        <Button sx={{ minWidth: 'auto', color: '#fff' }}>
                            <ArrowBackIcon />
                        </Button>
                    </Link>
                    <Typography
                        variant="h6"
                        sx={{ flexGrow: 1, textAlign: 'left', color: '#fff' }}
                    >
                        {obj?.label}
                    </Typography>
                </div>
                <div className="searchBody">
                    <Card sx={{ height: "92vh" }}>
                        <Box sx={{ mb: 2 }}>
                            <TextField
                                fullWidth
                                id="outlined-error"
                                label="Enter Station Name/Code"
                                type="search"
                                variant="filled"
                                inputRef={searchInputRef}
                                value={searchTerm}
                                onChange={handleSearchChange}
                                sx={{
                                    '& .MuiFilledInput-root': {
                                        backgroundColor: '#fff', // Background color of the input field
                                        '&:hover': {
                                            backgroundColor: '#fff', // Background color on hover
                                        },
                                        '&.Mui-focused': {
                                            backgroundColor: '#fff', // Background color when focused
                                        },
                                    },
                                    '& .MuiInputLabel-root': {
                                        color: '#666', // Default label color
                                    },
                                    '& .MuiInputLabel-root.Mui-focused': {
                                        color: '#fd5948', // Label color when focused
                                    },
                                    '& .MuiInputLabel-root:hover': {
                                        color: '#fd5948', // Label color on hover
                                    },
                                    '& .MuiFilledInput-underline:before': {
                                        borderBottomColor: '#fd5948', // Default underline color
                                    },
                                    '& .MuiFilledInput-underline:after': {
                                        borderBottomColor: '#ff5722', // Underline color when focused
                                    },
                                }}
                                InputLabelProps={{
                                    style: { color: '#ff5722' }, // Default label color
                                    sx: {
                                        '&.Mui-focused': { color: '#ff5722' }, // Label color when focused
                                        '&:hover': { color: '#ff5722' }, // Label color on hover
                                    },
                                }}
                            />
                        </Box>
                        <div className="body" ref={scrollContainerRef}
                            onScroll={handleScroll}>
                            <div className="recentSection" ref={recentRef} >
                                <Box sx={{ mt: 1 }}>
                                    <Typography variant="subtitle1" sx={{ mb: 1, color: '#666' }}>
                                        Recently used stations
                                    </Typography>
                                    <div style={{ width: `${recentWidth.width}`, height: `${recentWidth.height}`, margin: "auto" }}>
                                        <List>
                                            {searchHistory?.map((station) => (
                                                <ListItem
                                                    key={station.code}
                                                    sx={{
                                                        backgroundColor: '#fff',
                                                        mb: 1,
                                                        maxHeight: "65px",
                                                        overflow: "hidden",
                                                        borderRadius: 1,
                                                        boxShadow: '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)',
                                                        '&:hover': { backgroundColor: '#eee' },
                                                    }}
                                                >
                                                    <ListItemText onClick={() => handleSelectStation(station)}
                                                        primary={`${station.name} - ${station.code}`}
                                                    />
                                                    <IconButton edge="end" aria-label="delete" onClick={() => removeRecentStation(station.code)}>
                                                        <HighlightOffIcon />
                                                    </IconButton>
                                                </ListItem>
                                            ))}
                                        </List>
                                    </div>
                                </Box>
                            </div>
                            <Typography variant="subtitle1" sx={{ mb: 2, color: '#666', position: 'relative' }}>
                                <span style={{ position: 'absolute', top: '-1px', left: 0, width: '100%', height: '1px', backgroundColor: '#ff5722' }}></span>
                            </Typography>
                            <div className="searchList">
                                <Box sx={{ mt: 2 }}>
                                    <List>
                                        {filteredStations.length > 0 ? (
                                            filteredStations.map((station, index) => (
                                                <ListItem
                                                    key={index}
                                                    sx={{
                                                        backgroundColor: '#fff',
                                                        mb: 1,
                                                        borderRadius: 1,
                                                        boxShadow: '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)',
                                                        '&:hover': { backgroundColor: '#eee' },
                                                    }}
                                                    onClick={() => handleSelectStation(station)}
                                                >
                                                    <ListItemText
                                                        primary={`${station.name} - ${station.code}`}
                                                    />
                                                </ListItem>
                                            ))
                                        ) : (
                                            <Typography variant="body2" sx={{ color: '#999', textAlign: 'center', mt: 2 }}>
                                                No stations found
                                            </Typography>
                                        )}
                                    </List>
                                </Box>
                            </div>
                        </div>
                    </Card>
                </div>
            </div >
        </>
    );
};

export default StationSearch;


