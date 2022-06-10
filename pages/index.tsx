import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Images from './image/Images'



const Home: NextPage = () => {
  return (
    <div className={styles.container}>
    <Images />
    </div>
  );
};

export default Home;
