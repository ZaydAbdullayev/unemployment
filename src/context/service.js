import html2canvas from "html2canvas";

export const saveCardAsImage = async (cardElement) => {

    if (!cardElement) {
        console.error("🎯 .card bulunamadı!");
        return;
    }

    try {
        const canvas = await html2canvas(cardElement, {
            scale: 2, // daha kaliteli görüntü
            useCORS: true // harici img'ler için (örn. logo vs)
        });

        const dataURL = canvas.toDataURL("image/png");

        // Galeriye kaydedilsin: kullanıcıya indirme ver
        const link = document.createElement("a");
        link.href = dataURL;
        link.download = "unemployment_card.png";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    } catch (error) {
        console.error("💥 Kart görsele çevrilemedi:", error);
    }
};