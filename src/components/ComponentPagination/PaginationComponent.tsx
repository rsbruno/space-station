import { useState } from 'react';
import { Buttons } from '../Buttons'
import styles from './PaginationStyles.module.scss'

interface IPaginationComponentProps {
    totalPages: number;
    onCurrentPage: (page: number) => void;
}

export function PaginationComponent({ totalPages, onCurrentPage }: IPaginationComponentProps) {
    const [currentPage, setCurrentPage] = useState<number | null>(1);
    const setPageNumber = (page: number) => {
        setCurrentPage(() => page)
        onCurrentPage(page - 1)
    }
    return <>
        <div className={styles.container}>
            <div className={styles.container__listpages}>
                {Array.from(Array(totalPages).keys()).map(page =>
                    <Buttons.OnlyLabelComponent
                        key={page}
                        style={{ width: '40px', height: '40px' }}
                        onClick={() => setPageNumber(page + 1)}
                        active={currentPage === page + 1}
                        label={(page + 1).toString()}
                    />
                )}
            </div>
        </div>
    </>
}