import styles from "./BottomSheet.module.css";

const BottomSheet = ({modalOpen, toggleModal, children}) => {
    
  return (
    <>
        {
            modalOpen 
            && 
            <div className={`${styles.sheetContainer}`} onClick={toggleModal}>
                <div className={`${styles.sheetModal}`} onClick={e=>e.stopPropagation()}>
                    {children}
                </div>
            </div>
        }
    </>
  )
}

export default BottomSheet