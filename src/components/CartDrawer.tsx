import React, { useState } from 'react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, packType: string, delta: number) => void;
  onRemoveItem: (productId: string, packType: string) => void;
  onCheckoutSuccess: (earnedCoins: number) => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onCheckoutSuccess
}) => {
  const [promoCode, setPromoCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);
  const [promoError, setPromoError] = useState('');
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);

  if (!isOpen) return null;

  // Calculate pricing
  const getItemPrice = (item: CartItem) => {
    let unit = item.product.price;
    if (item.packType === 'bundle3') unit = item.product.price * 3 * 0.9;
    if (item.packType === 'party6') unit = item.product.price * 6 * 0.82;
    return unit * item.quantity;
  };

  const rawSubtotal = items.reduce((acc, item) => acc + getItemPrice(item), 0);
  const discountAmount = rawSubtotal * discountPercent;
  const subtotal = rawSubtotal - discountAmount;
  const freeShippingThreshold = 25.0;
  const freeShippingReached = subtotal >= freeShippingThreshold;
  const shippingAmount = freeShippingReached || subtotal === 0 ? 0 : 4.5;
  const total = subtotal + shippingAmount;

  // Ve Coins reward: 50 coins per single, 150 per bundle3, 300 per party6
  const totalVeCoinsEarned = items.reduce((acc, item) => {
    const factor = item.packType === 'party6' ? 300 : item.packType === 'bundle3' ? 150 : 50;
    return acc + factor * item.quantity;
  }, 0);

  const applyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    setPromoError('');
    const code = promoCode.trim().toUpperCase();
    if (code === 'ANNASILVA' || code === 'HIVE' || code === 'CRUNCH10') {
      setDiscountPercent(0.15); // 15% off
    } else {
      setPromoError('Cupom inválido. Experimente ANNASILVA ou HIVE');
    }
  };

  const handleCompleteOrder = () => {
    setIsCheckingOut(true);
    setTimeout(() => {
      setIsCheckingOut(false);
      setOrderComplete(true);
      onCheckoutSuccess(totalVeCoinsEarned);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-sm select-none animate-in fade-in duration-200">
      
      {/* Backdrop click to dismiss */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Drawer Container */}
      <div className="relative w-full max-w-md bg-[#055848] text-white h-full shadow-2xl flex flex-col justify-between border-l-4 border-black/30 z-10">
        
        {/* Drawer Header */}
        <div className="p-5 border-b border-white/10 flex items-center justify-between bg-[#033b31]">
          <div className="flex items-center gap-2">
            <span className="text-[#fde01a] font-bold text-lg">+</span>
            <h3 className="font-condensed font-black text-2xl uppercase tracking-wider text-white">
              SEU CARRINHO ({items.reduce((s, i) => s + i.quantity, 0)})
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-black/30 hover:bg-black/60 flex items-center justify-center text-sm font-bold cursor-pointer"
            aria-label="Fechar carrinho"
          >
            ✕
          </button>
        </div>

        {/* Free Shipping Progress Meter */}
        <div className="px-5 py-3 bg-[#023b31] border-b border-white/10 text-xs">
          {freeShippingReached ? (
            <div className="flex items-center gap-2 text-[#fde01a] font-bold uppercase tracking-wider">
              <span>🎉</span>
              <span>Parabéns! Você desbloqueou FRETE GRÁTIS!</span>
            </div>
          ) : (
            <div>
              <div className="text-white/80 mb-1.5 flex justify-between">
                <span>Faltam <strong>${(freeShippingThreshold - subtotal).toFixed(2)}</strong> para frete grátis</span>
                <span className="text-[#fde01a] font-bold">{Math.min(100, Math.round((subtotal / freeShippingThreshold) * 100))}%</span>
              </div>
              <div className="w-full bg-black/40 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-[#fde01a] h-full transition-all duration-300"
                  style={{ width: `${Math.min(100, (subtotal / freeShippingThreshold) * 100)}%` }}
                />
              </div>
            </div>
          )}
        </div>

        {/* Item List */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {orderComplete ? (
            <div className="text-center py-12 px-4 space-y-4">
              <div className="w-16 h-16 bg-[#fde01a] text-black rounded-full flex items-center justify-center text-3xl font-black mx-auto">
                ✓
              </div>
              <h4 className="font-condensed font-black text-3xl text-white uppercase">
                PEDIDO CONFIRMADO!
              </h4>
              <p className="text-sm text-white/80">
                Obrigado por apoiar a linha <strong>Anna Silva Co.</strong>! Seus pacotes estão sendo separados para envio imediato.
              </p>
              <div className="bg-[#033b31] p-4 rounded-2xl border border-[#fde01a]/30 text-xs">
                <span className="text-[#fde01a] font-black text-sm block mb-1">
                  + {totalVeCoinsEarned} VE COINS CREDITADOS!
                </span>
                Seus Ve Coins foram adicionados ao seu saldo comunitário do Hive.
              </div>
              <button
                onClick={() => {
                  setOrderComplete(false);
                  onClose();
                }}
                className="w-full py-3 bg-[#fde01a] text-black font-condensed font-black text-base uppercase rounded-xl"
              >
                Continuar Comprando
              </button>
            </div>
          ) : items.length === 0 ? (
            <div className="text-center py-16 space-y-3">
              <div className="text-5xl">🛍️</div>
              <h4 className="font-condensed font-black text-2xl uppercase text-white">
                Seu carrinho está vazio
              </h4>
              <p className="text-xs text-white/60">
                Que tal experimentar o Cheesy Immature ou o defumado Smoky Bacon?
              </p>
              <button
                onClick={onClose}
                className="mt-4 px-6 py-2.5 bg-[#fde01a] text-black font-condensed font-black text-sm uppercase rounded-xl cursor-pointer"
              >
                Ver Sabores
              </button>
            </div>
          ) : (
            items.map((item, idx) => {
              const packLabel =
                item.packType === 'bundle3'
                  ? 'Combo 3 Unidades'
                  : item.packType === 'party6'
                  ? 'Festa 6 Unidades'
                  : '1 Pouch (100g)';

              return (
                <div
                  key={`${item.product.id}-${item.packType}-${idx}`}
                  className="bg-[#033b31] p-4 rounded-2xl border border-white/10 flex items-center gap-4"
                >
                  {/* Miniature pouch color block */}
                  <div
                    className="w-14 h-16 rounded-xl flex items-center justify-center font-condensed font-black text-xs text-center p-1 border border-white/20 shadow-inner shrink-0"
                    style={{ backgroundColor: item.product.color, color: item.product.textColor }}
                  >
                    <span>ANNA<br />SILVA</span>
                  </div>

                  {/* Title & Price */}
                  <div className="flex-1 min-w-0">
                    <h5 className="font-condensed font-black text-lg text-white uppercase truncate">
                      {item.product.name}
                    </h5>
                    <div className="text-[11px] text-[#fde01a] font-semibold">{packLabel}</div>
                    <div className="font-condensed font-black text-base text-white mt-1">
                      ${getItemPrice(item).toFixed(2)}
                    </div>
                  </div>

                  {/* Quantity Stepper */}
                  <div className="flex items-center gap-2 bg-black/30 px-2 py-1 rounded-xl">
                    <button
                      onClick={() => onUpdateQuantity(item.product.id, item.packType, -1)}
                      className="w-6 h-6 flex items-center justify-center text-white/80 hover:text-white font-bold cursor-pointer"
                      aria-label="Diminuir quantidade"
                    >
                      -
                    </button>
                    <span className="font-condensed font-bold text-sm min-w-4 text-center">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => onUpdateQuantity(item.product.id, item.packType, 1)}
                      className="w-6 h-6 flex items-center justify-center text-white/80 hover:text-white font-bold cursor-pointer"
                      aria-label="Aumentar quantidade"
                    >
                      +
                    </button>
                  </div>

                  {/* Remove */}
                  <button
                    onClick={() => onRemoveItem(item.product.id, item.packType)}
                    className="text-white/40 hover:text-red-400 text-sm p-1 cursor-pointer"
                    aria-label="Remover item"
                  >
                    🗑
                  </button>
                </div>
              );
            })
          )}
        </div>

        {/* Drawer Footer with Checkout */}
        {!orderComplete && items.length > 0 && (
          <div className="p-5 bg-[#033b31] border-t border-white/10 space-y-4">
            {/* Promo Code Form */}
            <form onSubmit={applyPromo} className="flex gap-2">
              <input
                type="text"
                placeholder="Cupom (ex: ANNASILVA)"
                value={promoCode}
                onChange={e => setPromoCode(e.target.value)}
                className="flex-1 bg-black/30 border border-white/10 rounded-xl px-3 py-2 text-xs text-white placeholder-white/40 uppercase tracking-wider focus:outline-none focus:border-[#fde01a]"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white font-condensed font-black text-xs uppercase rounded-xl cursor-pointer"
              >
                Aplicar
              </button>
            </form>
            {discountPercent > 0 && (
              <div className="text-[11px] text-green-300 font-bold">
                ✓ Cupom aplicado: 15% de desconto!
              </div>
            )}
            {promoError && (
              <div className="text-[11px] text-red-300 font-bold">{promoError}</div>
            )}

            {/* Price Breakdown */}
            <div className="space-y-1.5 text-xs">
              <div className="flex justify-between text-white/70">
                <span>Subtotal</span>
                <span>${rawSubtotal.toFixed(2)}</span>
              </div>
              {discountAmount > 0 && (
                <div className="flex justify-between text-green-300">
                  <span>Desconto Cupom</span>
                  <span>-${discountAmount.toFixed(2)}</span>
                </div>
              )}
              <div className="flex justify-between text-white/70">
                <span>Frete</span>
                <span>{shippingAmount === 0 ? 'GRÁTIS' : `$${shippingAmount.toFixed(2)}`}</span>
              </div>
              <div className="flex justify-between items-baseline pt-2 border-t border-white/10 text-base font-black">
                <span className="font-condensed text-xl text-white uppercase">Total</span>
                <span className="font-condensed text-2xl text-[#fde01a]">${total.toFixed(2)}</span>
              </div>
            </div>

            {/* Ve Coins Earn Notice */}
            <div className="flex items-center gap-2 text-[11px] bg-black/20 p-2 rounded-xl text-[#fde01a]">
              <span>⬡</span>
              <span>Você ganhará <strong>+{totalVeCoinsEarned} Ve Coins</strong> nesta compra!</span>
            </div>

            {/* Checkout Action Button */}
            <button
              onClick={handleCompleteOrder}
              disabled={isCheckingOut}
              className="w-full py-4 bg-[#fde01a] hover:bg-yellow-300 text-black font-condensed font-black text-xl uppercase tracking-wider rounded-2xl transition-transform active:scale-95 shadow-xl cursor-pointer flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {isCheckingOut ? (
                <span>PROCESSANDO PEDIDO...</span>
              ) : (
                <span>FINALIZAR COMPRA • ${total.toFixed(2)}</span>
              )}
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
