"use client";

import { useEffect, useState } from "react";
import Icon from "./Icon";
import { INFO_KEYS, SERVICES, TIER_LABEL, type Service, type Tier } from "@/lib/data";

const pillClass = (tier: Tier) => `pill${tier === 3 ? "" : ` pill--t${tier}`}`;

function Card({ service, onOpen }: { service: Service; onOpen: (s: Service) => void }) {
  return (
    <article className={`card card--t${service.tier}`}>
      <div className="card__top">
        <span className="card__icon">
          <Icon name={service.icon} size={21} />
        </span>
        <button
          type="button"
          className="card__info"
          onClick={() => onOpen(service)}
          aria-label={`${service.name} haqida batafsil ma'lumot`}
          title="Batafsil ma'lumot"
        >
          !
        </button>
      </div>
      <h3 className="card__name">{service.name}</h3>
      <p className="card__desc">{service.desc}</p>
    </article>
  );
}

function Modal({ service, onClose }: { service: Service; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  const tierLabel = service.tierLabel ?? TIER_LABEL[service.tier];

  return (
    <div className="modal__scrim" onClick={onClose}>
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="service-modal-title"
        className="modal"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal__head">
          <span className="modal__icon">
            <Icon name={service.icon} size={22} />
          </span>
          <span style={{ minWidth: 0 }}>
            <h2 id="service-modal-title" className="modal__title">
              {service.name}
            </h2>
            <span className="modal__sub">{service.desc}</span>
          </span>
          <button type="button" className="modal__close" onClick={onClose} aria-label="Yopish">
            <Icon name="close" size={17} />
          </button>
        </div>

        <div className="modal__pill">
          <span className={pillClass(service.tier)}>{tierLabel}</span>
        </div>

        <div className="modal__rows">
          {service.info.map((value, i) => (
            <div key={INFO_KEYS[i]} className="modal__row">
              <div className="modal__key">{INFO_KEYS[i]}</div>
              <p className="modal__val">{value}</p>
            </div>
          ))}
        </div>

        <button type="button" className="modal__ok" onClick={onClose}>
          Tushunarli
        </button>
      </div>
    </div>
  );
}

export default function Services() {
  const [active, setActive] = useState<Service | null>(null);
  const tiers: Tier[] = [1, 2, 3];

  return (
    <>
      {tiers.map((tier) => (
        <div key={tier} className={`cards${tier === 1 ? " cards--first" : ""}`}>
          {SERVICES.filter((s) => s.tier === tier).map((s) => (
            <Card key={s.slug} service={s} onOpen={setActive} />
          ))}
        </div>
      ))}
      {active ? <Modal service={active} onClose={() => setActive(null)} /> : null}
    </>
  );
}
