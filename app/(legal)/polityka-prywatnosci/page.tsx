import type { Metadata } from "next";
import { PrivacyPolicy } from "../../../components/sections/PrivacyPolicy";

export const metadata: Metadata = {
    title: "Polityka Prywatności",
};

export default function PrivacyPolicyPage() {
    return <PrivacyPolicy />;
}