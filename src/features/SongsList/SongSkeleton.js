import { Skeleton } from "@mui/material";
import React from "react";

export default function SongSkeleton() {
  return (
    <div className="song-item">
      <div>
        <Skeleton height={25} width={100} />
      </div>
      <div>
        <Skeleton height={25} width={25} />
      </div>
    </div>
  );
}
