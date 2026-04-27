import Badge from "../ui/Badge";
import { ShieldCheck, Clock, Star } from "lucide-react";

export default function TrustSection() {
    return (
        <section className="container mx-auto px-4 mt-16 md:mt-24">
            <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12">
                <Badge
                    className="bg-white/5 border-white/10 !px-8"
                    icon={<ShieldCheck className="text-primary w-6 h-6" />}
                >
                    Garantia de 7 dias
                </Badge>

                <Badge
                    className="bg-white/5 border-white/10 !px-8"
                    icon={<Clock className="text-primary w-6 h-6" />}
                >
                    Acesso imediato
                </Badge>

                <Badge
                    className="bg-white/5 border-white/10 !px-8"
                    icon={<Star className="text-primary w-6 h-6" />}
                >
                    Usado por +200 Marcas
                </Badge>
            </div>
        </section>
    );
}
