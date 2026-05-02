"use client";
import { SnackbarProvider } from "notistack";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SnackbarProvider
      maxSnack={3}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      autoHideDuration={5000}
      style={{ marginTop: "80px", backgroundColor: "#fff", color: "#9400D3", borderRadius: "2px", outline: "2px solid #9400D3" }}
    >
      {children}
    </SnackbarProvider>
  );
}
