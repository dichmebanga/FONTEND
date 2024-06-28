import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export function SkeletonUi({ width = 158 }) {
    return (
        <SkeletonTheme baseColor="#202020" highlightColor="#444">
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    lineHeight: 2,
                }}
            >
                <Skeleton height={227} width={width} style={{ marginRight: '10px' }} />
                <Skeleton height={227} width={width} style={{ marginRight: '10px' }} />
                <Skeleton height={227} width={width} style={{ marginRight: '10px' }} />
                <Skeleton height={227} width={width} style={{ marginRight: '10px' }} />
            </div>
        </SkeletonTheme>
    );
}

export function SkeletonSidebar({ height = 87, width = 300 }) {
    return (
        <SkeletonTheme baseColor="#202020" highlightColor="#444">
            <div
                style={{
                    display: 'block',
                    lineHeight: 2,
                }}
            >
                <Skeleton height={height} width={width} style={{ marginTop: '10px' }} />
                <Skeleton height={height} width={width} style={{ marginTop: '10px' }} />
                <Skeleton height={height} width={width} style={{ marginTop: '10px' }} />
                <Skeleton height={height} width={width} style={{ marginTop: '10px' }} />
                <Skeleton height={height} width={width} style={{ marginTop: '10px' }} />
            </div>
        </SkeletonTheme>
    );
}

export function SkeletonDetail({ height = 670, width = 700 }) {
    return (
        <SkeletonTheme baseColor="#202020" highlightColor="#444">
            <div
                style={{
                    display: 'block',
                    lineHeight: 2,
                }}
            >
                <Skeleton height={height} width={width} style={{ marginTop: '10px' }} />
            </div>
        </SkeletonTheme>
    );
}
