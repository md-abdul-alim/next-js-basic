import { Inter, Poppins, Roboto } from "next/font/google";

export const inter = Inter({ subsets: ["latin"] });

export const poppins = Poppins({ subsets: ["latin"], weight: "400" });

export const roboto = Roboto({ 
  weight: ['400', '700'], 
  style: ['normal', 'italic'], 
  subsets: ['latin'], 
  display: 'swap',
})

