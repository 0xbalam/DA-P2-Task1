import '../styles/Home.module.css'

const LoadingSpinner = ({ isLoading }) => {
    return (
        <>
            {isLoading ?  
                <div className="spinner-container">
                    <div className="loading-spinner"></div>
                </div> :
                <></>
            }
        </>
    )
}

export default LoadingSpinner