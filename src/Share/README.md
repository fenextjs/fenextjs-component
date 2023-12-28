#### Share

El componente Share es una componente que representa un conjunto de botones para compartir contenido en varias redes sociales y servicios de comunicación. Permite compartir un texto específico en diferentes plataformas como WhatsApp, Facebook, Twitter, LinkedIn y correo electrónico.

```tsx
import { Share, ShareProps, ShareListType } from "fenextjs-component/cjs/Share";

const shareText = "¡Echa un vistazo a este increíble sitio web!";
const shareOptions: ShareListType[] = ["whatsapp", "facebook", "twitter"];
<Share
    share={shareText}
    shareList={shareOptions}
    ButtonProps={{
        children: "Compartir",
    }}
    TitleProps={{
        children: "Compartir con tus amigos",
        tag: "h3",
    }}
/>;
```
