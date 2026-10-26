"use client";

import { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { servicesData } from "@/lib/services-data";
import { useCart, type DimensionUnit } from "@/lib/cart-context";
import { ChevronRight, ArrowLeft } from "lucide-react";

type ServiceSlug = string;

export default function QuoteForm({ 
  inlineService, 
  onComplete,
  isDrawer = false
}: { 
  inlineService?: string; 
  onComplete?: () => void; 
  isDrawer?: boolean;
} = {}) {
  const searchParams = useSearchParams();
  const initialService = inlineService || searchParams.get("service");
  const { addItem, openCart } = useCart();
  const router = useRouter();

  const [step, setStep] = useState(() => 
    initialService && servicesData.some(s => s.slug === initialService) ? 2 : 1
  );
  const [selectedService, setSelectedService] = useState<ServiceSlug>(initialService || "");
  const [serviceDetails, setServiceDetails] = useState<Record<string, string>>({});
  
  // Dimensions state
  const [dimensions, setDimensions] = useState({ width: "", height: "", unit: "ft" as DimensionUnit });
  
  const [error, setError] = useState("");

  const handleNext = () => {
    if (step === 1 && !selectedService) {
      setError("Please select a service to continue.");
      return;
    }
    setError("");
    setStep(2);
  };

  const handleBack = () => {
    setError("");
    setStep(1);
  };

  const widthNum = parseFloat(dimensions.width) || 0;
  const heightNum = parseFloat(dimensions.height) || 0;
  let area = 0;
  if (widthNum > 0 && heightNum > 0) {
      area = dimensions.unit === "in" ? (widthNum * heightNum) / 144 : (widthNum * heightNum);
  }
  const currentService = servicesData.find(s => s.slug === selectedService);
  
  // Custom pricing for services with offerPrice (like Roll up standee)
  let estimatedPrice = 0;
  if (currentService) {
    if (currentService.offerPrice && currentService.slug === "flex-roll-up-standee") {
      const qty = parseInt(serviceDetails["Quantity"] || "1") || 1;
      estimatedPrice = currentService.offerPrice * qty;
    } else if (area > 0) {
      estimatedPrice = Math.round(area * currentService.demoRatePerSqFt);
    }
  }

  const handleAddToCart = () => {
    const service = servicesData.find((s) => s.slug === selectedService);
    if (!service) return;

    if (selectedService === "acrylic-acp-signboard" && area < 32) {
      setError("Please provide dimensions yielding a minimum of 32 sq.ft (e.g. 8x4) for Acrylic ACP Signboard.");
      return;
    }

    addItem({
      id: Math.random().toString(36).substring(2, 9),
      serviceName: service.title,
      serviceSlug: service.slug,
      width: widthNum > 0 ? widthNum : undefined,
      height: heightNum > 0 ? heightNum : undefined,
      unit: dimensions.unit,
      area: area > 0 ? area : undefined,
      estimatedPrice: estimatedPrice > 0 ? estimatedPrice : undefined,
      details: serviceDetails,
    });

    if (onComplete) {
      onComplete(); // Trigger modal close
    } else {
      if (initialService) {
        router.push("/services"); 
      } else {
        setServiceDetails({});
        setDimensions({ width: "", height: "", unit: "ft" });
        setStep(1);
        setSelectedService("");
      }
    }
    openCart();
  };

  const updateServiceDetail = (key: string, value: string) => {
    setServiceDetails((prev) => ({ ...prev, [key]: value }));
  };

  const commonSelectClass = "w-full rounded-xl border border-zinc-200 bg-white px-3.5 py-2.5 sm:px-4 sm:py-3 text-base sm:text-sm text-zinc-900 focus:border-black focus:outline-none focus:ring-1 focus:ring-black transition-colors";
  const commonInputClass = "w-full rounded-xl border border-zinc-200 bg-white px-3.5 py-2.5 sm:px-4 sm:py-3 text-base sm:text-sm text-zinc-900 focus:border-black focus:outline-none focus:ring-1 focus:ring-black transition-colors";

  const renderDimensionInputs = (label = "Size (Width × Height)", hideArea = false) => (
    <div className="space-y-1.5">
      <label className="block text-xs sm:text-sm font-semibold text-zinc-700">{label}</label>
      <div className="grid grid-cols-[1fr_auto_1fr_auto] gap-1.5 sm:gap-2 items-center">
        <div className="relative">
          <input 
            type="number" 
            inputMode="decimal"
            placeholder="Width" 
            value={dimensions.width} 
            onChange={(e) => { setDimensions(prev => ({...prev, width: e.target.value})); setError(""); }} 
            className={commonInputClass} 
          />
          <span className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[10px] font-bold text-zinc-400 pointer-events-none">W</span>
        </div>
        <span className="text-zinc-400 font-bold font-mono text-xs sm:text-sm">×</span>
        <div className="relative">
          <input 
            type="number" 
            inputMode="decimal"
            placeholder="Height" 
            value={dimensions.height} 
            onChange={(e) => { setDimensions(prev => ({...prev, height: e.target.value})); setError(""); }} 
            className={commonInputClass} 
          />
          <span className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[10px] font-bold text-zinc-400 pointer-events-none">H</span>
        </div>
        <select 
          value={dimensions.unit} 
          onChange={(e) => { setDimensions(prev => ({...prev, unit: e.target.value as DimensionUnit})); setError(""); }} 
          className="w-16 sm:w-22 rounded-xl border border-zinc-200 bg-zinc-50 hover:bg-white px-2 py-2.5 sm:px-3 sm:py-3 text-sm font-bold text-zinc-800 focus:border-black focus:outline-none focus:ring-1 focus:ring-black transition-colors cursor-pointer"
        >
          <option value="ft">ft</option>
          <option value="in">in</option>
        </select>
      </div>
      
      {(area > 0 || (currentService?.offerPrice && currentService?.slug === "flex-roll-up-standee")) && (
         <div className="mt-2.5 flex flex-col gap-1.5">
           <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs sm:text-sm font-semibold rounded-xl bg-zinc-100 border border-zinc-200 p-2.5 sm:px-4 sm:py-3 w-full">
             {!hideArea && area > 0 && (
               <div className="flex items-center gap-1.5 text-zinc-900">
                 <span className="opacity-75 font-medium">Total Area:</span> 
                 <span className="font-bold">{area.toFixed(2)} sq.ft</span>
               </div>
             )}
             
             {estimatedPrice > 0 && (
               <div className="flex items-center gap-1.5 text-zinc-950 bg-white px-2.5 py-1 rounded-lg border border-zinc-300 w-fit">
                 <span className="opacity-80 font-medium text-[11px] sm:text-xs">Approx. Rate:</span> 
                 {currentService?.originalPrice && (
                   <span className="text-zinc-400 line-through text-[11px] mr-0.5">₹{currentService.originalPrice.toLocaleString('en-IN')}</span>
                 )}
                 <span className="font-black text-sm sm:text-base text-zinc-950">₹{estimatedPrice.toLocaleString('en-IN')}</span>
               </div>
             )}
           </div>
           {selectedService === "acrylic-acp-signboard" && area < 32 && (
             <div className="flex items-center gap-1.5 mt-0.5 text-xs sm:text-sm font-medium text-zinc-700 px-1">
               <span className="shrink-0">•</span>
               <span>Minimum area for Acrylic ACP should be 32 sq.ft</span>
             </div>
           )}
         </div>
      )}
    </div>
  );

  const renderServiceFields = () => {
    if (!selectedService) return null;

    switch (selectedService) {
      case "acrylic-acp-signboard":
        return (
          <div className="space-y-4">
            {renderDimensionInputs()}
            <div className="mt-1 flex items-start gap-2 rounded-xl bg-zinc-50 p-3 text-xs md:text-sm font-medium text-zinc-600 border border-zinc-200">
              <span className="text-zinc-400 shrink-0 mt-0.5">ℹ️</span>
              <span>Note: Acrylic ACP Signboard in 10 by 4 sheet only 200 inches of letter would be provided if your calculation exceeds that more charges would be added.</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-2">
              <div>
                <label className="block text-sm font-semibold text-zinc-700 mb-1">Quantity</label>
                <input type="number" placeholder="1" className={commonInputClass} onChange={(e) => updateServiceDetail("Quantity", e.target.value)} />
              </div>
              <div>
                <label className="block text-sm font-semibold text-zinc-700 mb-1">Placement</label>
                <select className={commonSelectClass} onChange={(e) => updateServiceDetail("Placement", e.target.value)}>
                  <option>Select</option>
                  <option>Outdoor</option>
                  <option>Indoor</option>
                </select>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div>
                <label className="block text-sm font-semibold text-zinc-700 mb-1">Have Design File?</label>
                <select className={commonSelectClass} onChange={(e) => updateServiceDetail("Has Design", e.target.value)}>
                  <option>Select</option>
                  <option>Yes, I have Corel/AI file</option>
                  <option>No, I need design help</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-zinc-700 mb-1">Installation?</label>
                <select className={commonSelectClass} onChange={(e) => updateServiceDetail("Installation Required", e.target.value)}>
                  <option>Select</option>
                  <option>Yes</option>
                  <option>No, dispatch only</option>
                </select>
              </div>
            </div>
          </div>
        );

      case "inner-cut-acp-signboard":
        return (
          <div className="space-y-4">
            {renderDimensionInputs()}
            <div>
              <label className="block text-sm font-semibold text-zinc-700 mb-1">Text/Logo to Cut</label>
              <input type="text" placeholder="What should it say?" className={commonInputClass} onChange={(e) => updateServiceDetail("Text/Logo", e.target.value)} />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div>
                <label className="block text-sm font-semibold text-zinc-700 mb-1">Lighting</label>
                <select className={commonSelectClass} onChange={(e) => updateServiceDetail("Lighting", e.target.value)}>
                  <option>Select</option>
                  <option>Backlit (LED glow)</option>
                  <option>Non-backlit</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-zinc-700 mb-1">Quantity</label>
                <input type="number" placeholder="1" className={commonInputClass} onChange={(e) => updateServiceDetail("Quantity", e.target.value)} />
              </div>
            </div>
          </div>
        );

      case "flex-backlit-signboard":
        return (
          <div className="space-y-4">
            {renderDimensionInputs()}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-2">
              <div>
                <label className="block text-sm font-semibold text-zinc-700 mb-1">Components</label>
                <select className={commonSelectClass} onChange={(e) => updateServiceDetail("Components", e.target.value)}>
                  <option>Select</option>
                  <option>Complete Board (Frame + Print)</option>
                  <option>Only Print (I have a frame)</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-zinc-700 mb-1">Have Design?</label>
                <select className={commonSelectClass} onChange={(e) => updateServiceDetail("Has Design", e.target.value)}>
                  <option>Select</option>
                  <option>Yes</option>
                  <option>No, I need design</option>
                </select>
              </div>
            </div>
          </div>
        );

      case "flex-on-frame":
        return (
          <div className="space-y-4">
            {renderDimensionInputs()}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-2">
              <div>
                <label className="block text-sm font-semibold text-zinc-700 mb-1">Type</label>
                <select className={commonSelectClass} onChange={(e) => updateServiceDetail("Type", e.target.value)}>
                  <option>Select</option>
                  <option>Single-sided</option>
                  <option>Double-sided</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-zinc-700 mb-1">Quantity</label>
                <input type="number" placeholder="1" className={commonInputClass} onChange={(e) => updateServiceDetail("Quantity", e.target.value)} />
              </div>
            </div>
          </div>
        );

      case "ss-letter-backlit-golden":
      case "aluminium-channel-letter":
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-zinc-700 mb-1">Text/Word to Make</label>
              <input type="text" placeholder="e.g. LUXE" className={commonInputClass} onChange={(e) => updateServiceDetail("Text", e.target.value)} />
            </div>
            {/* We will still use the unified dimensions because the demoRatePerSqFt converts it realistically via area. For individual letters, total area coverage is standard proxy */}
            {renderDimensionInputs("Overall Wall Area for Letters")}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-2">
              <div>
                <label className="block text-sm font-semibold text-zinc-700 mb-1">Lighting / Finish</label>
                <select className={commonSelectClass} onChange={(e) => updateServiceDetail("Lighting / Finish", e.target.value)}>
                  <option>Select</option>
                  <option>Mirror Finish</option>
                  <option>Matte Finish</option>
                  <option>LED Warm White</option>
                  <option>LED Cool White</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-zinc-700 mb-1">Installation</label>
                <select className={commonSelectClass} onChange={(e) => updateServiceDetail("Installation", e.target.value)}>
                  <option>Select</option>
                  <option>Outdoor</option>
                  <option>Indoor</option>
                  <option>Dispatch Only</option>
                </select>
              </div>
            </div>
          </div>
        );

      case "flex-roll-up-standee":
        return (
          <div className="space-y-4">
            {/* For standee we override the unit manually via notes previously, but now we can just let them type dimensions */}
            {renderDimensionInputs("Target Size (Standard is 6x3 ft)", true)}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-2">
              <div>
                <label className="block text-sm font-semibold text-zinc-700 mb-1">Have Design?</label>
                <select className={commonSelectClass} onChange={(e) => updateServiceDetail("Has Design", e.target.value)}>
                  <option>Select</option>
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-zinc-700 mb-1">Quantity</label>
                <input 
                  type="number" 
                  placeholder="1" 
                  defaultValue={1}
                  className={commonInputClass} 
                  onChange={(e) => updateServiceDetail("Quantity", e.target.value)} 
                />
              </div>
            </div>
          </div>
        );

      case "acp-elevation-work":
        return (
          <div className="space-y-4">
            {renderDimensionInputs("Facade Dimensions")}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-2">
              <div>
                <label className="block text-sm font-semibold text-zinc-700 mb-1">Preferred Color/Finish</label>
                <input type="text" placeholder="e.g. Metallic Silver" className={commonInputClass} onChange={(e) => updateServiceDetail("Color", e.target.value)} />
              </div>
              <div>
                <label className="block text-sm font-semibold text-zinc-700 mb-1">Site Visit Required?</label>
                <select className={commonSelectClass} onChange={(e) => updateServiceDetail("Site Visit Required", e.target.value)}>
                  <option>Select</option>
                  <option>Yes, need measurement</option>
                  <option>No, I have exact specs</option>
                </select>
              </div>
            </div>
          </div>
        );

      case "visiting-cards":
        return (
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div>
                <label className="block text-sm font-semibold text-zinc-700 mb-1">Quantity</label>
                <select className={commonSelectClass} onChange={(e) => updateServiceDetail("Quantity", e.target.value)}>
                  <option>Select</option>
                  <option>100</option>
                  <option>200</option>
                  <option>500</option>
                  <option>1000+</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-zinc-700 mb-1">Finish</label>
                <select className={commonSelectClass} onChange={(e) => updateServiceDetail("Finish", e.target.value)}>
                  <option>Select</option>
                  <option>Standard Matte</option>
                  <option>Glossy</option>
                  <option>Velvet Touch</option>
                  <option>Spot UV</option>
                  <option>Foil Stamping</option>
                </select>
              </div>
            </div>
            <div className="mt-2">
              <label className="block text-sm font-semibold text-zinc-700 mb-1">Requirements Description</label>
              <textarea placeholder="Any additional details or design requirements..." rows={3} className={commonInputClass} onChange={(e) => updateServiceDetail("Requirements", e.target.value)}></textarea>
            </div>
          </div>
        );

      case "lollipop-signboard":
        return (
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div>
                <label className="block text-sm font-semibold text-zinc-700 mb-1">Material Variant</label>
                <select className={commonSelectClass} onChange={(e) => updateServiceDetail("Material", e.target.value)}>
                  <option>Select</option>
                  <option>Premium Acrylic (₹14.5k + GST)</option>
                  <option>Flex Backlit (₹9.5k + GST)</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-zinc-700 mb-1">Shape</label>
                <select className={commonSelectClass} onChange={(e) => updateServiceDetail("Shape", e.target.value)}>
                  <option>Select</option>
                  <option>Round</option>
                  <option>Square</option>
                  <option>Custom Shape</option>
                </select>
              </div>
            </div>
            <div className="mt-2">
              <label className="block text-sm font-semibold text-zinc-700 mb-1">Requirements Description</label>
              <textarea placeholder="Describe your requirement..." rows={3} className={commonInputClass} onChange={(e) => updateServiceDetail("Requirements", e.target.value)}></textarea>
            </div>
          </div>
        );

      default:
        return (
          <div className="space-y-4">
            {renderDimensionInputs()}
            <div className="mt-2">
              <label className="block text-sm font-semibold text-zinc-700 mb-1">Requirements Description</label>
              <textarea placeholder="Describe your requirement..." rows={4} className={commonInputClass} onChange={(e) => updateServiceDetail("Requirements", e.target.value)}></textarea>
            </div>
          </div>
        );
    }
  };

  return (
    <div className={isDrawer ? "w-full flex-1 flex flex-col justify-between overflow-hidden" : "w-full max-w-3xl mx-auto bg-white rounded-2xl sm:rounded-[32px] border border-zinc-100 shadow-xl overflow-hidden mt-4 sm:mt-8 mb-10 sm:mb-20"}>
      <div className={isDrawer ? "p-3.5 sm:p-6 overflow-y-auto flex-1" : "p-4 sm:p-8 md:p-12"}>
        {error && (
          <div className="mb-4 sm:mb-6 p-3 sm:p-4 rounded-xl bg-zinc-100 text-zinc-950 text-xs sm:text-sm font-semibold border border-zinc-300">
            {error}
          </div>
        )}

        {/* Step 1: Select Service */}
        {step === 1 && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="text-lg sm:text-2xl font-heading font-extrabold text-zinc-900 mb-1.5 sm:mb-2">What do you need a quote for?</h2>
            <p className="text-zinc-500 mb-4 sm:mb-6 font-medium text-xs sm:text-sm">Select a service below to configure your specific requirements.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 sm:gap-4">
              {servicesData.map((s) => (
                <button
                  key={s.slug}
                  onClick={() => setSelectedService(s.slug)}
                  className={`text-left p-3 sm:p-4 rounded-xl border-2 transition-all duration-200 flex items-center gap-3 ${selectedService === s.slug ? "border-black bg-zinc-100 ring-2 ring-zinc-300" : "border-zinc-200 hover:border-zinc-400 bg-white"}`}
                >
                  <div className={`p-2 rounded-lg shrink-0 ${selectedService === s.slug ? "bg-black text-white" : "bg-zinc-100 text-zinc-600"}`}>
                     <s.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <span className="font-semibold text-zinc-900 text-xs sm:text-base leading-snug">{s.title}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Service Specific Fields */}
        {step === 2 && (
          <div className="animate-in fade-in slide-in-from-right-8 duration-500">
            <h2 className="text-lg sm:text-2xl font-heading font-extrabold text-zinc-900 mb-1.5 sm:mb-2">Configure Details</h2>
            <p className="text-zinc-500 mb-4 sm:mb-6 font-medium text-xs sm:text-sm">Tell us a bit more about what you want for the <strong className="text-zinc-900">{servicesData.find(s=>s.slug===selectedService)?.title}</strong>.</p>
            
            {renderServiceFields()}
          </div>
        )}
      </div>
      
      {/* Footer Navigation */}
      <div className={isDrawer ? "bg-white border-t border-zinc-100 px-3.5 sm:px-6 py-3 sm:py-4 flex items-center justify-between shrink-0 gap-2" : "bg-zinc-50 border-t border-zinc-100 px-4 sm:px-6 py-3.5 sm:py-4 flex items-center justify-between gap-2"}>
        {step === 2 && !initialService ? (
          <button onClick={handleBack} className="flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full font-semibold text-zinc-600 hover:bg-zinc-200 transition-colors text-xs sm:text-sm">
            <ArrowLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> Back
          </button>
        ) : <div />}

        {step === 1 ? (
          <button onClick={handleNext} className="flex items-center gap-1.5 sm:gap-2 px-4 sm:px-7 py-2.5 sm:py-3 rounded-full font-bold text-white bg-zinc-950 hover:bg-zinc-800 transition-colors shadow-md hover:scale-[1.02] text-xs sm:text-sm">
            Continue Details <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </button>
        ) : (
          <button onClick={handleAddToCart} className="flex items-center gap-1.5 sm:gap-2 px-4 sm:px-7 py-2.5 sm:py-3 rounded-full font-bold text-white bg-zinc-900 hover:bg-zinc-950 transition-colors shadow-lg hover:scale-[1.02] text-xs sm:text-sm">
            Add to Quote Cart
          </button>
        )}
      </div>
    </div>
  );
}
