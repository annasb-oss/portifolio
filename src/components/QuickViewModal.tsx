import React, { useState } from 'react';
import { Product } from '../types';
import { PouchGraphic } from './PouchGraphic';

interface QuickViewModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, packType: 'single' | 'bundle3' | 'party6') => void;
}

export const QuickViewModal: React.FC<QuickViewModalProps> = ({
  product,
  onClose,
  onAddToCart
}) => {
  const [packType, setPackType] = useState<'single' | 'bundle3' | 'party6'>('single');

  if (!product) return null;

  const getPrice = () => {
    if (packType === 'bundle3') return (product.price * 3 * 0.9).toFixed(2);
    if (packType === 'party6') return (product.price * 6 * 0.82).toFixed(2);
    return product.price.toFixed(2);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#055848] text-white rounded-3xl border-4 border-black/30 shadow-2xl overflow-hidden flex flex-col md:flex-row">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-black/40 text-white hover:bg-black flex items-center justify-center font-bold text-sm cursor-pointer transition-colors"
          aria-label="Fechar"
        >
          ✕
        </button>

        {/* Left: Graphic Pouch Showcase */}
        <div className="md:w-1/2 bg-[#033b31] p-6 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-white/10">
          <PouchGraphic
            color={product.color}
            textColor={product.textColor}
            flavorTitle={product.flavor}
            className="w-52 sm:w-56"
          />
          <div className="mt-4 text-xs font-bold text-[#fde01a] tracking-widest uppercase">
            {product.weight} • 100% VEGAN
          </div>
        </div>

        {/* Right: Product Details & Purchase Form */}
        <div className="md:w-1/2 p-6 flex flex-col justify-between">
          <div>
            <div className="text-[10px] font-black uppercase tracking-widest text-[#fde01a] mb-1">
              ANNA SILVA CO. • FLAVOUR PROFILE
            </div>
            <h3 className="font-condensed font-black text-3xl uppercase leading-tight text-white">
              {product.name}
            </h3>
            <p className="text-xs text-white/80 mt-2 leading-relaxed">
              {product.description}
            </p>

            {/* Nutrition Highlights */}
            <div className="grid grid-cols-2 gap-2 my-4 bg-black/20 p-2.5 rounded-xl text-center">
              <div>
                <div className="text-[10px] uppercase text-white/60">Proteína Vegetal</div>
                <div className="text-sm font-black text-[#fde01a]">{product.nutrition.protein}</div>
              </div>
              <div>
                <div className="text-[10px] uppercase text-white/60">Vitamina B12</div>
                <div className="text-sm font-black text-[#fde01a]">{product.nutrition.b12}</div>
              </div>
            </div>

            {/* Pairs With */}
            <div className="mb-4">
              <div className="text-[10px] font-bold uppercase tracking-wider text-white/70 mb-1.5">
                Combina perfeitamente com:
              </div>
              <div className="flex flex-wrap gap-1">
                {product.pairsWith.map((dish, i) => (
                  <span key={i} className="text-[10px] bg-white/10 px-2 py-0.5 rounded text-white font-medium">
                    {dish}
                  </span>
                ))}
              </div>
            </div>

            {/* Pack Selector */}
            <div className="mb-4">
              <div className="text-[10px] font-bold uppercase tracking-wider text-white/70 mb-1.5">
                Escolha o tamanho:
              </div>
              <div className="grid grid-cols-3 gap-1 bg-black/30 p-1 rounded-xl text-[10px] font-bold text-center">
                <button
                  onClick={() => setPackType('single')}
                  className={`py-1.5 rounded-lg transition-colors cursor-pointer ${
                    packType === 'single' ? 'bg-[#fde01a] text-black' : 'text-white/70 hover:text-white'
                  }`}
                >
                  1 Pouch
                </button>
                <button
                  onClick={() => setPackType('bundle3')}
                  className={`py-1.5 rounded-lg transition-colors cursor-pointer ${
                    packType === 'bundle3' ? 'bg-[#fde01a] text-black' : 'text-white/70 hover:text-white'
                  }`}
                >
                  3-Pack (-10%)
                </button>
                <button
                  onClick={() => setPackType('party6')}
                  className={`py-1.5 rounded-lg transition-colors cursor-pointer ${
                    packType === 'party6' ? 'bg-[#fde01a] text-black' : 'text-white/70 hover:text-white'
                  }`}
                >
                  6-Pack (-18%)
                </button>
              </div>
            </div>
          </div>

          {/* Price & Action */}
          <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-4">
            <div>
              <div className="text-[10px] text-white/60 uppercase font-bold">Subtotal</div>
              <div className="font-condensed font-black text-3xl text-[#fde01a] leading-none">
                ${getPrice()}
              </div>
            </div>

            <button
              onClick={() => {
                onAddToCart(product, packType);
                onClose();
              }}
              className="px-6 py-3 bg-[#fde01a] hover:bg-yellow-300 text-black font-condensed font-black text-base uppercase tracking-wider rounded-xl transition-transform active:scale-95 shadow-md cursor-pointer"
            >
              Adicionar ao Carrinho
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
