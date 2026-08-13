"use client";

import { useState, useEffect } from "react";
import type { ChangeEvent, FormEvent, MouseEvent } from "react";

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
  email: string;
  onSubmit: (data: {
    email: string;
    firstName: string;
    lastName: string;
    age: string;
    experienceLevel: string;
    country: string;
  }) => void;
  isLoading: boolean;
}

const EXPERIENCE_OPTIONS = [
  { value: "", label: "Experience level" },
  { value: "novice", label: "Novice" },
  { value: "active_trader", label: "Active Trader" },
  { value: "professional", label: "Professional" }
];

const COUNTRY_OPTIONS = [
  { value: "", label: "Country" },
  { value: "US", label: "United States (US)" },
  { value: "UK", label: "United Kingdom (UK)" },
  { value: "CA", label: "Canada (CA)" },
  { value: "AUS", label: "Australia (AUS)" },
  { value: "IN", label: "India (IN)" },
  { value: "custom", label: "Other (Please specify)" }
];

export default function WaitlistModal({
  isOpen,
  onClose,
  email,
  onSubmit,
  isLoading
}: WaitlistModalProps) {
  type FormState = {
    firstName: string;
    lastName: string;
    age: string;
    experienceLevel: string;
    country: string;
    customCountry: string;
  };

  const [formData, setFormData] = useState<FormState>({
    firstName: "",
    lastName: "",
    age: "",
    experienceLevel: "",
    country: "",
    customCountry: ""
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [openDropdown, setOpenDropdown] = useState<'experience' | 'country' | null>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const selectedExperienceLabel = EXPERIENCE_OPTIONS.find(o => o.value === formData.experienceLevel)?.label || EXPERIENCE_OPTIONS[0].label;
  const selectedCountryLabel = COUNTRY_OPTIONS.find(o => o.value === formData.country)?.label || COUNTRY_OPTIONS[0].label;

  const handleInputChange = (field: keyof FormState, value: string) => {
    setFormData((prev: FormState) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev: Record<string, string>) => ({ ...prev, [field]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.age.trim()) newErrors.age = "Age is required";
    if (!formData.experienceLevel) newErrors.experienceLevel = "Experience level is required";
    if (!formData.country) newErrors.country = "Country is required";
    if (formData.country === "custom" && !formData.customCountry.trim()) newErrors.customCountry = "Please specify your country";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) return;

    onSubmit({
      email,
      firstName: formData.firstName,
      lastName: formData.lastName,
      age: formData.age,
      experienceLevel: formData.experienceLevel,
      country: formData.country === "custom" ? formData.customCountry : formData.country
    });
  };

  if (!isOpen) return null;

  return (
    <div 
      style={{
        position: "fixed",
        top: 0, left: 0, right: 0, bottom: 0,
        backgroundColor: "rgba(247, 246, 243, 0.4)",
        backdropFilter: "blur(20px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
        padding: "20px"
      }}
      onClick={onClose}
    >
      <div 
        style={{
          width: "100%",
          maxWidth: "420px",
          background: "linear-gradient(135deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0.2) 100%)",
          border: "1px solid rgba(255, 255, 255, 0.6)",
          boxShadow: "0 32px 80px rgba(0, 0, 0, 0.08), inset 0 1px 2px rgba(255, 255, 255, 0.8)",
          borderRadius: "32px",
          padding: "36px",
          backdropFilter: "blur(60px) saturate(200%)"
        }}
        onClick={(e: MouseEvent<HTMLDivElement>) => e.stopPropagation()}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "12px" }}>
          <h3 style={{ margin: 0, fontFamily: "var(--font-display)", fontSize: "32px", fontWeight: 400, color: "#1c1a18" }}>
            Almost there.
          </h3>
          <button
            onClick={onClose}
            disabled={isLoading}
            style={{
              background: "transparent",
              border: "none",
              cursor: "pointer",
              padding: "4px",
              color: "var(--muted)",
              fontFamily: "var(--font-sans)",
              fontSize: "16px",
              opacity: 0.7,
              transition: "opacity 0.2s"
            }}
            onMouseOver={(e) => e.currentTarget.style.opacity = "1"}
            onMouseOut={(e) => e.currentTarget.style.opacity = "0.7"}
            type="button"
          >
            ✕
          </button>
        </div>

        <p style={{ fontFamily: "var(--font-sans)", fontWeight: 300, fontSize: "15px", color: "var(--muted-strong)", margin: "0 0 32px 0" }}>
          We just need a few more details.
        </p>

        <div style={{ 
          padding: "14px 18px", 
          borderRadius: "16px", 
          background: "rgba(255, 255, 255, 0.3)", 
          border: "1px solid rgba(255, 255, 255, 0.5)",
          boxShadow: "inset 0 1px 2px rgba(255, 255, 255, 0.8)",
          marginBottom: "24px",
          fontFamily: "var(--font-sans)",
          fontSize: "14px",
          color: "#1c1a18"
        }}>
          <span style={{ color: "var(--muted)" }}>Email</span> &nbsp;&nbsp;&nbsp; {email}
        </div>

        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div style={{ display: "flex", gap: "12px" }}>
            <div style={{ flex: 1 }}>
              <input
                type="text"
                value={formData.firstName}
                onChange={(e: ChangeEvent<HTMLInputElement>) => handleInputChange("firstName", e.target.value)}
                placeholder="First name"
                disabled={isLoading}
                style={{
                  width: "100%",
                  padding: "16px 20px",
                  borderRadius: "16px",
                  border: "1px solid rgba(255, 255, 255, 0.5)",
                  background: "rgba(255, 255, 255, 0.25)",
                  boxShadow: "inset 0 2px 4px rgba(0, 0, 0, 0.02), inset 0 1px 2px rgba(255, 255, 255, 0.8)",
                  fontFamily: "var(--font-sans)",
                  fontSize: "15px",
                  fontWeight: 300,
                  outline: "none",
                  color: "#1c1a18",
                  transition: "background 0.2s ease, border-color 0.2s ease"
                }}
                onFocus={(e) => {
                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.4)";
                  e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.8)";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.25)";
                  e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.5)";
                }}
              />
              {errors.firstName && (
                <div style={{ color: "#b34c3d", fontSize: "13px", marginTop: "6px", fontFamily: "var(--font-sans)" }}>{errors.firstName}</div>
              )}
            </div>
            <div style={{ flex: 1 }}>
              <input
                type="text"
                value={formData.lastName}
                onChange={(e: ChangeEvent<HTMLInputElement>) => handleInputChange("lastName", e.target.value)}
                placeholder="Last name"
                disabled={isLoading}
                style={{
                  width: "100%",
                  padding: "16px 20px",
                  borderRadius: "16px",
                  border: "1px solid rgba(255, 255, 255, 0.5)",
                  background: "rgba(255, 255, 255, 0.25)",
                  boxShadow: "inset 0 2px 4px rgba(0, 0, 0, 0.02), inset 0 1px 2px rgba(255, 255, 255, 0.8)",
                  fontFamily: "var(--font-sans)",
                  fontSize: "15px",
                  fontWeight: 300,
                  outline: "none",
                  color: "#1c1a18",
                  transition: "background 0.2s ease, border-color 0.2s ease"
                }}
                onFocus={(e) => {
                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.4)";
                  e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.8)";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.25)";
                  e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.5)";
                }}
              />
              {errors.lastName && (
                <div style={{ color: "#b34c3d", fontSize: "13px", marginTop: "6px", fontFamily: "var(--font-sans)" }}>{errors.lastName}</div>
              )}
            </div>
          </div>

          <div>
            <input
              type="number"
              value={formData.age}
              onChange={(e: ChangeEvent<HTMLInputElement>) => handleInputChange("age", e.target.value)}
              placeholder="Age"
              disabled={isLoading}
              min="1"
              max="120"
              style={{
                width: "100%",
                padding: "16px 20px",
                borderRadius: "16px",
                border: "1px solid rgba(255, 255, 255, 0.5)",
                background: "rgba(255, 255, 255, 0.25)",
                boxShadow: "inset 0 2px 4px rgba(0, 0, 0, 0.02), inset 0 1px 2px rgba(255, 255, 255, 0.8)",
                fontFamily: "var(--font-sans)",
                fontSize: "15px",
                fontWeight: 300,
                outline: "none",
                color: "#1c1a18",
                transition: "background 0.2s ease, border-color 0.2s ease"
              }}
              onFocus={(e) => {
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.4)";
                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.8)";
              }}
              onBlur={(e) => {
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.25)";
                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.5)";
              }}
            />
            {errors.age && (
              <div style={{ color: "#b34c3d", fontSize: "13px", marginTop: "6px", fontFamily: "var(--font-sans)" }}>{errors.age}</div>
            )}
          </div>

          <div style={{ position: "relative", zIndex: openDropdown === 'experience' ? 50 : 1 }}>
            <div
              onClick={() => !isLoading && setOpenDropdown(openDropdown === 'experience' ? null : 'experience')}
              style={{
                width: "100%",
                padding: "16px 20px",
                borderRadius: "16px",
                border: "1px solid",
                borderColor: errors.experienceLevel ? "#b34c3d" : "rgba(255, 255, 255, 0.5)",
                background: openDropdown === 'experience' ? "rgba(255, 255, 255, 0.4)" : "rgba(255, 255, 255, 0.25)",
                boxShadow: "inset 0 2px 4px rgba(0, 0, 0, 0.02), inset 0 1px 2px rgba(255, 255, 255, 0.8)",
                fontFamily: "var(--font-sans)",
                fontSize: "15px",
                fontWeight: 300,
                color: formData.experienceLevel ? "#1c1a18" : "#6d6760",
                cursor: isLoading ? "not-allowed" : "pointer",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                transition: "background 0.2s ease, border-color 0.2s ease"
              }}
            >
              {selectedExperienceLabel}
              <span style={{ 
                fontSize: "10px", 
                opacity: 0.5, 
                transform: openDropdown === 'experience' ? "rotate(180deg)" : "none", 
                transition: "transform 0.3s ease" 
              }}>▼</span>
            </div>
            {errors.experienceLevel && (
              <div style={{ color: "#b34c3d", fontSize: "13px", marginTop: "6px", fontFamily: "var(--font-sans)" }}>{errors.experienceLevel}</div>
            )}

            {openDropdown === 'experience' && (
              <>
                <div 
                  style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0, zIndex: 10 }}
                  onClick={(e) => { e.stopPropagation(); setOpenDropdown(null); }}
                />
                <div style={{
                  position: "absolute",
                  top: "calc(100% + 8px)",
                  left: 0,
                  right: 0,
                  background: "linear-gradient(145deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.98) 100%)",
                  border: "1px solid rgba(255, 255, 255, 0.8)",
                  borderRadius: "20px",
                  padding: "8px",
                  boxShadow: "0 24px 60px rgba(0, 0, 0, 0.15), 0 12px 24px rgba(0, 0, 0, 0.1), inset 0 1px 2px rgba(255, 255, 255, 1)",
                  zIndex: 100,
                  display: "flex",
                  flexDirection: "column",
                  gap: "4px"
                }}>
                  {EXPERIENCE_OPTIONS.map((opt) => (
                    <div
                      key={opt.value}
                      onClick={() => {
                        handleInputChange("experienceLevel", opt.value);
                        setOpenDropdown(null);
                      }}
                      style={{
                        padding: "12px 14px",
                        borderRadius: "12px",
                        cursor: "pointer",
                        fontFamily: "var(--font-sans)",
                        fontSize: "15px",
                        fontWeight: 300,
                        color: "#1c1a18",
                        background: formData.experienceLevel === opt.value ? "rgba(0, 0, 0, 0.04)" : "transparent",
                        transition: "background 0.2s ease",
                      }}
                      onMouseOver={(e) => { if (formData.experienceLevel !== opt.value) e.currentTarget.style.background = "rgba(0, 0, 0, 0.02)" }}
                      onMouseOut={(e) => { if (formData.experienceLevel !== opt.value) e.currentTarget.style.background = "transparent" }}
                    >
                      {opt.label}
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>

          <div style={{ position: "relative", zIndex: openDropdown === 'country' ? 50 : 1 }}>
            <div
              onClick={() => !isLoading && setOpenDropdown(openDropdown === 'country' ? null : 'country')}
              style={{
                width: "100%",
                padding: "16px 20px",
                borderRadius: "16px",
                border: "1px solid",
                borderColor: errors.country ? "#b34c3d" : "rgba(255, 255, 255, 0.5)",
                background: openDropdown === 'country' ? "rgba(255, 255, 255, 0.4)" : "rgba(255, 255, 255, 0.25)",
                boxShadow: "inset 0 2px 4px rgba(0, 0, 0, 0.02), inset 0 1px 2px rgba(255, 255, 255, 0.8)",
                fontFamily: "var(--font-sans)",
                fontSize: "15px",
                fontWeight: 300,
                color: formData.country ? "#1c1a18" : "#6d6760",
                cursor: isLoading ? "not-allowed" : "pointer",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                transition: "background 0.2s ease, border-color 0.2s ease"
              }}
            >
              {selectedCountryLabel}
              <span style={{ 
                fontSize: "10px", 
                opacity: 0.5, 
                transform: openDropdown === 'country' ? "rotate(180deg)" : "none", 
                transition: "transform 0.3s ease" 
              }}>▼</span>
            </div>
            {errors.country && (
              <div style={{ color: "#b34c3d", fontSize: "13px", marginTop: "6px", fontFamily: "var(--font-sans)" }}>{errors.country}</div>
            )}

            {openDropdown === 'country' && (
              <>
                <div 
                  style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0, zIndex: 10 }}
                  onClick={(e) => { e.stopPropagation(); setOpenDropdown(null); }}
                />
                <div style={{
                  position: "absolute",
                  bottom: "calc(100% + 8px)",
                  left: 0,
                  right: 0,
                  maxHeight: "220px",
                  overflowY: "auto",
                  overscrollBehavior: "contain",
                  background: "linear-gradient(145deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.98) 100%)",
                  border: "1px solid rgba(255, 255, 255, 0.8)",
                  borderRadius: "20px",
                  padding: "8px",
                  boxShadow: "0 24px 60px rgba(0, 0, 0, 0.15), 0 12px 24px rgba(0, 0, 0, 0.1), inset 0 1px 2px rgba(255, 255, 255, 1)",
                  zIndex: 100,
                  display: "flex",
                  flexDirection: "column",
                  gap: "4px"
                }}>
                  {COUNTRY_OPTIONS.map((opt) => (
                    <div
                      key={opt.value}
                      onClick={() => {
                        handleInputChange("country", opt.value);
                        setOpenDropdown(null);
                      }}
                      style={{
                        padding: "12px 14px",
                        borderRadius: "12px",
                        cursor: "pointer",
                        fontFamily: "var(--font-sans)",
                        fontSize: "15px",
                        fontWeight: 300,
                        color: "#1c1a18",
                        background: formData.country === opt.value ? "rgba(0, 0, 0, 0.04)" : "transparent",
                        transition: "background 0.2s ease",
                      }}
                      onMouseOver={(e) => { if (formData.country !== opt.value) e.currentTarget.style.background = "rgba(0, 0, 0, 0.02)" }}
                      onMouseOut={(e) => { if (formData.country !== opt.value) e.currentTarget.style.background = "transparent" }}
                    >
                      {opt.label}
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>

          {formData.country === "custom" && (
            <div>
              <input
                type="text"
                value={formData.customCountry}
                onChange={(e: ChangeEvent<HTMLInputElement>) => handleInputChange("customCountry", e.target.value)}
                placeholder="Type your country"
                disabled={isLoading}
                style={{
                  width: "100%",
                  padding: "16px 20px",
                  borderRadius: "16px",
                  border: "1px solid rgba(255, 255, 255, 0.5)",
                  background: "rgba(255, 255, 255, 0.25)",
                  boxShadow: "inset 0 2px 4px rgba(0, 0, 0, 0.02), inset 0 1px 2px rgba(255, 255, 255, 0.8)",
                  fontFamily: "var(--font-sans)",
                  fontSize: "15px",
                  fontWeight: 300,
                  outline: "none",
                  color: "#1c1a18",
                  transition: "background 0.2s ease, border-color 0.2s ease"
                }}
                onFocus={(e) => {
                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.4)";
                  e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.8)";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.25)";
                  e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.5)";
                }}
              />
              {errors.customCountry && (
                <div style={{ color: "#b34c3d", fontSize: "13px", marginTop: "6px", fontFamily: "var(--font-sans)" }}>{errors.customCountry}</div>
              )}
            </div>
          )}

          <button 
            type="submit" 
            disabled={isLoading}
            style={{
              position: "relative",
              zIndex: 0,
              marginTop: "12px",
              width: "100%",
              padding: "18px",
              borderRadius: "20px",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              background: "rgba(28, 26, 24, 0.9)",
              boxShadow: "0 12px 32px rgba(0, 0, 0, 0.15), inset 0 1px 1px rgba(255, 255, 255, 0.2)",
              backdropFilter: "blur(12px)",
              color: "#fff",
              fontFamily: "var(--font-sans)",
              fontWeight: 400,
              fontSize: "16px",
              cursor: isLoading ? "not-allowed" : "pointer",
              opacity: isLoading ? 0.7 : 1,
              transition: "transform 0.2s, box-shadow 0.2s"
            }}
            onMouseOver={(e) => { 
              if (!isLoading) {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 16px 40px rgba(0, 0, 0, 0.2), inset 0 1px 1px rgba(255, 255, 255, 0.3)";
              }
            }}
            onMouseOut={(e) => { 
              if (!isLoading) {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 12px 32px rgba(0, 0, 0, 0.15), inset 0 1px 1px rgba(255, 255, 255, 0.2)";
              }
            }}
          >
            {isLoading ? "Processing..." : "Complete Registration"}
          </button>
        </form>

        <p style={{ marginTop: "24px", fontSize: "12px", fontFamily: "var(--font-sans)", color: "var(--muted)", textAlign: "center" }}>
          Your data is encrypted and never shared.
        </p>
      </div>
    </div>
  );
}
