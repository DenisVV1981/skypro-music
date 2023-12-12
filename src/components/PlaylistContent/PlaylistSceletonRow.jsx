import { Skeleton, SkeletonItem, makeStyles,  shorthands,  tokens } from "@fluentui/react-components";

import * as S from './PlayList.styles';


const useStyles = makeStyles({
    firstRow: {
      alignItems: "center",
      display: "grid",
      position: "relative",
      gridTemplateColumns: "52px 377px 316px 245px 63px",
      ...shorthands.gap("14px"),
    },
    rect: {
      ...shorthands.borderRadius("0px"),
    },
  });

function PlaylistSceletonRow(){
    const styles = useStyles();

    return (
      <S.PlaylistItem>
        <Skeleton>
            <div className={styles.firstRow}>
              <SkeletonItem shape="rectangle" size={48} className={styles.rect}/>
              <SkeletonItem shape="rectangle" size={20} className={styles.rect}/>
              <SkeletonItem shape="rectangle" size={20} className={styles.rect}/>
              <SkeletonItem shape="rectangle" size={20} className={styles.rect}/>
              <SkeletonItem shape="rectangle" size={20} className={styles.rect}/>
            </div>
        </Skeleton>
      </S.PlaylistItem>
    );
}

export default PlaylistSceletonRow;