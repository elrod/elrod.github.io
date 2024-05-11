export const fetchStateFromFile = async (fileName, setStateAction, json) => {
    try {
        const response = await fetch(fileName);
        if(json)
        {
            const jsonData = await response.json();
            console.log(jsonData);
            setStateAction(jsonData)
        }
        else{
            const textData = await response.text();
            setStateAction(textData);
        }
    } 
    catch (error) {
        console.error(`error loading ${fileName}: ${error}`);
    }
};