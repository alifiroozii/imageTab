import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import * as React from "react";

import Grid from "@mui/material/Grid";

const Image = (context: { params: { id: any } }) => {
  const [data, setData] = useState({});
  console.log("data", data);
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        return response.json();
      })

      .then((data) => {
        setData(data);
      });
  }, []);

  const router = useRouter();
  const { id } = router.query;
  const { image } = data;

  return (
    <div style={{ textAlignLast: "center" }}>
      <Grid item xs={12}>
        <Grid>
          <Grid item xl={12}>
            <img src={image} width="25%" height="25%" color="white" />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Image;
