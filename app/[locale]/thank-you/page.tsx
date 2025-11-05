import { getTranslations } from "next-intl/server";
import Link from "next/link";

export default async function ThankYou() {
  const t = await getTranslations("thankYou");

  return (
    <main>
      <div className="container">
        <div className="thank">
          <h1>{t("title")}</h1>
          <p style={{ marginTop: 16 }}>{t("message")}</p>

          <p style={{ marginTop: 24 }}>
            <Link href="/" style={{ fontWeight: 600 }}>
              {t("backHome")}
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
