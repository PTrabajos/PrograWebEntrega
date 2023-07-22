"use client";
import React, { useState } from "react";
import TopBar from "@/components/TopBarInicio/TopBarInicio";
import styles from "../App/page.module.css";
import Inicio from "@/components/Inicio/inicio.jsx" //cambio

const PageInicio = () => {
  Inicio("/")
  return (
    <div>
      <TopBar></TopBar>
      <div className={styles.fondo}>
      </div>
    </div>
  );
};

export default PageInicio;
