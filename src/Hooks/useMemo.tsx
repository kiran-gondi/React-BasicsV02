import {useMemo} from 'react';

const UseMemo = ({data}) => {

    const processData = ()=>{
         alert("hello");
         return "hello";
    };

    const processedData = useMemo(()=>{
        //Expensive computatoin on data
        return processData(data);
    }, [data]);

    return (
        <div>
            {/* Render using the memoized value */}
            {processedData}
        </div>
    );
};

export default UseMemo;