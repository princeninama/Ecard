import { GetWeddingdata } from "@/states/action-creators/handledatasave";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RenderPage } from "@/exports/functions";

const UserDisplay = () => {
    const { id } = useParams();
    const [modelId, setModelId] = useState(''); // Will hold the modelId after fetching
    const [loading, setLoading] = useState(true); // Loading state

    useEffect(() => {
        const getData = async () => {
            try {
                const data = await GetWeddingdata(id);
                console.log('data', data);
                
                // Store data in sessionStorage
                sessionStorage.setItem('weddingDetails', JSON.stringify(data.weddingDetails));
                sessionStorage.setItem('events', JSON.stringify(data.events));
                sessionStorage.setItem('locationUrl', data.map_url);
                sessionStorage.setItem('imagep', JSON.stringify(data.photo));
                
                // Set modelId from fetched data
                setModelId(data.modelId);
            } catch (error) {
                console.error('Error fetching wedding data:', error);
            } finally {
                setLoading(false); // Stop loading once data is fetched
            }
        };

        getData();
    }, [id]);

    // Conditionally render based on loading state
    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <p>Loading...</p> {/* Show loading indicator */}
            </div>
        );
    }

    // Render the ModelComponent after loading is complete
    const ModelComponent = RenderPage(modelId);


    return (
        <div className="w-screen h-screen overflow-y-scroll" id="scroll">
            <ModelComponent/> {/* Show message if modelId is not valid */}
        </div>
    );
};

export default UserDisplay;
