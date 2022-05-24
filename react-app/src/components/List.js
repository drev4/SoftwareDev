import React, {useEffect, useState} from "react";
import Loading from "./Loading";

function List(){
    const [isLoading, setIsLoading] = useState(false)
    const [videos, setVideos] = useState([])

    useEffect(() => {
        setIsLoading(true)
        setTimeout(() => {
            setIsLoading(false)
            setVideos([{id:1}, {id:2}, {id:3}])
        }, 2000)
    }, [])
    return (<React.Fragment>
        {isLoading &&
            <Loading message={"Loading..."}/>
        }
        {!isLoading &&
            <div className={"list-container"}>
                <div className="list-grid-container">
                    {
                        videos.map((video,i) => {
                            return (<span key={i}>#{video.id}</span>)
                        })
                    }
                </div>
            </div>
        }
        </React.Fragment>)
}

export default List;